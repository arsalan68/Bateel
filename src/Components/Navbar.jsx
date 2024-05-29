import React, { useState } from 'react'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Header from './Header';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  return (
    <div className='navComponent'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className='float-start d-flex gap-3'>
            <h6><IoCall /> Call Us</h6>
            <h6><FaWhatsapp /> WhatsApp</h6>
            <h6><MdAlternateEmail /> Email message</h6>
          </div>
          <div className='text-center'>
            <h6>A HERITAGE OF EXCELLENCE SINCE 1936</h6>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Currency:AED
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Currency</a></li>
              <li><a className="dropdown-item" href="#">GBP</a></li>
              <li><a className="dropdown-item" href="#">EUR</a></li>
              <li><a className="dropdown-item" href="#">USD</a></li>
            </ul>
          </div>

        </div>
        
        <div className='d-flex gap-3 px-3 searchBoxContainer'>
        <CiSearch onClick={()=>setclicked(true)}/>
        {clicked && <div className='searchBox'>
          <input type="text" />
          <CiSearch />
        </div>}
        <CgProfile/>
        <CiShoppingCart />
        </div>
      </nav>

      <Header />

    </div>

  



  )
}

export default Navbar
