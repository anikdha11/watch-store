import { Container, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <Container>
            <Typography sx={{ m: 10, fontSize: 50, color: 'red' }} variant="h6">This Page NotFound</Typography>
        </Container>
    );
};

export default NotFound;