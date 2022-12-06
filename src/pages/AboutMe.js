import React from "react";
import {
  Box,
  useMediaQuery,
  VStack,
  Icon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaLocationArrow, FaReact, FaHtml5 } from "react-icons/fa";
import Lottie from "lottie-react";
import developer from "../assets/developer.json";
import brush from "../assets/brush.json";
import painter from "./../assets/painter.json";

const AboutMe = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <>
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
                2021-Aktuell GPB Gesellschaft für Personalentwicklung und
                Bildung mbh ( Apprentice as a Media designer - Digital und
                Print, Schwerpunkt Web)
              </ListItem>
              <ListItem>
                {" "}
                2008-2012 Language High School Pitagora ,Croatia 2006- 2008
                Skalice Primary school, Croatia{" "}
              </ListItem>
              <ListItem>
                2005- 2006 Goethe Comprehensive School, Dieburg
              </ListItem>
              <ListItem>
                2000-2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
              </ListItem>
              <Heading color="whiteAlpha.900" size="Xl">
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
              <Heading color="whiteAlpha.900" size="Xl">
                Language
              </Heading>
              <ListItem>German, Croatian, English</ListItem>
            </UnorderedList>

            <HStack>
              <Lottie animationData={painter} width="50%" height="50%" />
            </HStack>
          </VStack>
        </Stack>

        <Stack
          bg="linear-gradient(#A88BEB ,#F8CEEC)"
          p="70px"
          m="3rem"
          alignSelf="center"
        >
          <Heading color="whiteAlpha.900" size="Xl">
            Contact
          </Heading>
          <Text>
            {" "}
            <PhoneIcon m="4px" />
            017659017116
          </Text>
          <Heading color="whiteAlpha.900" size="Xl">
            Mail
          </Heading>
          <Text>
            <EmailIcon m="4px" />
            mateatabak@gmail.com
          </Text>
          <Heading color="whiteAlpha.900" size="Xl">
            Adress
          </Heading>
          <Text>
            <FaLocationArrow m="4px" />
            Schloßstr.128 12163 Berlin
          </Text>
          <Flex>
            <Lottie animationData={developer} width="50%" height="50%" />
          </Flex>
        </Stack>
      </>
      <Flex
        bg="linear-gradient(#A88BEB ,#F8CEEC)"
        p="70px"
        m="3rem"
        alignSelf="center"
      >
        <Lottie animationData={brush} maxWidth="100px" />
      </Flex>
    </>
  );
};

export default AboutMe;
