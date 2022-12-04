import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
// import { CheckCircleIcon } from "@chakra-ui/icons";

const AboutMe = () => {
  return (
    <>
      <Stack spacing={3} bg="violet" p="30px" m="20px">
        <Heading fontSize="5xl">About Me</Heading>
        <Heading as="abbr" size="Xl">
          Education
        </Heading>
        <UnorderedList>
          <ListItem>
            2022 - Internship Webdesign / Webdevelopment at epekworks
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
        </UnorderedList>
        <UnorderedList>
          <Heading size="Xl">Language</Heading>
          <ListItem>German, English, Croatian</ListItem>
        </UnorderedList>
        <Heading size="Xl">Skills</Heading>
        <UnorderedList>
          <ListItem>Html, Css, JavaScript, React.js</ListItem>
          <ListItem>Illustrator, Photoshop, InDesign, XD</ListItem>
        </UnorderedList>
      </Stack>
    </>
  );
};

export default AboutMe;
