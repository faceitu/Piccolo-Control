import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const OutSuccessful = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Link to="/login">Inicia Sesión</Link>
    </Stack>
  );
};

export default OutSuccessful;
