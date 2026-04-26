'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NevLink = ({href, children}) => {

    const pathName = usePathname()
    console.log(pathName, "pathName")

    const isActive = href === pathName


    return <Link href={href} className={`${isActive ? " text-xl text-purple-400" :""}`}>{children}</Link>
};

export default NevLink;