import { useState } from "react";
import {
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as Linkto } from "react-router-dom";

const HamburgerMenu = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Menu = children;

  return (
    <>
      <Flex justify="flex-end" align="center" wrap="wrap">
        <IconButton
          marginRight={"20px"}
          aria-label="Menu"
          icon={<HamburgerIcon color={"white"} boxSize={10} />}
          variant="ghost"
          onClick={onOpen}
        />
      </Flex>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        colorScheme="messenger"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={"#34312f"} color="white">
            Menú
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Linkto to="/home">Home</Linkto>
              <Linkto to="/movimientos">Movimientos</Linkto>
              <Linkto to="/alta-proovedores">Alta de Proovedores</Linkto>
              <Linkto to="/lista-proovedores">Ver Proveedores</Linkto>
              <Linkto to="/lista-productos">Ver Productos</Linkto>
              <Linkto to="/gastos">Ingresar gastos</Linkto>
              <Linkto to="/lista-gastos">Ver gastos</Linkto>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
