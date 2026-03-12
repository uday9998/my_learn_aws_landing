import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';


import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text, { TextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import styles from './LinksGroup.module.scss';

const LinksGroup = ({
    title,
    links,
    sublink,
    iconName,
    iconDivClassName,
    closeNavBar,
    isOpenGroup,
}) => {
    const [isOpen, setIsOpen] = useState(isOpenGroup)

    useEffect(() => {
        if(isOpenGroup) {
            setIsOpen(isOpenGroup)
        }
    }, [isOpenGroup])

    return (
        <div
            className='w-full flex flex-col justify-center items-center my-4'
        >
            <TextWithIcon
                inner={ title }
                type={types.medium150}
                generalStyles={{ cursor: 'pointer' }}
                size={sizes.medium}
                onClick={() => { setIsOpen(!isOpen) }}
                iconProps={{
                    style: { transform: `rotate(${!isOpen ? 180 : 0}deg)`, transition: '0.3s easy' }
                }}
                iconName="ResoucresDropDown"
                isIconRight={true}
                className="cursor-pointer"
                classNameActive='links_group_title'
            />
            {
                isOpen && (
                    <div
                        className={`${styles.links_dropdown_list} relative w-full flex flex-col mt-4 py-3 gap-[24px] items-center`}
                    >
                        {
                            Boolean(iconName) && (
                                <div className={ iconDivClassName }>
                                    <IconNew name={ iconName } />
                                </div>
                            )
                        }
                        {
                            links.map((link, i) => (
                                link.isOutside ? (
                                    <div
                                        className='w-full flex items-center justify-center'
                                        onClick={() => {
                                            window.open(link.link, '_blank')
                                        }}
                                    >
                                        <Text
                                            inner={ link.label }
                                            type={types.medium150}
                                            size={sizes.medium}
                                            className="cursor-pointer justify-center"
                                        />
                                    </div>
                                ) : (
                                    <Link 
                                        href={ Boolean(sublink) ? `/${ sublink }/${ link.link }` : `/${link.link}` }
                                        key={link.label}
                                        onClick={() => closeNavBar()}
                                        className={`${!i && styles.active}`}
                                    >
                                    <Text
                                        inner={ link.label }
                                        type={types.medium150}
                                        size={sizes.medium}
                                        className="cursor-pointer justify-center"
                                    />
                                </Link>
                                )
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

LinksGroup.propTypes = {
    title: PropTypes.string,
    sublink: PropTypes.string,
    links: PropTypes.array,
    closeNavBar: PropTypes.func,
    isOpenGroup: PropTypes.bool
}

export default LinksGroup