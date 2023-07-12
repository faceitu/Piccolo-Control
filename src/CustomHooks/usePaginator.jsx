import { useState, useEffect } from "react";
import { getPagination } from "../firebaseConfig";

const usePaginator = () => {
  const [currenPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(5);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [dataTofilter, setDataToFilter] = useState("");

  const nextPage = (cantTottalItems) => {
    if (currenPage <= cantTottalItems / size) {
      setCurrentPage(currenPage + 1);
    }
  };

  const backPage = () => {
    if (currenPage > 1) {
      setCurrentPage(currenPage - 1);
    }
  };
  const showPerpage = (cantItem) => {
    setSize(cantItem);
  };

  const Filter = (filterData) => {
    setCurrentPage(0);
    setDataToFilter(filterData);
  };

  return {
    nextPage,
    backPage,
    showPerpage,
    Filter,
    currenPage,
    itemsToShow,
    totalItems,
    size,
  };
};

export default usePaginator;
