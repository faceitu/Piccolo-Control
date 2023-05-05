import { Box, Container, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../header/Header";
import Rutas from "../../Routes/Rutas";
import theme from "../../theme";

const Layout = ({ children }) => {
  return (
    <Stack
      flexDirection={"column"}
      width="100%"
      display={"flex"}
      alignItems={"center"}
    >
      {children}
    </Stack>
  );
};

export default Layout;
