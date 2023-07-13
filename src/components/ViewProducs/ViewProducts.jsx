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
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  cookieStorageManager,
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
  BsFillPencilFill
} from "react-icons/bs";
import Paginator from "../Paginator/Paginator";
import usePaginator from "../../CustomHooks/usePaginator";
import {costUpdate} from "../../axios/axios.Products"
import swal from "sweetalert";
import { bg } from "date-fns/locale";
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
  const [newCost, setNewCost] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const verlos = async () => {
      setProductos(await dataView(currentItem, currenPage, size));
    };
    verlos();
  }, [currentItem, currenPage, size, productos]);

  const handleNewCost = (e) => {
      setNewCost(e.target.value)
  }

  const handleChangeCost = (e, product, cost) => {
    if (cost >= 1) { 
      swal({
        title: "Desea confirmar? :",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Se actualizo el precio", {
            icon: "success",
          });
          costUpdate(product, cost)
        }
      });
    } else {
      swal("Los valores no peuden ser negativos", {
        icon: "error",
        
      });
    }
    
  }
  return (
    <Stack direction={"column"} width="80vw" margin={"auto"} >
      <Stack direction={"column"} mb={8} padding={1}>
        <TableContainer mt={20} padding={1}>
          <Table size="md" margin={"auto"}  >
            <Thead>
              <Tr padding={1}>
                <Th>PRODUCTO</Th>
                <Th>PRECIO COSTO</Th>
                <Th >PRECIO VENTA</Th>
                <Th>PROVEEDOR</Th>
                <Th>OPCIONES</Th>
              </Tr>
            </Thead>
            <Tbody color="black" padding={1}>
              {productos?.data?.elements?.map((pro,index) => (
                <Tr key={pro.id} padding={1}  _hover={{ bg: "#dceafc", color: "black" }}>
                  <Td padding={2}>{pro.Nombre}</Td>
                  <Td padding={2}>{pro.PrecioCosto}</Td>
                  <Td padding={2}>
                  <Input 
                        color={ newCost >= 1 ? 'green' : 'red'}
                        required
                        textAlign={"center"}
                        type="number"
                        min={1}
                        width={'80px'}
                        defaultValue={pro.PrecioVenta || ""}
                        variant="flushed"  
                      /*   placeholder= {pro.PrecioVenta} */
                        onChange={handleNewCost}
                      ></Input>
                       <Button
                            onClick={(e) =>
                              handleChangeCost(e, pro, newCost)
                            }
                          _hover={{ bg: "#96b3ff", color: "white" }}
                          mr = {2}
                          variant='ghost'
                          padding={1}
                        >
                         <BsFillPencilFill color="#b21f57" padding={1} />
                        </Button>
                    </Td>
                  <Td padding={2}>{pro.Proveedor}</Td>
                  <Td textAlign={"center"} padding={2}  >
                       
                        <Button   
                          _hover={{ bg: "#96b3ff", color: "white" }}
                          variant='ghost'
                        >
                          <BsTrash  color="#b21f57"/>
                        </Button>
                    </Td>    
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
            <BsPlusCircleFill size={40} color="#b21f57" />
          </Button>
        </Stack>
      </Stack>
      <Stack mt={10} justifyContent={'center'} alignItems={'center'}>
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
