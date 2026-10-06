import React from 'react';
import Header from './shared/Navbar/Header/Header';
import Navbar from './shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins">This is Home </h2>
            
        </div>
    );
};

export default Home;