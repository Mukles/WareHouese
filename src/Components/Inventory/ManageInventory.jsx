import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../hooks/ProductFeatching";
import Inventory from "./inventory";

const ManageInventory = () => {
  let navigate = useNavigate();

  const catagories = [
    {
      name: "Electronics",
    },
    {
      name: "Canon",
    },
    {
      name: "Nikon",
    },
    {
      name: "Speakers",
    },
    {
      name: "Computer",
    },
  ];

  const [products] = useFetchData();

  return (
    <div className="py-4">
      <div className="container px-5 mx-auto">
        <div className="title mb-3">
          {/*Header*/}
          <h1 className=" flex-col flex sm:flex-row sm:space-x-6">
            <span className="text-black font-bold text-2xl sm:text-xl">
              Shop By Categories
            </span>
            <span className="text-[#7B818F] text-lg">
              Discover Best of Items
            </span>
          </h1>
        </div>
        {/*body*/}
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-blue-800 p-4">
            <ul className="flex flex-col space-y-5">
              {catagories.map((catagory, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-2 text-white hover:text-yellow-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-semibold ">
                    {catagory.name}
                  </span>
                  <div className="">
                    {Array(5).map((star) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-10 mx-auto">
            <div className="grid grid-cols-4">
              {products
                ? products.map((product) => <Inventory product={product} />)
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
