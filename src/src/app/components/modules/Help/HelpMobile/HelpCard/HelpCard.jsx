import Text, { TextWithIcon } from "@/app/components/elements/TextWithIcon/TextWithIcon";

const HelpCard = ({ imageUrl, title, description, buttonText, onClick }) => {
    return (
        <div className="flex flex-col help__card gap-[24px]">
            <img src={imageUrl} style={{ marginBottom: "-95px" }} alt="online course platform" />
            <div className="flex flex-col pb-[20px] px-[32px]">
                <Text
                    inner={title}
                    type={types.bold800}
                    style={{
                        color: "#fff",
                        lineHeight: "150%",
                        fontSize: "20px",
                        marginBottom: "4px"
                    }}
                />
                <Text
                    inner={description}
                    size={sizes.small}
                    type={types.regularDefault}
                    style={{
                        color: " rgba(255, 255, 255, 0.6)",
                        marginBottom: "16px"
                    }}
                />
                <TextWithIcon
                    iconName="ArrowRightMini"
                    inner={buttonText}
                    type={types.mediumLarge}
                    onClick={onClick}
                    size={sizes.small}
                    generalStyles={{ cursor: "pointer", gap: "8px" }}
                    style={{ color: "#fff" }}
                    isIconRight={true}
                />
            </div>
        </div>
    );
};

export default HelpCard;