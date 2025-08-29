const Card = () => {
  return (
    <div className="bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 w-[21.875rem] h-[46.875rem] md:w-[37.5rem] md:h-[28.5rem]">
      <img
        src="/image-product-mobile.jpg"
        alt="product mobile"
        className="max-w-full h-auto rounded-t-lg md:hidden"
      />
      <img
        src="/image-product-desktop.jpg"
        alt="product mobile"
        className=" rounded-l-lg h-full hidden md:block"
      />
      <div className="p-8 flex flex-col items-start justify-center gap-6 md:gap-8 text-grey">
        <div>
          <p className="text-preset-4 tracking-[0.5em]">PERFUME</p>
          <h1 className=" text-preset-1 text-black py-6">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-preset-3 tracking-wider">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <h2 className="text-preset-1 text-green-500">$149.99</h2>
          <p className="line-through text-preset-5">$169.99</p>
        </div>
        <button className="bg-green-500 flex gap-4 px-8 py-4 rounded-lg text-white text-preset-2 w-full justify-center items-center hover:bg-green-700 transition duration-300 cursor-pointer">
          <img src="/icon-cart.svg" alt="icon cart" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Card;
