import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Review = () => {

    const [reviews, setReviews] = useState([])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submit successfully');
                    reset();
                }
            })
    }


    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container>
            <h1 id="btn">Please Give Reviews</h1>
            <p></p>
            <Box>
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <input style={{ width: '50%' }}  {...register("name", { maxLength: 20 })} placeholder="name" />
                    <br />
                    <textarea style={{ width: '50%' }} {...register("description")} placeholder="Description" />
                    <input style={{ width: '50%' }} id="btn" type="submit" />
                </form>
            </Box>
            <Box>
            <h1 id="btn">Reviews here</h1>
                {
                    reviews.map(review => <Box 
                        key={review._id}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {review.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    {review.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>)
                }
            </Box>
        </Container>
    );
};

export default Review;