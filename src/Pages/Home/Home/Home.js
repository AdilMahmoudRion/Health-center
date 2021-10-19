import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import MedicalServices from '../../MedicalServices/MedicalServices';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
      <div id="home">
        <Banner></Banner>
        <AboutUs></AboutUs>
        <MedicalServices></MedicalServices>
      </div>
    );
};

export default Home;