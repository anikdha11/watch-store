import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import "./Banner.css"

const img = "https://image.freepik.com/free-photo/top-view-clock-time_1150-6704.jpg"

const bannerBg = {
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 380
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography id="btn" variant="h3" sx={{ my: 3, fontWeight: 300, color: 'white' }}>
                            WELCOME TO  <br />
                            <span style={{ fontSize: 15, color: "gray" }}>  WATCHES STORE</span>
                        </Typography>
                        <Typography variant="h6" >

                        </Typography>
                        <Button id="btn" color="secondary" aria-label="medium secondary button group" style={{ backgroundColor: 'white' }}>Explore</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img className="img-style" src="https://image.freepik.com/free-psd/smartwatch-mockup-three_23-2147862181.jpg" alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;