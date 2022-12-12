import {
  Circle,
  useColorMode,
  useMediaQuery,
  Flex,
  Text,
  Image,
  Stack,
  HStack,
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
    <Stack
      display="flex"
      flexDirection="row"
      alignItems="flex-end"
      alignContent="flex-end"
      justifyContent="space-around"
      position="relative"
      flexWrap="wrap"
    >
      <Stack>
        {" "}
        <Circle
          bgColor="pink.700"
          opacity="0.5"
          transitionDuration={4}
          boxShadow="7.8px 15.7px 15.7px hsl(0deg 0% 0% / 0.26)"
        />
      </Stack>
      <Flex direction="row-reverse">
        <Text
          as="h5"
          alignSelf="center"
          flexDirection="row"
          textAlign="start"
          margin="25px"
          fontSize="5xl"
          fontWeight="hairline"
          pt="3px"
          padding="20px"
          fontFamily="body"
        >
          Hello,
          <br />
          <span> I'm</span>
          <Text
            textAlign="start"
            fontSize="7xl"
            fontWeight="hairline"
            bgGradient="linear(to-r, purple.400, cyan.500, blue.600)"
            bgClip="text"
          >
            Matea
          </Text>
          <Text
            flexDirection="row"
            textAlign="start"
            color={isDark ? "pink.200" : "purple.500"}
            fontSize="2xl"
            fontWeight="hairline"
          >
            <span>
              I'm a future Mediadesigner / Webdesigner <br />
              <span>
                I'm a Free Spirit, exploring Art, Music, and Technology.
              </span>
            </span>
          </Text>
        </Text>
      </Flex>

      <Flex
        padding={16}
        margin={120}
        display="flex"
        flexDirection="row"
        alignItems="flex-end"
        alignContent="flex-end"
        justifyContent="space-around"
        justifySelf="left"
        position="relative"
        flexWrap="wrap"
      >
        <Image
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="2xl"
          bg="#a26dff"
          boxSize="350px"
          src={xsxsa}
        />
      </Flex>
      <HStack maxWidth={300}>
        <Lottie
          height={100}
          width="50%"
          animationData={spinner}
          objectFit="scale-down"
          onDurationChange={8}
          boxShadow="lg"
          opacity="0.5"
          maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
          borderRadius="full"
          backgroundColor="white.300"
        />
      </HStack>
    </Stack>
  );
}
export default Home;
