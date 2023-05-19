import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  Divider,
  Radio,
  Grid,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EmptyCart } from "../Components/EmptyCart";

function CartPage() {
  const [items, setItems] = useState([]);

  return (
    <Box>
      <Flex gap={10} w={"95%"} m={"auto"}>
        <Box w={"70%"} border={"1px solid gray"} p={5}>
          {/* top header of bag */}
          <Flex justify={"space-between"} border={"1px solid black"} p={5}>
            <Text fontSize={"1.5rem"} fontWeight={600}>
              My Bag
            </Text>
            <Text fontWeight={500} fontSize={"0.9rem"}>
              Check Pickup Availability{" "}
              <Text
                as="span"
                ml={3}
                textDecoration="underline"
                fontWeight={200}
              >
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
              p={2}
              py={5}
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

          <Divider my={10} />

          <Flex justify="space-between" border="1px solid red">
            <Flex
              border="1px solid black"
              justify={"center"}
              alignContent={"center"}
            >
              <Select justify="space-between" placeholder="Qty: 1">
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

              <Text>₹ 209.00</Text>
            </Flex>
          </Flex>
        </Box>

        {/* Summary */}
        <Box w={"30%"} border={"1px solid gray"} p={5}>
          <Text>Have a Promo Code?</Text>
          <Text>Only one code can be used at a time</Text>
        </Box>
      </Flex>

      {/* 
      

      {/* <EmptyCart /> */}
    </Box>
  );
}

export default CartPage;

{
  /* <Select placeholder="Qty: 1">
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
</Select> */
}
