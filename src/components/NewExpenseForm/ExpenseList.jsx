import {
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
import React from "react";
import theme from "../../theme";

const ExpenseList = (gastos) => {
  return (
    <Stack>
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
            <Thead>
              <Tr>
                <Th>GASTO</Th>
                <Th>CANTIDAD</Th>
                <Th>TOTAL</Th>
              </Tr>
            </Thead>
            <Tbody>
              {gastos.props.map((gasto) => (
                <Tr>
                  <Td>{gasto.NombrePrducto}</Td>
                  <Td>{gasto.CantidadProducto}</Td>
                  <Td>{gasto.PrecioProducto}</Td>
                </Tr>
              ))}
            </Tbody>
            <Thead>
              <Tr>
                <Th>TOTAL</Th>
              </Tr>
            </Thead>
            <Tr>
              <Td>{"453940589034"}</Td>
            </Tr>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default ExpenseList;
