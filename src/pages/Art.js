import React from "react";
import { Image, Stack, Box, VStack, Text } from "@chakra-ui/react";
import klausur from "../assets/klausur.svg";
import Schmuck from "../assets/Schmuck.svg";

const Art = () => {
  return (
    <Stack maxW="1200px">
      <Image
        height="100%vh"
        m="30px"
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
      <Box>
        <Text as="b" fontSize="4xl" fontWeight="hairline" color="pink.400">
          {" "}
          Made with Photoshop and Illustrator
        </Text>
      </Box>

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
