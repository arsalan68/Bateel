import React from 'react'
import { Link } from 'react-router-dom'
import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
    return (
       <div className='m-0' >
         <div className='footerPages'>
            <div className='pt-5 mt-5'>
                <img className='d-flex justify-content-center m-auto' src="https://bateel.com/media/wysiwyg/f-new-logo.png" alt="" />
            </div>
            <div className='text-light d-flex justify-content-between m-auto mx-5 mt-5'>
                <ul className='ulPages'>
                    <h6>Bateel International</h6>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Careers</Link></li>
                    <li><Link to="#">Press</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                    <li><Link to="#">Find us</Link></li>
                    <li><Link to="#">Franchise Opportunities</Link></li>
                </ul>

                <ul className='ulPages'>
                    <h6>Explore</h6>
                    <li><Link to="#">Bateel Farms</Link></li>
                    <li><Link to="#">Date Varieties</Link></li>
                    <li><Link to="#">Ajwa Dates</Link></li>
                    <li><Link to="#">Medjool Dates</Link></li>
                    <li><Link to="#">Single Origin Chocolate</Link></li>
                    <li><Link to="#">Nutrition</Link></li>
                    <li><Link to="#">Nutrition</Link></li>
                </ul>
                <ul className='ulPages'>
                    <h6>Shopping Online</h6>
                    <li><Link to="#">FAQs</Link></li>
                    <li><Link to="#">Shipping & Delivery</Link></li>
                    <li><Link to="#">Returns</Link></li>
                    <li><Link to="#">Cookie Policy</Link></li>
                </ul>
                <ul className='ulPages'>
                    <h6>Our Brands</h6>
                    <li><Link to="#">Bateel Boutique</Link></li>
                    <li><Link to="#">Café Bateel</Link></li>
                    <li><Link to="#">Bateel El’an</Link></li>
                </ul>
            </div>
            <div className='d-flex justify-content-end gap-4 mt-4 mb-0 px-5'>
            <CiInstagram  color='white' size={40}/>
            <FaFacebookSquare color='white' size={40} />
            <FaTwitter color='white' size={40} />
            <FaLinkedin color='white' size={40} />
            <CiYoutube color='white' size={40} /> 
            </div>
            
        </div>
        <div className='bgPages mb-10 d-flex justify-content-between fw-bold'>
            <p className='mt-2 px-5'>Terms & Conditions</p>
            <p className='mt-2'>Security & Privacy Policy</p>
            <p className='mt-2 px-5'>Copyright © 2024. All rights reserved.</p>
        </div>
       </div>

    )
}

export default Footer
