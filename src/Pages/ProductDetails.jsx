import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

const ProductDetails = () => {
  let params = useParams();
  const [data, setData] = useState({});

  let endPoint = JSON.parse(localStorage.getItem("endPoint"));

  const fetchProductDetails = async (id) => {
    let res = await axios.get(
      `https://mock-server-dqmr.onrender.com/${endPoint}/${id}`
    );

    setData(res.data);
  };

  useEffect(() => {
    fetchProductDetails(params.user_id);
  }, []);

  console.log(data);

  return (
    <>
      <Heading
        py={10}
        px={28}
        textAlign={"center"}
        fontWeight={600}
        size={"lg"}
      >
        Olive Brown Extra Slim Sateen Stretch Suit
      </Heading>
      <Flex>
        {/* <Box>
            <Image
              src=""
              alt={"error"}
            />
          </Box> */}
        <Box margin={"auto"}>
          <Container maxW={"7xl"}>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 1, md: 4 }}
            >
              <Flex display={["none", "none", "none", "block"]}>
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={data.img}
                  objectFit={"contain"}
                  // align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Flex>
              <Stack spacing={{ base: 6, md: 10 }}>
                <Stack
                  p={2}
                  boxShadow={"xl"}
                  spacing={{ base: 4, sm: 6 }}
                  direction={"column"}
                >
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={useColorModeValue("yellow.500", "yellow.300")}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Product Details
                    </Text>
                    <Flex>
                      <Image
                        src={data.img}
                        alt="naruto"
                        objectFit="contain"
                        height={"200px"}
                        // mb={3}
                        px={4}
                      />
                      <List ml={3} textAlign={"start"} spacing={2}>
                        <ListItem>{data.title}</ListItem>
                        <ListItem>
                          {" "}
                          <Text textDecoration={"line-through"} as={"span"}>
                            ₹{data.markedPrice}
                          </Text>{" "}
                          ₹{data.price} {data.save}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"}>NEW</Text>{" "}
                        </ListItem>
                        <ListItem>
                          <Text as={"span"} fontWeight={"bold"}>
                            Brand:
                          </Text>{" "}
                          {data.brand}
                        </ListItem>
                      </List>
                    </Flex>
                  </Box>
                </Stack>

                <RouterLink>
                  <Button
                    rounded={"none"}
                    w={"full"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    bg={useColorModeValue("gray.900", "gray.50")}
                    color={useColorModeValue("white", "gray.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Add to cart
                  </Button>
                </RouterLink>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <MdLocalShipping />
                  <Text>2-3 business days delivery</Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default ProductDetails;
