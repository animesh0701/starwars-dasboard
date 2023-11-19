import { Box, Image, Text, VStack } from "@chakra-ui/react"; //chakra UI imports

const Home = () => {
  return (
    <div>
      <Box bg="white" borderRadius={15} width="40%" m={"auto"}>
        <Image
          src="https://images4.alphacoders.com/132/1327480.png"
          p={2}
          h={["13rem", "15rem", "20rem"]}
          w="100%"
          borderRadius={15}
        ></Image>

        <VStack p={4}>
          <Text fontSize={["2xl", "3xl", "4xl"]} color={"black"}>
            Welcome to Start Wars Dashboard
          </Text>
          <Text fontSize={["xs", "sm", "lg"]} color={"black"}>
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began with the eponymous 1977 film
            and quickly became a worldwide pop culture phenomenon.
          </Text>
        </VStack>
      </Box>
    </div>
  );
};

export default Home;
