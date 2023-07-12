import {
  Button,
  Stack,
  HStack,
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
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { dataView } from "../../axios/axios.Products";
import {
  BsTrash,
  BsFillXCircleFill,
  BsFillCheckCircleFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import Paginator from "../Paginator/Paginator";
import usePaginator from "../../CustomHooks/usePaginator";

const ViewProducts = () => {
  const {
    currenPage,
    totalItems,
    itemsToShow,
    size,
    nextPage,
    backPage,
    showPerpage,
    Filter,
  } = usePaginator();
  const [itemsTotal, setItemsTotal] = useState();
  const [currentItem, setCurrentItem] = useState("products");
  const [productos, setProductos] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const verlos = async () => {
      setProductos(await dataView(currentItem, currenPage, size));
    };
    verlos();
  }, [currentItem, currenPage, size]);
  console.log("produictos, ", productos);

  return (
    <Stack direction={"column"} width="80vw" margin={"auto"}>
      <Stack direction={"column"} mb={8}>
        <TableContainer mt={20}>
          <Table size="md" margin={"auto"}>
            <Thead>
              <Tr>
                <Th>PRODUCTO</Th>
                <Th>PRECIO</Th>
                <Th>PROVEEDOR</Th>
                <Th>TROZABLE</Th>
              </Tr>
            </Thead>
            <Tbody color="black">
              {productos?.data?.elements?.map((pro) => (
                <Tr key={pro.id}>
                  <Td>{pro.Nombre}</Td>
                  <Td>{pro.PrecioVenta}</Td>
                  <Td>{pro.Proveedor}</Td>
                  <Td>{pro.Trozable}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Stack mt={30} alignItems={"flex-end"}>
          <Button
            onClick={() => navigate("/nuevo-producto")}
            padding="0"
            variant="ghost"
          >
            <BsPlusCircleFill size={60} color="#b21f57" />
          </Button>
        </Stack>
      </Stack>
      <Stack mt={20}>
        <Paginator
          currentPage={currenPage}
          nextPage={() => nextPage(productos?.data?.total)}
          backPage={() => backPage(productos?.data?.total)}
          showPerpage={showPerpage}
        ></Paginator>
      </Stack>
    </Stack>
  );
};

export default ViewProducts;
