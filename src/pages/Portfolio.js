import {
  Box,
  Text,
  //Button,
  // useMediaQuery,
  Flex,
  //Heading,
  Image,
} from "@chakra-ui/react";
//import { Spacer } from "@chakra-ui/react";
import React from "react";
// import { Link as ChakraLink } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import timer from "../assets/timer.png";
import { LightboxComponent } from "../components/Lightbox";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex
        border="1px solid red"
        w="100%"
        padding="10"
        flexDir="column"
        maxW="1200px"
      >
        <Box textAlign="center" marginBottom="16px">
          <Text as="b" fontSize="4xl" fontWeight="hairline" color="pink.400">
            Made with React.js
          </Text>
        </Box>
        <Flex
          wrap="wrap"
          gap="20px"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            border="1px solid red"
            flexDirection="column"
            marginBottom="10px"
          >
            <Text>Savings Calculator</Text>
            <Image height="320px" width="320px" />
          </Flex>
          <Flex border="1px solid red" flexDirection="column">
            <Text marginBottom="10px">Meditation Timer</Text>
            <Image src={timer} height="320px" width="320px" objectFit="cover" />
          </Flex>
          <Flex
            border="1px solid red"
            flexDirection="column"
            onClick={() => setOpen(true)}
          >
            <Text marginBottom="10px">Media Design Portfolio</Text>
            <Image height="320px" width="320px" />
          </Flex>
        </Flex>
      </Flex>
      <LightboxComponent open={open} setOpen={setOpen} />
    </>
  );
}

/*
   <>
        <Box>
          <Text as="b" fontSize="4xl" fontWeight="hairline" color="pink.400">
            Made with React.js
          </Text>
        </Box>
      </>
      <Flex>
        <ChakraLink>
          <button
            type="button"
            onClick={() => setOpen(true)}
            variant="outline"
            w="min-content"
            border="1px solid  #9198e5"
            position="relative"
            p="20px"
            m="10px"
            display="flex"
            fontSize="xl"
            fontWeight="hairline"
            color="pink.400"
          >
            <Text fontWeight="hairline" fontFamily="heading" fontSize="4xl">
              {" "}
              Open
              <Heading>Media Design Portfolio</Heading>
            </Text>
          </button>
        </ChakraLink>
      
      </Flex>
      <Flex>
        <Box p="4">
          <Box
            alignItems="center"
            display="flex"
            direction={isNotSmallerScreen ? "row" : "column"}
            justifyContent="center"
            width="100%"
          >
            <Button
              w="min-content"
              border="1px solid  #9198e5"
              position="relative"
              p="20px"
              m="10px"
              display="flex"
              fontSize="xl"
              fontWeight="hairline"
              color="pink.400"
            >
              <Link to="/savings-calculator">Savings Calculator</Link>
            </Button>
          </Box>
          <Box p="4">
            <Button
              border="1px solid  #9198e5"
              position="relative"
              p="20px"
              m="10px"
              display="flex"
            >
              <ChakraLink
                fontSize="xl"
                fontWeight="hairline"
                color="pink.400"
                href="https://melodious-arithmetic-98d708.netlify.app/"
              >
                Meditation Timer
              </ChakraLink>
            </Button>
          </Box>
          <Box p="4" bg="yellow.400">
            Box 3
          </Box>
        </Box>
      </Flex>
*/
