import { useState, useEffect } from "react";
import { GetProducts, GetProveedores } from "../../firebaseConfig";

const useGetProviders = (props) => {
  const [proveedores, setProveedores] = useState([{}]);
  const [productos, setProductos] = useState([{}]);

  const getProv = async () => {
    const p = await GetProveedores();
    setProveedores(p);
  };

  const getProduc = async () => {
    const prod = await GetProducts();
    setProductos(prod);
  };

  return {
    proveedores,
    productos,
    getProv,
    getProduc,
  };
};
export default useGetProviders;
