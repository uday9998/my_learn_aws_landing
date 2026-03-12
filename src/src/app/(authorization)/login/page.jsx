import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import { LoginForm } from "@/app/components/elements/Form";
import { NewText, NewTextWithIcon } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import Link from "next/link";

import styles from './login.module.scss';

const pathName = process.env.NEXT_PUBLIC_PATH

export const metadata = {
  title: 'Miestro: Video Membership & Course Platform For Creators',
  description: 'Miestro: The Ultimate Video Membership and Course Platform that helps creators scale their businesses and create online courses, memberships, and communities.',
  alternates: {
    canonical: `${pathName}/login`
  }
}

const Login = () => {
    return (
        <div className={`flex flex-col justify-center items-center gap-[40px] ${styles.form__wrapper}`}>
            <LoginForm
                inner='Login With Your Email'
                subTitle="Don't have an account?"
            />
            <div className="flex flex-col items-center mb-[15px]">
                <NewText
                    inner='Need Help?'
                    type={types.regularDefault}
                    size={sizes.small}
                    style={{ color: '#727978' }}
                />
                <Link href='mailto: support@miestro.com'>
                    <NewTextWithIcon
                        iconName='MailContactS'
                        isIconRight={false}
                        inner='support@miestro.com'
                        type={types.regularDefault}
                        size={sizes.small}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
            </div>
        </div>
    )
};

export default Login;