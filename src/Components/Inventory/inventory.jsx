import axios from "axios";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const Inventory = ({ product, setProduct }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {}, []);
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
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10"
              ></span>
              {product.name}
            </div>
          </h3>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{product.price}৳</p>
        </div>
      </div>
      <div className="flex mx-auto mt-3">
        <button
          onClick={() => navigate(`/inventory/${product._id}`)}
          className="mt-3 bg-slate-600 px-2 py-1 mx-auto text-lg text-orange-500 font-medium flex space-x-3 justify-center items-center"
        >
          <span>Manage</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
        <button
          onClick={() => {
            if (!user && loading === false) {
              alert("login required!");
            } else {
              if (
                window.confirm("Are you sure you want to delete this item!") ===
                true
              ) {
                axios
                  .delete(
                    `https://afternoon-brushlands-19443.herokuapp.com/product/${product._id}`
                  )
                  .then((res) => {
                    const { products, message } = res.data;
                    alert(message);
                    setProduct([...products]);
                  });
              }
            }
          }}
          className="mt-3 bg-slate-600 px-2 py-1 mx-auto text-lg text-orange-500 font-medium flex space-x-3 justify-center items-center"
        >
          <span>Delete</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Inventory;
