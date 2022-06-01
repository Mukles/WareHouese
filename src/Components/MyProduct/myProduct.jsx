import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import Inventory from "../Inventory/inventory";

const MyProdcut = () => {
  const [user, loading] = useAuthState(auth);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://afternoon-brushlands-19443.herokuapp.com/myProduct/${user?.email}`
      )
      .then((res) => setProduct(res.data));
  }, [loading]);

  return (
    <div className="container py-8 mx-auto">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-10">
          <h2
            className={`${
              products.length < 1 && "text-red-600"
            } text-center text-3xl font-extrabold tracking-tight text-gray-900`}
          >
            {!loading
              ? products.length
                ? "My Product"
                : "You have not yet add any product yet."
              : "loading"}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.length > 0 &&
            products.map((product, idx) => (
              <Inventory key={idx} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyProdcut;
