import {
  Button,
  FormControl,
  FormLabel,
  Select,
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
import { useNavigate } from "react-router-dom";
import { prodErrorMap } from "firebase/auth";

const ViewExpense = () => {
  const { gastos } = useGetProviders();

  const [gastoTotal, setGastoTotal] = useState(0);
  const [cantTotal, setCantTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");

  const expenseDates = () => {
    return gastos.map((gasto) => gasto.FechaProducto);
  };

  const dateSinRepetir = expenseDates().filter((value, index) => {
    return expenseDates().indexOf(value) === index;
  });

  const getTotalProducts = () => {
    let total = 0;
    gastos.map((gasto) => {
      total = total + gasto.PrecioProducto;
    });
    return total;
  };

  const getTotalCant = () => {
    let total = 0;
    gastos.map((gasto) => {
      total = total + Number(gasto.CantidadProducto);
    });

    return total;
  };

  const currentExpenses = () => {
    if (!currentSearch) {
      return gastos.slice(currentPage, currentPage + 10);
    } else {
      const filter = gastos.filter(
        (gasto) => gasto.FechaProducto === currentSearch
      );
      return filter.slice(currentPage, currentPage + 10);
    }
  };

  const handleNextPage = () => {
    if (gastos.length - currentPage > 10) {
      setCurrentPage(currentPage + 10);
    }
  };

  const handleChange = (event) => {
    setCurrentPage(1);
    setCurrentSearch(event.target.value);
  };

  const handleBackPage = () => {
    if (currentPage > 10) setCurrentPage(currentPage - 10);
  };

  useEffect(() => {
    setGastoTotal(getTotalProducts());
    setCantTotal(getTotalCant());
  }, [gastos]);

  return (
    <Stack direction={"column"} width="80vw" margin={"auto"}>
      <Button onClick={handleNextPage}>Siguiente</Button>
      <Button onClick={handleBackPage}>Atras</Button>
      <FormControl alignItems={"center"}>
        <FormLabel fontSize={20}>Producto</FormLabel>
        <Select
          color="black"
          type="text"
          placeholder="Seleccion"
          onChange={handleChange}
        >
          {dateSinRepetir.map((prod) => (
            <option value={prod}>{prod}</option>
          ))}
        </Select>
      </FormControl>
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
              <Th>GASTO</Th>
              <Th>CANTIDAD</Th>
              <Th>PRECIO</Th>
              <Th>FECHA</Th>
            </Tr>
          </Thead>
          <Tbody color="black">
            {currentExpenses().map((pro) => (
              <Tr
                _hover={{
                  bg: theme.colors.secondary.main,
                  color: " white",
                }}
              >
                <Td>{pro.NombrePrducto}</Td>
                <Td>{pro.CantidadProducto}</Td>
                <Td>{pro.PrecioProducto}</Td>
                <Td>{pro.FechaProducto}</Td>
              </Tr>
            ))}
            {/* <Tr>
              <Th fontSize={20}>TOTAL</Th>
              <Th fontSize={20}>{cantTotal}</Th>
              <Th fontSize={20}>{gastoTotal}</Th>
              <Th>-</Th>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ViewExpense;
