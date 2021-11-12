import React from 'react';
import Product from './product/Product';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const products = [
    {
        name: "Mobile Watch-1",
        price: "$150",
        img: "https://image.freepik.com/free-psd/high-angle-modern-smartwatches-with-screen-mock-up_23-2148787557.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch-2",
        price: "$100",
        img: "https://image.freepik.com/free-psd/front-view-modern-smartwatch-with-screen-mock-up_23-2148787555.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch-3",
        price: "$250",
        img: "https://image.freepik.com/free-psd/person-with-automation-app-digital-watch_23-2149032099.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch-4",
        price: "$170",
        img: "https://image.freepik.com/free-psd/pink-smartwatch-mockup_23-2147862185.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch-5",
        price: "$140",
        img: "https://image.freepik.com/free-psd/smartwatch-mockup-with-box_23-2147862183.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch-6",
        price: "$205",
        img: "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
]



const Products = () => {
    return (
        <Container>
            <Typography  id="btn" variant="h3" sx={{color:"success.main",mt:2,mb:2}}>WATCHES</Typography >

            <Grid container spacing={2} sx={{ mx: 0 }}>

                {
                    products.map(product => <Product
                        key={product.name}
                        product={product}></Product>)
                }

            </Grid>

        </Container>
    );
};

export default Products;