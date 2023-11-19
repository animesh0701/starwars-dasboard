import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

export const NavBar = () => {
  return (
    <HStack paddingLeft="20px" pr={10} h={140} justifyContent={"space-between"}>
      <Image src={logo} boxSize={["100px", "120px", "140px"]}></Image>
      <SearchBar />
    </HStack>
  );
};
