import user4Video from "@/app/assets/images/Users/user4.mp4";
import user6Video from "@/app/assets/images/Users/user6.mp4";
import user2Video from "@/app/assets/images/Users/user2.mp4";
import User1Image from "@/app/assets/images/Users/user1.png";
import User3Image from "@/app/assets/images/Users/user3.png";
import User6Image from "@/app/assets/images/Users/user6.png";

const users = [
    {
        imageUrl: User1Image,
        title: "Network Marketing",
        iconName: "PinPurple",
        isImage: true
    },
    {
        videoUrl: user2Video,
        title: "Women Empowerment",
        iconName: "PinPink"
    },
    {
        imageUrl: User3Image,
        title: "MultiFamily Movement",
        iconName: "PinGreen",
        isImage: true
    },
    {
        videoUrl: user4Video,
        title: "Dr. Shadé Y. Adu",
        iconName: "PinOrange"
    },
    {
        imageUrl: User6Image,
        title: "Innate Alchemy",
        iconName: "PinLightGreen",
        isImage: true
    },
    {
        videoUrl: user6Video,
        title: "Business Coach",
        iconName: "PinBlue"
    }
];
export default users;
