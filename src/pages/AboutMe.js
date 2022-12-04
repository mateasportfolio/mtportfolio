import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
// import { CheckCircleIcon } from "@chakra-ui/icons";

const AboutMe = () => {
  return (
    <>
      <Stack bg="linear-gradient(#A88BEB ,#F8CEEC)" p="30px" m="20px">
        <Heading color="whiteAlpha.700" fontSize="5xl">
          About Me
        </Heading>
        <Heading color="whiteAlpha.700" as="abbr" size="Xl">
          Education
        </Heading>
        <UnorderedList>
          <ListItem color="whiteAlpha.700">
            2022 - Internship Webdesign / Webdevelopment at epekworks
          </ListItem>
          <ListItem color="whiteAlpha.700">
            2021-Aktuell GPB Gesellschaft für Personalentwicklung und Bildung
            mbh ( Apprentice as a Media designer - Digital und Print,
            Schwerpunkt Web)
          </ListItem>
          <ListItem color="whiteAlpha.700">
            {" "}
            2008-2012 Language High School Pitagora ,Croatia 2006- 2008 Skalice
            Primary school, Croatia{" "}
          </ListItem>
          <ListItem color="whiteAlpha.700">
            2005- 2006 Goethe Comprehensive School, Dieburg
          </ListItem>
          <ListItem color="whiteAlpha.700">
            2000-2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
          </ListItem>
        </UnorderedList>
        <UnorderedList color="whiteAlpha.700">
          <Heading size="Xl">Language</Heading>
          <ListItem>German, English, Croatian</ListItem>
        </UnorderedList>
        <Heading color="whiteAlpha.700" size="Xl">
          Skills
        </Heading>
        <UnorderedList color="whiteAlpha.700">
          <ListItem>Html, Css, JavaScript, React.js</ListItem>
          <ListItem>Illustrator, Photoshop, InDesign, XD</ListItem>
        </UnorderedList>
      </Stack>
    </>
  );
};

export default AboutMe;
