import {
  Circle,
  Stack,
  useColorMode,
  useMediaQuery,
  Flex,
  Box,
  Text,
  //Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import xsxsa from "../assets/xsxsa.png";

function Home() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 800px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="#ff009c"
        opacity="0.05"
        w="300px"
        h="300px"
        alignSelf="flex-end"
        boxShadow="7.8px 15.7px 15.7px hsl(0deg 0% 0% / 0.26)"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
        minWidth="50%"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="6xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, cyan.500, blue.600)"
            bgClip="text"
          >
            Matea
          </Text>
          <Text color={isDark ? "pink.200" : "pink.500"} p="4" fontSize="2xl">
            {" "}
            I'm a future Mediadesigner/Webdesigner, having an Internship at
            epekworks.com.
            <span>
              Im a Free Spirit,interested into Art, Music, learning new skills
              and Technology.
            </span>
          </Text>{" "}
          {/* <Button
              ml={8}
              p={6}
              position="asbsolute"
              colorScheme="pink"
              onClick={() => window.open()}
            >
              Page
            </Button>
          </Box>
          <Button
            ml={8}
            p={6}
            position="asbsolute"
            colorScheme="pink"
            onClick={() => window.open()}
          >
            Hosting
          </Button> */}
        </Box>

        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={xsxsa}
        />
      </Flex>
    </Stack>
  );
}
export default Home;
