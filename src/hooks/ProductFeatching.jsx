import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://afternoon-brushlands-19443.herokuapp.com/")
      .then((res) => setProduct(res.data));
  }, []);
  return [products, setProduct];
};
