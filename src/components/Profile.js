import React from "react";
import { Box, Flex, useMediaQuery, Text } from "@chakra-ui/react";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        {/* <Heading fontWeight="extrabold" color="purple.500" size="4xl">
          Art
        </Heading> */}
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
            ART
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
