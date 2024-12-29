import React from 'react'
import Navbar from '../components/Home/navbar8';
export default function LogoMaker() {

    const headingStyle = {
        fontSize: '2rem', // Adjust font size
        textAlign: 'center',
        marginTop: '150px',
      };

  return (
    <>
    <Navbar />
    <div style ={headingStyle}>LogoMaker: Work in Progress</div>
    </>
  )
}
