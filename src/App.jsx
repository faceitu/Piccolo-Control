import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Rutas from "./Routes/Rutas";
import { Provider } from "react-redux";
import store from "./redux/store";
import { useAuth0 } from "@auth0/auth0-react";
import axios, { isCancel, AxiosError } from "axios";
import Home from "./pages/Home/Home";
import { setCurrentUser } from "../src/redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();

  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) return;
    const runAsync = async () => {
      if (!isAuthenticated) {
        loginWithRedirect();
      } else {
        const token = await getAccessTokenSilently();
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        dispatch(setCurrentUser(token));
      }
    };
    runAsync();
  }, [isAuthenticated, loginWithRedirect, isLoading, getAccessTokenSilently]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <Header />
          <Rutas />
        </Layout>
      ) : (
        <logIn></logIn>
      )}
    </>
  );
}
export default App;
