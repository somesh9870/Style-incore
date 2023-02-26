import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ShopCategory from "../Components/ShopCategory";
import Community from "../Components/Community";
import ShopEasyWay from "../Components/ShopEasyWay";
import MainVideo from "../ProjectData/MainVideo.mp4";

const basicBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  boxSize: "330px",
  color: "white",
  textShadow: "0 0 20px black",
  fontWeight: "bold",
  fontSize: "20px",
  // px: 4,
};

const Home = () => {
  const categoryData = [
    {
      name: "WOMEN'S JEANS",
      img: "https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03.jpg",
      redName: "jeans",
    },
    {
      name: "MEN'S SUITS",
      img: "https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-02.jpg",
      redName: "suits",
    },
    {
      name: "WOMEN'S TOPS",
      img: "https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-03.jpg",
      redName: "women",
    },
    {
      name: "MEN'S SHIRTS",
      img: "https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-04.jpg",
      redName: "men",
    },
    {
      name: "WOMEN'S DRESSES",
      img: "https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-05.jpg",
      redName: "women",
    },
    {
      name: "MEN'S JEANS",
      img: "https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_03-06.jpg",
      redName: "jeans",
    },
  ];

  const communityData = [
    {
      img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20768-wlp/-dt/0102-wlp_39.jpg",
      text: "Style. Inspire. Earn.",
      linkText: " BECOME A STYLE EDITOR",
    },
    {
      img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20768-wlp/-dt/0102-wlp_39-13.jpg",
      text: "Styling Community Inspo",
      linkText: "SHOP THE LOOKS",
    },
    {
      img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/0120-digital-22726-community-section-update/tan-dt.jpg",
      text: "Dream Big With Tan France",
      linkText: "SUPPORT OUR CAUSE",
    },
    {
      img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20768-wlp/-dt/0102-wlp_39-15.jpg",
      text: "EXPRESSINSIDER",
      linkText: "JOIN FOR FREE",
    },
  ];
  return (
    <>
      <video loop autoPlay="true" preload="auto">
        <source src={MainVideo} type="video/mp4" />
      </video>

      <Flex
        justify={"space-around"}
        fontSize="4xl"
        as="b"
        mt={"12px"}
        p={6}
        bg="#18181c"
        color="white"
      >
        <Stack lineHeight={"32px"} p={4}>
          <Text fontSize="3xl" fontWeight={500}>
            EXTRA 40% OFF FOR
          </Text>
          <Text
            fontSize={{ base: "none", md: "flex" }}
            /*fontSize="5xl"*/ fontWeight={700}
          >
            Up to 60% Off Clearance
          </Text>
        </Stack>
        <Stack
          p={7}
          fontSize={{ base: "24px", md: "40px", lg: "56px" }}
          /*fontSize="xl"*/ lineHeight={"20px"}
        >
          <Text fontSize={"sm"}>
            Online & in most stores. <u>Exclusions & Details</u>
          </Text>
          <Flex justify={"space-evenly"}>
            <RouterLink to={"/men"}>
              <Text
                borderBottom={"1px solid white"}
                fontWeight={400}
                fontSize="16px"
                p={1}
              >
                MEN
              </Text>
            </RouterLink>
            <RouterLink to={"/women"}>
              <Text
                borderBottom={"1px solid white"}
                fontWeight={400}
                fontSize="16px"
                p={1}
              >
                WOMEN
              </Text>
            </RouterLink>
          </Flex>
        </Stack>
      </Flex>

      {/* shop by category */}
      <SimpleGrid
        alignItems={"center"}
        columns={[2, 2, 2, 6]}
        borderBottom={"2px solid gray"}
        py={70}
        px={6}
        gap={6}
      >
        {categoryData.map((el) => (
          <ShopCategory img={el.img} name={el.name} redName={el.redName} />
        ))}
      </SimpleGrid>

      {/*  EXPRESS ICONS */}
      <Grid py={16}>
        <Heading as={"h4"} size={"lg"}>
          EXPRESS ICONS
        </Heading>
        <SimpleGrid
          columns={[1, 1, 2, 3]}
          mt={6}
          p={6}
          gap={8}
          justify="{center}"
          // width="100%"
          margin={"auto"}
        >
          <Box
            sx={basicBoxStyles}
            filter="auto"
            background="url(https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/0102-new-dt_03.jpg) center/cover no-repeat"
          >
            <Text fontSize={"sm"}>
              Portofino Shirts <br /> <u>SHOP NOW</u>
            </Text>
          </Box>

          <Box
            sx={basicBoxStyles}
            filter="auto"
            background="url(https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/0102-new-dt_03-02.jpg) center/cover no-repeat"
          >
            <Text fontSize={"sm"}>
              Body Contour <br /> <u>SHOP NOW</u>
            </Text>
          </Box>

          <Box
            sx={basicBoxStyles}
            filter="auto"
            background="url(https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/0102-new-dt_03-03.jpg) center/cover no-repeat"
          >
            <Text fontSize={"sm"}>
              The Editor Pant <br /> <u>SHOP NOW</u>
            </Text>
          </Box>
          <Box
            sx={basicBoxStyles}
            filter="auto"
            background="url(https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/0102-new-dt_03-04.jpg) center/cover no-repeat"
          >
            <Text fontSize={"sm"}>
              1MX Shirts <br /> <u>SHOP NOW</u>
            </Text>
          </Box>

          <Box
            sx={basicBoxStyles}
            filter="auto"
            background="url(https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/0102-new-dt_03-05.jpg) center/cover no-repeat"
          >
            <Text fontSize={"sm"}>
              Modern Tech <br /> <u>SHOP NOW</u>
            </Text>
          </Box>

          <Box
            sx={basicBoxStyles}
            x
            filter="auto"
            background="url(https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/0106-digital-22985-hp/-dt/sweaters-dt.jpg) center/cover no-repeat "
          >
            <Text fontSize={"sm"}>
              Merino Sweaters <br /> <u>SHOP NOW</u>
            </Text>
          </Box>
        </SimpleGrid>
      </Grid>

      {/* Community */}
      <Grid mt={6} p={14} bg={"#f5f5f5"}>
        <Heading as={"h4"} size={"lg"}>
          OUR COMMUNITY
        </Heading>

        <SimpleGrid p={8} columns={[1, 1, 4, 4]} gap={8}>
          {communityData.map((el) => (
            <Community img={el.img} text={el.text} linkText={el.linkText} />
          ))}
        </SimpleGrid>
      </Grid>

      <ShopEasyWay />

      <SimpleGrid
        p={8}
        columns={[1, 1, 3, 6]}
        gap={8}
        mt={10}
        mb={10}
        alignItems={"center"}
        justifyItems="center"
      >
        <Box>
          <Heading mt={10} color="#000000" size={"2xl"} mb={6}>
            Labels We <br /> Love
          </Heading>
          <Button borderRadius={"0px"} border="2px solid black" py={6} px={12}>
            SEE MORE
          </Button>
        </Box>
        <Box>
          <Image
            src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_26.jpg"
            alt="naruto"
            objectFit="cover"
            mb={4}
          />
          <Heading as={"u"} size="sm">
            PRE-OWNED LUXURY
          </Heading>
        </Box>

        <Box>
          <Image
            src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_26-08.jpg"
            alt="naruto"
            objectFit="cover"
            mb={4}
          />
          <u>
            <b>ACTIVEWEAR</b>
          </u>
        </Box>
        <Box>
          <Image
            src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/10-october/1003-digital-18748-hp/-dt/lwl-2-dt.jpg"
            alt="naruto"
            objectFit="cover"
            mb={4}
          />
          <u>
            <b>LEONISA</b>
          </u>
        </Box>
        <Box>
          <Image
            src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/11-november/20490-hp-new-arrivals/-dt/1118-hp-dt_22.jpg"
            alt="naruto"
            objectFit="cover"
            mb={4}
          />
          <u>
            <b>THOUSAND FELL</b>
          </u>
        </Box>
        <Box>
          <Image
            src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1228-digital-20769-hp/-dt/1228-DIGITAL-20769-hp_26-11.jpg"
            alt="naruto"
            objectFit="cover"
            mb={4}
          />
          <u>
            <b>FOURLAPS</b>
          </u>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Home;
