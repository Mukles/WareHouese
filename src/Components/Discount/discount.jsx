const Discount = () => {
  return (
    <div className="bg-[#233a95]">
      <div className="container pt-5 px-5 mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
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
          </div>
          <div className="bg-white flex flex-shrink">
            <div className="icon px-1 flex justify-center items-center">
              <i className="fa-solid fa-envelope text-gray-400"></i>
            </div>
            <input
              className="px-2 flex-grow focus:outline-none py-2"
              type="email"
              name=""
              id=""
            />
            <button className="ml-auto bg-yellow-400 font-white hover:bg-yellow-500 px-1 font-bold">
              Subscribe
            </button>
          </div>
          <img src="/img/brand/coupon.png" srcSet="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
