import React from 'react';
import Navbar from '../Components/Navbar/Navbar.Component';
import MovieNavbar from '../Components/Navbar/MovieNavbar.Component';
import Footer from '../Components/FooterComponent/footerComponent';

const MovieLayout = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar/>
            <Component {...props} />
            <Footer />
        </div>
    )
}

export default MovieLayout