import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchData } from "../../hooks/ProductFeatching";

const CertainProduct = () => {
  const { id } = useLocation();
  const [data, setData] = useFetchData();
  let product = data.find((item) => item.id === id);
  useEffect(() => {
    console.log("hey");
  }, [data]);

  if (product) {
    return (
      <div className="container px-5 mx-auto">
        <img src={product.img} className="mx-auto w-96" alt="" srcset="" />
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
        </div>
      </div>
    );
  }

  return null;
};

export default CertainProduct;
