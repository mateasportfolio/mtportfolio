import { Box, Text, Image, VStack } from "@chakra-ui/react";
import React from "react";

import { Link } from "@chakra-ui/react";

import Savings from "../assets/calculator.svg";

export default function Project() {
  return (
    <Box>
      <Text as="b" fontSize="4xl" fontWeight="hairline" color="pink.400">
        {" "}
        Made with React.js
      </Text>
      <VStack direction="row">
        <Box p="20px" m="50px">
          <Image
            dropShadow="inner"
            boxSize="xl"
            objectFit="cover"
            backgroundColor="pink.200"
            bg="linear-gradient(#ffc0eb, #9198e5)"
            opacity={10}
            boxShadow="red"
            width="500px"
            h="100%"
            m="12px"
            pl="2px"
            pr="2px"
            pt="2px"
            position="relative"
            shadow="outline"
            src={Savings}
          />
          <Link
            fontSize="2xl"
            fontWeight="hairline"
            color="pink.400"
            href="https://endearing-blini-1b0650.netlify.app"
            m="30px"
            p="40px"
          >
            Savings calculator
          </Link>
        </Box>
      </VStack>
    </Box>
  );
}
