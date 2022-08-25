import { Box,Button,Flex, Input,Spacer,Image, Select } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import { IconButton } from '@chakra-ui/react'
function Navbar(){

    return(

<Box marginRight="50px">
    <Flex gap="1rem"
    p="1rem"

    backgroundColor="-moz-initial">
        <Box marginLeft="105px" >
        <Image h="45px" w="180px"  src="https://image4.owler.com/logo/rentomojo_owler_20190720_055206_original.png"/></Box>
        <Select  placeholder="Kolkata" color="lightblack" size='md' border="none" w="120px"/>
        <Spacer />
        <Box border="1px solid gray" borderRadius="10px" padding="1px" >
            <Flex> 
        <Input w="600px"  borderLeft="none" focusBorderColor="none" focus="none" h="45px" borderRadius="5px" border="none" backgroundColor="" placeholder="search"/>
<IconButton aria-label='Search database'  border="none" backgroundColor="white"   h="45px"  icon={<SearchIcon />} />
        </Flex>
        </Box>
<Box marginTop="10px" marginRight="9px">
    <Flex gap="0rem">
        <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMzEzMTMxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjg0Ij4KICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMC40MiA2LjhsLTEuODE2IDUuMDc1YTEuNjIyIDEuNjIyIDAgMCAxLTEuNTM1IDEuMDU4SDYuOTU5bC0uMDUuMDA4LTEuMDA0LTYuMTM1LjAzMi0uMDA1SDIwLjQyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFMkVBRjAiIGQ9Ik0xNy41MjUgMjAuMjM0YTEuNDM4IDEuNDM4IDAgMSAxLTIuODc2IDAgMS40MzggMS40MzggMCAwIDEgMi44NzYgMHpNMTEuMDUyIDIwLjIzNGExLjQzOCAxLjQzOCAwIDEgMS0yLjg3NiAwIDEuNDM4IDEuNDM4IDAgMCAxIDIuODc2IDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMi43NzggNC4xNjdoMS4zNWMuNzYyIDAgMS40MDguNTU1IDEuNTIzIDEuMzA3bDEuNTEgOS44ODVhMS41NCAxLjU0IDAgMCAwIDEuNTIzIDEuMzA4aDkuNzU0Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="Cart"/>
     <Box marginTop="1px" textAlign="left">Cart</Box></Flex></Box>
        <Button variant="outline" color="white"  backgroundColor="rgb(220,50,38)" borderRadius="8px" >LOGIN/SIGNUP</Button>
        
    </Flex>
</Box>

    )
    



    

}

export default Navbar