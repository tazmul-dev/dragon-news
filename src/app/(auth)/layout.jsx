import Navber from '@/components/shered/Navber';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
      <Navber></Navber>
        {children}
        </div>
    );
};

export default AuthLayout;