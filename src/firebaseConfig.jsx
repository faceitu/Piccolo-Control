import "firebase/compat/auth";
import firebase from "firebase/compat/app";

import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  ssetDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBb0Kpp8ZcEbkP6SiZgtXVFT1ActcvDiEg",
  authDomain: "piccolo-4e393.firebaseapp.com",
  projectId: "piccolo-4e393",
  storageBucket: "piccolo-4e393.appspot.com",
  messagingSenderId: "74503931096",
  appId: "1:74503931096:web:a8c46cc6516d476a3e03ad",
  measurementId: "G-0BH357KP8C",
});

export async function NewProveedor(data) {
  try {
    const docRef = collection(db, "Proveedores");
    const res = await addDoc(docRef, data);
    alert("guardado exitoso");
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function NewProduct(data) {
  console.log(data);
  try {
    const docRef = collection(db, "Productos");
    const res = await addDoc(docRef, data);
    alert("guardado exitoso");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function GetProveedores() {
  try {
    const provedores = [{}];
    const querySnapshot = await getDocs(collection(db, "Proveedores"));
    querySnapshot.forEach((doc) => {
      provedores.push(doc.data());
    });

    return provedores;
  } catch (error) {}
}
export async function GetProducts() {
  try {
    const provedores = [{}];
    const querySnapshot = await getDocs(collection(db, "Productos"));
    querySnapshot.forEach((doc) => {
      provedores.push(doc.data());
    });

    return provedores;
  } catch (error) {}
}
const db = getFirestore(app);
