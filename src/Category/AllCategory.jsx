import { Box, Flex, Text } from "@chakra-ui/react"
import AppliancesIcon from "../IconLogo/AppliancesIcon"
import ElectronicsIcon from "../IconLogo/ElectronicsIcon"
import FitnessIcon from "../IconLogo/FitnessIcon"
import FurnitureIcon from "../IconLogo/FurnitureIcon"
import PackagesIcon from "../IconLogo/PackagesIcon"
import WFHIcons from "../IconLogo/WFHIcon"

function Category(){
    return (
        
        <Flex w="100%" bgColor="light" h="350px"  gap="1rem" justifyContent="space-evenly" padding="20px" >
    
    <Box marginTop="130px" _hover={{  boxShadow: '2xl' ,rounded:"md" ,bg:"white"   }} cursor="pointer" border="0.01px solid gray" w="11%" h="100px" borderRadius="7px" > 
    <AppliancesIcon /> 
    <Text  fontSize='sm'>Appliances</Text>
    </Box>

    <Box marginTop="130px" boxShadow='lg' _hover={{  boxShadow: '2xl' ,rounded:"md" ,bg:"white"   }} cursor="pointer"  border="1px solid gray" w="10%" h="100px" borderRadius="7px" ><ElectronicsIcon /><p>Electronics</p></Box>
    <Box marginTop="130px" boxShadow='lg' _hover={{  boxShadow: '2xl' ,rounded:"md" ,bg:"white"   }} cursor="pointer" border="1px solid gray"  w="10%" h="100px" borderRadius="7px" ><FitnessIcon /><p>Fitness</p></Box>
    <Box marginTop="130px" boxShadow='lg' _hover={{  boxShadow: '2xl' ,rounded:"md" ,bg:"white"   }} cursor="pointer" border="1px solid gray" w="10%" h="100px" borderRadius="7px" ><FurnitureIcon /><p>Furniture </p></Box>
    <Box marginTop="130px" boxShadow='lg' _hover={{  boxShadow: '2xl' ,rounded:"md" ,bg:"white"  }} cursor="pointer" border="1px solid gray" w="10%" h="100px" borderRadius="7px" ><PackagesIcon /><p>Package</p></Box>
    <Box marginTop="130px" boxShadow='lg' _hover={{  boxShadow: '2xl' ,rounded:"md" ,bg:"white"  }} cursor="pointer" border="1px solid gray" w="10%" h="100px" borderRadius="7px" ><WFHIcons /><p fontSize="2px">WFH Essentials</p> </Box>
</Flex>
    )
    
    
    }
    export default Category