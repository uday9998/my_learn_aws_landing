import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import IconNew from "@/app/components/elements/IconNew/IconNew";
import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import UserCard from "../UserCard/UserCard";

import styles from './UsersSection.module.scss';

const UsersSection = () => {
    return (
        <div className={`relative ${styles.users__section__wrapper}`}>
            <div className="absolute left-0 z-[1">
                <IconNew name="BackgroundElementUsers" />
            </div>
            <div className="absolute right-0 z-[1]">
                <IconNew name="BackgroundElementSecondUsers" />
            </div>

            <div className={`absolute flex flex-col gap-1 items-center ${styles.text__center}`}>
                <NewText
                    inner="Meet the People"
                    type={types.bold800}
                    style={{ fontSize: "64px", color: "#444C4B", fontFamily: true }}
                />
                <div className="flex gap-2">
                    <NewText
                        inner="Who Chose"
                        type={types.bold800}
                        style={{ fontSize: "64px", color: "#444C4B",fontFamily: true }}
                    />
                    <NewText
                        inner="Miestro"
                        type={types.bold800}
                        className="netflix__gradient__text"
                        style={{ fontSize: "64px", color: "#444C4B",fontFamily: true }}
                    />
                </div>
            </div>
            <div className="z-[10] w-full h-full flex flex-col items-end justify-end px-5 pb-[53px]">
                <div className={`w-full flex justify-between mx-[auto] ${styles.users__middle} mb-[29px] gap-6`}>
                    <UserCard userIndex={1} />
                    <div className="flex gap-6 mt-[-73px]">
                        <UserCard userIndex={2} />
                        <UserCard userIndex={3} />
                    </div>
                    <UserCard userIndex={4} />
                </div>
                <div className={`flex ${styles.users__bottom} justify-between`}>
                    <UserCard userIndex={0} />
                    <UserCard userIndex={5} />
                </div>
            </div>
        </div>
    );
};

UsersSection.propTypes = {};

export default UsersSection;
