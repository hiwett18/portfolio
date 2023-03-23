import { HStack, Box, Link, Heading, Center } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

export default function ProjectsPage() {
  return (
    
    <Box p="2">
      <Heading justify="center">Projects</Heading>
      <HStack
        justify="end"
        borderBottom="thick"
        borderBottomColor="lightgray"
        width="100%"
      >
        
      
      </HStack>
      <HStack justify="center" marginTop={10}>
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
      <HStack justify="center" marginTop={10} marginBottom={40}>
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
      <HStack justify="center" marginBottom={300}>
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
      <Outlet />
    </Box>
  );
}