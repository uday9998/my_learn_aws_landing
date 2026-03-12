'use client'

import { useState } from "react";

import { NewText } from "../../elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "../../elements/TextWithIcon/TextWithIconProps";
import Modal from "../../elements/Modal/Modal";

import firstImageBlock from '@/app/assets/images/dashboard/sales.png';
import secondImageBlock from '@/app/assets/images/dashboard/online.png';
import lastImageBlock from  '@/app/assets/images/dashboard/business.png';

import styles from './persons.module.scss';

const PersonsSection = () => {
    const [isOpenVideo, setIsOpenVideo] = useState(false);
    const [customerId, setCustomerId] = useState(0);
    const imagesLinks = [firstImageBlock, secondImageBlock, lastImageBlock];

    const handleCloseOrOpenModal = (customerId) => {
        if(customerId || customerId === 0) {
            setCustomerId(customerId);
        }
        setIsOpenVideo(prevState => !prevState);
    }

    return (
        <div className={styles.persons__wrapper}>
            {
                isOpenVideo && <Modal closeModal={handleCloseOrOpenModal}>
                    <div style={{ width: "100%" }}>
                        {customerId === 2 && (
                            <iframe
                                className="teacher-video"
                                src="https://www.youtube.com/embed/wwepBRgeFHk?autoplay=1"
                                title="customer"
                                height="600px"
                                width="100%"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                        {customerId === 1 && (
                            <iframe
                                className="teacher-video"
                                src="https://www.youtube.com/embed/1Pr2H5Vpfqk?autoplay=1"
                                title="customer"
                                height="600px"
                                width="100%"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                        {customerId === 0 && (
                            <iframe
                                className="teacher-video"
                                src="https://www.youtube.com/embed/hs3MSvPpPNs?autoplay=1"
                                title="customer"
                                height="600px"
                                width="100%"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                        <span onClick={handleCloseOrOpenModal} className={styles.modal__close}>X</span>
                    </div>
            </Modal>
            }
            <div className={styles.persons__container}> 
                <div className={styles.texts__wrapper}>
                    <div className={styles.title__wrapper}>
                        <NewText 
                            inner="The Tool Top Creators Use to "
                            size={sizes.size_52}
                            type={types.newBold800}
                            style={{
                                color: '#131F1E'
                            }}
                        />
                        
                    </div>
                    <div className={styles.title__wrapper}>
                        <NewText 
                            inner="Become Legends"
                            size={sizes.size_52}
                            type={types.newBold800}
                            style={{
                                color: '#131F1E'
                            }}
                        />
                        
                    </div>
                    <div className={styles.persons__subtitle__wrapper}>
                        <NewText 
                            inner="Miestro combines smart tech and intuitive tools to help creators build a video"
                            size={sizes.xlarge}
                            type={types.regular}
                            style={{
                                color: '#444C4B'
                            }}
                        />
                        <NewText 
                            inner="membership, foster an engaged community, and effortlessly monetize their content."
                            size={sizes.xlarge}
                            type={types.regular}
                            style={{
                                color: '#444C4B'
                            }}
                        />
                    </div>
                </div>
                <div className={styles.blocks__wrapper}>
                    {
                        imagesLinks.map((item, index) => {
                            return (
                                <div key={item} onClick={() => handleCloseOrOpenModal(index)}>
                                    <img src={item.src} alt="persons images" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default PersonsSection;