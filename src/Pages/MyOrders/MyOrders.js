import { Button, Container,Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth'

const MyOrders = () => {
    const [orders, setOrders] = useState([])

    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    if (window.confirm("Are you Sure!")) {
                        const remaining = orders.filter(booking => booking._id !== id);
                        setOrders(remaining);
                    }
                    else {
                        return true;
                    }

                }

            })
    }


    return (
        <div>
            <Typography id="btn" sx={{color:"pink"}} variant="h3">My Orders</Typography>

            {
                orders.map(order => <Container  key={order._id}>
                    
                    <Box sx={{ mb:2,mt:4,mx:'auto'}} >
                    <Box sx={{border:"1px solid gray"}}>
                    <Typography id="btn" sx={{color:"pink"}} variant="h5">{order.watchName}</Typography>
                    <Typography id="btn" sx={{color:"gray"}} variant="h5">{order.name}</Typography>
                    <Typography id="btn" sx={{color:"gray"}} variant="body1">{order.email}</Typography>
                    <Button onClick={() => handleDelete(order._id)} id="btn" sx={{ fontWeight: 700, color: 'white' }} color="inherit">Delete</Button>
                    </Box>
                    </Box>

                </Container>)
            }
        </div>
    );
};

export default MyOrders;