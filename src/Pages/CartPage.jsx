import { Heading, Box, Flex, Text, Center, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { EmptyCart } from "../Components/EmptyCart";

function CartPage() {
  const [items, setItems] = useState([]);

  return (
    <Box>
      <Flex border={"1px solid gray"} justify={"space-between"} py={5} px={10}>
        <Heading>My Bag</Heading>
        <Text>
          Check Pickup Availability
          <Text as="span" ml={3} textDecoration="underline">
            Select Your Store
          </Text>
        </Text>
      </Flex>

      <Center p={3} border={"1px solid gray"}>
        {" "}
        <Text as={"h3"} fontWeight={"700"}>
          IN BAG
        </Text>{" "}
      </Center>
{/* 
      <Box>
        <Flex>
          <Image
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Box>
            <Text>Extra Slim Pinstripe Wool-Blend Modern Tech Suit Jacket</Text>
            <Text>Size: 42</Text>
            <Text>Color: Metallic Black</Text>
            <Text>Price: Rs. 298</Text>
          </Box>
        </Flex>
      </Box> */}

      <EmptyCart />
    </Box>
  );
}

export default CartPage;
