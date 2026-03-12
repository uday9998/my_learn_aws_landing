import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import { NewText, NewTextWithIcon } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import Link from "next/link";
import ResetPasswordForm from "@/app/components/elements/Form/ResetPasswordForm/ResetPasswordForm";

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-[132px]">
            <ResetPasswordForm
                inner='Login With Your Email'
                subTitle="Don't have an account?"
            />
            <div className="flex flex-col items-center">
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