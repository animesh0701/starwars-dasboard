import React from "react";
import { useState } from "react";
//importing icons
import view from "../assets/popup-icons/eye.svg";
import share from "../assets/popup-icons/share.svg";
import download from "../assets/popup-icons/download.svg";
import edit from "../assets/popup-icons/edit.svg";
import move from "../assets/popup-icons/move.svg";
import lock from "../assets/popup-icons/LockSimple.svg";
import remove from "../assets/popup-icons/delete.svg";

//importing menu from chakra ui
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

import menu from "../assets/Menu.svg";
import { Film } from "../hooks/useFilms";

interface Props {
  film: Film;
}

export const PopperMenu = ({ film }: Props) => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} bg="">
          <Image src={menu}></Image>
        </MenuButton>
        <MenuList color={"black"}>
          <MenuItem>
            <Image src={view}></Image>
            <Text pl={2}>View</Text>
          </MenuItem>
          <MenuItem>
            <Image src={download}></Image>
            <Text pl={2}>Download</Text>
          </MenuItem>
          <MenuItem>
            <Image src={edit}></Image>
            <Text pl={2}>Rename</Text>
          </MenuItem>
          <MenuItem>
            <Image src={share}></Image>
            <Text pl={2}>Share Link</Text>
          </MenuItem>
          <MenuItem>
            <Image src={move}></Image>
            <Text pl={2}>move</Text>
          </MenuItem>
          <MenuItem>
            <Image src={lock}></Image>
            <Text pl={2}>Mark Private</Text>
          </MenuItem>
          <MenuItem color={"red"}>
            <Image src={remove}></Image>
            <Text pl={2}>Delete</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};
