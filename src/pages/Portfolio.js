import { Box, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
// import Link from "@chakra-ui/react";
import { useState } from "react";
import timer from "../assets/timer.png";
import calculator from "../assets/calculator.png";
import Faltschachtel from "../assets/portfolio/Faltschachtel.png";
import { LightboxComponent } from "../components/Lightbox";
import Lottie from "lottie-react";
import hardware from "../assets/portfolio/hardware.json";
import mohn2 from "../assets/mohn2.png";
import front from "../assets/portfolio/front.png";
import { Link } from "react-router-dom";
import binaryBrain from "../assets/portfolio/binaryBrain.png";
import solar3 from "../assets/solar3.png";
export default function Portfolio() {
  const [open, setOpen] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hardware,
    rendererSettings: {
      scale: 2, // Set the scale factor to 2 (double the size)
    },
  };

  return (
    <>
      <Box>
        {/* <Image
          src={binaryBrain}
          height={400}
          width={400}
          position="relative"
          objectFit="fill"
          borderRadius="10px"
          p
        /> */}
      </Box>
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
            <Box>
              {" "}
              {/* <Image
                src={binaryBrain}
                height={400}
                width={400}
                position="relative"
                objectFit="fill"
                borderRadius="10px"
                p
              /> */}
              <Lottie animationData={hardware} options={defaultOptions} />
            </Box>
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
              <a
                textAlign="center"
                rel="noreferrer"
                href={"https://bespoke-lamington-c1551d.netlify.app"}
                isExternal
              >
                <Text
                  marginBottom="10px"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  UXUI Design Prototype
                </Text>
                <Image
                  src={mohn2}
                  height="320px"
                  width="320px"
                  objectFit="fill"
                  borderRadius="10px"
                />
              </a>
            </Flex>
            <Image
              src={binaryBrain}
              height={400}
              width={400}
              position="relative"
              objectFit="fill"
              borderRadius="10px"
            />
            <Flex
              border="1px solid pink"
              flexDirection="column"
              cursor="pointer"
            >
              <a
                textAlign="center"
                rel="noreferrer"
                href={"https://capable-lollipop-3d94e6.netlify.app"}
                isExternal
              >
                <Text
                  marginBottom="10px"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  Solar Regina GmbH
                </Text>
                <Image
                  src={solar3}
                  height="320px"
                  width="320px"
                  objectFit="fill"
                  borderRadius="10px"
                />
              </a>
            </Flex>
          </Flex>

          {/* <Lottie animationData={hardware} options={defaultOptions} /> */}
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

      <LightboxComponent open={open} setOpen={setOpen} />
    </>
  );
}
