import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Image } from '@chakra-ui/react'

function ProductOne() {
    const property = {
      imageUrl: 'data:image/jpeg;base64,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',
      imageAlt: 'TV',
      
      title: '1 Telivision',
      formattedPrice: '₹ 600/Month',
      reviewCount: 30,
      rating: 4.2,
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
  export default  ProductOne