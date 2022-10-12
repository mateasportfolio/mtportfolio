import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";

function Code() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%">
      {/* <Box alignSelf="center" px="32" py="16">
        {/* <Heading fontWeight="extrabold" color="purple.500" size="4xl">
              Art
            </Heading> */}
      {/*<Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="purple.400"
          h="30vh"
          w="30vh"
          justify="flex-end"
        >
          <Text color="white" p="4" fontSize="xl" fontWeight="medium">
            Code
          </Text>
        </Flex>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Flex
          rounded="xl"
          direction="column"
          mt={4}
          bg="purple.400"
          h="30vh"
          w="30vh"
          justify="flex-end"
        >
          <Text color="white" p="4" fontSize="xl" fontWeight="medium">
            <Box width={[1, 1 / 2, 1 / 4]} />
            Hosting
          </Text>
          
          
        </Flex>
         
      </Box> 
       */}
    </Flex>
  );
}

export default Code;
