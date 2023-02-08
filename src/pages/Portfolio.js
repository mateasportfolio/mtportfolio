import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
// import Link from "@chakra-ui/react";
import { useState } from "react";
import timer from "../assets/timer.png";
import calculator from "../assets/calculator.png";
import Faltschachtel from "../assets/portfolio/Faltschachtel.png";
import { LightboxComponent } from "../components/Lightbox";
import Lottie from "lottie-react";
import confetti from "../assets/confetti.json";
import mohn2 from "../assets/mohn2.png";
import front from "../assets/portfolio/front.png";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex w="100%" padding="10" flexDir="column" maxW="1200px">
        {" "}
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
                <a
                  href="https://bespoke-lamington-c1551d.netlify.app"
                  isExternal
                  rel="alternate"
                  hreflang="en"
                  to="https://63e3a846e44c09000742b807--mateatabak.netlify.app/"
                >
                  UXUI Design Prototype
                </a>
              </Text>
              <Image
                src={mohn2}
                height="320px"
                width="320px"
                objectFit="fill"
                borderRadius="10px"
              />
            </Flex>
          </Flex>
          <Flex
            wrap="wrap"
            gap="20px"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              border="1px solid pink"
              flexDirection="column"
              cursor="pointer"
            >
              <a
                textAlign="center"
                rel="noreferrer"
                href={"https://lively-concha-b269df.netlify.app"}
                isExternal
              >
                <Text
                  marginBottom="10px"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  Bootstrap
                </Text>
                <Image
                  src={front}
                  height="320px"
                  width="320px"
                  objectFit="fill"
                  borderRadius="10px"
                />
              </a>
            </Flex>
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
