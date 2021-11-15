import React, { useEffect, useState } from 'react';
import Product from './product/Product';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


// const products = [
//     {

//         "name": "Mobile Watch-1",
//         "price": "$150",
//        " img": "https://image.freepik.com/free-photo/close-up-black-smartwatch_23-2147797005.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-2",
//         "price": "$100",
//         "img": "https://image.freepik.com/free-psd/front-view-modern-smartwatch-with-screen-mock-up_23-2148787555.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-3",
//         "price": "$250",
//         "img": "https://image.freepik.com/free-psd/person-with-automation-app-digital-watch_23-2149032099.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-4",
//         "price": "$170",
//         "img": "https://image.freepik.com/free-psd/pink-smartwatch-mockup_23-2147862185.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-5",
//         "price": "$140",
//         "img": "https://image.freepik.com/free-psd/smartwatch-mockup-with-box_23-2147862183.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-6",
//         "price": "$205",
//         "img": "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-7",
//         "price": "$205",
//         "img": "https://image.freepik.com/free-photo/smartwatch-with-digital-assistant-arrangement_23-2149108009.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-8",
//         "price": "$205",
//         "img": "https://img.freepik.com/free-photo/high-angle-view-two-black-white-smartwatch_23-2147797025.jpg?size=338&ext=jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-9",
//         "price": "$205",
//         "img": "https://image.freepik.com/free-vector/vector-smart-watch_53876-25690.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-10",
//         "price": "$205",
//         "img": "https://image.freepik.com/free-vector/white-smartwatch-background_1412-32.jpghttps://image.freepik.com/free-psd/smartphone-screen-smart-watch-mockup_1332-271.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-11",
//         "price": "$205",
//         "img": "https://image.freepik.com/free-psd/smartwatch-mockup_1332-7621.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//     ,
//     {
//         "name": "Mobile Watch-12",
//         "price": "$245",
//         "img": "https://image.freepik.com/free-vector/smartwatch-applications-tasks-concept-llustration_1284-17017.jpg",
//         "description": " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
// ]



const Products = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch("https://secret-badlands-82308.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isLoading])


    return (
        <Container>

            <Typography id="btn" variant="h3" sx={{ color: "success.main", mt: 2, mb: 2 }}>WATCHES</Typography >
            {isLoading && <CircularProgress />}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </Grid>
        </Container>
    );
};

export default Products;