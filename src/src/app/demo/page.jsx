
import DemoElements from './components/DemoElements';

const pathName = process.env.NEXT_PUBLIC_PATH

export const metadata = {
    title: 'Miestro: Video Membership & Course Platform For Creators',
    description: 'Miestro: The Ultimate Video Membership and Course Platform that helps creators scale their businesses and create online courses, memberships, and communities.',
    alternates: {
        canonical: `${pathName}/demo`
    }
}

const Demo = () => {
    return (
        <div className="flex flex-col">
            <DemoElements />
        </div>
    )
}

export default Demo;