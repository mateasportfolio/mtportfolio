import React from "react";
import cvijet from "../assets/cvijet.json";
import {
  Text,
  Stack,
  Flex,
  useMediaQuery,
  Input,
  Box,
  Heading,
} from "@chakra-ui/react";
import Lottie from "lottie-react";

const AboutMe = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex
      with="100%"
      direction="column"
      alignSelf="center"
      p="20px"
      m="10px"
      justifyContent="center"
      justifySelf="flex-end"
    >
      <Flex
        mt={isNotSmallerScreen ? "0" : 16}
        alignSelf="center"
        justifySelf="center"
        pt="30px"
      >
        {" "}
      </Flex>

      <Stack spacing={3} border="1px solid lightpink" m="10px" p="20px">
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="4xl"
          pt="30px"
          alignSelf="center"
          fontFamily="body"
          fontWeight="light"
        >
          {" "}
          Education
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="2xl"
          fontFamily="body"
          fontWeight="light"
        >
          2022 - Internship Webdesign / Webdevelopment / Marketing at epekworks
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="2xl"
          fontFamily="body"
          fontWeight="light"
        >
          2021-Aktuell GPB Gesellschaft für Personalentwicklung und Bildung mbh
          ( Apprentice as a Media designer - Digital und Print, Schwerpunkt Web)
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="2xl"
          fontFamily="body"
          fontWeight="light"
        >
          2008-2012 Language High School Pitagora ,Croatia 2006- 2008 Skalice
          Primary school, Croatia
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="2xl"
          fontFamily="body"
          fontWeight="light"
        >
          2005-2006 Goethe Comprehensive School, Dieburg
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="2xl"
          fontFamily="body"
          fontWeight="light"
        >
          2000-2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
        </Text>
        <br />

        <Text
          noOfLines={[1, 2, 3]}
          fontSize="4xl"
          fontFamily="body"
          alignSelf="center"
          fontWeight="light"
        >
          Skills
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="1xl"
          fontFamily="body"
          fontWeight="light"
        >
          Html, Css, JavaScript,React.js
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="1xl"
          fontWeight="light"
          fontFamily="body"
        >
          Illustrator, Photoshop, InDesign, XD
        </Text>
        <br />
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="4xl"
          fontFamily="body"
          alignSelf="center"
          fontWeight="light"
        >
          Language
        </Text>
        <Text
          noOfLines={[1, 2, 3]}
          fontSize="2xl"
          fontFamily="body"
          fontWeight="light"
        >
          German, Croatian, English and trying to learn Italian
        </Text>
        <br />
        <Box
          display="flex"
          border="1px solid lightpink"
          justifyContent="center"
          pb="150px"
          color="white"
        >
          <Stack
            spacing={6}
            color="lightpink"
            borderRadius="2px"
            borderColor="lightpink"
            p="20px"
          >
            <br />
            <Heading size="xl" pt="15px" alignSelf="center">
              Contact
            </Heading>
            <Flex
              display="flex"
              alignSelf="left"
              justifyItems="left"
              alignContent="revert"
            >
              <Lottie
                animationData={cvijet}
                objectFit="cover"
                onDurationChange={2}
              />
              <Lottie
                animationData={cvijet}
                objectFit="cover"
                onDurationChange={2}
              />
            </Flex>
            <Input
              position="relative"
              alignItems="center"
              justifyContent="center"
              borderRadius="2px"
              color="lightrosa"
              placeholder="017659017116"
              size="lg"
              type="number"
              fontWeight={600}
              as="input"
            />
            <Input
              position="relative"
              alignItems="center"
              justifyContent="center"
              borderRadius="2px"
              color="lightrosa"
              placeholder="mateatabak@gmail.com"
              size="lg"
              type="number"
              fontWeight={600}
              as="input"
            />{" "}
            <Input
              position="relative"
              alignItems="center"
              justifyContent="center"
              borderRadius="2px"
              color="lightrosa"
              size="lg"
              type="number"
              fontWeight={600}
              as="input"
              placeholder="Schloßstr.128,12163"
            />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
export default AboutMe;
