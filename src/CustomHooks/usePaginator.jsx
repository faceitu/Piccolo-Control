import { useState, useEffect } from "react";
import { getPagination } from "../firebaseConfig";

const usePaginator = (props) => {
  const [currenPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [items, setItems] = useState([props]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [dataTofilter, setDataToFilter] = useState("");

  const nextPage = () => {
    console.log(itemsToShow.length, itemPerPage);
    if (!(itemsToShow.length < itemPerPage)) {
      setCurrentPage(currenPage + itemPerPage);
    }
  };

  const backPage = () => {
    if (!(currenPage - itemPerPage < 0)) {
      setCurrentPage(currenPage - itemPerPage);
    }
  };
  const showPerpage = (cantItem) => {
    setItemPerPage(cantItem);
  };

  const Filter = (filterData) => {
    setDataToFilter(filterData);
  };

  useEffect(() => {
    const Myfunc = async () =>
      setItemsToShow(
        await getPagination({
          itemPerPage,
          currenPage,
          totalItems,
          dataTofilter,
        })
      );
    Myfunc();
  }, [currenPage, itemPerPage, dataTofilter]);

  return {
    nextPage,
    backPage,
    showPerpage,
    Filter,
    currenPage,
    itemsToShow,
    totalItems,
  };
};

export default usePaginator;
