import { useState } from "react";
import {
  Checkbox,
  CheckboxGroup,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Button,
  Text,
  border,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import { NewProduct, borrar, borrar2 } from "../../axios/axios.Products";
import theme from "../../theme";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BsTrash,
  BsFillXCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const borrartodo = () => {
    borrar2();
  };
  const onSubmit = (data) => {
    const dataWithID = { ...data, id: uuidv4() };
    try {
      NewProduct(dataWithID);
      reset();
      swal({
        title: "Producto guardado con exito",
        icon: "success",
        timer: "2000",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
          <Stack
            flexDirection={"colum"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"100%"}
            width={"100%"}
            mb={34}
          >
            <Text fontSize={40} color={"#b21f57"} fontWeight={1000}>
              NUEVO PRODUCTO
            </Text>
          </Stack>
          <Stack width={"70%"} mb={34}>
            <FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Nombre del producto</FormLabel>
                <Input
                  {...register("Nombre", { required: true })}
                  color="black"
                  type="text"
                />
                {errors.nombre?.type === "required" && (
                  <p role="alert" bg="red">
                    Nombre requerido
                  </p>
                )}
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Precio Costo</FormLabel>
                <Input
                  {...register("PrecioCosto", { required: true })}
                  color="black"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Precio a la venta</FormLabel>
                <Input
                  {...register("PrecioVenta", { required: true })}
                  color="black"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>% de Remarque</FormLabel>
                <Input
                  {...register("Precio", { required: true })}
                  color="black"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={20}>Proveedor del producto</FormLabel>
                <Input
                  {...register("Proveedor", { required: true })}
                  color="black"
                  type="text"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor={null}>Es trozable ?</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="24px">
                    <Radio value="Sasuke">Si</Radio>
                    <Radio value="Sage of the six Paths">No</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </FormControl>
          </Stack>

          <HStack justifyContent={"space-between"} width={"80%"}>
            <Button onClick={() => navigate("/lista-productos")}>
              <BsFillXCircleFill size={60} />
            </Button>

            <Button type="submit">
              <BsFillCheckCircleFill size={60} />
            </Button>
          </HStack>
        </Stack>
      </form>
      {/*      <Button onClick={borrartodo}>Eliminar toda la data</Button> */}
    </>
  );
};

export default NewProductForm;
