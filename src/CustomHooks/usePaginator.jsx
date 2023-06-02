import { useState, useEffect } from "react";
import { getPagination } from "../firebaseConfig";

const usePaginator = (props) => {
  const [currenPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [items, setItems] = useState([props]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const nextPage = () => {
    if (!(itemsToShow.length < itemPerPage)) {
      setCurrentPage(currenPage + itemPerPage);
    }
  };

  const backPage = () => {
    if (!(currenPage - itemPerPage < 0)) {
      console.log("hola");
      setCurrentPage(currenPage - itemPerPage);
    }
  };
  const showPerpage = (cantItem) => {
    setItemPerPage(cantItem);
  };

  useEffect(() => {
    const Myfunc = async () =>
      setItemsToShow(
        await getPagination({ itemPerPage, currenPage, totalItems })
      );
    Myfunc();
  }, [currenPage, itemPerPage]);

  return {
    nextPage,
    backPage,
    showPerpage,
    currenPage,
    itemsToShow,
    totalItems,
  };
};

export default usePaginator;
