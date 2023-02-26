import {
  Card,
  SimpleGrid,
  Stack,
  Text,
  Box,
  ListItem,
  List,
  Checkbox,
  Flex,
  Select,
  TagLabel,
  HStack,
  Heading,
  Container,
  Grid,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ShopCategory from "../Components/ShopCategory";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import CardItem from "../Components/CardItem";
import axios from "axios";
import NotFound from "../Components/NotFound";
import Loader from "../Components/Loader";
import { useSearchParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const handleSearchParam = (val = 1) => {
  let pageNumber = Number(val);
  if (typeof pageNumber !== "number") {
    pageNumber = 1;
  }
  if (pageNumber <= 0) {
    pageNumber = 1;
  }
  if (!pageNumber) {
    pageNumber = 1;
  }
  return pageNumber;
};

const Suits = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("FULL SUITS");
  const [searchParam, setSearchParam] = useSearchParams();
  const init = handleSearchParam(searchParam.get("page"));
  const [page, setPage] = useState(init);
  const [total, setTotal] = useState(0);
  //  dkjhkljfdsh

  const fetchData = async (endPoint) => {
    localStorage.setItem("endPoint", JSON.stringify(endPoint));
    try {
      endPoint === "dressPants"
        ? setName("DRESS PANTS")
        : endPoint === "blazers"
        ? setName("BLAZERS")
        : setName("FULL SUITS");
      setLoading(true);
      let res = await axios.get(
        `https://mock-server-dqmr.onrender.com/${endPoint}?_limit=12&_sort=price&_order=desc`
      );
      console.log(res.data);
      setData(res.data);
      setTotal(res.headers["x-total-count"]);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  const handleSorting = (e) => {
    console.log(e.target.value);
    fetchData();
  };

  useEffect(() => {
    fetchData("mens_data");
  }, []);

  useEffect(() => {}, []);

  const labelsData = [
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-dress-pants-2-dt.jpg",
    },
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-sets-3-dt.jpg",
    },
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-wedding-4-dt.jpg",
    },
    {
      name: " ",
      img: "https://www.express.com/content/dam/express/2023/projects/web/category-inline/january/12-27-floorset/20863-m-suits/m-suits-nav-blazers-5-dt.jpg",
    },
  ];

  return loading ? (
    <Loader />
  ) : err ? (
    <NotFound />
  ) : (
    <>
      <SimpleGrid columns={[1, 1, 2, 5]} gap={6}>
        <Card
          textAlign={"center"}
          justify={"center"}
          bg="#18181c"
          borderRadius={0}
        >
          <Text
            fontWeight={700}
            color="#ffffff"
            fontSize={"4xl"}
            letterSpacing={1}
          >
            Suit Shop
          </Text>
          <Text fontWeight={400} color="#ffffff" fontSize={"lg"}>
            Ready for every dress code.
          </Text>
        </Card>
        {labelsData.map((el) => (
          <ShopCategory img={el.img} name={el.name} />
        ))}
      </SimpleGrid>

      <Flex columns={[1, 1, 1, 2]}>
        <Box p={10} width="40%">
          {/* BREADCRUMB */}
          <Breadcrumb fontSize={12}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Men</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Text isTruncated>Suits & Suit Separates</Text>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Full Suits</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <br />

          <Flex px={4} justify={"space-between"}>
            <Text fontWeight={600}>BROWSE BY:</Text>
          </Flex>
          {/* CATEGORY */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        CATEGORY
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List textAlign={"start"} cursor={"pointer"}>
                      <ListItem>All Suits & Suit Separates</ListItem>
                      <ListItem fontWeight={700}>Full Suits</ListItem>
                      <ListItem onClick={() => fetchData("blazers")}>
                        Suit Jackets & Blazers
                      </ListItem>
                      <ListItem onClick={() => fetchData("dressPants")}>
                        Dress Pants
                      </ListItem>
                      <ListItem onClick={() => fetchData("mens_data")}>
                        Extra Slim Suit Separates
                      </ListItem>
                      <ListItem onClick={() => fetchData("blazers")}>
                        Slim Suit Separates
                      </ListItem>
                      <ListItem onClick={() => fetchData("classicSuit")}>
                        Classic Suit Separates
                      </ListItem>
                      <ListItem onClick={() => fetchData("mens_data")}>
                        Icons: Modern Tech Suits
                      </ListItem>
                      <ListItem onClick={() => fetchData("blazers")}>
                        Mix & Match Suits
                      </ListItem>
                      <ListItem>Wedding</ListItem>
                      <ListItem>Tuxedos</ListItem>
                    </List>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Flex px={4} justify={"space-between"}>
            <Text fontWeight={600}>FILTER BY:</Text>
            <Text>Items</Text>
          </Flex>

          {/* FIT */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        FIT
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack pl={6} mt={1} spacing={1}>
                      <Checkbox>Classic</Checkbox>
                      <Checkbox>Extra Slim</Checkbox>
                      <Checkbox>Slim</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          {/* PATTERN */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        PATTERN
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack pl={6} mt={1} spacing={1}>
                      <Checkbox>Pattern</Checkbox>
                      <Checkbox>Solid</Checkbox>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          {/* COLOR */}
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        COLOR
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <List textAlign={"start"}></List>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>

        <Box p={10} width="100%">
          <Flex
            p={2}
            borderBottom={"1px solid grey"}
            justify={"space-between"}
            alignItems="center"
            mb={6}
          >
            <Heading size={"lg"}>{`MEN'S ${name}`}</Heading>

            <Box display={"flex"}>
              <Text py={2} fontSize={"12px"}>
                Sort
              </Text>
              <Text p={2} fontSize={"12px"}>
                By:
              </Text>
              <Select
                placeholder="Relevance"
                onChange={(e) => handleSorting(e)}
              >
                <option value="lth">Price Low to High</option>
                <option value="htl">Price High to Low</option>
                <option value="arrivals">New Arrivals</option>
              </Select>
            </Box>
          </Flex>

          <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
            {data.map((el) => (
              <RouterLink to={`/suits/${el.id}`}>
                <CardItem
                  img={el.img}
                  brand={el.brand}
                  title={el.title}
                  rating={el.rating}
                  reviews={el.reviews}
                  price={el.price}
                  markedPrice={el.markedPrice}
                />
              </RouterLink>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default Suits;
