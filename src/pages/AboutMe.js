import React from "react";
import {
  Text,
  Stack,
  Flex,
  useMediaQuery,
  Input,
  Box,
  Heading,
} from "@chakra-ui/react";

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
      justifySelf="baseline"
    >
      <Flex
        mt={isNotSmallerScreen ? "0" : 16}
        alignSelf="center"
        justifySelf="center"
      >
        {" "}
      </Flex>

      <Stack spacing={3}>
        <Text noOfLines={[1, 2, 3]} fontSize="4xl">
          {" "}
          Education
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl">
          2022 - Internship Webdesign / Webdevelopment / Marketing at epekworks
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl">
          2021-Aktuell GPB Gesellschaft für Personalentwicklung und Bildung mbh
          ( Apprentice as a Media designer - Digital und Print, Schwerpunkt Web)
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl">
          2008-2012 Language High School Pitagora ,Croatia 2006- 2008 Skalice
          Primary school, Croatia
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl">
          2005-2006 Goethe Comprehensive School, Dieburg
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl">
          2000-2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
        </Text>
        <br />

        <Text noOfLines={[1, 2, 3]} fontSize="4xl">
          Skills
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="1xl">
          Html, Css, JavaScript,React.js
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="1xl">
          Illustrator, Photoshop, InDesign, XD
        </Text>
        <br />
        <Text noOfLines={[1, 2, 3]} fontSize="4xl">
          Language
        </Text>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl">
          German, Croatian, English and trying to learn Italian
        </Text>
        <br />
        <Box
          display="flex"
          border="2px solid red"
          justifyContent="center"
          pb="20px"
          color="blueviolet"
        >
          <Stack
            spacing={6}
            color="blueviolet"
            borderRadius="3px"
            borderColor="lightpink"
          >
            <br />
            <Heading size="xl" pt="30px" alignSelf="center">
              Contact
            </Heading>
            <Input
              borderRadius="3px"
              color="blueviolet"
              placeholder="017659017116"
              size="sm"
              type="number"
              fontWeight={600}
              as="input"
            />
            <Input
              borderRadius="3px"
              placeholder="mateatabak@gmail.com"
              size="sm"
              type="email"
              fontWeight={600}
              as="input"
              color="blueviolet"
            />

            <Input
              borderRadius="3px"
              placeholder="Schloßstr.128,12163 "
              size="sm"
              type="text"
              fontWeight={600}
              as="input"
              color="blueviolet"
              borderColor="lightpink"
            />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
export default AboutMe;
