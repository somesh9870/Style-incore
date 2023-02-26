import { Box, Card, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Community = ({img, text, linkText}) => {
  return (
    <>
      {" "}
      <Box>
        <Image
          src={img}
          alt="naruto"
          // objectFit="cover"
        />
        <Text fontWeight={700} mt="10px" fontSize={"xl"} color="#000000">
          {text}
        </Text>
        <Link as="b" textDecoration={"underline"} mb={"10px"} color="#000000">
          {linkText}
        </Link>
      </Box>
    </>
  );
};

export default Community;
