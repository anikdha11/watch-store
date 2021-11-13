import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';
import { Container } from '@mui/material';


const Review = () => {

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
    return (
        <Container>
            <h1 id="btn">Please give Review about our site</h1>
            <Box>
                <form className="" onSubmit={handleSubmit(onSubmit)}>

                    <input style={{ width: '50%' }}  {...register("name", { maxLength: 20 })} placeholder="name" />
                    <br />
                    <textarea style={{ width: '50%' }} {...register("email")} placeholder="Description" />
                    <input style={{ width: '50%' }} id="btn" type="submit" />
                </form>
            </Box>
        </Container>
    );
};

export default Review;