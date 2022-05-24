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
      <div className="container px-5 mx-auto">
        <h1 className="text-5xl py-3 font-bold text-center mb-5">Inventroy</h1>
        <div className="grid grid-cols-3 gap-3">
          {data.map((product, idx) => (
            <Inventory key={idx} product={product} />
          ))}
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
