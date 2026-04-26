import Link from "next/link";
import user from '@/assets/user.png'
import Image from "next/image";
import NevLink from '@/components/shered/NevLink'


const Navber = () => {
    return (
        <div className="flex justify-between items-center container mx-auto py-6">
            <div></div>
         <ul className="flex gap-6">
            <li><NevLink href={'/'}>Home</NevLink></li>
            <li><NevLink href={'/about'}>About</NevLink></li>
            <li><NevLink href={'/career'}>Career</NevLink></li>
           
         </ul>
         <div className="flex gap-4">
            <Image src={user} alt="user logo" />
            <button className="btn bg-black text-white">
                <Link href={'/login'}>Login</Link>
            </button>
         </div>
        </div>
    );
};

export default Navber;