import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSide = () => {
    return (
        <div>
             <h1 className=" font-bold mb-4 p-2">All Caterogy</h1>

             <div className='flex flex-col gap-6'>
                <button className='btn'>
                    <FaGoogle />
                    Login with Google
                </button>
                <button className='btn'>
                    <FaGithub />
                    Login with Github
                </button>
             </div>

        </div>
    );
};

export default RightSide;