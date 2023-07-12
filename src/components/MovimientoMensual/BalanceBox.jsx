import { useState, useEffect } from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";

const BalanceBox = (props) => {
  const { bg, ventas, tipo } = props;
  const [total, setTotal] = useState();

  useEffect(() => {
    const getTipos = ventas.filter((venta) => venta.FormaPago === tipo);
    let suma = 0;
    getTipos.map((sale) => (suma += sale.precioVentaTotal));
    setTotal(suma);
  }, [ventas]);

  return (
    <Stack bg={bg} height={"200px"} width={"500px"} alignItems={" center"}>
      <Stack>
        <Text fontSize={42} mt={2} color={"white"}>
          {tipo}
        </Text>
      </Stack>
      <Stack>
        <Text color="white" fontSize={40} mt={3}>
          $ {total}
        </Text>
      </Stack>
    </Stack>
  );
};

export default BalanceBox;
