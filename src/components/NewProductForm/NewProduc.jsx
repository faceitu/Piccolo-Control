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
} from "@chakra-ui/react";
import { useForm, useFieldArray } from "react-hook-form";
import { NewProduct } from "../../firebaseConfig";
import theme from "../../theme";

import { Navigate, useNavigate } from "react-router-dom";

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    NewProduct(data);
    reset();
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
          <Button onClick={() => navigate("/lista-productos")}> Back </Button>
          <Text fontSize={40} mb={"70"} textAlign={"center"}>
            NUEVO PRODUCTO
          </Text>
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
              <FormLabel fontSize={20}>Precio</FormLabel>
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
            <Button type="submit" mt={20}>
              Agregar
            </Button>
          </FormControl>
        </Stack>
      </form>
    </>
  );
};

export default NewProductForm;
