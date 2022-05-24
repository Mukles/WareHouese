import { useNavigate } from "react-router-dom";

const Inventory = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center flex flex-col space-y-2 px-2 items-center border-2 shadow-lg hover:shadow-2xl pb-5 rounded-lg">
      <img className="w-60" src={product.img} alt="" srcSet="" />
      <p className="text-black font-bold text-lg">${product.price}</p>
      <p className="text-sm font-bold">{product.name}</p>
      <p className="text-base font-bold text-[#3A65CF]">{product.name}</p>
      <div className="flex items-center justify-center mx-auto">
        {Array(5)
          .fill("")
          .map((item, idx) => (
            <svg
              key={idx}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
      </div>
      <button
        onClick={() => {
          navigate(`/inventory/${product.id}`);
        }}
        className="border-2 px-7 text-sm text-[#666666] font-bold rounded-md py-2 border-yellow-400 hover:bg-yellow-400"
      >
        + Update
      </button>
    </div>
  );
};

export default Inventory;
