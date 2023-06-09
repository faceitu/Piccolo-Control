import { useEffect, useState } from "react";
import {
  GetProducts,
  GetProveedores,
  GetArtLimpieza,
  GetGasto,
  GetVentas,
  GetProduct,
} from "../../firebaseConfig";

const useGetProviders = () => {
  const [proveedores, setProveedores] = useState([{}]);
  const [productos, setProductos] = useState([{}]);
  const [artLimpieza, setArtLimpieza] = useState([{}]);
  const [gastos, setGastos] = useState([{}]);
  const [ventas, setVentas] = useState([{}]);
  const [product, setProduct] = useState([]);

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
  const getVentas = async () => {
    const prod = await GetVentas();
    setVentas(prod);
  };

  const getOnlyProduct = async (props) => {
    const prod = await GetProduct(props);
    setProduct(prod);
    console.log(prod, product);
  };

  useEffect(() => {
    getGastos();
    getArtLimpieza();
    getProduc();
    getProv();
    getVentas();
  }, []);

  return {
    proveedores,
    productos,
    artLimpieza,
    gastos,
    ventas,
    product,
    getOnlyProduct,
  };
};
export default useGetProviders;
