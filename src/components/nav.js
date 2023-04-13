import { Flex, Box, Button, Text,Spacer
} from "@chakra-ui/react";
import {useState} from 'react'


function Navbar() {
    const [showMenu,setShowMenu] = useState(false); 
    const [toggleMenu,settoggleMenu] = useState(false); 


  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#fff"
      color="BlackAlpha 300"
    >
      <Flex align="center" mr={5}>
        <Text fontSize="lg" fontWeight="bold">
          <h4>Build 
                Stream</h4>
        </Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} >
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path
            d="M0,3h20v2H0V3z M0,9h20v2H0V9z M0,15h20v2H0V15z"
          />
        </svg>
      </Box>
        <Spacer />
      <Box  
        display={{ base: showMenu ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        
      >
        <Button  variant="ghost" mr={2}>Home</Button>
        <Button variant="ghost" mr={2}>About</Button>
        <Button variant="ghost" mr={2}>Services</Button>
        <Button variant="ghost">Contact</Button>
        <Spacer />
        <Button colorScheme={"yellow"}  mr={2}>Hire workers</Button>
        <Button  mr={2}>Find work</Button>
      </Box>
 
      
    </Flex>
  );
}
export default Navbar;