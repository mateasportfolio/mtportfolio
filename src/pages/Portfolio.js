import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import timer from "../assets/timer.png";
import calculator from "../assets/calculator.png";
import Faltschachtel from "../assets/portfolio/Faltschachtel.png";
import { LightboxComponent } from "../components/Lightbox";
import Lottie from "lottie-react";
import confetti from "../assets/confetti.json";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex w="100%" padding="10" flexDir="column" maxW="1200px">
        {" "}
        <Box>
          <Lottie
            animationData={confetti}
            position="absolute"
            speed="8"
            loop={false}
            autoPlay={true}
          />
        </Box>
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
          <Link to="/savings-calculator">
            <Flex
              border="1px solid pink"
              flexDirection="column"
              cursor="pointer"
            >
              <Text
                marginBottom="10px"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                Savings Calculator
              </Text>
              <Image
                src={calculator}
                height="320px"
                width="320px"
                objectFit="cover"
                borderRadius="10px"
              />
            </Flex>
          </Link>
          <ChakraLink
            href="https://melodious-arithmetic-98d708.netlify.app/"
            textDecor="none"
          >
            <Flex
              border="1px solid pink"
              flexDirection="column"
              cursor="pointer"
            >
              <Text
                marginBottom="10px"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                Meditation Timer
              </Text>
              <Image
                src={timer}
                height="320px"
                width="320px"
                objectFit="cover"
                borderRadius="10px"
              />
            </Flex>
          </ChakraLink>
          <Flex
            border="1px solid pink"
            flexDirection="column"
            cursor="pointer"
            onClick={() => setOpen(true)}
          >
            <Text
              marginBottom="10px"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              Media Design Portfolio
            </Text>
            <Image
              src={Faltschachtel}
              height="320px"
              width="320px"
              objectFit="cover"
              borderRadius="10px"
            />
          </Flex>
        </Flex>
      </Flex>

      <LightboxComponent open={open} setOpen={setOpen} />
    </>
  );
}
