import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProudctModal from "../modal/modal";
import ReStock from "../modal/reStock";

const CertainProduct = () => {
  const { id } = useParams();
  const [showModal, setShowmodal] = useState(false);
  const [showRestock, SetshowRestock] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((res) => setProduct(res.data));
  }, [product]);

  if (product) {
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
        <AddProudctModal setOff={setShowmodal} showModal={showModal} />
        <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-auto ">
          <img
            className="h-full w-full md:w-1/3 object-cover rounded-lg rounded-r-none pb-5/6"
            src={`${product.imgUrl}`}
            alt=""
          />
          <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
            <div className="flex items-center">
              <h2 className="text-xl text-gray-800 font-medium mr-auto">
                {product.name}
              </h2>
              <div className="flex flex-col text-gray-800 font-semibold tracking-tighter whitespace-nowrap">
                <span>Only</span>
                <span className="font-bold text-xl">{product.price}৳</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 flex-wrap">
              Review:{" "}
              <div className="flex space-x-1 ml-1 items-center">
                {Array(5)
                  .fill("")
                  .map((item, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
              <span className="text-xs text-red-700 -mt-1 font-extrabold">
                |
              </span>
              <p className="text-bold">
                <span className="text-yellow-800 font-bold">Stocks: </span>
                <span className="text-orange-500 font-extrabold text-lg">
                  {product.stock}
                </span>
              </p>
              <span className="text-xs text-red-700 -mt-1 font-extrabold">
                |
              </span>
              <p className="text-bold">
                <span className="text-yellow-800 font-bold">Supplir: </span>
                <span className="text-orange-500 hover:underline text-sm">
                  {product.supplirName}
                </span>
              </p>
            </div>
            <p className="text-sm text-gray-700 mt-4">{product.Description}</p>
            <div className="flex items-center justify-end mt-4 top-auto">
              <button
                onClick={() => {
                  if (window.confirm("Deliverd the item?")) {
                    axios
                      .put(
                        `http://localhost:8080/proudct/deliver/${product._id}`
                      )
                      .then((res) => setProduct(res.data));
                  }
                }}
                className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline"
              >
                Deliverd
              </button>
              <button
                onClick={() => {
                  SetshowRestock(true);
                }}
                className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2"
              >
                Restock
              </button>
              <ReStock
                product={product}
                setProduct={setProduct}
                showRestock={showRestock}
                SetshowRestock={SetshowRestock}
              />
              <button className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">
                Manage
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <h1 className="text-4xl text-red-600 text-center mt-3 font-bold">
      Loading...
    </h1>
  );
};

export default React.memo(CertainProduct);
