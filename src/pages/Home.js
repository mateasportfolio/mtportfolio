import {
  Circle,
  Stack,
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
    <Stack flexDirection="column" alignContent="stretch">
      <Circle
        position="fixed"
        bg="#ff009c"
        opacity="0.05"
        onDurationChange="5s"
        w="300px"
        h="300px"
        alignSelf="baseline"
        boxShadow="7.8px 15.7px 15.7px hsl(0deg 0% 0% / 0.26)"
      />
      <Flex display="flex" alignContent="stretch" flexWrap="nowrap">
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          minWidth="50%"
          align="flex-start"
          alignContent="stretch"
        >
          <Box mt={isNotSmallerScreen ? "0" : 16} float="left">
            <Text fontSize="5xl" f fontWeight="hairline">
              Hi, I am
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
              color={isDark ? "pink.200" : "pink.500"}
              p="4"
              fontSize="2xl"
              fontWeight="hairline"
            >
              {" "}
              I'm a future Mediadesigner / Webdesigner
              <br />
              <span>
                Im a Free Spirit, interested into Art, Music, learning new
                skills and Technology.
              </span>
            </Text>{" "}
          </Box>

          <Image
            alignSelf="inherit"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="350px"
            src={xsxsa}
          />

          <Lottie
            p="0px"
            m="auto"
            animationData={spinner}
            objectFit="cover"
            onDurationChange="6s"
            boxShadow="xl"
            opacity="0.5"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
            borderRadius="full"
            backgroundColor="white.100"
            alignContent="stretch"
          />
        </Flex>
      </Flex>
    </Stack>
  );
}
export default Home;
