import React from "react";
import { Timer } from "./components/Timer/Timer";
import { Header } from "./components/Header/Header";
import { ImageGrid } from "./components/ImageGrid/ImageGrid";
import { Box, Flex } from "@chakra-ui/react";
import Lottie from "lottie-react";
import breathe from "../../assets/meditation-timer/breathe.json";

const MeditationTimer = () => {
  return (
    <>
      <Flex
        bg="purple.100"
        flexDirection="row"
        alignItems="center"
        height={400}
        border="2px solid white"
        p="2px"
        bgGradient={[
          "linear(to-tr, pink.300, red.300)",
          "linear(to-t, yellow.200, violet.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        w="100%"
      >
        <Lottie animationData={breathe} duration="2" />
      </Flex>

      <Box
        w="100%"
        // eslint-disable-next-line
        h="calc(100vh)"
        padding={4}
        bg="blue.100"
        bgGradient={[
          "linear(to-tr, pink.300, red.300)",
          "linear(to-t, yellow.200, violet.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
      >
        <Header />
        <Timer />
        <ImageGrid />
      </Box>
    </>
  );
};

export default MeditationTimer;
