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
import {
  BsTrash,
  BsFillXCircleFill,
  BsFillCheckCircleFill,
  BsPlusCircleFill,
  BsFillPencilFill,
  BsCashCoin,
  BsCurrencyExchange
} from "react-icons/bs";

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
          icon={<HamburgerIcon color={"white"} boxSize={6} />}
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
          <DrawerBody  >
            <Stack spacing={4} fontSize={18} ml={4} mt={10} width={'100%'}>
              <Stack flexDirection={'row'} spacing={6}  _hover={  {bg: "#dceafc", color: "black"} } >
                   <BsCashCoin size={30} color="#b21f57" />
                   <Linkto to="/home" width = '100%'>Home</Linkto>
              </Stack>
              <Stack flexDirection={'row'} spacing={6}>
              <BsCurrencyExchange size={30} color="#b21f57" />
                 <Linkto to="/movimientos">Movimientos</Linkto>
              </Stack>
             
             
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
