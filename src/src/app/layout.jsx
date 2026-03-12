import { Lato } from 'next/font/google';
import Script from 'next/script';
import classNames from 'classnames';

import { ToastContainer } from 'react-toastify';
import logo from '../../public/miestro__logo.png';

import './styles/globals.scss';
import './styles/variables.scss';
import 'react-toastify/dist/ReactToastify.css';

import NavigationBar from '@/app/components/modules/NavigationBar/NavigationBar';
import Head from 'next/head';

const lato = Lato({ subsets: ['latin'], weight: ['400'] });

import 'animate.css/animate.min.css';

export const metadata = {
    metadataBase: new URL('https://miestro.com'),
    verification: {
        google: 'KNsxjYhJz5s7bjTHepvDagjdBfY1T88HIKcsLrEDEyc',
    },
    openGraph: {
        image: logo.src,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta property='og:image' content={metadata.openGraph.image} />
            </Head>
            <body className={classNames(lato.className)}>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-5VK8174170"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-5VK8174170');
                    `}
                </Script>
                <Script
                    id="twitter-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(e,t,n,s,u,a){
                                e.twq||(s=e.twq=function(){
                                    s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
                                },s.version='1.1',s.queue=[],
                                u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                                a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
                            }(window,document,'script');
                            twq('config','onjaj');
                        `,
                    }}
                />
                <ToastContainer autoClose={6000} hideProgressBar />
                <div className="app_wrapper flex flex-col w-full">
                    <NavigationBar />
                    {children}
                </div>
                <Script id="clarity-script" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "gr4k5c5nqu");
                    `}
                </Script>
                <Script
                    id="chat-script"
                    src="https://beta.leadconnectorhq.com/loader.js"
                    data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
                    data-widget-id="68d477a5a4a80e267fa230d4"
                    strategy="afterInteractive"
                />
                <Script
                    id="json-ld"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "name": "Miestro",
                                "url": "https://miestro.com/",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": "https://miestro.com/search?q={search_term}",
                                    "query-input": "required name=search_term"
                                }
                            }
                        `,
                    }}
                />
            </body>
        </html>
    );
}
