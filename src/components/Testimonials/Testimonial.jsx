import ReactStars from "react-rating-stars-component";

const Testimonial = ({ img, title, rating, description }) => {
  const [name, job] = title.split("/");
  return (
    <div className="flex flex-col gap-16 items-center text-center">
      <img src={img} alt="profile picture" />
      <div className="flex flex-col gap-8 items-center">
        <p className="text-lg font-bold">
          <span className="text-orange">{name} </span>{" "}
          <span className="text-gray-3/4"> / {job}</span>
        </p>
        <ReactStars size={32} edit={false} value={rating} />
      </div>
      <p className="text-gray-3/4 text-lg font-bold">{description}</p>
    </div>
  );
};

export default Testimonial;
