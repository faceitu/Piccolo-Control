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
import { useNavigate } from "react-router-dom";


const ViewExpense = () => {
  const { gastos, getGastos } = useGetProviders();

  const [gastoTotal, setGastoTotal] = useState(0)
  const [cantTotal, setCantTotal] = useState(0)
  

  const getTotalProducts = () => {
      let total = 0
      gastos.map(gasto => {
      total = total +  gasto.PrecioProducto
     })
     return total
  }

  const  getTotalCant = () => {
    let total = 0
    gastos.map(gasto => {
    total = total +  Number(gasto.CantidadProducto)
   })
 
   return total
}



  useEffect(() => {
    setGastoTotal(getTotalProducts())
    setCantTotal(getTotalCant())

  }, [gastos]);


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
              <Th>GASTO</Th>
              <Th>CANTIDAD</Th>
              <Th>PRECIO</Th>
              <Th>FECHA</Th>
            </Tr>
          </Thead>
          <Tbody color="black">
            {gastos.map((pro) => (
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
              <Tr >
                <Th fontSize={20}>
                  TOTAL
                </Th>
                <Th fontSize={20}>
                 {cantTotal}
                </Th>
                <Th fontSize={20}>
                { gastoTotal } 
                </Th>
                <Th>
                  -
                </Th>

              </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ViewExpense;
