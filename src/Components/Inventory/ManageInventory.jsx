import { useState } from "react";
import { useFetchData } from "../../hooks/ProductFeatching";
import AddProudctModal from "../modal/modal";
import Inventory from "./inventory";

const ManageInventory = () => {
  const [products, setProduct] = useFetchData();
  const [showModal, setShowmodal] = useState(false);
  return (
    <>
      <div className="bg-indigo-900 text-center py-4 lg:px-4">
        <div
          className="p-2 cursor-pointer bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span
            onClick={() => {
              setShowmodal(true);
            }}
            className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
          >
            Add
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            to add a new product click here.
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
      <div className="container py-8 mx-auto">
        <AddProudctModal setOff={setShowmodal} showModal={showModal} />
        <div className="grid md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-5">
          {products.length > 0 ? (
            products.map((product, idx) => (
              <Inventory key={idx} product={product} setProduct={setProduct} />
            ))
          ) : (
            <h1 className="text-3xl font-bold text-red-500 text-center">
              Loading...
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ManageInventory;
