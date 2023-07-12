import { Stack, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import { app } from "../../firebaseConfig";
import { setCurrentUser } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LogSuccessful = (user) => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const handlerOut = () => {
    logout();
  };
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent="space-between"
      gap={8}
    >
      <Text>{user.user.name}</Text>

      <Image
        src={user.user.picture}
        alt={user.user.name}
        borderRadius="full"
        boxSize="50px"
      />

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
