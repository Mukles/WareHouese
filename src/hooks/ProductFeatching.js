import axios from 'axios';
import { useEffect, useState } from "react";

export  function useFetchData() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/product.json').then(res => setData(res.data));
  }, []);


  return [data, setData];
}
