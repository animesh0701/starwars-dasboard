import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

export const NavBar = () => {
  return (
    <HStack paddingLeft="20px">
      <Image src={logo} boxSize="72px"></Image>
    </HStack>
  );
};
