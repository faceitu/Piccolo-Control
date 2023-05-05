import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { app } from "../../firebaseConfig";
import { setCurrentUser } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const LogSuccessful = (user) => {
  const dispatch = useDispatch();
  const navigate = useNavigate;

  const handlerOut = () => {
    app.auth().signOut() && dispatch(logOut());
    navigate("/home");
  };
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent="space-between"
      gap={8}
    >
      <Text>{user.user}</Text>
      <Text
        _hover={{ cursor: "Pointer", textDecoration: "underline" }}
        onClick={handlerOut}
      >
        Logout
      </Text>
    </Stack>
  );
};

export default LogSuccessful;
