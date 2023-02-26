import React from "react";
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
const ShopEasyWay = () => {
  return (
    <>
      <Box boxShadow="md" rounded="md" bg="white" p={16} color="#000000">
        <Heading as={"h4"} size="lg">
          SHOP THE EASY WAY
        </Heading>
        <SimpleGrid p={[3,3,3,6]} columns={[2, 2, 4, 4]} gap={[5,5,5,10]} margin={"auto"}>
          <Box
            alignItems="center"
            color="#000000"
            borderRight={['none','none','none',"1px solid #000000"]}
            borderRadius={0}
          >
            <Image
              // boxSize="50px"
              objectFit="cover"
              height={'50px'}
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1215-digital-22583-hp-revert/bopis-dt.png"
              alt="Dan Abramov"
            />
            <Text fontWeight={700}>Store Pickup</Text>
            <Text fontWeight={300}>
              Buy online. Pick it up in store for free.
            </Text>
            <Link fontWeight={700}>LEARN MORE</Link>
          </Box>
          <Box
            alignItems="center"
            color="#000000"
            borderRight={['none','none','none',"1px solid #000000"]}
            borderRadius={0}
          >
            <Image
              // border={"1px solid black"}
              // boxSize="50px"
              height="50px"
              objectFit="cover"
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1215-digital-22583-hp-revert/klarna-dt.png"
              alt="Dan Abramov"
            />
            <Text fontWeight={700}>Buy Now. Pay Later.</Text>
            <Text fontWeight={300}>4 interest-free payments.</Text>
            <Link fontWeight={700}>LEARN MORE</Link>
          </Box>
          <Box
            alignItems="center"
            color="#000000"
            borderRight={['none','none','none',"1px solid #000000"]}
            borderRadius={0}
          >
            <Image
              height={'50px'}
              objectFit="cover"
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1215-digital-22583-hp-revert/cc-dt.png"
              alt="Dan Abramov"
            />
            <Text fontWeight={700}>Express Credit Card</Text>
            <Text fontWeight={300}>Open and use for exclusive perks.</Text>
            <Link fontWeight={700}>LEARN MORE</Link>
          </Box>
          <Box  alignItems="center" justifyContent={'center'} color="#000000" borderRadius={0}>
            <Image
              height={'50px'}
              objectFit="cover"
              src="https://www.express.com/content/dam/express/2022/projects/web/home-landing/12-december/1215-digital-22583-hp-revert/chat-dt.png"
              alt="Dan Abramov"
            />
            <Text fontWeight={700}>Free Style Advice</Text>
            <Text fontWeight={300}>Connect with digital stylist.</Text>
            <Link fontWeight={700}>CHAT NOW</Link>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ShopEasyWay;
