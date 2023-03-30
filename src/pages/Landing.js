import React from 'react'
import "../css/Landing.css"
import {Link}from "react-router-dom"
import Nav from '../components/Nav'

export default function Landing() {
  return (
    <>
    <Nav/>
    <div className='heroimg-page' >
      <div className='hero-img'>
  
      <p className='hero-title'>Image Description Generator <br/> Using Deep Learning</p>
        <Link to="/uploadimage"><button className='cta-button' ><span>Upload Image </span></button>
        </Link>
        
      </div>
        
    
    </div>
    </>
  )
}
