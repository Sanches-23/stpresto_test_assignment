import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from 'src/Components/Navbar';
import Footer from 'src/Components/Footer';
import {Box} from '@mui/material';

const App = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
            <Navbar/>
            <main style={{flexGrow: 1}}>
                <Outlet/>
            </main>
            <Footer/>
        </Box>
    );
};

export default App;