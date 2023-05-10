import { useState, useEffect } from "react";
import { HStack, Radio, RadioGroup, Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  border,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { GetProducts, NewProduct } from "../../firebaseConfig";
import theme from "../../theme";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import useGetProviders from "../../CustomHooks/GetProviders/useGetProviders";
import { getDateFormat } from "../../utils/formatDate";
import "react-datepicker/dist/react-datepicker.css";
import { BsPlusCircle } from "react-icons/bs";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import { couldStartTrivia } from "typescript";

const dateToday = new Date().toLocaleDateString();

const NewExpenseForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const { productos, getProduc } = useGetProviders();
  const { artLimpieza, getArtLimpieza } = useGetProviders();
  const [gastos, SetGastos] = useState([{}]);
  console.log("estos son lsos originakles", productos);
  const [productSelected, setProductSelected] = useState({});
  const [cantProduct, setcantProduct] = useState(1);
  const [Fecha, setFecha] = useState(dateToday);

  const handleChange = (event) => {
    setProductSelected(productos.find((p) => p.Nombre == event.target.value));
  };
  const handleCant = (event) => {
    setcantProduct(event.target.value);
  };

  const handleState = (data) => {
    SetGastos([data, ...gastos]);
  };

  useEffect(() => {
    getProduc();
    getArtLimpieza();
  }, []);

  const onSubmit = (data) => {
    reset();
  };

  return (
    <>
      <ExpenseForm props={productos} handleState={handleState}></ExpenseForm>
      <ExpenseForm props={artLimpieza} handleState={handleState}></ExpenseForm>

      <Button>Agregar</Button>

      <ExpenseList props={gastos}></ExpenseList>
      {/* <Stack spacing={10}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <Stack
            spacing={"4"}
            mt={"10"}
            color={theme.colors.secondary.main}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={40} mb={"70"} textAlign={"center"}>
              NUEVO GASTO
            </Text>

            <FormControl display="flex" flexDirection={"row"}>
              <FormControl alignItems={"center"}>
                <FormLabel fontSize={20}>Producto</FormLabel>
                <Select
                  {...register("NombrePrducto", { required: true })}
                  color="black"
                  type="text"
                  value={productSelected.Nombre}
                  onChange={handleChange}
                >
                  {productos.map((prod) => (
                    <option value={prod.Nombre}>{prod.Nombre}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Cantidad</FormLabel>
                <Input
                  {...register("CantidadProducto", { required: true })}
                  color="black"
                  type="number"
                  onChange={handleCant}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Costo</FormLabel>
                <Input
                  {...register("PrecioProducto")}
                  color="black"
                  type="text"
                  value={productSelected.Precio * cantProduct}
                  disabled
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Fecha del gasto</FormLabel>
                <Input
                  {...register("FechaProducto")}
                  color="black"
                  type="text"
                  value={Fecha}
                  disabled
                ></Input>
              </FormControl>
              <FormControl
                mt={9}
                ml={10}
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <Button type="submit" margin={"0 auto"}>
                  <BsPlusCircle size={"30"} />
                </Button>
              </FormControl>
            </FormControl>
          </Stack>
        </form>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <Stack
            spacing={"4"}
            mt={"10"}
            color={theme.colors.secondary.main}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FormControl display="flex" flexDirection={"row"}>
              <FormControl>
                <FormLabel fontSize={20}>Limpieza</FormLabel>
                <Select
                  {...register("NombreLimpieza", { required: true })}
                  color="black"
                  type="text"
                  value={productSelected.Nombre}
                  onChange={handleChange}
                >
                  {productos.map((prod) => (
                    <option value={prod.Nombre}>{prod.Nombre}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Cantidad</FormLabel>
                <Input
                  {...register("CantidadLimpieza", { required: true })}
                  color="black"
                  type="number"
                  onChange={handleCant}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Costo</FormLabel>
                <Input
                  {...register("PrecioLimpieza")}
                  color="black"
                  type="text"
                  value={productSelected.Precio * cantProduct}
                  disabled
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Fecha del gasto</FormLabel>
                <Input
                  {...register("FechaLimpieza")}
                  color="black"
                  type="text"
                  value={Fecha}
                  disabled
                ></Input>
              </FormControl>
              <FormControl
                mt={9}
                ml={10}
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <Button type="submit" margin={"0 auto"}>
                  <BsPlusCircle size={"30"} />
                </Button>
              </FormControl>
            </FormControl>
          </Stack>
        </form>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <Stack
            spacing={"4"}
            mt={"10"}
            color={theme.colors.secondary.main}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FormControl display="flex" flexDirection={"row"}>
              <FormControl>
                <FormLabel fontSize={20}>Descartables</FormLabel>
                <Select
                  {...register("NombreDescartable", { required: true })}
                  color="black"
                  type="text"
                  value={productSelected.Nombre}
                  onChange={handleChange}
                >
                  {productos.map((prod) => (
                    <option value={prod.Nombre}>{prod.Nombre}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Cantidad</FormLabel>
                <Input
                  {...register("CantidadDescartable")}
                  color="black"
                  type="number"
                  onChange={handleCant}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Costo</FormLabel>
                <Input
                  {...register("PrecioDescartable")}
                  color="black"
                  type="text"
                  value={productSelected.Precio * cantProduct}
                  disabled
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Fecha del gasto</FormLabel>
                <Input
                  {...register("FechaDescartable")}
                  color="black"
                  type="text"
                  value={Fecha}
                  disabled
                ></Input>
              </FormControl>
              <FormControl
                mt={9}
                ml={10}
                display={"flex"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <Button type="submit" margin={"0 auto"}>
                  <BsPlusCircle size={"30"} />
                </Button>
              </FormControl>
            </FormControl>
          </Stack>
        </form>
        <Stack
          mt={"10"}
          color={theme.colors.secondary.main}
          justifyContent={"center"}
        >
          <Button>Agregar</Button>
        </Stack>
       
      </Stack> */}
    </>
  );
};

export default NewExpenseForm;
