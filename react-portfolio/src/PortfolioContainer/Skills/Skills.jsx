import React from 'react'
import { skills } from '../../Data.jsx'
import './skills.css'
import { Progress, Heading } from '@chakra-ui/react'


function Skills() {
  return (
    
    <section className='skills-section' id='skills'>
    
        <Heading justify="center">Professional Skills  </Heading>
        

        <div className='skill-container container'>
            {skills.map(({ name, percentage, description }, index) => {
                return (
                    <div className='skills-item'>
                        <div className='skill-titles'>
                            <h3 className="skills-name">{name}</h3>
                                <div className='skill-bar-one'> 
                                    <span className='skills-number'>{percentage} <span>
                                        %<Progress value={percentage} size='xs' length='10px' colorScheme='orange' /></span>
                                    </span> 
                                </div> 
                        <p className='skills-description'>{description}</p>
                        
                        <div className='skills-bar'></div>
                        <span className=" skills-percentage"></span> 
                        </div>
                    </div>
                )
            }
            )}
        </div> 
      
    </section>
   
  )
}

export default Skills