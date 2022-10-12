import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaFreeCodeCamp,
  FaGithub,
} from "react-icons/fa";
import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/react";
import Home from "./components/Home";
import Code from "./components/Code";
import Net from "./components/Net";
import MenuPage from "./components/MenuPage";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="10" size="md" fontWeight="semibold" color="purple.400">
          <Menu>
            <MenuButton
              as={Button}
              p={4}
              bgGradient="linear(to-r, purple.400, cyan.500, blue.600)"
              textColor="white"
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>Code</MenuItem>
              <MenuItem>Hoisting</MenuItem>
              <MenuItem>Work</MenuItem>
            </MenuList>
          </Menu>
        </Heading>

        <Spacer></Spacer>
        <IconButton
          ml={4}
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={4}
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={<FaFreeCodeCamp />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={4}
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={8}
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <MenuPage></MenuPage>
      <Home></Home>
      <Box p={10}></Box>
      <Net></Net>
      <Code></Code>
    </VStack>
  );
}
export default App;
