import React from 'react'
import Cardlist from './Cardlist'
import logo1 from "../assets/id-card.png"
import logo2 from "../assets/logout.png"
import {Link, navlink}  from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="navbar row r1 header bg-primary text-white m-0 p-3  w-100" >
                <div className="hleft col-lg-6 col-md-6 col-6   d-flex  ">
                     <img src={logo1} alt="id-card" /> 
                    <h2 className="pl-2  ">Cloud Contact</h2>
                </div>
                <div className="hright col-lg-6 col-md-6 col-6 align-center d-flex flex-wrap justify-content-end ">
                    <div className="huname ">
                    <Link to="/Home" style={{color:"white"}}>Home</Link>
                        <p className="h6 m-0">Hello Sultans Dine</p>

                    </div>
                    <div className="logout  d-flex ml-4 ">
                        <img src={logo2} alt="logout" width="25px" height="25px" />
                        <Link to="/" className="m-0 pl-1 pr-1 pb-0" style={{color:"white"}}> Logout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
