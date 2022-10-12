import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  // ChevronDownIcon,
} from "@chakra-ui/react";

function MenuPage() {
  return (
    <div>
      <Menu>
        <MenuButton as={Button}>MENU</MenuButton>
        <MenuList>
          <MenuItem>Code</MenuItem>
          <MenuItem>Hoisting</MenuItem>
          <MenuItem>Work</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default MenuPage;
