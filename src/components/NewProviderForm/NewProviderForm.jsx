import { useState } from "react";
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
import { NewProveedor } from "../../firebaseConfig";
import theme from "../../theme";
import { FaPlus } from "react-icons/fa";

const AltaProovedores = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    producto: "",
  });

  const [productos, setProductos] = useState([{ nombre: "", Precio: 0 }]);

  const newProducto = () => {
    setProductos([...productos, { nombre: "", Precio: 0 }]);
  };

  const onSubmit = (data) => {
    NewProveedor(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          maxWidth: "1000px",
          width: "80vw",
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
            ALTA DE PROVEEDORES
          </Text>
          <FormControl>
            <FormControl>
              <FormLabel fontSize={20}>Nombre Proovedor</FormLabel>
              <Input
                {...register("nombre", { required: true })}
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
              <FormLabel fontSize={20}>Tipo de proovedor</FormLabel>
              <Input
                {...register("tipoProveedor", { required: true })}
                color="black"
                type="text"
              />
              <FormHelperText>
                Vendedor de pollo, congelados, pescado Etc.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={20}>Cuit del Proovedor</FormLabel>
              <Input
                {...register("cuitproveedor", { required: true })}
                color="black"
                type="number"
              />
              <FormHelperText>Donde se le depositan los pagos.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={20}>Telefono</FormLabel>
              <Input
                {...register("telefonoproveedor", { required: true })}
                color="black"
                type="number"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormLabel fontSize={"30"} textAlign={"center"}>
              PRODUCTOS
            </FormLabel>
            <FormControl
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexWrap={"wrap"}
              flexDirection={"column"}
            >
              {productos.map((producto, index) => (
                <Stack width={"80%"} key={index}>
                  <FormControl>
                    <FormLabel>Tipo de Producto</FormLabel>
                    <Input
                      {...register(`producto.${index}.nombre`, {
                        required: true,
                      })}
                      color="black"
                      type="text"
                      defaultValue={producto.nombre}
                    />
                    <FormLabel>Precio del Producto</FormLabel>
                    <Input
                      {...register(`producto.${index}.precio`, {
                        required: true,
                      })}
                      color="black"
                      type="text"
                      defaultValue={producto.precio}
                    />
                  </FormControl>
                </Stack>
              ))}
              <Stack width={"20%"} mb={"10"} mt={4}>
                <Button variant={"Mybutton"} onClick={newProducto}>
                  <FaPlus />
                </Button>
              </Stack>
            </FormControl>
          </FormControl>
          <Button type="submit" variant={"Mybutton"}>
            Agregar
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default AltaProovedores;
