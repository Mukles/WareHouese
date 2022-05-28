import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/ProductFeatching";

const CertainProduct = () => {
  const { id } = useParams();
  const [data, setData] = useFetchData();
  let product = data.find((item) => item.id === parseInt(id));
  const [currentState, setShowModal] = useState(false);

  if (product) {
    return (
      <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
        <img
          className="h-full w-full md:w-1/3 object-cover rounded-lg rounded-r-none pb-5/6"
          src={`${product.img}`}
          alt="bag"
        />
        <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
          <div className="flex items-center">
            <h2 className="text-xl text-gray-800 font-medium mr-auto">
              {product.name}
            </h2>
            <p className="text-gray-800 font-semibold tracking-tighter">
              only {product.price}$
            </p>
          </div>
          <p className="text-sm text-gray-700 mt-4">
            Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam
            reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit
            earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis
            numquam tempore commodi ipsa suscipit laboriosam, sit earum at
            sequi.
          </p>
          <div className="flex items-center justify-end mt-4 top-auto">
            <button className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">
              Delete
            </button>
            <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">
              Edit
            </button>
            <button className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">
              Manage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <h1 className="text-4xl text-red-600 text-center mt-3 font-bold">
      Loading...
    </h1>
  );
};

export default CertainProduct;
