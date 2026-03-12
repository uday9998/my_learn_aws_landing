import Link from 'next/link';

import { useRouter } from 'next/navigation';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import background from '@/app/assets/images/footer/FooterStartBackground.png';
import image from '@/app/assets/images/footer/FooterStartImage.png';

import { NewText, TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';
import IconNew from '@/app/components/elements/IconNew/IconNew';

import styles from './FooterStartImage.module.scss';

const FooterStartImage = ({ title }) => {
    const router = useRouter();

    const handleNavigateToSignUp = () => {
        router.push('/signup', { scroll: false });
    }

    return (
        <div className={styles.footer__start}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
                <img src={background.src} className='footer__start__background' alt="online course platform" loading="lazy" />
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col justify-center'>
                    <TextColumn
                        texts={title}
                        type={types.bold}
                        alignItems='start'
                        style={{ lineHeight: '130%', whiteSpace: 'nowrap', color: '#fff', transform: 'rotate(-2deg)' }}
                        size={sizes.size_40}
                    />
                    <NewText
                        inner='Try it free for 14 days'
                        type={types.regular153}
                        size={sizes.large}
                        style={{ color: '#E7E9E9', transform: 'rotate(-2deg)' }}
                    />
                    <div className={`relative mt-[20px] ${styles.footer_wrapper}`}>
                        <div className="absolute top-[-35%] left-[-10%]">
                            <IconNew name='FooterButtonAnimatedBlur'
                            />
                        </div>
                        <Button
                            text='Start Free Trial'
                            onClick={handleNavigateToSignUp}
                            className='footer__start__button'
                            style={{ height: '60px', maxHeight: '60px' }}
                        />
                    </div>
                </div>
                <img src={image.src} alt="online course platform" loading="lazy" title='online course'/>
            </div>
        </div>
    )
};

export default FooterStartImage;