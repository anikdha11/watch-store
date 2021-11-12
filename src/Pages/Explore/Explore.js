import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Products/product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <Typography id="btn" variant="h5" sx={{ color: "success.main", mt: 2, mb: 2 }}>All WATCHES</Typography >

            <Grid container spacing={2} sx={{ mx: 0 }}>

                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </Grid>
        </Container>
    );
};

export default Explore;