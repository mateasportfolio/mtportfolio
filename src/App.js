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
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          <Menu>
            <MenuButton as={Button}>Menu</MenuButton>
            <MenuList>
              <MenuItem>Code</MenuItem>
              <MenuItem>Hoisting</MenuItem>
              <MenuItem>Work</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Heading>

        <Spacer></Spacer>
        <IconButton
          ml={4}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={4}
          icon={<FaFreeCodeCamp />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={4}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          ml={8}
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
