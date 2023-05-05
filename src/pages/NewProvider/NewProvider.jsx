import React from "react";
import NewProvaiderForm from "../../components/NewProviderForm/NewProviderForm";
import { Box, Stack } from "@chakra-ui/react";

const NewProvider = () => {
  return (
    <Stack h={"auto"} w="80vw" margin={"0 auto"} justifyContent={"center"}>
      <NewProvaiderForm></NewProvaiderForm>
    </Stack>
  );
};

export default NewProvider;
