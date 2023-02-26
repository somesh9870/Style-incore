import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";

function CardItem({ img, brand, title, rating, reviews, price, markedPrice }) {
  const property = {
    imageUrl: img,
    imageAlt: title,
    title: title,
    formattedPrice: price,
    reviewCount: reviews,
    rating: rating,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box
        objectFit={"contain"}
        p={2}
        display={"flex"}
        justifyContent={"center"}
        bg="#f1f1f1"
      >
        <Image bg="#f1f1f1" src={property.imageUrl} alt={property.imageAlt} />
      </Box>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full"  colorScheme="teal">
            New
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box textAlign={"start"} px={2}>
          ₹{property.formattedPrice}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardItem;
