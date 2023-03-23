import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
               
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I am <span className='highlighted-text'>Hiwot Woldesemayat</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                           Full Stack Developer 
                        </h1>
                        <Container>
                        Experienced React Full-Stack Developer. Build and maintain front-end and back-end web applications.
                        Passionate programmer. Experienced as a Data Scientist in the IT field. Highly proficient in producing data-driven solutions with outstanding problem-solving abilities. Proficient in building statistical models using python. Played a crucial role in data processing analysis, enhancing efficiency, and accuracy.
                        </Container>
                    </span>
                </div>
                <div className='profile-options'>
                    <a href="https://www.linkedin.com/in/hiwot-woldesemayat-4694981b/">
                        <button className='btn primary-btn'>
                            {""}
                            Contact me{" "}
                        </button>
                    </a>
                    <a href='Hiwot_resume.pdf' download='Hiwot_resume.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
