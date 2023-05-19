import {
  Box,
  Flex,
  Text,
  Center,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EmptyCart } from "../Components/EmptyCart";
import CartItem from "../Components/CartItem";
import { CiDiscount1 } from "react-icons/ci";
import { BsFillShieldLockFill } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
// TbTruckReturn   TiMessages

function CartPage() {
  // const [items, setItems] = useState([]);

  return (
    <Box bgColor={"#f4f4f4"}>
      <Flex gap={10} w={"95%"} m={"auto"}>
        <Box w={"70%"} p={5}>
          {/* top header of bag */}
          <Flex
            bgColor={"#ffffff"}
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

          <Center bgColor={"#ffffff"} borderBottom={"1px dotted gray"} p={3}>
            {" "}
            <Text as={"h3"} fontWeight={"700"}>
              IN BAG
            </Text>{" "}
          </Center>

          <CartItem />
          <CartItem />
          {/* <CartItem /> */}
        </Box>

        {/* Summary */}
        <Box w={"30%"} py={5}>
          {/* promo code */}
          <Box bgColor={"#ffffff"} border={"1px dotted gray"} p={5}>
            <Flex gap={8}>
              <CiDiscount1 fontSize={34} />
              <Box textAlign={"start"}>
                <Text fontSize={"14px"} fontWeight={700}>
                  Have a Promo Code?
                </Text>
                <Text fontWeight={500} fontSize={"14px"}>
                  Only one code can be used at a time
                </Text>
              </Box>
            </Flex>
            <Flex mt={5} gap={3}>
              <Input
                borderBottom={"1px solid black"}
                placeholder="Enter Code"
              />
              <Button border={"1px solid black"}>APPLY</Button>
            </Flex>
          </Box>

          {/* Bag summary */}
          <Box mt={8} border={"1px dotted gray"} p={5}>
            <Text fontSize={"1.3rem"} fontWeight={600} textAlign={"start"}>
              Bag Summary
            </Text>
            <Box mt={10}>
              <Text fontSize={"12px"} fontWeight={800}>
                Free Standard Shipping on orders of ₹ 500 or more
              </Text>
            </Box>

            {/* pricing */}
            <Box mt={5}>
              <Flex justify={"space-between"} borderY={"1px dotted gray"}>
                <Text p={4} textAlign={"start"}>
                  Merchandise Subtotal
                </Text>
                <Text p={4}>₹ 299.00</Text>
              </Flex>

              <Flex justify={"space-between"}>
                <Text p={4} textAlign={"start"}>
                  Shipping
                </Text>
                <Text p={4}>FREE</Text>
              </Flex>

              <Flex justify={"space-between"} borderY={"1px dotted gray"}>
                <Text p={4} textAlign={"start"}>
                  Estimated Tax
                </Text>
                <Text p={4}>₹ 0.00</Text>
              </Flex>

              {/* total before tax */}
              <Flex
                fontSize={"1.3rem"}
                fontWeight={600}
                justify={"space-between"}
              >
                <Text p={4} textAlign={"start"}>
                  Total Before Tax
                </Text>
                <Text p={4}>₹ 299.00</Text>
              </Flex>
              <Text p={4} textAlign={"start"} fontSize={"14px"}>
                Total Savings: ₹ 147.00
              </Text>

              <Text p={4} textAlign={"start"} fontSize={"13px"}>
                4 payments of $74.75 or pay in 30 days with Klarna.
                Interest-free. Payment options
              </Text>

              {/* checkout buttons */}
              <Stack>
                <Button
                  p={7}
                  color={"white"}
                  _hover={{ bgColor: "#33363D", color: "white" }}
                  bgColor="black"
                >
                  CHECKOUT
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Things you should know */}
          <Box mt={8} bgColor={"#fff"} border={"1px dotted gray"} p={5}>
            <Text
              mb={5}
              fontSize={"1.3rem"}
              fontWeight={600}
              textAlign={"start"}
            >
              A Few Things You Should Know
            </Text>

            <Flex gap={5} p={4}>
              <BsFillShieldLockFill fontSize={30} />
              <Text textAlign={"start"} fontSize={"16px"}>
                All transactions are safe and secure.
              </Text>
            </Flex>

            <Flex gap={5} p={4}>
              <TbTruckReturn fontSize={40} />
              <Text textAlign={"start"} fontSize={"16px"}>
                Return in store or online for up to 60 days.
              </Text>
            </Flex>

            <Flex gap={5} p={4}>
              <TiMessages fontSize={40} />
              <Text textAlign={"start"} fontSize={"16px"}>
                Need help or styling advice? Chat with us 24/7 on style-incore
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>

      {/* <EmptyCart /> */}
    </Box>
  );
}

export default CartPage;
