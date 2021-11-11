import React from 'react';
import Product from './product/Product';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


const products = [
    {
        name: "Mobile Watch1",
        img: "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch2",
        img: "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch3",
        img: "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch4",
        img: "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch5",
        img: "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
    ,
    {
        name: "Mobile Watch6",
        img: "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
        description: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
]



const Products = () => {
    return (
        <Container>
            <h1>WATCHES</h1>

            <Grid container spacing={2}>

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