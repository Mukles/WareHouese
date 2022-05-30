import { useFetchData } from "../hooks/ProductFeatching";
import Discount from "./Discount/discount";
import Inventory from "./Inventory/inventory";
import Footer from "./shared/Footer/footer";
import Slider from "./shared/Slider/slider";
import ShopsBrand from "./ShopsBrand/shopsBrand";

const Home = () => {
  const [data] = useFetchData();
  return (
    <>
      <Slider />
      {/***Inventory***/}
      <div className="container py-8 mx-auto">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {data.length > 6
              ? data
                  .slice(0, 5)
                  .map((product, idx) => (
                    <Inventory key={idx} product={product} />
                  ))
              : data.map((product, idx) => (
                  <Inventory key={idx} product={product} />
                ))}
          </div>
        </div>
      </div>

      {/***DISCOUNT ***/}
      <Discount />
      {/***SHOPS BRAND ***/}
      <ShopsBrand />
      {/***Footer ***/}
      <Footer />
    </>
  );
};

export default Home;
