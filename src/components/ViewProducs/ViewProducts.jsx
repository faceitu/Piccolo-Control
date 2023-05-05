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
import theme from "../../theme";
import useGetProviders from "../../CustomHooks/GetProviders/useGetProviders";
import NewProducForm from "../NewProductForm/NewProduc";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const { productos, getProduc } = useGetProviders();
  const navigate = useNavigate();

  useEffect(() => {
    getProduc();
  }, []);

  return (
    <Stack direction={"column"} width="80vw" margin={"auto"}>
      <Stack direction={"column"} mb={8}></Stack>
      <Button onClick={() => navigate("/nuevo-producto")}>
        Nuevo producto
      </Button>
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
              <Th>PRODUCTO</Th>
              <Th>PRECIO</Th>
              <Th>PROVEEDOR</Th>
              <Th>TROZABLE</Th>
            </Tr>
          </Thead>
          <Tbody color="black">
            {productos.map((pro) => (
              <Tr
                _hover={{
                  bg: theme.colors.secondary.main,
                  color: " white",
                }}
              >
                <Td>{pro.Nombre}</Td>
                <Td>{pro.Precio}</Td>
                <Td>{pro.Proveedor}</Td>
                <Td>{pro.Trozable}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ViewProducts;
