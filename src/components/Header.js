import React from "react";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
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
//import { Route } from "react-router-dom";

export const Header = ({ isDark, toggleColorMode }) => {
  const onClick = (href) => {
    window.open(href, "url");
  };

  return (
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
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/code">Code</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/hosting">Hosting</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/work">Work</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Heading>

      <Spacer></Spacer>
      <IconButton
        ml={4}
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={<FaGithub />}
        isRound="true"
        onClick={() => onClick("https://github.com/mateasportfolio")}
      ></IconButton>

      <IconButton
        ml={4}
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={<FaFreeCodeCamp />}
        isRound="true"
        onClick={() => onClick("https://github.com/mateasportfolio")}
      ></IconButton>
      <IconButton
        ml={4}
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={<FaLinkedin />}
        isRound="true"
        onClick={() =>
          onClick("https://www.linkedin.com/in/matea-tabak-83440a230/")
        }
      ></IconButton>

      <IconButton
        ml={8}
        color={isDark ? "whiteAlpha.1000" : "pink.200"}
        icon={isDark ? <FaSun /> : <FaMoon />}
        isRound="true"
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};
