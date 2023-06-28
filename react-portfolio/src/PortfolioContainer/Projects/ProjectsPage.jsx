import { HStack, Box, Link, Heading, Center } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import './projects.css'

export default function ProjectsPage() {
  return (
    
    <section className='project-section' id='skills'>
      
      <div className='project-section'>
      <Box boxShadow='2xl' zIndex={2} p='200' w='100%'rounded='md' bg='coral'>
      <HStack justify="center">
        <Heading>Projects</Heading>
      </HStack>
      <NavLink to="https://booked-oxh9.onrender.com/">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Capstone Project 
            </Box>
          )}
        </NavLink>
      <HStack justify="center">
        
      
        <NavLink to="https://hwtictactoe.netlify.app/">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Tic-Tac-Toe Game 
            </Box>
          )}
        </NavLink>
        
        
      </HStack>
      <HStack justify="center">
        <NavLink to="https://github.com/hiwett18/express-recipe-app/tree/recipe-branch">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Express-Recipe Project (GitHub)
            </Box>
          )}
        </NavLink>
      </HStack>
      <HStack justify="center">
        <NavLink to="https://github.com/hiwett18/Pet-app/tree/master/Team3PetAPI-main">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Pet Project (GitHub)
            </Box>
          )}
        </NavLink>
        
        
      </HStack>
      <HStack justify="center">
        <NavLink to="https://hw-currency-ex.netlify.app/">
          {({ isActive }) => (
            <Box
              p="2"
              borderBottomWidth="thick"
              borderBottomColor={isActive ? "blue.700" : "blue.500"}
            >
              Currency Exchange
            </Box>
          )}
        </NavLink>
        
        
      </HStack>
      </Box>
      </div>
    </section>
  );
}