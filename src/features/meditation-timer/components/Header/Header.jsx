import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      border="2px solid pink"
      p="20px"
      pt="30px"
      mt="20px"
      mb="0px"
      flexDirection="column"
      textAlign={{ base: "center", md: "left" }}
    >
      <Heading
        as="h1"
        fontSize="6xl"
        fontWeight="semibold"
        mb="20px"
        color="purple.300"
        justifyContent="center"
        alignSelf="flex-start"
      >
        Meditation Timer
      </Heading>

      <Heading as="h1" fontSize="2xl" fontWeight="300" color="purple.300">
        Create your own meditation timers Meditate following our simple guided
        meditations and breathing exercises
      </Heading>
      <br></br>
      <Heading as="h1" fontSize="2xl" fontWeight="200" color="purple.300">
        “Enlightenment is not an experience. It is the state where you are left
        absolutely alone, nothing to know. No object, however beautiful, is
        present. Only in that moment does your consciousness, unobstructed by
        any object, take a turn and move back to the source.” ―
        <strong>Osho, Meditation: The First and Last Freedom</strong>
      </Heading>
    </Flex>
  );
};
