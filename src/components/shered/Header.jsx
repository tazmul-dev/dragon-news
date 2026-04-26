
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center space-y-4 mt-12'>
          {/* <Image src ={logo} width ={300} height={400} alt ='logo' /> */}
          <Image src ={logo} width={300} height={200} alt='' className='mx-auto' ></Image>
          <p className='text-xl'>Journalism Without Fear or Favour</p>
          <p className='text-xl'>{format(new Date(), "EEE, MMM dd, yyyy")}</p>

        </div>
    );
};

export default Header;