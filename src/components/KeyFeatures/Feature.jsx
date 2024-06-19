import clsx from "clsx";

const Feature = ({ img, title, description, isBorder }) => {
  const containerCss = clsx("p-8 flex flex-col gap-8", {
    "border-2 border-gray rounded-[32px]": isBorder,
  });
  return (
    <div className={containerCss}>
      <div className="w-[100px] h-[100px]">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold text-black">{title}</p>
        <p className="text-lg font-bold text-gray-1/2">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
