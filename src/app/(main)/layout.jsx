import BrakingNews from '@/components/BrakingNews';
import Header from '@/components/shered/Header';
import Navber from '@/components/shered/Navber';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
        <Header></Header>
        <BrakingNews></BrakingNews>
        <Navber></Navber>
        {children}
        </div>
    );
};

export default MainLayout;