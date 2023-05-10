import { useState, useEffect } from "react";
import {
  GetProducts,
  GetProveedores,
  GetArtLimpieza,
} from "../../firebaseConfig";

const useGetProviders = (props) => {
  const [proveedores, setProveedores] = useState([{}]);
  const [productos, setProductos] = useState([{}]);
  const [artLimpieza, setArtLimpieza] = useState([{}]);

  const getProv = async () => {
    const prod = await GetProveedores();
    setProveedores(prod);
  };

  const getProduc = async () => {
    const prod = await GetProducts();
    setProductos(prod);
  };
  const getArtLimpieza = async () => {
    const prod = await GetArtLimpieza();
    setArtLimpieza(prod);
  };

  return {
    proveedores,
    productos,
    artLimpieza,
    getProv,
    getProduc,
    getArtLimpieza,
  };
};
export default useGetProviders;
