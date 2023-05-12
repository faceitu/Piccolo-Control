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
import useGetProviders from "../../CustomHooks/GetProviders/useGetProviders";
  
  const NewSaleForm = () => {
    
    const onSubmit = (data) => {

    };
  
    const {productos, ventas} = useGetProviders()
    const Fecha = new Date().toLocaleDateString();
  
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
              >
                {productos.map((prod) => (
                  <option value={prod.Nombre}>{prod.Nombre}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={20}>Cantidad</FormLabel>
              <Input
                {...register("CantidadProducto", {min: 1, max: 99 })}
                
                color="black"
                type="number"
               
          
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
  
  export default NewSaleForm;
  