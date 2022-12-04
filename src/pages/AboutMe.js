import React from "react";
import { Text, Stack, Heading } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <Stack spacing={3} bg="violet" p="40px" m="20px">
      <Heading p="20px" m="20px" fontSize="6xl">
        About Me
      </Heading>

      <Heading size="xl">Education</Heading>
      <UnorderedList p="20px" m="3px">
        <ListItem>
          2022 - Internship Webdesign / Webdevelopment at epekworks
        </ListItem>
        <ListItem>
          2021-Aktuell GPB Gesellschaft für Personalentwicklung und Bildung mbh
          ( Apprentice as a Media designer - Digital und Print, Schwerpunkt Web)
        </ListItem>
        <ListItem>
          {" "}
          2008-2012 Language High School Pitagora ,Croatia 2006- 2008 Skalice
          Primary school, Croatia{" "}
        </ListItem>
        <ListItem>2005- 2006 Goethe Comprehensive School, Dieburg</ListItem>
        <ListItem>
          {" "}
          2000-2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
        </ListItem>
      </UnorderedList>
      <Heading size="xl">Skills</Heading>
      <UnorderedList p="20px" m="3px">
        <ListItem>Html, Css, JavaScript, React.js</ListItem>
        <Text></Text>
      </UnorderedList>
    </Stack>
  );
};

export default AboutMe;
