import React from "react";
import { Box, useMediaQuery, VStack, Icon } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Stack, Heading } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

import { FaReact, FaHtml5 } from "react-icons/fa";

const AboutMe = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack with="100%" direction="column" alignSelf="center">
      <Box mt={isNotSmallerScreen ? "0" : 16} alignSelf="center">
        {" "}
      </Box>
      <VStack bg="linear-gradient(#A88BEB ,#F8CEEC)" p="30px" m="3rem">
        <Heading color="whiteAlpha.700" size="xl">
          Education
        </Heading>
        <UnorderedList>
          <ListItem>
            2022 - Internship Webdesign / Webdevelopment / Marketing at
            epekworks
          </ListItem>
          <ListItem>
            2021-Aktuell GPB Gesellschaft für Personalentwicklung und Bildung
            mbh ( Apprentice as a Media designer - Digital und Print,
            Schwerpunkt Web)
          </ListItem>
          <ListItem>
            {" "}
            2008-2012 Language High School Pitagora ,Croatia 2006- 2008 Skalice
            Primary school, Croatia{" "}
          </ListItem>
          <ListItem>2005- 2006 Goethe Comprehensive School, Dieburg</ListItem>
          <ListItem>
            2000-2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
          </ListItem>
          <Heading color="whiteAlpha.900" size="lg">
            Skills
          </Heading>
          <ListItem>
            <Icon
              as={FaReact}
              w={8}
              h={8}
              color="blue.500"
              direction="row"
              display="flow"
            />
            <Icon
              as={FaHtml5}
              w={8}
              h={8}
              color="blue.500"
              direction="column"
              display="flow"
            />
            Html, Css, JavaScript,React.js{" "}
          </ListItem>

          <ListItem>Illustrator, Photoshop, InDesign, XD</ListItem>
          <Heading
            color="whiteAlpha.900"
            size="lg"
            fontFamily="sans-serif"
            fontWeight="light"
          >
            Language
          </Heading>
          <ListItem>German, Croatian, English</ListItem>
        </UnorderedList>
      </VStack>

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
  );
};

export default AboutMe;
