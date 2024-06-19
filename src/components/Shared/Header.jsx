const Header = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-primary text-base md:text-2xl font-bold tracking-[.5em] uppercase text-center">
        {title}
      </p>
      <p className="text-[32px] md:text-[40px] font-bold text-center text-black">
        {description}
      </p>
    </div>
  );
};

export default Header;
