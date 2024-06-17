import logo from "./assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between py-9">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" />
        <h1 className="font-black leading-10 capitalize text-[#191825] text-base">
          travlog
        </h1>
      </div>
      <div className="bg-[#5D50C6] w-10 h-10 p-2 flex flex-col  justify-between rounded-md cursor-pointer">
        <span className="block w-full h-[3px] bg-white"></span>
        <span className="block w-full h-[3px] bg-white"></span>
        <span className="block w-full h-[3px] bg-white"></span>
      </div>
    </div>
  );
};
export default Navbar;
