import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Departments from '../../Departments/Departments';
import MedicalServices from '../../MedicalServices/MedicalServices';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
      <div id="home">
        <Banner></Banner>
        <MedicalServices></MedicalServices>
        <Departments></Departments>
        <AboutUs></AboutUs>
      </div>
    );
};

export default Home;