import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Proveedores from "../components/ViewProvider/ViewProviders";
import Expenses from "../pages/Expenses/Expenses";
import { NewProveedor } from "../firebaseConfig";
import NewProvider from "../pages/NewProvider/NewProvider";
import Providers from "../pages/Proveedores/Providers";
import { Sales } from "../pages/Sales/Sales";
import ViewProviders from "../components/ViewProvider/ViewProviders";
import Login from "../pages/Login/Login";
import ViewProducts from "../components/ViewProducs/ViewProducts";
import NewProductForm from "../components/NewProductForm/NewProduc";
import NewExpense from "../components/NewExpenseForm/NewExpenseForm";
import NewExpenseForm from "../components/NewExpenseForm/NewExpenseForm";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/gastos" element={<NewExpenseForm />} />
      <Route path="/ingresos" element={<Sales />} />
      <Route path="/login" element={<Login />} />
      <Route path="/alta-proovedores" element={<NewProvider />} />
      <Route path="/lista-productos" element={<ViewProducts />} />
      <Route path="/lista-proovedores" element={<ViewProviders />} />
      <Route path="/nuevo-producto" element={<NewProductForm />} />
    </Routes>
  );
};

export default Rutas;
