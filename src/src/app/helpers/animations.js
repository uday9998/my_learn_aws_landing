import lottie from "lottie-web";

export const heroAnimation = (renderedElement, animationJson) => {
    return lottie.loadAnimation({
        container: renderedElement,
        animationData: animationJson,
        renderer: "svg",
        loop: true,
        autoplay: true
    });
}