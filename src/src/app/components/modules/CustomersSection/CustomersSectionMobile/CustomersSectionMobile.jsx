import { useState } from 'react';
import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Modal from '@/app/components/elements/Modal/Modal';
import Text, { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import IconNew from '@/app/components/elements/IconNew/IconNew';

import customer1 from "@/app/assets/images/customers/customer1.png";
import customer2 from "@/app/assets/images/customers/customer2.png";
import customer3 from "@/app/assets/images/customers/customer3.png";

import styles from './CustomersSectionMobile.module.scss';

const CustomersSectionMobile = () => {
    const [isOpenVideo, setIsOpenVideo] = useState(false);
    const [customerId, setCustomerId] = useState(0);

    return (
        <div className={`flex flex-col relative ${styles.customers__section__mobile}`}>
            {isOpenVideo && (
                <Modal closeModal={() => setIsOpenVideo(false)}>
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
                    </div>
                </Modal>
            )}
            <div className="w-full flex flex-col px-4 items-center pt-[100px] mb-[60px] relative">
                <NewText
                    inner="Our Customers"
                    style={{
                        fontWeight: "800",
                        fontSize: "18px",
                        lineHeight: "140%",
                        fontFamily: true,
                        color: "#727978"
                    }}
                />
                <Text
                    inner="Real Creators Who Create Real Impact"
                    type={types.bold900}
                    style={{
                        fontSize: "36px"
                    }}
                    className="w-[100%] mt-2 justify-center text-center z-10"
                />
                <div
                    className="absolute"
                    style={{ zIndex: 1, bottom: "-10%", right: "0%" }}
                >
                    <IconNew name="StarCustomers" />
                </div>
            </div>
            <div className="mx-[auto] pb-[100px] max-w-min flex flex-col gap-[47.5px]">
                <div
                    className={styles.customer}
                    onClick={() => {
                        setIsOpenVideo(true);
                        setCustomerId(0);
                    }}
                >
                    <img src={customer1.src} alt="online course platform" />
                </div>
                <div
                    className={styles.customer}
                    onClick={() => {
                        setIsOpenVideo(true);
                        setCustomerId(1);
                    }}
                >
                    <img src={customer2.src} alt="online course platform" />
                </div>
                <div
                    className={styles.customer}
                    onClick={() => {
                        setIsOpenVideo(true);
                        setCustomerId(2);
                    }}
                >
                    <img src={customer3.src} alt="online course platform" />
                </div>
            </div>
        </div>
    );
};

export default CustomersSectionMobile;