import React from "react";
import { Text, Stack, Heading } from "@chakra-ui/react";
const AboutMe = () => {
  return (
    <Stack spacing={3}>
      <Heading p="20px" fontSize="6xl">
        About Me
      </Heading>
      <Text p="20px">
        <Heading>Education</Heading>
        2021- Aktuell GPB Gesellschaft für Personalentwicklung und Bildung mbh (
        Apprentice as a Media designer - Digital und Print, Schwerpunkt Web)
        2008- 2012 Language High School Pitagora ,Croatia 2006- 2008 Skalice
        ,Primary school,Croatia 2005- 2006 Goethe Comprehensive School , Dieburg
        2000- 2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
      </Text>
    </Stack>
  );
};

export default AboutMe;
