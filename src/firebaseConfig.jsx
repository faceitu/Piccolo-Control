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
  orderBy,
  limit,
  startAfter,
  startAt,
  onSnapshot,
  endBefore,
  endAt,
} from "firebase/firestore";
import { current } from "@reduxjs/toolkit";

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
  try {
    const docRef = collection(db, "Productos");
    const res = await addDoc(docRef, data);
    alert("guardado exitoso");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function NewExpense(data) {
  try {
    const docRef = collection(db, "Gastos");
    const res = await addDoc(docRef, data);
    alert("guardado exitoso");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function NewSale(data) {
  try {
    const docRef = collection(db, "Ventas");
    const res = await addDoc(docRef, data);
    alert("guardado exitoso");
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function GetVentas() {
  try {
    const ventas = [];
    const querySnapshot = await getDocs(collection(db, "Ventas"));
    querySnapshot.forEach((doc) => {
      ventas.push(doc.data());
    });

    return ventas;
  } catch (error) {}
}

export async function GetProveedores() {
  try {
    const provedores = [];
    const querySnapshot = await getDocs(collection(db, "Proveedores"));
    querySnapshot.forEach((doc) => {
      provedores.push(doc.data());
    });

    return provedores;
  } catch (error) {}
}
export async function GetProducts() {
  try {
    const provedores = [];
    const querySnapshot = await getDocs(collection(db, "Productos"));
    querySnapshot.forEach((doc) => {
      provedores.push(doc.data());
    });

    return provedores;
  } catch (error) {}
}

export async function GetProduct(props) {
  try {
    const q = doc(db, "Productos", props);
    const docu = await getDoc(q);
    console.log("este es el docu", docu);
    console.log(docu.data());
  } catch {
    console.log("error");
  }
  /*  getDoc(q).then((doc) => console.log("este", doc.data()));
} */

  /* querySnapshot.forEach((doc) => {
      provedores.push(doc.data());
    }); */
}
export async function GetGasto() {
  try {
    const first = query(collection(db, "Gastos"), orderBy("FechaProducto"));
    const select = [];
    onSnapshot(first, (snap) => {
      snap.docs.forEach((doc) => {
        select.push(doc.data());
      });
    });

    return select;
  } catch (error) {}
}

export async function GetArtLimpieza() {
  try {
    const artLimpieza = [];
    const querySnapshot = await getDocs(collection(db, "Limpieza"));
    querySnapshot.forEach((doc) => {
      artLimpieza.push(doc.data());
    });

    return artLimpieza;
  } catch (error) {}
}

/* ----------------------------------------- */
/*  PAGINACION */

export async function getPagination(props) {
  console.log(props);
  return new Promise(async (resolve, reject) => {
    const { itemPerPage, currenPage, totalItems } = props;

    const first = query(
      collection(db, "Gastos"),
      where("FechaProducto", "==", props.dataTofilter)
    );
    const documentSnapshots = await getDocs(first);

    var last = {};
    if (currenPage === 1) {
      last = documentSnapshots.docs[currenPage];
    } else {
      last = documentSnapshots.docs[currenPage + itemPerPage];
    }

    let queryy = query(
      collection(db, "Gastos"),
      orderBy("FechaProducto"),
      startAt(last),
      limit(itemPerPage)
    );

    const select = [];
    onSnapshot(queryy, (snap) => {
      snap.docs.forEach((doc) => {
        select.push(doc.data());
      });
      resolve(select);
    });
    console.log(reject);
  });
}

const db = getFirestore(app);
