import React from 'react';
import Review from '../../Reviwe/Review';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Products></Products>
         <Review></Review>
        </div>
    );
};

export default Home;