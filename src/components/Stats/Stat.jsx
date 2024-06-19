const Stat = ({ num, title }) => {
  return (
    <div className="rounded-[32px] border-2 border-gray shadow-sm p-8 flex flex-col gap-4 items-center">
      <span className="text-orange text-4xl font-bold">{num}</span>
      <span className="text-black text-lg  font-bold">{title}</span>
    </div>
  );
};

export default Stat;
