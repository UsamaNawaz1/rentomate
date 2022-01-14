import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  return (
    // <Card className="my-3 p-3 rounded">
    //   <a href={`/property/${property._id}`}>
    //     <Card.Img src={property.image} style={{ display: "flex" }} />
    //   </a>

    //   <Card.Body>
    //     <a href={`/property/${property._id}`}>
    //       <Card.Title as="div">
    //         <strong>{property.address}</strong>
    //       </Card.Title>
    //     </a>
    //     <Card.Text as="h3">${property.rent}</Card.Text>
    //   </Card.Body>
    // </Card>
    // <Card className="mb-5 rounded">
    //   <a href={`/property/${property._id}`}>
    //     <Card.Img variant="top" src={property.image} />
    //   </a>
    //   <Card.Body>
    //     <Card.Title>{property.address}</Card.Title>
    //     <Card.Text>
    //       {property.city}, {property.state}
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    // Sample card from Airbnb

    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="6">
      <Link to={`/property/${property.id}`}>
        <Image src={property.image} alt="image" />
      </Link>

      <Box p="6" style={{ backgroundColor: "white" }}>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="blue">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.address}
        </Box>

        <Box style={{ color: "#0290f1", fontWeight: "700" }}>
          {property.rent}
          <Box as="span" color="#0290f1" fontSize="sm">
            / month
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "#fdcc0d" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="black" fontSize="sm">
            {property.ratingCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Property;
