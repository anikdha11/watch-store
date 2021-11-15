import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import { Button, Container, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Review = () => {

    const [reviews, setReviews] = useState([])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://secret-badlands-82308.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submit successfully');
                    reset();
                }
            })
    }


    useEffect(() => {
        fetch("https://secret-badlands-82308.herokuapp.com/review")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container>
            <Typography id="btn" sx={{ fontWeight: 500, fontSize: 40, color: 'orange' }} variant="h6">Please Give Reviews</Typography>

            <Box>
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <input style={{ width: '50%' }}  {...register("name", { maxLength: 20 })} placeholder="name" />
                    <br />
                    <textarea style={{ width: '50%' }} {...register("description")} placeholder="Description" />
                    <br />
                    <input type="number" style={{ width: '50%' }}  {...register("ratings", { min:0 , max:5})} placeholder="ratings" />
                    <br />
                    <Button id="btn" variant="contained" sx={{ mt: 2 }} type="submit">Submit</Button>
                </form>
            </Box>
            <Box>
                <Typography id="btn" sx={{ fontWeight: 400, fontSize: 40, color: 'orange' }} variant="h6">Reviews here</Typography>

                {
                    reviews.map(review => <Box
                        key={review._id}>
                        <Card sx={{ minWidth: 275, mb: 3 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {review.name}
                                </Typography>
                                <Typography variant="body2">
                                    {review.description}
                                </Typography>
                                <Rating
                                    sx={{color:"gold"}}
                                    placeholderRating={3.5}
                                    readonly
                                />
                            </CardContent>
                        </Card>
                    </Box>)
                }
            </Box>
        </Container>
    );
};

export default Review;