import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaFreeCodeCamp,
  FaGithub,
} from "react-icons/fa";
import Header from "./components/Header";
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
          CHAKRA UI
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
      <Header></Header>
      <Box p={10}></Box>
      <Net></Net>
      <MenuPage></MenuPage>
      <Code></Code>
    </VStack>
  );
}
export default App;
