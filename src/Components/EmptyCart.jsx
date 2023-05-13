import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <Box textAlign={"center"} p={6}>
      <Text fontSize={"24px"} mb={6}>
        Your bag is empty
      </Text>
      <Button color={"white"} colorScheme="linkedin" bg={"black"} >
        <Link to={"/"}>GO SHOPPING</Link>
      </Button>
    </Box>
  );
};
