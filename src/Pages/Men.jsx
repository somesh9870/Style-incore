import {
    Card,
    Flex,
    Grid,
    Heading,
    Image,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import ShopCategory from "../Components/ShopCategory";
  import MainVideo from "../ProjectData/MainVideo.mp4";
  import Community from "../Components/Community";
  import ShopEasyWay from "../Components/ShopEasyWay";
  
  const Men = () => {
    const data = [
      {
        name: "JEANS",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/05-may/0424-digital-23766-hp-na/dt/0424-hp-dt_01_06.jpg",
        redName: "jeans",
      },
      {
        name: "SUITS",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/cat-2-dt.jpg",
        redName: "suits",
      },
      {
        name: "SHIRTS",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/cat-3-dt.jpg",
        redName: "men",
      },
      {
        name: "SWEATERS",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/cat-4-dt.jpg",
        redName: "sweaters",
      },
      {
        name: "OUTERWEAR",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/lwl-5-dt.jpg",
        redName: "outwear",
      },
      {
        name: "POLOS",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/lwl-6-dt.jpg",
        redName: "polos",
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
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/com-hub-3-dt.jpg",
        text: "Dream Big With Tan France",
        linkText: "SUPPORT OUR CAUSE",
      },
      {
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20768-wlp/-dt/0102-wlp_39-15.jpg",
        text: "EXPRESSINSIDER",
        linkText: "JOIN FOR FREE",
      },
    ];
  
    const ExpressData = [
      {
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/icon-1-dt.jpg",
        name: "1MX Shirts",
        shop: "SHOP NOW",
      },
      {
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/icon-2-dt.jpg",
        name: "Modern Tech Suits",
        shop: "SHOP NOW",
      },
      {
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/icon-3-dt.jpg",
        name: "Merino Sweaters",
        shop: "SHOP NOW",
      },
    ];
  
    const labelsData = [
      {
        name: "DESIGNER SHOP",
        img: "https://www.express.com/content/dam/express/2022/projects/web/home-landing/11-november/1024-digital-19636-mlp/dt/m-lwl-1-dt.jpg",
      },
      {
        name: "UPWEST",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/lwl-2-dt.jpg",
      },
      {
        name: "PKG CARRY GOODS",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/lwl-3-dt.jpg",
      },
      {
        name: "FOURLAPS",
        img: "https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/lwl-4-dt.jpg",
      },
    ];
  
    return (
      <>
        <video loop autoplay="true" preload="auto">
          <source src={MainVideo} type="video/mp4" />
        </video>
  
        {/* Shop By Category */}
        <Grid mt={14}>
          <Heading as={"h4"} size={"lg"}>
            SHOP BY CATEGORY
          </Heading>
          <SimpleGrid p={10} columns={[1,3,3,6]} gap={2}>
            {data.map((el) => (
              <ShopCategory img={el.img} name={el.name} redName={el.redName} />
            ))}
          </SimpleGrid>
        </Grid>
  
        {/* 2 CARDS */}
        <SimpleGrid columns={[1,1,2,2]} p={10} gap={6} width="70%" m={"auto"}>
          <Card color="#000000">
            <Image
              src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/jeans-dt.jpg"
              alt="naruto"
              objectFit="cover"
            />
            <Text fontSize={24} lineHeight={2} fontWeight={750} mt={3}>
              New Colorful Jeans
            </Text>
            <Text as="u" fontWeight={650} letterSpacing={2}>
              HUES FOR YOU
            </Text>
          </Card>
          <Card color="#000000">
            <Image
              src="https://www.express.com/content/dam/express/2023/projects/web/home-landing/01-january/1227-digital-20770-mlp/-dt/sweater-polo-dt.jpg"
              alt="naruto"
              objectFit="cover"
            />
            <Text fontSize={24} lineHeight={2} fontWeight={750} mt={3}>
              Top-Priority Polos
            </Text>
            <Text as="u" fontWeight={650} letterSpacing={2}>
              CHECK OFF YOUR LIST
            </Text>
          </Card>
        </SimpleGrid>
  
        {/* Express Icons */}
        <Grid mt={10} p={10} bg={"#f5f5f5"} color="#000000">
          <Heading as={"h4"} size={"lg"}>
            EXPRESS ICONS
          </Heading>
  
          <SimpleGrid p={12} columns={[1, 1, 3, 3]} gap={8} color="#000000">
            {ExpressData.map((el) => (
              <Community img={el.img} text={el.name} linkText={el.shop} />
            ))}
          </SimpleGrid>
        </Grid>
  
        {/* Shop The Easy Way */}
        <ShopEasyWay />
  
        {/* OUR COMMUNITY */}
        <Grid mt={"20px"} p={10} bg={"#f5f5f5"} color="#000000">
          <Heading as={"h4"} size={"lg"}>
            OUR COMMUNITY
          </Heading>
  
          <SimpleGrid p={8} columns={[1, 1, 4, 4]} gap={8}>
            {communityData.map((el) => (
              <Community img={el.img} text={el.text} linkText={el.linkText} />
            ))}
          </SimpleGrid>
        </Grid>
  
        {/* LABELS WE LOVE */}
        <Grid p={12}>
          <Heading as={"h4"} size={"lg"}>
            LABELS WE LOVE
          </Heading>
          <SimpleGrid p={10} columns={[1, 1, 2, 4]} gap={6}>
            {labelsData.map((el) => (
              <ShopCategory img={el.img} name={el.name} />
            ))}
          </SimpleGrid>
        </Grid>
  
        <Grid textAlign={'start'} p={10}>
          <Heading size={'md'}>Men's Clothing - Shop Suits, Jeans, Shirts & More</Heading>
          <br />
          <Text fontSize={'15px'}>
            Shop for men's clothing at Express. For an amazing men's clothing
            store or men's clothing online, Express is the place to be. Need to
            update your wardrobe? Shop for the best men's clothes at Express!
            Whether you are shopping online or in-store, Express has all the
            fashion essentials for any man's closet
          </Text>
          <br />
          <Text fontWeight={600}>Where to find men's clothes?</Text>
          <Text>
            Find new men's suits, dress pants, dress shirts, chinos, jeans and
            more all in one place at Express. Whether you need a new work wardrobe
            for your job, some casual pieces like shorts, joggers and t-shirts for
            the weekend, or everyday essentials like undershirts, boxers and
            socks, we've got you covered. Shop clothing for men online or in-store
            today.
          </Text>
          <br />
          <Text fontWeight={600}>What's new in men's fashion?</Text>
          <Text>
            Looking for men's clothing trends? Make sure you're shopping the most
            recent new arrivals at Express. We're loving stretch jeans,
            performance dress shirts with moisture wicking technology, graphic
            tees, floral shirts and bomber jackets right now. Check out our men's
            fashion blog for more stories on the best clothing trends.
          </Text>
        </Grid>
      </>
    );
  };
  
  export default Men;
  