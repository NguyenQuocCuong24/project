import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { Outlet } from 'react-router-dom';
import i18next from '../i18n/i18n';
// import { translate, Trans } from 'react-i18next';


const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>

            <Outlet />
            
            <Footer />
        </>
    );
};

export default MainLayout;
