import { Typography } from '@mui/material';
import React from 'react';

const img ="https://image.freepik.com/free-photo/welcome-3d-text-gold-fancy-typography-illustration_53876-128749.jpg";

const bgStyle = {
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}
const DashBoardHome = () => {
    return (
        <div style={bgStyle}>
            <Typography id="btn" variant="h4">Walcome To DashBoard Home</Typography>
            <img src={img} alt=""/>
        </div>
    );
};

export default DashBoardHome;