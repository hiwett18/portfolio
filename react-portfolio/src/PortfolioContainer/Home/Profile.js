import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import { Flex, VStack, Heading } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Profile() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Hiwot_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Hiwot_resume.pdf';
                alink.click();
            })
        })
    }
  return (
    
        
        <div className='profile-container'>
         
            <Box boxShadow='dark-lg' p='20' rounded='md' bg='lightgray'>
    
    
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
                            Experienced React Full-Stack Developer and Data Scientist. Built and maintained several front-end and back-end web applications using React, Node.js, and other modern technologies. Well-versed in the latest best practices and trends in React development. Highly proficient in producing data-driven solutions with outstanding problem-solving abilities. Proficient in building statistical models using python. Played a crucial role in data processing analysis, enhancing efficiency, and accuracy.
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
                       
                            <button className='btn highlighted-btn' onClick={onButtonClick}>Get Resume</button>
                        
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
            </Box> 
            
        </div>
 
  )
}
