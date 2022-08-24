import { Box,Button,Flex, Input } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import { IconButton } from '@chakra-ui/react'
function Navbar(){

    return(

<Box>
    <Flex gap="1rem"
    p="1rem"
    borderBottom="1px"
    backgroundColor="-moz-initial">
        <Button>Rm</Button>
        <Input  placeholder="search"/>
        <IconButton aria-label='Search database' color="red" icon={<SearchIcon />} />
        <Button variant="ghost">Cart</Button>
        <Button variant="outline">Login</Button>

    </Flex>
</Box>

    )



    

}

export default Navbar