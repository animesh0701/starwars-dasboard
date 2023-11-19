import Films from "../../assets/icons/films.svg";

import { Film } from "../../hooks/useFilms";

import { Card, Image, CardBody, HStack, Text } from "@chakra-ui/react";

import { PopperMenu } from "./PopperMenu";

interface Props {
  film: Film;
}

const FilmCard = ({ film }: Props) => {
  return (
    <Card bg="transparent">
      <Image
        src="https://static-ca.gamestop.ca/images/products/762907/7scrmax2.jpg"
        borderRadius={10}
        marginBottom={1.5}
        h={180}
      ></Image>
      <CardBody bg="#344064" borderRadius={10} p={4}>
        <HStack justifyContent={"space-between"}>
          <HStack position="relative">
            <Image src={Films}></Image>
            <Text fontSize={["sm", "lg", "xl"]} color={"white"}>
              {film.title}
            </Text>
          </HStack>

          <PopperMenu film={film} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default FilmCard;
