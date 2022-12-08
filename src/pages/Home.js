import {
  Circle,
  VStack,
  useColorMode,
  useMediaQuery,
  Flex,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import xsxsa from "../assets/xsxsa.png";
import Lottie from "lottie-react";
import spinner from "./../assets/spinner.json";

function Home() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <VStack
      flexDirection="row-reverse"
      display="flex"
      alignItems="flex-start"
      justifyItems="stretch"
      m="10px"
      p="10px"
    >
      <Circle
        position="fixed"
        bg="#ff009c"
        opacity="0.02"
        onDurationChange={8}
        w="30px"
        h="30px"
        alignSelf="stretch"
        boxShadow="7.8px 15.7px 15.7px hsl(0deg 0% 0% / 0.26)"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        minWidth="100c"
        m="1px"
        alignContent="stretch"
        textAlign="-moz-initial"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16}>
          <Text fontSize="6xl" fontWeight="hairline">
            <span> Hi,</span>
          </Text>
          <Text fontSize="5xl" fontWeight="hairline">
            <span> I'm</span>
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="hairline"
            bgGradient="linear(to-r, purple.400, cyan.500, blue.600)"
            bgClip="text"
          >
            Matea
          </Text>
          <Text
            color={isDark ? "pink.200" : "purple.500"}
            p="4px"
            fontSize="2xl"
            fontWeight="hairline"
          >
            I'm a future Mediadesigner / Webdesigner
            <span>
              <br />
              I'm a Free Spirit, exploring Art, Music, and Technology.
            </span>
          </Text>
        </Box>

        <Image
          alignSelf="end"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          bg="#a26dff"
          boxSize="350px"
          src={xsxsa}
        />
        <Circle
          flexDirection="flow"
          position="absolute"
          bg="red.800"
          opacity="0.04"
          onDurationChange="0.8s"
          w={10}
          h={10}
          p="40px"
          boxShadow="7.8px 15.7px 15.7px  hsl(262deg 94% 79%)"
        />
        <Lottie
          animationData={spinner}
          p="10px"
          m="2px"
          objectFit="cover"
          onDurationChange={8}
          boxShadow="lg"
          opacity="0.5"
          size="lg"
          direction="column"
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
          borderRadius="full"
          backgroundColor="white.300"
          alignContent="end"
          justifyContent="space-evenly"
        />
      </Flex>
    </VStack>
  );
}
export default Home;
