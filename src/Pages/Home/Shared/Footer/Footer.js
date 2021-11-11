import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import "./Footer.css"

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 2,bgcolor: 'success.main' }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4} >
                    <Typography id="btn" sx={{fontWeight:400}} variant="h5" component="div" gutterBottom>
                        SERVICES
                    </Typography>

                    <Typography variant="h6" display="block" gutterBottom>
                        Sale
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        New Designs

                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        Quick Ship
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        Gift Cards
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}  >
                    <Typography id="btn" sx={{ fontWeight: 400 }} variant="h5" component="div" gutterBottom>
                        CATEGORIES
                    </Typography>

                    <Typography variant="h6" display="block" gutterBottom>
                        Watches
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        Clocks
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        Watch Accessories
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p><i className="fab fa-facebook"></i></p>
                    <p><i className="fab fa-twitter"></i></p>
                    <p><i className="fab fa-instagram"></i></p>
                    <p><i className="fab fa-linkedin-in"></i></p>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;