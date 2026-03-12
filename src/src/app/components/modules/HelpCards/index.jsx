import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import Cards from './components/Cards';

import trainingCard from '@/app/assets/images/dashboard/support1.png';
import firstCard from '@/app/assets/images/dashboard/support2.png';
import communityCard from '@/app/assets/images/dashboard/support3.png';
import helpCenterCard from '@/app/assets/images/dashboard/support4.png';

import styles from './help.module.scss';
import GradientText from '../../elements/GradientText/GradientText';

const HelpCards = ({
    title='Support That Feels Like Partnership'
}) => {
    return (
        <div className={styles.help__wrapper}>
            <div className={styles.title__wrapper}>
                <GradientText className='gradient__text' text="We're In This Together" />
                <NewText 
                    inner={title}
                    type={types.newBold800}
                    size={sizes.size_52}
                    style={{
                        color: '#131F1E'
                    }}
                />
            </div>
            <div className={styles.cards__wrapper}>
                <Cards
                    image={trainingCard.src}
                    title='Support Team'
                    subtitle='A team of support professionals is available to assist you with any questions or concerns.'
                    buttonText='Contact Support'
                />
                <Cards
                    image={firstCard.src}
                    title='Community'
                    subtitle='What are you waiting for? Join our community and become a part of something truly great!'
                    buttonText='Join Our Community'
                    navigateLink='https://www.facebook.com/groups/miestro'
                />
                <Cards
                    image={communityCard.src}
                    title='Help Center '
                    subtitle="Still have questions? You can find what you're looking for by going to the Help Center."
                    buttonText='Visit Help Center'
                    navigateLink='https://support.miestro.com/'
                />
                <Cards
                    image={helpCenterCard.src}
                    title='Training'
                    subtitle='Learn the ins and outs of Miestro with dedicated tutorials and guides.'
                    buttonText='Explore Training'
                    navigateLink='https://training.miestro.com/resources'
                />
            </div>
        </div>
    )
};

export default HelpCards;