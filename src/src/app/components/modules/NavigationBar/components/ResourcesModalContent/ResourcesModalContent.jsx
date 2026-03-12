import { useRouter } from 'next/navigation';

import { memo } from 'react';

import Text, { TextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import IconNew from '@/app/components/elements/IconNew/IconNew';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import Image from 'next/image';

import image1 from '@/app/assets/images/ResourcesModal/image1.png';
import image2 from '@/app/assets/images/ResourcesModal/image2.png';
import image3 from '@/app/assets/images/ResourcesModal/image3.png';
import image4 from '@/app/assets/images/ResourcesModal/image4.png';
import image5 from '@/app/assets/images/ResourcesModal/image5.webp';
import image6 from '@/app/assets/images/ResourcesModal/tools.png';
// import image6 from '@/app/assets/images/ResourcesModal/tools.png';

import styles from './ResourcesModalContent.module.scss';

const ResourcesModalContent = ({onClose}) => {
    const router = useRouter();

    const handleNavigateToDemo = () => {
        onClose();
        router.push('https://training.miestro.com/demo');
    }

    return (
        <div className={`flex relative ${styles.resources__modal__content}`}>
            <div className="absolute top-[-20%] left-[-2%]">
                <IconNew name='LabelResources' />
            </div>
            <div className="flex w-full gap-6 justify-center">
                <div
                    className="flex w-full justify-center flex-col gap-2 cursor-pointer"
                    role='presentation'
                    onClick={() => {
                        onClose();
                        window.open('https://miestrouniversity.miestro.com/', '_blank')
                    }}
                >
                    <Text
                        inner='Miestro University'
                        type={types.regular148}
                        size={sizes.medium}
                    />
                    <Image src={image1} alt='alt="online course platform"' className='w-[160px] h-[160px]' />
                    {/* <img src={image1} alt="online course platform" className='w-[160px] h-[160px]' /> */}
                    <TextWithIcon
                        inner='Join Now'
                        type={types.regularDefaultSmall}
                        generalStyles={{ cursor: 'pointer' }}
                        size={sizes.small}
                        iconName='JoinNowArrowM'
                        isIconRight={true}
                        iconGap={6}
                        style={{ color: '#24554E' }}
                    />
                </div>
                <div
                    className="flex w-full justify-center flex-col gap-2 cursor-pointer"
                    role='presentation'
                    onClick={() => {
                        onClose();
                        window.open('https://www.facebook.com/groups/miestro', '_blank')
                    }}
                >
                    <Text
                        inner='Facebook Community'
                        type={types.regular148}
                        size={sizes.medium}
                    />
                    <Image src={image2} alt='alt="online course platform"' className='w-[160px] h-[160px]' />
                    {/* <img src={image2} alt="online course platform" className='w-[160px] h-[160px]' /> */}
                    <TextWithIcon
                        inner='Join Now'
                        type={types.regularDefaultSmall}
                        generalStyles={{ cursor: 'pointer' }}
                        size={sizes.small}
                        iconName='JoinNowArrowM'
                        isIconRight={true}
                        iconGap={6}
                        style={{ color: '#24554E' }}
                    />
                </div>
                <div
                    className="flex w-full justify-center flex-col gap-2 cursor-pointer"
                    role='presentation'
                    onClick={handleNavigateToDemo}
                >
                    <Text
                        inner='Demo'
                        type={types.regular148}
                        size={sizes.medium}
                    />
                    <Image src={image3} alt='alt="online course platform"' className='w-[160px] h-[160px]' />
                    {/* <img src={image3} alt="online course platform" className='w-[160px] h-[160px]' /> */}
                    <TextWithIcon
                        inner='Watch Demo'
                        type={types.regularDefaultSmall}
                        generalStyles={{ cursor: 'pointer' }}
                        size={sizes.small}
                        iconName='JoinNowArrowM'
                        isIconRight={true}
                        iconGap={6}
                        style={{ color: '#24554E' }}
                    />
                </div>
                <div
                    className="flex w-full justify-center flex-col gap-2 cursor-pointer"
                    role='presentation'
                    onClick={() => {
                        onClose();
                        window.open('https://blog.miestro.com/', '_blank');
                    }}
                >
                    <Text
                        inner='Blog'
                        type={types.regular148}
                        size={sizes.medium}
                    />
                    <Image src={image4} alt='alt="online course platform"' className='w-[160px] h-[160px]' />
                    {/* <img src={image4} alt="online course platform" className='w-[160px] h-[160px]' /> */}
                    <TextWithIcon
                        inner='Go to Blog'
                        type={types.regularDefaultSmall}
                        generalStyles={{ cursor: 'pointer' }}
                        size={sizes.small}
                        iconName='JoinNowArrowM'
                        isIconRight={true}
                        iconGap={6}
                        style={{ color: '#24554E' }}
                    />
                </div>
                <div
                    className="flex w-full justify-center flex-col gap-2 cursor-pointer"
                    role='presentation'
                    onClick={() => {
                        onClose();
                        window.open('https://training.miestro.com/resources', '_blank');
                    }}
                >
                    <Text
                        inner='Training'
                        type={types.regular148}
                        size={sizes.medium}
                    />
                    <Image src={image5} alt='alt="online course platform"' className='w-[160px] h-[160px] object-cover rounded-xl' />
                    {/* <img src={image5} alt="online course platform" className='w-[160px] h-[160px] object-cover rounded-xl' /> */}
                    <TextWithIcon
                        inner='Click Here'
                        type={types.regularDefaultSmall}
                        generalStyles={{ cursor: 'pointer' }}
                        size={sizes.small}
                        iconName='JoinNowArrowM'
                        isIconRight={true}
                        iconGap={6}
                        style={{ color: '#24554E' }}
                    />
                </div>
                <div
                    className="flex w-full justify-center flex-col gap-2 cursor-pointer"
                    role='presentation'
                    onClick={() => {
                        onClose();
                        window.open('https://training.miestro.com/guides', '_blank');
                    }}
                >
                    <Text
                        inner='Ebooks & Guides'
                        type={types.regular148}
                        size={sizes.medium}
                    />
                    <Image style={{
                        objectFit: 'contain'
                    }} width={160} height={160} src={'https://miestro-production.s3.us-west-2.amazonaws.com/landing/miestro-landing-nextjs/guides.webp'} alt='alt="online course platform"' className='w-[160px] h-[160px] object-cover rounded-xl' />
                    {/* <img src={image5} alt="online course platform" className='w-[160px] h-[160px] object-cover rounded-xl' /> */}
                    <TextWithIcon
                        inner='Click Here'
                        type={types.regularDefaultSmall}
                        generalStyles={{ cursor: 'pointer' }}
                        size={sizes.small}
                        iconName='JoinNowArrowM'
                        isIconRight={true}
                        iconGap={6}
                        style={{ color: '#24554E' }}
                    />
                </div>

                <div
                    className="flex w-full justify-center flex-col gap-2 cursor-pointer"
                    role='presentation'
                    onClick={() => {
                        onClose();
                        window.open('https://tools.miestro.net/', '_blank');
                    }}
                >
                    <Text
                        inner='Tools'
                        type={types.regular148}
                        size={sizes.medium}
                    />
                    
                    <Image src={image6} alt='alt="online course platform"' className='w-[160px] object-cover rounded-xl h-[160px]' />
                    <TextWithIcon
                        inner='Click Here'
                        type={types.regularDefaultSmall}
                        generalStyles={{ cursor: 'pointer' }}
                        size={sizes.small}
                        iconName='JoinNowArrowM'
                        isIconRight={true}
                        iconGap={6}
                        style={{ color: '#24554E' }}
                    />
                </div>
            </div>
            <div className="absolute top-[-10%] right-[-2%]">
                <IconNew name='VectorResources' />
            </div>
        </div>
    )
}

export default memo(ResourcesModalContent)
