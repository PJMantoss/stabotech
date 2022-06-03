import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import HomeWidget from '../components/HomeWidget';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slider />
        <HomeWidget />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home