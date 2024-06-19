import starImg from "@/assets/star.png";
const Destionation = ({ img, price, title, location, rating }) => {
  return (
    <div className="shadow-2xl rounded-3xl">
      <img src={img} alt={`${title}`} />
      <div className="p-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-primary font-bold text-2xl">${price}</span>
            <p className="text-black text-2xl font-bold">{title}</p>
          </div>
          <p className="font-bold text-lg text-gray-3/4">{location}</p>
        </div>
        <div className="flex gap-2">
          <span className="text-orange text-2xl font-bold">{rating}</span>
          <img src={starImg} alt="star icon" />
        </div>
      </div>
    </div>
  );
};

export default Destionation;
