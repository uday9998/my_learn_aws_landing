import { useRouter } from 'next/navigation'

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';

const LinkGroup = ({ groupTitle, links }) => {
    const router = useRouter();

    const openNavLink = (data, title) => {
        const [ link, outside ] = data;

        if(title && title === 'Features') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            localStorage.setItem('openMenu', true)
        } else if(outside) {
            window.open(link, { target: '_blank' })
        } else {
            router.push(link);
        }
    }

    const handleOpenSupportChat = () => {
        // document.querySelector('body>#ap3-talk-widget-ui').shadowRoot.querySelector('#__root').querySelector('div').click();
        // document.querySelector('#mevo_chatbox_opener').click();
        if (window.OpenWidget) {
            window.OpenWidget.call('maximize');
         }
    };

    return (
        <div className="flex flex-col gap-6 items-end">
            <div className='flex flex-col gap-6'>
                <Text
                    inner={groupTitle}
                    type={types.bold}
                    size={sizes.xlarge}
                    style={{ lineHeight: '160%', color: '#fff' }}
                />
                {links.map((e, index) => {
                    return (
                        <span onClick={e.title === 'Contact Us' ? handleOpenSupportChat : () => openNavLink(e.outside ? [e.link, e.outside] : [e.link], e.title)}>
                            <Text
                                key={index}
                                inner={e.title}
                                type={types.regular148}
                                size={sizes.medium}
                                className='group__link__a'
                            />
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default LinkGroup
