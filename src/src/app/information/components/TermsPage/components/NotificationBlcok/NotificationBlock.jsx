import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import styles from './NotificationBlock.module.scss';

const NotificationBlock = () => {
    return (
        <div
            className="flex py-6 px-[48px] flex-col rounded-[48px] w-full"
            style={{
                background: "#F0F2F2"
            }}
        >
            <div
                className="flex flex-col pl-[32px] "
                style={{ borderLeft: "4px solid #A1A5A5" }}
            >
                <Text
                    inner="Miestro, Inc"
                    type={types.medium160}
                    className="whitespace-nowrap"
                    size={sizes.xlarge}
                />
                <Text
                    inner="3355 Lenox Road Suite 1000"
                    type={types.medium160}
                    size={sizes.xlarge}
                    className="whitespace-nowrap"
                />
                <Text
                    inner="Atlanta, GA- 30326"
                    type={types.medium160}
                    className="whitespace-nowrap"
                    size={sizes.xlarge}
                />
                <div className={`${styles.text__wrapper} flex items-center gap-2`}>
                    <Text
                        inner="Agent's Name/Email Address:"
                        type={types.medium160}
                        className="whitespace-nowrap"
                        size={sizes.xlarge}
                    />
                    <a href="mailto:support@miestro.com">
                        <Text
                            inner="support@miestro.com"
                            type={types.medium160}
                            className="whitespace-nowrap"
                            size={sizes.xlarge}
                            style={{
                                textDecoration: "underline",
                                cursor: "pointer"
                            }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export const NotificationBlockSecond = () => {
    return (
        <div
            className="flex py-6 px-[48px] flex-col rounded-[48px] w-full"
            style={{
                background: "#F0F2F2"
            }}
        >
            <div
                className={`${styles.block__wrapper} flex flex-col pl-[32px]`}
                style={{ borderLeft: "4px solid #A1A5A5" }}
            >
                <Text
                    inner="Miestro, Inc"
                    type={types.medium160}
                    size={sizes.xlarge}
                />
                <Text
                    inner="3355 Lenox Road Suite 1000"
                    type={types.medium160}
                    size={sizes.xlarge}
                    className="whitespace-nowrap"
                />
                <Text
                    inner="Atlanta, GA- 30326"
                    type={types.medium160}
                    size={sizes.xlarge}
                />
                <div className={`${styles.second__text__wrapper} flex items-center gap-2`}>
                    <Text
                        inner="Contact"
                        type={types.medium160}
                        size={sizes.xlarge}
                    />
                    <a href="mailto:support@miestro.com">
                        <Text
                            inner="support@miestro.com"
                            type={types.medium160}
                            size={sizes.xlarge}
                            style={{
                                textDecoration: "underline",
                                cursor: "pointer"
                            }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotificationBlock;
