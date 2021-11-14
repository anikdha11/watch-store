import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ContactUs = () => {
    return (
        <>
            <Box>
                <Typography id="btn" sx={{fontWeight:400,fontSize:50,color:'pink'}} variant="h6">Contact Us</Typography>
                <TextField sx={{ width: '50%' }} id="filled-basic" label="Your Name" variant="outlined" />
                <br />
                <TextField sx={{ width: '50%', mt: 2, mb: 2 }} id="filled-basic" label="email" variant="outlined" />
                <br />
                <TextField sx={{ width: '50%', mb: 2 }} id="filled-basic" label="Address" variant="outlined" />
                <br />
                <TextField sx={{ width: '50%', mb: 2 }} id="filled-basic" label="City" variant="outlined" />
                <br />
                <Button id="btn" variant="contained" type="submit">Submit</Button>
            </Box>
        </>
    );
};

export default ContactUs;