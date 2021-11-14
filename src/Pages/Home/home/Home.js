import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import Review from '../../Reviwe/Review';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Footer from '../Shared/Footer/Footer';
import Navegation from '../Shared/Header/Navegation';


const Home = () => {
    return (
        <div>
            <Navegation></Navegation>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;