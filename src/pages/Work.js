import React from "react";
import { Image, Stack, Box } from "@chakra-ui/react";
import klausur from "../assets/klausur.svg";
import Schmuck from "../assets/Schmuck.svg";

const Work = () => {
  return (
    <Stack direction="row">
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

      <Image
        alignSelf="absolute"
        backgroundColor="pink.200"
        bg="linear-gradient(#ffc0eb, #9198e5)"
        opacity={1}
        boxShadow="dark-lg"
        boxSize="300%"
        p="6px"
        w="40%"
        m="20px"
        position="relative"
        shadow="outline"
        src={Schmuck}
      />
    </Stack>
  );
};

export default Work;
