import { useEffect, useState } from "react";
import Balance from "../../components/MovimientoMensual/Balance";
import { HStack, Stack, Text } from "@chakra-ui/react";
import BalanceBox from "../../components/MovimientoMensual/BalanceBox";

import { viewSales } from "../../axios/axios.sales";

const Movimientos = () => {
  const [movSales, setMovSales] = useState([]);

  useEffect(() => {
    viewSales().then((res) => setMovSales(res));
  }, []);

  return (
    <HStack
      justifyContent={"center"}
      height={"80vh"}
      alignItems={"flex-start"}
      spacing={6}
      Width="90%"
      maxWidth={"1200px"}
      p={10}
    >
      <Stack>
        <BalanceBox bg="#b21f57" ventas={movSales} tipo="Efectivo"></BalanceBox>
        <BalanceBox
          bg="#5b7dcf"
          ventas={movSales}
          tipo="Mercado Pago"
        ></BalanceBox>
        <BalanceBox
          bg="#4aa201"
          ventas={movSales}
          tipo="Cuenta DNI"
        ></BalanceBox>
      </Stack>
    </HStack>
  );
};

export default Movimientos;
