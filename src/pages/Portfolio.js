import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import timer from "../assets/timer.png";
import calculator from "../assets/calculator.png";
import Faltschachtel from "../assets/portfolio/Faltschachtel.png";
import { LightboxComponent } from "../components/Lightbox";
import Lottie from "lottie-react";
import confetti from "../assets/confetti.json";
// import creativeweb from "../assets/creativeweb.png";
import creativeweb2 from "../assets/creativeweb2.png";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex w="100%" padding="10" flexDir="column" maxW="1200px">
        {" "}
        <Box></Box>
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
          <Link to="/meditation-timer">
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
          </Link>
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

          <Flex
            wrap="wrap"
            gap="20px"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/https://bespoke-lamington-c1551d.netlify.app">
              {/* <Link href="https://bespoke-lamington-c1551d.netlify.app"> */}
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
                  UXUI Design Landingpage
                </Text>
                <Image
                  src={creativeweb2}
                  height="320px"
                  width="320px"
                  objectFit="fill"
                  borderRadius="10px"
                />
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Lottie
        animationData={confetti}
        position="absolute"
        speed="8"
        loop={false}
        autoPlay={true}
      />
      <LightboxComponent open={open} setOpen={setOpen} />
    </>
  );
}
