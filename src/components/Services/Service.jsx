const Service = ({ img, title, description }) => {
  return (
    <div className="px-8 py-8 md:px-16 md:py-16 md:gap-16 flex flex-col gap-8 items-center rounded-[32px] border-2 border-gray">
      <div className="w-16 h-16">
        <img src={img} alt="service image" />
      </div>
      <p className="text-black font-bold text-3xl text-center">{title}</p>
      <p className="text-gray-1/2 font-bold text-lg md:leading-loose text-center leading-snug">
        {description}
      </p>
    </div>
  );
};

export default Service;
