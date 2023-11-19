import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="lg" w={250}>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="white" />}
        />
        <Input
          type="text"
          color={"white"}
          placeholder="Search..."
          border="1px solid white"
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
