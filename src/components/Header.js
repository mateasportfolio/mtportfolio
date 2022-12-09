import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaFreeCodeCamp,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = ({ isDark, toggleColorMode }) => {
  const onClick = (href) => {
    window.open(href, "url");
  };

  return (
    <Flex
      w="50"
      alignContent="space-between"
      marginLeft="auto"
      display="inline-flex"
      size="md"
      fontWeight="semibold"
      color="purple.400"
    >
      <Heading
        ml="10px"
        size="md"
        fontWeight="semibold"
        color="purple.400"
        alignContent="stretch"
        flexDirection="row"
        justifyContent="flex-end"
      >
        <Menu colorScheme="pink" size="2xl">
          <MenuButton
            colorScheme="yellow.100"
            as={Button}
            p={4}
            bgGradient="linear(to-r, purple.400, cyan.500, blue.600)"
            textColor="white"
            outline="#00bcd4"
          >
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem color="pink.200">
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/code">Code</Link>
            </MenuItem>
            <MenuItem color="pink.200">
              <Link to="/hosting">Hosting</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/art">Art</Link>
            </MenuItem>
            <MenuItem color="pink.200">
              <Link to="/aboutme">About Me</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Heading>

      <IconButton
        ml={4}
        outline="#00bcd4"
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={<FaGithub />}
        isRound="true"
        onClick={() => onClick("https://github.com/mateasportfolio")}
      ></IconButton>

      <IconButton
        ml={4}
        outline="#00bcd4"
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={<FaFreeCodeCamp />}
        isRound="true"
        onClick={() => onClick("https://www.freecodecamp.org/matea")}
      ></IconButton>
      <IconButton
        outline="#00bcd4"
        ml={4}
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={<FaLinkedin />}
        isRound="true"
        onClick={() =>
          onClick("https://www.linkedin.com/in/matea-tabak-83440a230/")
        }
      ></IconButton>

      <IconButton
        outline="#a26dff"
        ml={8}
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
        alignContent="stretch"
        flexDirection="row"
      ></IconButton>
    </Flex>
  );
};
