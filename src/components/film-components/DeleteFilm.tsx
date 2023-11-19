import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Button,
  useDisclosure,
  Text,
  MenuItem,
} from "@chakra-ui/react";
import { Film } from "../../hooks/useFilms";
import alert from "../../assets/popup-icons/alert-circle.svg";
import remove from "../../assets/popup-icons/delete.svg";

interface Props {
  film: Film;
}

const DeleteFilm = ({ film }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <MenuItem color={"red"} as={"button"} onClick={onOpen}>
        <Image src={remove}></Image>
        <Text pl={2}>Delete</Text>
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#e3e3e3"} p={2} m={"auto"} ml={4} mr={4}>
          <Image ml={6} mt={2} src={alert} boxSize={16}></Image>
          <ModalHeader fontSize={"3xl"}>Caution!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete "{film.title}"?</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="grey"
              variant={"outline"}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="red" pl={7} pr={7}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DeleteFilm;
