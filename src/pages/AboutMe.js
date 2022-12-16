import React from "react";
import cvijet from "../assets/cvijet.json";
import Lebenslauf from "../assets/Lebenslauf.jpg";
import {
  Text,
  Stack,
  Flex,
  useMediaQuery,
  Input,
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import Lottie from "lottie-react";

const AboutMe = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      width="100%"
      maxW="1200px"
    >
      <Box padding={15} ml={1}>
        <Image src={Lebenslauf} alt="pdf" />
      </Box>

      <Flex
        mt={isNotSmallerScreen ? "0" : 16}
        direction="row"
        alignSelf="center"
        padding={2}
        ml={10}
        justifyContent="flex-start"
        justifySelf="flex-end"
        width="100%"
      >
        <Flex
          mt={isNotSmallerScreen ? "0" : 16}
          alignSelf="center"
          justifySelf="center"
          pt={3}
        >
          {" "}
        </Flex>

        <Stack
          spacing={6}
          border="10 px solid lightpink"
          marginTop={10}
          padding={10}
          borderColor="#673ab7"
        >
          <Text
            noOfLines={[1, 2, 3]}
            fontSize="4xl"
            pt={30}
            alignSelf="center"
            fontFamily="body"
            fontWeight="light"
          >
            Education
          </Text>
          <UnorderedList>
            <ListItem>
              <Text
                noOfLines={[1, 2, 3]}
                fontSize="2xl"
                fontFamily="body"
                fontWeight="light"
              >
                2022 - Internship Webdesign / Webdevelopment / Marketing at
                epekworks
              </Text>
              <ListItem>
                <Text
                  noOfLines={[1, 2, 3]}
                  fontSize="2xl"
                  fontFamily="body"
                  fontWeight="light"
                >
                  2021-Aktuell GPB Gesellschaft für Personalentwicklung und
                  Bildung mbh ( Apprentice as a Media designer - Digital und
                  Print, Schwerpunkt Web)
                </Text>
                <ListItem>
                  <Text
                    noOfLines={[1, 2, 3]}
                    fontSize="2xl"
                    fontFamily="body"
                    fontWeight="light"
                  >
                    2008-2012 Language High School Pitagora ,Croatia 2006- 2008
                    Skalice Primary school, Croatia
                  </Text>
                </ListItem>
              </ListItem>
              <ListItem>
                <Text
                  noOfLines={[1, 2, 3]}
                  fontSize="2xl"
                  fontFamily="body"
                  fontWeight="light"
                >
                  2005-2006 Goethe Comprehensive School, Dieburg
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  noOfLines={[1, 2, 3]}
                  fontSize="2xl"
                  fontFamily="body"
                  fontWeight="light"
                >
                  2000-2004 Ysenburg Primary School Hailer-Meerholz, Gelnhausen
                </Text>
              </ListItem>
            </ListItem>
          </UnorderedList>

          <br />

          <Text
            noOfLines={[1, 2, 3]}
            fontSize="4xl"
            fontFamily="body"
            fontWeight="light"
          >
            Skills
          </Text>
          <UnorderedList>
            <ListItem>
              <Text
                noOfLines={[1, 2, 3]}
                fontSize="1xl"
                fontFamily="body"
                fontWeight="light"
              >
                Html, Css, JavaScript, React.js
              </Text>
            </ListItem>
            <ListItem>
              <Text
                noOfLines={[1, 2, 3]}
                fontSize="1xl"
                fontWeight="light"
                fontFamily="body"
              >
                Illustrator, Photoshop, InDesign, XD, Figma
              </Text>
            </ListItem>
            <br />
            <ListItem>
              <Text
                noOfLines={[1, 2, 3]}
                fontSize="4xl"
                fontFamily="body"
                alignSelf="center"
                fontWeight="light"
              >
                Language
              </Text>
            </ListItem>
            <ListItem>
              <Text
                noOfLines={[1, 2, 3]}
                fontSize="2xl"
                fontFamily="body"
                fontWeight="light"
              >
                German, Croatian, English
              </Text>
              <br />
            </ListItem>
          </UnorderedList>
          <Box
            width="50%"
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
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <br />
              <Heading size="4xl" pt="15px" alignSelf="center">
                Contact
              </Heading>
              <Flex
                width="100%"
                display="flex"
                alignSelf="left"
                justifyItems="left"
                alignContent="revert"
              >
                <Lottie
                  animationData={cvijet}
                  objectFit="cover"
                  onDurationChange={6}
                  rotate=" 1 1 0 60deg"
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
                boxShadow="outline"
                color="lightrosa"
                placeholder="017659017116"
                size="lg"
                type="number"
                fontWeight={600}
                as="input"
              />
              Mobil
              <Input
                position="relative"
                alignItems="center"
                justifyContent="center"
                borderRadius="2px"
                boxShadow="outline"
                color="lightrosa"
                placeholder="mateatabak@gmail.com"
                size="lg"
                type="email"
                fontWeight={600}
                as="input"
              />{" "}
              <Input
                position="relative"
                alignItems="center"
                justifyContent="center"
                borderRadius="2px"
                boxShadow="outline"
                color="lightrosa"
                size="lg"
                type="adress"
                fontWeight={600}
                as="input"
                placeholder="Schloßstr.128  12163"
              />
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};
export default AboutMe;
