import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons"; //Chakra Ui impots

const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="lg" w={[200, 230, 250]}>
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
