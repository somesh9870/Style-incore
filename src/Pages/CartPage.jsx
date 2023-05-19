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
import CartItem from "../Components/CartItem";

function CartPage() {
  const [items, setItems] = useState([]);

  return (
    <Box bgColor={"whitesmoke"}>
      <Flex gap={10} w={"95%"} m={"auto"}>
        <Box w={"70%"} p={5}>
          {/* top header of bag */}
          <Flex
            bgColor={"white"}
            justify={"space-between"}
            border={"1px dotted gray"}
            p={5}
          >
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

          <Center bgColor={"white"} borderBottom={"1px dotted gray"} p={3}>
            {" "}
            <Text as={"h3"} fontWeight={"700"}>
              IN BAG
            </Text>{" "}
          </Center>

          <CartItem />
          <CartItem />
          <CartItem />
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
