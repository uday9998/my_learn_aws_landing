import { useRef, useEffect } from "react";
import { TextWithIcon } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import PropTypes from "prop-types";
import users from '@/app/resources/user';

import styles from './UserCard.module.scss';

const UserCard = ({ userIndex }) => {
    const user = users[userIndex];
    const vidRef = useRef();

    useEffect(() => {
        if (vidRef.current) {
            vidRef.current.play();
        }
    }, []);

    return (
        <div className={`flex z-10 ${styles.user__card} flex-col  justify-between gap-3 card items-center `}>
            <div className="rounded-[20px] user__card__video overflow-hidden">
                {user.isImage ? (
                    <img src={user.imageUrl.src} height="100%" alt="online course platform" loading="lazy" title={user.title} />
                ) : (
                    <video
                        autoPlay={true}
                        src={user.videoUrl}
                        ref={vidRef}
                        width={249}
                        className="rounded-[20px]"
                        loop
                        muted
                    />
                )}
            </div>
            <TextWithIcon
                iconName={user.iconName}
                isIconRight={false}
                type={types.regularLarge}
                size={sizes.large}
                generalStyles={{ gap: "4px" }}
                style={{ color: "#727978" }}
                inner={user.title}
            />
        </div>
    );
};

UserCard.propTypes = {
    userIndex: PropTypes.number
};

export default UserCard;
