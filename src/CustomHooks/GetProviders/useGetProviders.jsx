import { useState } from "react";
import {
  GetProducts,
  GetProveedores,
  GetArtLimpieza,
  GetGasto
} from "../../firebaseConfig";

const useGetProviders = (props) => {
  const [proveedores, setProveedores] = useState([{}]);
  const [productos, setProductos] = useState([{}]);
  const [artLimpieza, setArtLimpieza] = useState([{}]);
  const [gastos, setGastos] = useState([{}]);


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
  const getGastos = async () => {
    const prod = await GetGasto();
    setGastos(prod);
  };
  return {
    proveedores,
    productos,
    artLimpieza,
    gastos,
    getGastos,
    getProv,
    getProduc,
    getArtLimpieza,
  };
};
export default useGetProviders;
