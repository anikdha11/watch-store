import { Button, Typography } from '@mui/material';
import React from 'react';


import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const AddProducts = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://secret-badlands-82308.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Submit successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <Typography id="btn" sx={{ fontWeight: 400, fontSize: 50, color: 'red' }} variant="h6">Add Produtcs</Typography>

            <Box>

                <Box>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>

                        <input style={{ width: '50%' }}  {...register("name", { maxLength: 20 })} placeholder="Product Name" />
                        <br />
                        <input style={{ width: '50%' }}  {...register("img", { maxLength: 100 })} placeholder="Img Url" />
                        <br />
                        <input style={{ width: '50%' }}  {...register("price", { maxLength: 20 })} placeholder="Price" />
                        <br />
                        <textarea style={{ width: '50%' }} {...register("description")} placeholder="Description" />
                        <br />
                        <Button id="btn" variant="contained" sx={{ mt: 2 }} type="submit">Submit</Button>
                    </form>
                </Box>
            </Box>
        </div>
    );
};

export default AddProducts;