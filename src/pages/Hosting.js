import { Box, Flex, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";

const Hosting = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex>
      <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
        <VStack>
          <Text fontSize="3xl" fontWeight="semibold">
            NodeJS
          </Text>
        </VStack>
        <Text fontSize="xl">
          Nodejs is an open-source and cross-platform runtime environment for
          executing JavaScript code outside a browser.Node.js and react.js are
          two different technologies that do different things. Node.js is used
          to construct backend (server-side) code, whereas react is a frontend
          (client-side) library. While both are JavaScript technologies, no
          direct comparison exists between the two. These technologies are often
          part of the same project. In fact, the greatest advantage of learning
          both technologies is that you can work server-side and client-side
          using the same programming language - JavaScript.
        </Text>
        <VStack>
          <Text fontSize="3xl" fontWeight="semibold">
            React.js
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="xl">
            React. js is an open-source JavaScript library that is used for
            building user interfaces specifically for single-page applications.
            It's used for handling the view layer for web and mobile apps. React
            also allows us to create reusable UI components. React implements a
            virtual DOM that is basically a DOM tree representation in
            JavaScript. So when it needs to read or write to the DOM,it will use
            the virtual representation of it. Then the virtual DOM will find the
            most efektive way to the browser.
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="3xl" fontWeight="semibold">
            Browser
          </Text>
          <Text fontSize="xl">
            in the Browser we can request the code from the Server and view our
            Application.
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};
export default Hosting;
