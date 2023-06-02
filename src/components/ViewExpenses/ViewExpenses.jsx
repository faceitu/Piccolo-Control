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
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import useGetProviders from "../../CustomHooks/GetProviders/useGetProviders";
import { useNavigate } from "react-router-dom";
import { prodErrorMap } from "firebase/auth";
import EditModal from "../editModal/EditModal";
import { useDisclosure } from "@chakra-ui/react";
import Paginator from "../Paginator/Paginator";
import usePaginator from "../../CustomHooks/usePaginator";
import Loader from "../Loader/Loader";

const ViewExpense = () => {
  const { gastos } = useGetProviders();
  const [gastoTotal, setGastoTotal] = useState(0);
  const [currentSearch, setCurrentSearch] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataForm, setDataForm] = useState([]);

  const {
    currenPage,
    totalItems,
    itemsToShow,
    nextPage,
    backPage,
    showPerpage,
  } = usePaginator();
  console.log("itemtoShowe", itemsToShow);
  const MyonOpen = (data) => {
    onOpen();
    setDataForm(data);
  };

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
    return gastos.filter((gasto) => gasto.FechaProducto === currentSearch);
  };

  const handleChange = (event) => {
    setCurrentSearch(event.target.value);
  };

  useEffect(() => {}, []);

  return (
    <Stack direction={"column"} width="80vw" margin={"auto"}>
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
            {itemsToShow.map((pro) => {
              console.log("ENTRAA");
              console.log(pro.PrecioProducto);
              console.log(currenPage);
              return (
                <Tr
                  _hover={{
                    bg: theme.colors.secondary.main,
                  }}
                >
                  <Td>{pro.NombrePrducto}</Td>
                  <Td>{pro.CantidadProducto}</Td>
                  <Td>{pro.PrecioProducto}</Td>
                  <Td>{pro.FechaProducto}</Td>
                  <Td>
                    <Button size={"sm"} onClick={() => MyonOpen(pro)}>
                      Editar
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Stack>
        <Text fontSize={20}> Gastos TOTAL: ${getExpensesDate()}</Text>
      </Stack>
      <Paginator
        currentPage={currenPage}
        nextPage={nextPage}
        backPage={backPage}
        totalItems={totalItems}
        showPerpage={showPerpage}
      ></Paginator>
      <EditModal isOpen={isOpen} onClose={onClose} data={dataForm}></EditModal>
    </Stack>
  );
};

export default ViewExpense;
