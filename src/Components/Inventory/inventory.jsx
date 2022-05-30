import { useNavigate } from "react-router-dom";

const Inventory = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={product.imgUrl}
          alt="Front of men&#039;s Basic Tee in black."
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <div
              onClick={() => navigate(`/inventory/${product._id}`)}
              className="cursor-pointer"
            >
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.name}
            </div>
          </h3>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>
      <button className="mt-3 bg-slate-600 px-2 py-1 mx-auto text-lg text-orange-500 font-medium flex space-x-3 justify-center items-center">
        <span>Manage</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Inventory;
