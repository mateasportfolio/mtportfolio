import { HStack, Icon } from "@chakra-ui/react";
import React from "react";

import { FaGoogle } from "react-icons/fa";

function Net() {
  return (
    <HStack spacing="24">
      <Icon as={FaGoogle} boxSize="70"></Icon>
    </HStack>
  );
}

export default Net;
