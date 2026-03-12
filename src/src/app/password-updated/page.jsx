'use client'
import { useRouter } from 'next/navigation';
import { TYPES as types, SIZES as sizes } from '../components/elements/TextWithIcon/TextWithIconProps';

import IconNew from '../components/elements/IconNew/IconNew';
import { NewText, NewTextWithIcon } from '../components/elements/TextWithIcon/TextWithIcon';
import BaseButton from '../components/elements/Button/Button';
import Link from 'next/link';

import styles from './password-updated.module.scss';

const PasswordUpdated = () => {
    const router = useRouter();
    const handleNavigateToLogin = () => {
        router.push('/login');
    };

    return (
        <div className={`flex gap-2 flex-col ${styles.forget__password}`}>
            <div className="flex flex-col items-center justify-between gap-[480px]">
                <div className={styles.password__container}>
                    <div className="flex flex-col items-center gap-3">
                        <IconNew name='SuccessPassword' />
                        <NewText
                            inner='Your Password Was Changed Successfully'
                            type={types.mediumSmall}
                            className='mt-3 text-center'
                            size={sizes.xxlarge}
                        />
                        <NewText
                            inner='Your password was changed successfully. Now you can access your account again. Log in to continue using our service.'
                            type={types.regular148}
                            size={sizes.medium}
                            style={{ color: '#444C4B', textAlign: 'center' }}
                        />
                        <BaseButton
                            text='Login'
                            className='mt-6'
                            onClick={handleNavigateToLogin}
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>
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
        </div>
    )
};

export default PasswordUpdated;