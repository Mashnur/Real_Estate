import React from 'react';
import Header from './shared/Navbar/Header/Header';
import Navbar from './shared/Navbar/Navbar';
import LeftSideNav from './shared/Navbar/LeftSideNav/LeftSideNav';
import RightSideNav from './shared/RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins">This is Home </h2>
            <div>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div><h2 className="text2xl">Coming soon...</h2></div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;