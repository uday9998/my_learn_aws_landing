import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { DMSAdata } from "@/app/resources/termsData";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import NotificationBlock, { NotificationBlockSecond } from "../NotificationBlcok/NotificationBlock";

const DMCSSection = () => {
    return (
        <div className="flex flex-col gap-4">
            <Text
                inner="9. DMCA Notice"
                type={types.bold900}
                style={{
                    fontSize: "40px",
                    lineHeight: "150%"
                }}
            />
            <Text
                inner={DMSAdata.descriptions[0]}
                type={types.regular160}
                size={sizes.xlarge}
                style={{ color: "#444C4B" }}
            />
            <Text
                inner="Notification of Claimed Infringement:"
                type={types.medium140}
                style={{
                    fontSize: "24px",
                    lineHeight: "133%"
                }}
            />
            <div className="ml-10">
                <NotificationBlock />
            </div>
            <Text
                inner={DMSAdata.descriptions[1]}
                type={types.regular160}
                size={sizes.xlarge}
                style={{ color: "#444C4B" }}
            />
            <Text
                inner={DMSAdata.descriptions[2]}
                type={types.regular160}
                size={sizes.xlarge}
                style={{ color: "#444C4B" }}
            />
            <div className="flex flex-col gap-4 pl-10">
                {DMSAdata.subDescriptions.map((e, index) => {
                    return (
                        <div className="flex flex-col" key={index}>
                            <Text
                                inner={`${index + 1}.`}
                                type={types.medium140}
                                style={{
                                    fontSize: "24px",
                                    lineHeight: "133%"
                                }}
                            />
                            <Text
                                inner={e}
                                type={types.regular160}
                                size={sizes.xlarge}
                                style={{ color: "#444C4B" }}
                            />
                        </div>
                    );
                })}
                <Text
                    inner="Notification of Consumer Rights Complaint or Pricing Inquiry:"
                    type={types.medium140}
                    style={{
                        fontSize: "24px",
                        lineHeight: "133%"
                    }}
                />
                <div className="ml-10">
                    <NotificationBlockSecond />
                </div>
            </div>
            <div className="flex pl-20 flex-col gap-4">
                {DMSAdata.TwelveTerms.map((e, index) => {
                    return (
                        <div className="flex flex-col gap-2">
                            {e.title && (
                                <Text
                                    inner={e.title}
                                    type={types.medium140}
                                    style={{
                                        fontSize: "24px",
                                        lineHeight: "133%"
                                    }}
                                />
                            )}
                            <Text
                                inner={e.description}
                                type={types.regular160}
                                size={sizes.xlarge}
                                style={{ color: "#444C4B" }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DMCSSection;
