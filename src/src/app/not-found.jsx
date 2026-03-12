import { Roboto } from "next/font/google";
import { TYPES as types, SIZES as sizes } from "./components/elements/TextWithIcon/TextWithIconProps";

import {NewText} from "./components/elements/TextWithIcon/TextWithIcon";
import IconNew from "./components/elements/IconNew/IconNew";
import Link from "next/link";

const roboto = Roboto({subsets: ['latin'], weight: ['500']});

const NotFound = () => {
    return (
        <div className='not__found__wrapper'>
            <div className='content__wrapper'>
                <div className='text__wrapper'>
                    <NewText
                        inner='Ooops...'
                        type={ types.mediumSmall }
                        size={ sizes.size_40 }
                    />
                    <NewText
                        inner="We can't find the page you're looking for."
                        type={ types.bold133 }
                        size={ sizes.small }
                        style={ { color: '#444C4B' } }
                    />
                    <div className='button__wrapper'>
                        <button className={roboto.className}>
                            <Link href='/'>
                                Go to Homepage
                            </Link>
                        </button>
                    </div>
                </div>
                    <IconNew name={ `NotFoundgreenSvg` } />        
            </div>
        </div>
    )
};

export default NotFound;