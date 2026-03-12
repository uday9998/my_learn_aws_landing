import { openSocialPage } from '../../Footer';
import links from '@/app/resources/footer-links.json';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import IconNew from '@/app/components/elements/IconNew/IconNew';
import LinkGroup from '../LinkGroup/LinkGroup';

import styles from './FooterLinks.module.scss';

const FooterLinks = () => {
    return (
        <div className={styles.footer__links}>
            <div className="flex flex-col gap-6 mr-25">
                <IconNew name='MiestroLogo' />
                <NewText
                    inner='Create and launch classes with Miestro the amazing and easy to use platform and broadcast your class to the world.'
                    type={types.regularDefault}
                    size={sizes.xlarge}
                    style={{ color: '#F0F2F2' }}
                />
                <div className="flex w-full justify-between">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => openSocialPage("facebook")}
                    >
                        <IconNew name="Facebook" />
                    </div>
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => openSocialPage("instagram")}
                    >
                        <IconNew name="Instagram" />
                    </div>
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => openSocialPage("twitter")}
                    >
                        <IconNew name="Twitter" />
                    </div>
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => openSocialPage("youtube")}
                    >
                        <IconNew name="Youtube" />
                    </div>
                </div>
            </div>
            {links.map((e, index) => {
                return (
                    <LinkGroup
                        groupTitle={e.title}
                        key={index}
                        links={e.links}
                    />
                )
            })}
        </div>
    )
}

export default FooterLinks