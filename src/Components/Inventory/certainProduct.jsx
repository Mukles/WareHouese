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
      <div className="container px-5 mx-auto flex justify-center items-center">
        <img src={product.img} className="w-96" alt="" srcset="" />
        <div className="description flex justify-center flex-col items-center space-y-2">
          <p className="text-black font-bold text-lg">
            Price: ${product.price}
          </p>

          <p className="text-sm font-bold">{product.name}</p>
          <p className="text-base font-bold text-[#3A65CF]">
            Item in stock: {product.stock}
          </p>
          <div className="flex items-center justify-center mx-auto">
            {Array(5)
              .fill("")
              .map((item, idx) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill={`${idx <= product.review - 1 ? "#FACC15" : "#1E1E1E"}`}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
          <div className="buttons flex space-x-3">
            <button
              onClick={() => {
                if (product.stock > 0) {
                  product.stock -= 1;
                  setData([...data]);
                } else {
                  alert("This item is stock out!");
                }
              }}
              className="border-2 px-7 text-sm text-[#666666] font-bold rounded-md py-2 border-yellow-400 hover:bg-yellow-400"
            >
              Deliverd
            </button>
            <button
              onClick={() => setShowModal(!currentState)}
              class="block text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="button"
              data-modal-toggle="popup-modal"
            >
              Restock
            </button>
          </div>

          {/***modal preview ****/}
          <div
            id="popup-modal"
            tabindex="-1"
            className={`${
              currentState ? "flex" : "hidden"
            } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center`}
          >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-toggle="popup-modal"
                >
                  <svg
                    onClick={() => setShowModal(false)}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="p-6 text-center">
                  <svg
                    className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    How many item are you want to stock?
                    <input
                      className="focus:outline-none rounded-sm px-2 mt-3"
                      type="number"
                      name="stock"
                    />
                  </h3>
                  <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    data-modal-toggle="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
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
