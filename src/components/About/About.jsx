import React from 'react'
import "./about.css"
import AboutImg from "../images/Me.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import Cv from "../images/UK-KAGNARY-CV.pdf";
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = Cv;
    downloadLink.download = "UK-KAGNARY-CV.pdf";
    downloadLink.target = "_blank";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="about" id='about'>
      <div className="a-container">
      <div className="a-left" data-aos="fade-left" data-aos-duration="3000">
        <div className="a-left-txt">
          <div className="loader"></div>
          <span className='intro'>
            <br />Hello, My full-name is Uk Kagnary and <br /> i am a student of computer science at Royal University <br /> Of Phnom Penh.
            throughout my academic journey, I have acquired a foundation in front-end such as HTML, CCS, JavaScript, and ReactJs
             with vite.
          </span>
          <div className="a-btn-txt" data-aos="fade-right">
            <a href="../images/UK-KAGNARY-CV.pdf"><button className='btn-h-more' onClick={handleDownload}>Download CV <FaFilePdf /></button></a>
            <a href="https://t.me/Kagna_ry/"><button className='download'>Hire Me</button></a>
          </div>
        </div>
      </div>
      <div className="a-right">
          <div className="profile-card" data-aos="fade-up">
            <div className="bg">
              <img src={AboutImg} alt="aboutImg" />
            </div>
            <div className="blob"></div>
          </div>
          <div className="a-social"data-aos="fade-down
          
          " >
            <a href="https://www.facebook.com/profile.php?id=100043775706247&mibextid=ZbWKwL">
            <button className='a-btn fb'>
              <span className='svgContainer' style={{color:"#fff"}}>
              <FaFacebookF />
              </span>
              <span className='a-bg'></span>
            </button>
            </a>
            <a href="https://www.instagram.com/every1loves.ryy?igsh=cXVyYXBkbm9wdG53">
             <button className='a-btn ig'>
              <span className='svgContainer' style={{color:"#fff"}}>
              <FaInstagram />
              </span>
              <span className='a-bg'></span>
             </button>
            </a>
            <a href="https://t.me/Kagna_ry/">
             <button className='a-btn telegram'>
              <span className='svgContainer' style={{color:"#fff"}}>
              <FaTelegramPlane />
              </span>
              <span className='a-bg'></span>
             </button>
            </a>
            <a href="https://github.com/Kanhary">
             <button className='a-btn github'>
              <span className='svgContainer' style={{color:"#fff"}}>
              <FaGithub />
              </span>
              <span className='a-bg'></span>
             </button>
            </a>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About