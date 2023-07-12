import axios from "axios";
const BASE_URL = "https://sam-api.lepis.ar/entities/sales";

export async function newSale(sale) {
  try {
    axios.post(BASE_URL, sale);
  } catch (error) {}
}

export async function viewSales() {
  try {
    const sales = await axios.get(
      "https://sam-api.lepis.ar/entities/sales?size=10000"
    );
    return sales.data.elements;
  } catch (error) {}
}
