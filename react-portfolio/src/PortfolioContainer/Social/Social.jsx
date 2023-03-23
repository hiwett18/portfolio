import Icon from "@chakra-ui/icon"
import { HStack, Center } from "@chakra-ui/layout";
import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";


function Social(){
    return (
        
        <HStack justifyContent="center" color={"dark-gray"}>
            <a href="https://www.linkedin.com/in/hiwot-woldesemayat-4694981b/"><Icon as={FaLinkedin} boxSize="25" /></a> 
            <a href="https://github.com/hiwett18?tab=repositories"><Icon as={FaGithub} boxSize="25"/></a> 
            <a href="#"><Icon as={FaEnvelope} boxSize="25"/></a>
            <Center  _text={{color: "white"}} shadow={3}>@ 2023</Center>
        
        
        </HStack>
      
        
    )
}

export default Social 