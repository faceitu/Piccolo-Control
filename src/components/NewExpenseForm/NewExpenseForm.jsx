import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import theme from "../../theme";

import { useForm } from "react-hook-form";
import useGetProviders from "../../CustomHooks/GetProviders/useGetProviders";
import Paginator from "../Paginator/Paginator";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TfiPencil } from "react-icons/tfi";
import { BsTrash, BsFillXCircleFill } from "react-icons/bs";
import axios from "axios";
import { newSale, viewSales } from "../../axios/axios.sales";
import { dataViewer, searchProduct } from "../../axios/axios.Products";
import swal from "sweetalert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

const ExpenseForm = () => {
  const Fecha = new Date().toLocaleDateString();
  const [products, setProducts] = useState();
  const [sellProduct, setSellProduct] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();

  const onSubmit = (pago) => {
    if (sellProduct.length) {
      let suma = 0;
      sellProduct.forEach((venta) =>
        venta.precioTotal
          ? (suma += venta.precioTotal)
          : (suma += venta.precioVenta)
      );

      const formatDate = startDate.toLocaleDateString();
      const finalSale = {
        Ventas: sellProduct,
        FormaPago: pago,
        precioVentaTotal: Number(suma),
        FechaVenta: formatDate,
      };
      swal({
        title: "Desea confirmar? :",
        text: `Ventas por: $ ${suma}  Metodo: ${finalSale.FormaPago}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Venta REGISTRADA", {
            icon: "success",
          });
          newSale(finalSale);
          viewSales();
          setSellProduct([]);
        } else {
          swal("No se registro la venta");
        }
      });
    } else {
      alert("Debe ingresar al menos una venta");
    }
  };

  /*     const existent = (element) => {
    const siono = sellProduct.some((e) => {
      console.log(sellProduct);
      return (e.Nombre = element);
    });
    console.log(siono);
    return siono;
  };
  */
  const handleChange = (event) => {
    searchProduct(event.target.value).then((res) => {
      if (event.target.value) {
        setSellProduct([res.data.elements[0], ...sellProduct]);
      }
    });
  };

  useEffect(() => {
    const viewProd = async () => {
      setProducts(await dataViewer("products"));
    };
    viewProd();
  }, []);

  const handledelete = (findElement) => {
    const filter = sellProduct.filter(
      (element) => element.Nombre !== findElement
    );
    setSellProduct(filter);
  };

  const handlecantProduct = (e, precio, index) => {
    const hola = [...sellProduct];
    hola[index].cantidad = e.target.value;
    hola[index].precioTotal = precio * e.target.value;
    setSellProduct(hola);
  };

  const handlecantProductTotal = (e, index) => {
    const hola = [...sellProduct];
    hola[index].precioTotal = Number(e.target.value);

    setSellProduct(hola);
  };

  const cancelSale = () => {
    swal({
      title: "Desea confirmar? :",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Venta Cancelada", {
          icon: "success",
        });
        setSellProduct([]);
      }
    });
  };
  return (
    <>
      <form
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <HStack fontSize={24} mt={10}>
          <Text fontSize={20}>Fecha de venta:</Text>
          <DatePicker
            locale="es"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </HStack>

        <Stack
          spacing={"4"}
          mt={"10"}
          mb={"40"}
          color={theme.colors.secondary.main}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FormControl alignItems={"center"}>
            <FormLabel fontSize={20}>Producto a vender:</FormLabel>
            <Select
              color="black"
              type="text"
              placeholder="Seleccion"
              onChange={handleChange}
              mt={5}
            >
              {products?.data?.elements.map((prod) => (
                <option value={prod.Nombre}>{prod.Nombre}</option>
              ))}
            </Select>
          </FormControl>
        </Stack>

        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Codigo</Th>
                <Th textAlign={"center"}>Descripcion</Th>
                <Th isNumeric textAlign={"center"}>
                  Cantidad
                </Th>
                <Th isNumeric textAlign={"center"}>
                  Precio
                </Th>
                <Th isNumeric textAlign={"center"}>
                  Total
                </Th>

                <Th textAlign={"center"}>Operaciones</Th>
              </Tr>
            </Thead>
            <Tbody alignItems={"center"}>
              {sellProduct.map((sale, index) => {
                return (
                  <Tr>
                    <Td textAlign={"center"}> {sale.id}</Td>
                    <Td textAlign={"center"}>{sale.Nombre}</Td>
                    <Td textAlign={"center"}>
                      <Input
                        textAlign={"center"}
                        type="number"
                        value={sale.cantidad || "1"}
                        variant="flushed"
                        min="1"
                        onChange={(e) =>
                          handlecantProduct(e, sale.PrecioVenta, index)
                        }
                      ></Input>
                    </Td>
                    <Td textAlign={"center"}>{sale.PrecioVenta}</Td>
                    <Td textAlign={"center"}>
                      <Input
                        required
                        textAlign={"center"}
                        type="number"
                        value={sale.precioTotal || ""}
                        variant="flushed"
                        min="1"
                        onChange={(e) => handlecantProductTotal(e, index)}
                      ></Input>{" "}
                    </Td>
                    <Td textAlign={"center"}>
                      <HStack>
                        <Button
                          onClick={() => handledelete(sale.Nombre)}
                          _hover={{ bg: "#96b3ff", color: "white" }}
                        >
                          <BsTrash size={"20"} />
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
        <HStack justifyContent="space-between" mt={20}>
          <Button onClick={cancelSale} padding="0" variant="ghost">
            <BsFillXCircleFill size={60} color="#b21f57" />
          </Button>
          <Menu>
            <MenuButton
              _hover={{ bg: "white" }}
              variant="ghost"
              as={IconButton}
              rightIcon={<BsFillCheckCircleFill size={60} color="#b21f57" />}
            ></MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => onSubmit("Efectivo")}
                _hover={{ bg: "#96b3ff", color: "white" }}
              >
                Efectivo
              </MenuItem>
              <MenuItem
                onClick={() => onSubmit("Mercado Pago")}
                _hover={{ bg: "#96b3ff", color: "white" }}
              >
                Mercado Pago
              </MenuItem>

              <MenuItem
                onClick={() => onSubmit("Cuenta DNI")}
                _hover={{ bg: "#96b3ff", color: "white" }}
              >
                Cuenta DNI
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </form>
    </>
  );
};

export default ExpenseForm;
