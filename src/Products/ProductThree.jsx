import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Image } from '@chakra-ui/react'

function ProductThree() {
    const property = {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyW8E99DS8Wsdgrb_SE8FgI2VRSl_Y_Iy554wIBInZs1H3wZ9UVB9AwdZF25LxOLQwYNM&usqp=CAU',
      imageAlt: 'bed',
      
      title: '1 Product',
      formattedPrice: '₹ 250/Month',
      reviewCount: 30,
      rating: 4,
    }
  
    return (
      <Box h="350px" margin="10px" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image h="200px" src={property.imageUrl} alt={property.imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              <button style={{backgroundColor:"red" ,color:"white", padding:"4px",fontWeight:"bold",borderRadius:"5px" }}>Add  cart</button>
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
  
          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
        
            </Box>
          </Box>
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
  export default  ProductThree