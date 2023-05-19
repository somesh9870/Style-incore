import {
  Box,
  Flex,
  Text,
  Image,
  Divider,
  Radio,
  Grid,
  Select,
} from "@chakra-ui/react";
import React from "react";

const CartItem = () => {
  return (
    <Box
      mt={10}
      p={3}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      bgColor={"white"}
    >
      <Flex p={1} gap={5}>
        {/* 1st box */}
        <Flex w={"55%"}>
          <Image
            w="40%"
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Box textAlign={"start"} p={5} w={"70%"} fontSize={"14px"}>
            <Text fontSize={"1rem"}>
              Extra Slim Pinstripe Wool-Blend Modern Tech Suit Jacket
            </Text>
            <Text>Size: 42</Text>
            <Text>Color: Metallic Black</Text>
            <Text>Price: Rs. 298.00</Text>
            <Text>Buy Jacket and Pant for Rs. 299!</Text>
            <Text>Price Reflects in Cart</Text>
          </Box>
        </Flex>

        {/* 2nd box */}
        <Box
          w="25%"
          border={"1px solid black"}
          textAlign={"start"}
          p={5}
        //   py={5}
          display={"grid"}
        >
          <Radio defaultChecked>Shipping</Radio>
          <Text fontSize={"14px"}>
            Arrives within 5-7 Buisness Days U.S. Standard
          </Text>
          <Text fontSize={"13px"} color={"gray"}>
            Change Shipping Method at checkout
          </Text>
        </Box>

        {/* 3rd box */}
        <Grid
          w="20%"
          textAlign={"start"}
          px={5}
          border={"1px solid gray"}
          fontSize={"14px"}
        >
          <Radio isDisabled>Pickup</Radio>
          <Text textDecoration={"underline"}>Select Your Store</Text>
          <Text>to view availability</Text>
        </Grid>
      </Flex>

      <Divider borderWidth="1px" borderColor={"gray.400"} my={10} />

      <Flex justify="space-between" px={5}>
        <Flex w={"30%"} gap={10} justify={"space-between"}>
          <Select placeholder="Qty: 1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">8</option>
            <option value="10">10</option>
          </Select>

          <Text mt={2} fontWeight={700} w={"80%"}>
            ₹ 20339.00
          </Text>
        </Flex>

        <Grid
          textAlign={"center"}
          alignContent={"center"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          Remove
        </Grid>
      </Flex>
    </Box>
  );
};

export default CartItem;
