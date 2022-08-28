import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Image } from '@chakra-ui/react'

function ProductFour() {
    const property = {
      imageUrl: 'data:image/jpeg;base64,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',
      imageAlt: 'A.C',
      
      title: '1 A.C.',
      formattedPrice: '₹ 2000/Month',
      reviewCount: 30,
      rating: 4.2,
    }
  
    return (
      <Box  h="350px" margin="10px" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
  export default  ProductFour