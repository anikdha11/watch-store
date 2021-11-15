import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../Home/Shared/Footer/Footer';
import Navegation from '../Home/Shared/Header/Navegation';

const Payment = () => {
    return (
        <>
            <Navegation></Navegation>
            <>
                <Typography id="btn" sx={{ fontWeight: 700, color: 'red', m: 5 }} variant="h6"> Payment system coming soon.</Typography>
            </>
            <Footer></Footer>
        </>
    );
};

export default Payment;