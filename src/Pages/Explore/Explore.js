import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Home/Products/product/Product';
import Footer from '../Home/Shared/Footer/Footer';
import Navegation from '../Home/Shared/Header/Navegation';

const Explore = () => {
    const [products, setProducts] = useState([])
    const {isLoading } = useAuth();
    useEffect(() => {
        fetch("https://secret-badlands-82308.herokuapp.com/products/")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
      <>  <Navegation></Navegation>
        <Container>
         
            <Typography id="btn" variant="h5" sx={{ color: "success.main", mt: 2, mb: 5 }}>All WATCHES</Typography >
        {
            isLoading && <CircularProgress sx={{mb:4}} color="success"/>
        }
            <Grid container spacing={2} sx={{ mx: 0 }}>

                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </Grid>
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Explore;