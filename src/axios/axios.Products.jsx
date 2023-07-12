import axios from "axios";

const Esquema_product = {
  nombre_producto: String,
  precio_producto: Number,
  proveedor_prodcuto: String,
  trozable: Boolean,
  stock_producto: Number,
};

const BASE_URL = "https://sam-api.lepis.ar/entities/";
const BASE_URL2 = "https://sam-api.lepis.ar/entities/products";

export async function dataViewer() {
  try {
    const products = await axios.get(
      "https://sam-api.lepis.ar/entities/products"
    );
    return products;
  } catch (error) {}
}
export async function NewProduct(products) {
  try {
    axios.post(BASE_URL + "products", products);
  } catch (error) {}
}

export async function dataView(currentItem, page, size) {
  try {
    const Products = await axios.get(
      `${BASE_URL}${currentItem}?page=${page}&size=${size}`
    );

    return Products;
  } catch (error) {}
}

export async function searchProduct(product) {
  try {
    const sProduct = axios.get(`${BASE_URL}products?Nombre=${product}`)
    return sProduct;
  } catch (error) {}
}

export async function borrar() {
  const products = await axios.get(
    "https://sam-api.lepis.ar/entities/products"
  );
  products.data.elements.map(async (produ) => {
    await axios
      .delete(`${BASE_URL}products/${produ.id}`)
      .then("se borro", produ.id);
  });
}

export async function borrar2() {
  const products = await axios.get("https://sam-api.lepis.ar/entities/sales");
  products.data.elements.map(async (produ) => {
    await axios
      .delete(`${BASE_URL}sales/${produ.id}`)
      .then("se borro", produ.id);
  });
}

export async function costUpdate(product, cost) {
  try {
    
          axios.put(`${BASE_URL}products?Nombre=${product.Nombre}`, {
            Nombre: cost

          })

     
  
  } catch (error) {console.log(error)}
}

/* 
GET {{protocol}}://{{host}}/entities/providers?cuit=20310194698 HTTP/1.1
content-type: {{contentType}}
Authorization: {{token}} */
