import React from 'react';
import Header from './shared/Navbar/Header/Header';
import Navbar from './shared/Navbar/Navbar';
import LeftSideNav from './shared/Navbar/LeftSideNav/LeftSideNav';
import RightSideNav from './shared/RightSideNav/RightSideNav';
import BreakingNews from '../BreakingNews';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
               <div className='md:col-span-2 border p-4'>
    <Outlet></Outlet>
</div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;