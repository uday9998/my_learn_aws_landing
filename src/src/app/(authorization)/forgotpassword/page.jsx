import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Link from "next/link";
import { NewText, NewTextWithIcon } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import ForgotPasswordForm from "@/app/components/elements/Form/ForgotPasswordForm/ForgotPasswordForm";

import styles from './forgotpassword.module.scss';

const pathName = process.env.NEXT_PUBLIC_PATH

export const metadata = {
    title: 'Miestro: Video Membership & Course Platform For Creators',
    description: 'Miestro: The Ultimate Video Membership and Course Platform that helps creators scale their businesses and create online courses, memberships, and communities.',
    alternates: {
        canonical: `${pathName}/forgotpassword`
    }
}

const ForgotPassword = () => {
    return (
        <div className={`flex flex-col justify-center items-center gap-[230px] ${styles.forgot__wrapper}`}>
            <ForgotPasswordForm
                inner='Forgot Password'
                subTitle="Already have an account?"
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

export default ForgotPassword;