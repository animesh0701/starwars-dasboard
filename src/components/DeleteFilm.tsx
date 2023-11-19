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
import { Film } from "../hooks/useFilms";
import alert from "../assets/popup-icons/alert-circle.svg";
import remove from "../assets/popup-icons/delete.svg";

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
        <ModalContent bg={"#e3e3e3"} p={2}>
          <Image src={alert} boxSize={16}></Image>
          <ModalHeader>Caution!</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <Text>Are you sure you want to delete "{film.title}"?</Text>
          <ModalFooter>
            <Button
              colorScheme="grey"
              variant={"outline"}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="red">Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DeleteFilm;
