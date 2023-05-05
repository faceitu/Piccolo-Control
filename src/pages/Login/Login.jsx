import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import { useForm, useFieldArray } from "react-hook-form";
import handleLogin from "../../firebaseConfig";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";
import { app } from "../../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const onsubmit = (data) => {
    app
      .auth()
      .signInWithEmailAndPassword(data.user, data.pass)
      .then(() => {
        dispatch(setCurrentUser(data.user));
        reset();
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      height={"90vh"}
      width={"60%"}
    >
      <form
        style={{
          width: "60%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit(onsubmit)}
      >
        <FormControl>
          <FormLabel>User</FormLabel>
          <Input {...register("user", { required: true })} type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input {...register("pass", { required: true })} type="Password" />
          <FormHelperText>We'll never share your Password.</FormHelperText>
        </FormControl>
        <Button
          type="submit"
          mt={"4"}
          bg={theme.colors.secondary.dos}
          color={"white"}
        >
          LogIn
        </Button>
      </form>
    </Stack>
  );
};

export default Login;
