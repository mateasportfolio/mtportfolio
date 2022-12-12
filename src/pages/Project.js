import { Box, Text, Stack, Button, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/react";

export default function Project() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Box>
      <Text as="b" fontSize="4xl" fontWeight="hairline" color="pink.400">
        {" "}
        Made with React.js
      </Text>
      <Stack
        display="flex"
        p="2px"
        position="relative"
        direction={isNotSmallerScreen ? "row" : "column"}
        width="50%"
      >
        <Box
          direction={isNotSmallerScreen ? "row" : "column"}
          width="100%"
          display="flex"
          p="2px"
          m="100px"
          justifyContent="center"
        >
          <Button
            border="1px solid  #9198e5"
            position="relative"
            p="20px"
            m="10px"
            display="flex"
          >
            <Link
              position="relative"
              fontSize="xl"
              fontWeight="hairline"
              color="pink.400"
              href="https://endearing-blini-1b0650.netlify.app"
              m="30px"
              p="4px"
            >
              Savings calculator
            </Link>
          </Button>

          <Button
            border="1px solid  #9198e5"
            position="relative"
            p="20px"
            m="10px"
            display="flex"
          >
            <Link
              fontSize="xl"
              fontWeight="hairline"
              color="pink.400"
              href="https://melodious-arithmetic-98d708.netlify.app/"
              m="30px"
              p="4px"
            >
              Meditation Timer
            </Link>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
