import React from "react";
import { Image, Stack, Box, VStack, useMediaQuery } from "@chakra-ui/react";
import klausur from "../assets/klausur.svg";
import Schmuck from "../assets/Schmuck.svg";
//import { Grid, GridItem } from "@chakra-ui/react";

const Art = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Stack direction={isNotSmallerScreen ? "row" : "column"}>
      <Image
        boxSize="300%"
        w="600px"
        m="50px"
        opacity="revert-layer"
        color="whiteAlpha.900"
        boxShadow="1px 1px 2px red, 0 0 25px pink, 0 0 5px darkblue"
        objectFit="cover"
        src={klausur}
      />
      <Box
        position="absolute"
        bg="#ff009c"
        opacity="0.07"
        w="300px"
        h="300px"
        alignSelf="flex-end"
        boxShadow="outline"
        p="6"
        rounded="md"
      />

      {/* <Image
        backgroundColor="pink.200"
        bg="linear-gradient(#ffc0eb, #9198e5)"
        opacity={1}
        boxShadow="dark-lg"
        w="40%"
        m="20px"
        pl="2"
        pr="2"
        pt="2"
        position="relative"
        shadow="outline"
        src={Schmuck}
      /> */}
      <VStack>
        <Box p="20px" m="50px">
          <Image
            objectFit="cover"
            backgroundColor="pink.200"
            bg="linear-gradient(#ffc0eb, #9198e5)"
            opacity={1}
            boxShadow="red"
            w="300px"
            h="10o%"
            m="12"
            pl="2"
            pr="2"
            pt="2"
            position="relative"
            shadow="outline"
            src={Schmuck}
          />
        </Box>
      </VStack>
    </Stack>
  );
};

export default Art;