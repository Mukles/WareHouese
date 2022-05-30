import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => setProduct(res.data));
  }, []);

  return [products, setProduct];
};
