import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, img, description, price, _id } = product;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                    <CardMedia

                        sx={{ alignItems: 'center' }}
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={img}
                    />
                    <CardContent id="btn">
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ mb: 2 }}>
                        <Button size="small">{price}</Button>
                        <Link style={{ textDecoration: "none" }} to={`product/${_id}`}> <Button variant="contained" size="small">Add To Cart</Button></Link>
                    </CardActions>
                </Card>
            </Grid>

        </>
    );
};

export default Product;