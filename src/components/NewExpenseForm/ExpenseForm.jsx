import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import theme from "../../theme";
import { BsPlusCircle } from "react-icons/bs";
import { useForm } from "react-hook-form";

const ExpenseForm = (props) => {
  const onSubmit = (data) => {
    console.log("ver la data", data);
    props.handleState(data);
    reset();
    setCantProducto(1);
    setProductSelected("");
  };

  const [cantProducto, setCantProducto] = useState(1);

  const handleCantidad = (event) => {
    setCantProducto(event.target.value);
    setValue("PrecioProducto", Number(productSelected.Precio * cantProducto));
  };

  const [productSelected, setProductSelected] = useState({});

  const handleChange = (event) => {
    setProductSelected(
      props.props.find((p) => p.Nombre === event.target.value)
    );

    console.log(productSelected);
    setValue("PrecioProducto", productSelected.Precio);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();

  return (
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
          <FormControl alignItems={"center"}>
            <FormLabel fontSize={20}>Producto</FormLabel>
            <Select
              {...register("NombrePrducto", { required: true })}
              color="black"
              type="text"
              placeholder="Seleccion"
              onChange={handleChange}
            >
              {props.props.map((prod) => (
                <option value={prod.Nombre}>{prod.Nombre}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontSize={20}>Cantidad</FormLabel>
            <Input
              {...register("CantidadProducto")}
              color="black"
              type="number"
              onChange={handleCantidad}
              value={cantProducto}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel fontSize={20}>Costo</FormLabel>
            <Input
              {...register("PrecioProducto")}
              color="black"
              type="number"
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel fontSize={20}>Fecha del gasto</FormLabel>
            <Input
              {...register("FechaProducto")}
              color="black"
              type="text"
              /*  value={Fecha} */
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
  );
};

export default ExpenseForm;
