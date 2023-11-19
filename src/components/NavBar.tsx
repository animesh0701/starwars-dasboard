import logo from "../assets/logo.svg"; //image import

import SearchBar from "./SearchBar"; //component import

import { HStack, Image } from "@chakra-ui/react"; //chakra UI component

export const NavBar = () => {
  return (
    <HStack paddingLeft="20px" pr={10} h={140} justifyContent={"space-between"}>
      <Image src={logo} boxSize={["100px", "120px", "140px"]}></Image>
      <SearchBar />
    </HStack>
  );
};
