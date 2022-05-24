const Discount = () => {
  return (
    <div className="bg-[#233a95]">
      <div className="container px-5 mx-auto">
        <div className="flex justify-between items-center">
          <div className="felx flex-col space-y-2">
            <h3 className="text-lg text-white">
              $20 discount for your first order
            </h3>
            <h1 className="font-bold text-white text-3xl">
              Join our newsletter and get...
            </h1>
            <h5 className="text-white opacity-75 text-base text-semibold">
              Join our email subscription now to get updates <br /> on
              promotions and coupons.
            </h5>
            <div className="bg-white px-2 flex justify-between items-center py-1 rounded-md">
              <i className="fa-solid fa-envelope text-[#C4C5D4] text-lg"></i>
              <input
                className="focus:outline-none px-2"
                type="email"
                name=""
                id=""
              />
              <button className="bg-[#233A95] text-white font-bold py-2 px-3 text-lg rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <img src="/img/brand/coupon.png" srcSet="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
