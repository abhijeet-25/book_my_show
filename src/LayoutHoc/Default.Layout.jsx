import React from 'react'

import Navbar from '../Components/Navbar/Navbar.Component'
import Footer from '../Components/FooterComponent/footerComponent'


const DefaultLayout = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar/>
            <Component {...props} /> 
            <Footer />
        </div>
    )
}

export default DefaultLayout