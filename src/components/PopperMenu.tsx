import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
import Details from "../pages/Details";
import DeleteFilm from "./deletefilm";

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
            <Link to="/details" state={{ film: film }}>
              <Text pl={2}>View</Text>
            </Link>
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
          <DeleteFilm film={film} />
        </MenuList>
      </Menu>
    </>
  );
};
