import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box p={8}>
       <Spinner color='red.500' size={"xl"} />
    </Box>
  )
}

export default Loader