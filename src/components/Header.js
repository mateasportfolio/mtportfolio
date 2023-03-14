import React from "react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaFreeCodeCamp,
  FaGithub,
} from "react-icons/fa";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = ({ isDark, toggleColorMode }) => {
  const onClick = (href) => {
    window.open(href, "url");
  };

  return (
    <Flex
      justifyContent="space-between"
      display="flex"
      flexWrap="wrap-reverse"
      size="md"
      fontWeight="{hairline}"
      color="purple.400"
      width="100%"
    >
      <Breadcrumb
        w={[300, 400, 500]}
        position={"relative"}
        size="2xl"
        spacing="8px"
        separator={<ArrowRightIcon color="blue.300" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink flexWrap={"wrap"} fontSize="2xl" fontWeight={"thin"}>
            <Link colorSheme="red.300" to="/">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink flexWrap={"wrap"} fontSize="2xl" fontWeight={"thin"}>
            <Link to="/portfolio">Portfolio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink flexWrap={"wrap"} fontSize="2xl" fontWeight={"thin"}>
            <Link to="/art">Art</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink flexWrap={"wrap"} fontSize="2xl" fontWeight={"thin"}>
            <Link to="/aboutme">About Me</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex gap={2}>
        <IconButton
          outline="#00bcd4"
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => onClick("https://github.com/mateasportfolio")}
        ></IconButton>
        <IconButton
          outline="#00bcd4"
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={<FaFreeCodeCamp />}
          isRound="true"
          onClick={() => onClick("https://www.freecodecamp.org/matea")}
        ></IconButton>
        <IconButton
          outline="#00bcd4"
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            onClick("https://www.linkedin.com/in/matea-tabak-83440a230/")
          }
        ></IconButton>

        <IconButton
          outline="#a26dff"
          color={isDark ? "whiteAlpha.1000" : "pink.200"}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
          alignContent="stretch"
          flexDirection="row"
        ></IconButton>
      </Flex>
    </Flex>
  );
};
