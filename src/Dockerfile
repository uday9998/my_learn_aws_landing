# Use the official Node.js 20 image as the base image
FROM node:20-slim AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

RUN yarn remove sharp || true

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Define build arguments
ARG NEXT_PUBLIC_MAIN_DOMAIN
ARG NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY
ARG NEXT_PUBLIC_STRIPE_API_KEY
ARG NEXT_PUBLIC_PATH
ARG LANDING_ASSET_CDN_LINK

# Set environment variables during build
ENV NEXT_PUBLIC_MAIN_DOMAIN=$NEXT_PUBLIC_MAIN_DOMAIN
ENV NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY=$NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY
ENV NEXT_PUBLIC_STRIPE_API_KEY=$NEXT_PUBLIC_STRIPE_API_KEY
ENV NEXT_PUBLIC_PATH=$NEXT_PUBLIC_PATH
ENV LANDING_ASSET_CDN_LINK=$LANDING_ASSET_CDN_LINK

RUN yarn build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install AWS CLI v2 + curl + unzip (as root, before switching user)
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    wget \
    ca-certificates \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf awscliv2.zip aws \
    && rm -rf /var/lib/apt/lists/*

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN touch /app/.env && chown nextjs:nodejs /app/.env

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy entrypoint script (as root before switching user)
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1

ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "server.js"]