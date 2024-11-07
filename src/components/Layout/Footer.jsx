import React from "react";
import './Footer.css'

const Footer = () =>{

    return(
        <>
        <footer className="text-center py-3" style={{backgroundColor: "white", boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
           <p className="mb-0">
              &copy; 2024. All Rights Reserved. Medicover Hospitals
           </p>
        </footer>


        
        </>
    );
};

export default Footer;