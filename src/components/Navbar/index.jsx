import logo from "@/assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between py-9 items-center">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" />
        <h1 className="font-black leading-10 capitalize text-black text-base md:text-2xl">
          travlog
        </h1>
      </div>
      <div className="bg-secondary w-10 h-10 p-2 flex flex-col  justify-between rounded-md cursor-pointer md:-order-1 lg:hidden">
        <span className="block w-full h-[3px] bg-white"></span>
        <span className="block w-full h-[3px] bg-white"></span>
        <span className="block w-full h-[3px] bg-white"></span>
      </div>
      <ul className="hidden lg:flex lg:gap-16">
        <li className="text-gray-1/2 text-sm font-bold">
          <a href="#">Home</a>
        </li>
        <li className="text-gray-1/2 text-sm font-bold">
          <a href="#">Discover</a>
        </li>
        <li className="text-gray-1/2 text-sm font-bold">
          <a href="#">Special Deals</a>
        </li>
        <li className="text-gray-1/2 text-sm font-bold">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <button className="px-8 py-4 text-sm font-bold text-[#222831]">
          Log In
        </button>
        <button className="px-8 py-4 text-sm font-bold bg-secondary text-white rounded-100">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Navbar;
