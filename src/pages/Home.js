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
    <Stack flexDirection="row" alignContent="stretch" p={20}>
      <Circle
        flexDirection="row"
        position="fixed"
        bg="#ff009c"
        opacity="0.02"
        onDurationChange={8}
        w="300px"
        h="300px"
        alignSelf="stretch"
        boxShadow="7.8px 15.7px 15.7px hsl(0deg 0% 0% / 0.26)"
      />
      <Flex display="flex" alignContent="stretch" flexDirection="row">
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          minWidth="50%"
          alignContent="stretch"
          textAlign="-moz-initial"
        >
          <Box mt={isNotSmallerScreen ? "0" : 16}>
            <Text fontSize="6xl" f fontWeight="hairline">
              Hi,
              <br />
            </Text>
            <Text fontSize="5xl" f fontWeight="hairline">
              I'm
              <br />
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
              p="4"
              fontSize="2xl"
              fontWeight="hairline"
            >
              I'm a future Mediadesigner / Webdesigner
              <span>
                <br />
                I'm a Free Spirit, interested into Art, Music, learning new
                skills and Technology.
              </span>
            </Text>
          </Box>

          <Image
            alignSelf="self-start"
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
            flexDirection="column"
            position="relative"
            bg="#a26dff"
            opacity="0.04"
            onDurationChange="0.8s"
            w="300px"
            h="300px"
            alignSelf="row"
            boxShadow="7.8px 15.7px 15.7px  hsl(262deg 94% 79%)"
          />
          <Lottie
            animationData={spinner}
            objectFit="cover"
            onDurationChange={8}
            boxShadow="xl"
            opacity="0.5"
            size="xl"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
            borderRadius="full"
            backgroundColor="white.200"
            alignContent="stretch"
            justifyContent="space-between"
          />
        </Flex>
      </Flex>
    </Stack>
  );
}
export default Home;
