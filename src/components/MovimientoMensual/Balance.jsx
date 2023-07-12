import { HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { viewSales } from "../../axios/axios.sales";

const Balance = () => {
  const [movSales, setMovSales] = useState([]);

  useEffect(() => {
    const checkSales = async () => {
      setMovSales(await viewSales());
    };
    checkSales();
  }, []);
  console.log(movSales);

  return <Stack></Stack>;
};

export default Balance;
