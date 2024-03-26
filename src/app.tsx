import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "src/Components/Navbar";
import Footer from "src/Components/Footer";


const App = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default App;
