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
  Text
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import useGetProviders from "../../CustomHooks/GetProviders/useGetProviders";
import { useNavigate } from "react-router-dom";
import { prodErrorMap } from "firebase/auth";
const ViewExpense = () => {
  const { gastos } = useGetProviders();
  const [gastoTotal, setGastoTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentSearch, setCurrentSearch] = useState("");
  
  const expenseDates = () => {
    return gastos.map((gasto) => gasto.FechaProducto);
  };
  const dateSinRepetir = expenseDates().filter((value, index) => {
    return expenseDates().indexOf(value) === index;
  });
  const getExpensesDate = () => {
    let expensesDay = 0;
    filter().map((gasto) => {
      expensesDay = expensesDay + Number(gasto.PrecioProducto);
    });
    return expensesDay;
  };
   const filter = () => {
     return gastos.filter(
      (gasto) => gasto.FechaProducto === currentSearch
    ); 
  }
  const currentExpenses = () => {
    if (!currentSearch) {
      return gastos.slice(currentPage, currentPage + 10);
    } else {   
      return filter().slice(currentPage, currentPage + 10)   
    }
  }; 
  const handleNextPage = () => {
      if (gastos.length - currentPage > 10)
    {
      if (currentExpenses().length > 9) {
         setCurrentPage(currentPage + 10);
      }
    }
  };
  const handleBackPage = () => {
    if (currentPage >= 10) {
    setCurrentPage(currentPage - 10)}
  };

  const handleChange = (event) => {
    setCurrentPage(0);
    setCurrentSearch(event.target.value);
  };

  useEffect(() => {
    
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
                  
                }}
              >
                <Td>{pro.NombrePrducto}</Td>
                <Td>{pro.CantidadProducto}</Td>
                <Td>{pro.PrecioProducto}</Td>
                <Td>{pro.FechaProducto}</Td>
                <Td><Button size={'sm'}>Editar</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
       <Stack>
       <Text fontSize={20}> Gastos TOTAL: ${getExpensesDate()}</Text>

       </Stack>     
                    
    </Stack>
  );
};

export default ViewExpense;
