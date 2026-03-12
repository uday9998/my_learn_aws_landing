import { AnimationOnScroll } from "react-animation-on-scroll";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import ProductsBlockImage from '@/app/assets/images/Products.png';

const ProductsBlock = () => {
    return (
        <div className="container flex gap-[48px] items-center">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div>
                    <img src={ProductsBlockImage.src} alt="online course platform" width="100%" title='courses memberships communities' />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <div className="flex flex-col pr-[58px] gap-[16px] relative">
                    <Text
                        inner="Create Products:"
                        type={types.bold800}
                        style={{
                            color: "#F8FAFA",
                            whiteSpace: "nowrap",
                            fontSize: "40px",
                            lineHeight: "48px"
                        }}
                    />
                    <Text
                        inner="• Courses"
                        type={types.bold800}
                        className="netflix__gradient__text"
                        style={{
                            color: "#F8FAFA",
                            fontSize: "56px",
                            whiteSpace: "nowrap",
                            lineHeight: "110%"
                        }}
                    />
                    <Text
                        inner="• Memberships"
                        type={types.bold800}
                        className="netflix__gradient__text"
                        style={{
                            color: "#F8FAFA",
                            fontSize: "56px",
                            whiteSpace: "nowrap",
                            lineHeight: "110%"
                        }}
                    />
                    <Text
                        inner="• Communities"
                        type={types.bold800}
                        className="netflix__gradient__text"
                        style={{
                            color: "#F8FAFA",
                            fontSize: "56px",
                            whiteSpace: "nowrap",
                            lineHeight: "110%"
                        }}
                    />
                    <div className="products__block__status">
                        <Text
                            inner="from the same platform"
                            type={types.bold800}
                            size={sizes.xxlarge}
                            style={{
                                lineHeight: "29px",
                                color: "#F8FAFA"
                            }}
                        />
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    );
};

export default ProductsBlock;