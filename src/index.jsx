import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-lepis.us.auth0.com"
    clientId="aN4Yy5vom5vSqBJfj2cKxS8n1FVfQkcT"
    authorizationParams={{
      audience: "https://dev-sam-api.lepis.ar/",
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </Auth0Provider>
);
reportWebVitals();
