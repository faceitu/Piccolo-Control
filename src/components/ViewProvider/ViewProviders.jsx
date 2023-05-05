import {
  Button,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetProveedores } from "../../firebaseConfig";
import { prototype } from "events";
import theme from "../../theme";
import useGetProviders from "../../CustomHooks/GetProviders/useGetProviders";
import { color } from "framer-motion";

const ViewProviders = () => {
  const { proveedores, getProv } = useGetProviders();

  useEffect(() => {
    getProv();
  }, []);

  return (
    <Stack direction={"column"} width="80vw" margin={"auto"}>
      <Stack direction={"column"} mb={8}></Stack>
      <TableContainer>
        <Table
          variant="striped"
          size="sm"
          margin={"auto"}
          bg={theme.colors.secondary.cuatro}
          colorScheme="orange"
        >
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>PROVEEDOR</Th>
              <Th>TIPO</Th>
              <Th>TELEFONO</Th>
              <Th>CUIT</Th>
            </Tr>
          </Thead>
          <Tbody color="black">
            {proveedores.map((pro) => (
              <Tr _hover={{ bg: theme.colors.secondary.main, color: " white" }}>
                <Td>{pro.Nombre}</Td>
                <Td>{pro.Precio}</Td>
                <Td>{pro.tipoProveedor}</Td>
                <Td>{pro.telefonoproveedor}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ViewProviders;
