import { useFetchData } from "../../hooks/ProductFeatching";
import Inventory from "./inventory";

const ManageInventory = () => {
  const [products] = useFetchData();
  return (
    <div className="container py-8 mx-auto">
      <div className="grid grid-cols-4">
        {products.length > 0 ? (
          products.map((product, idx) => (
            <Inventory key={idx} product={product} />
          ))
        ) : (
          <h1 className="text-3xl font-bold text-red-500 text-center">
            Loading...
          </h1>
        )}
      </div>
    </div>
  );
};

export default ManageInventory;
