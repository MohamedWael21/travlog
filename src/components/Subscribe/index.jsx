import Header from "@/components/Shared/Header";
import emailImg from "@/assets/email.png";
const Subscribe = () => {
  return (
    <div className="px-8 py-16 md:py-32 md:px-16 bg-[rgba(250,205,73,0.08)] shadow-md rounded-[32px]">
      <div className="flex flex-col gap-16">
        <Header
          title="subscribe to our newsletter"
          description="Prepare yourself & let’s explore the beauty of the world"
        />
        <div className="flex flex-col gap-8  md:grid md:grid-cols-[2fr_1fr]">
          <div className="relative">
            <input
              type="text"
              className="rounded-2xl border-2 w-full border-gray text-sm  md:text-2xl font-bold text-gray-3/4 pr-8 pl-[72px] py-6 placeholder-gray-3/4 focus-within:outline-none"
              placeholder="Your Email"
            />
            <img src={emailImg} alt="" className="absolute top-6 left-8" />
          </div>
          <button className="bg-secondary text-base md:text-2xl font-bold text-white px-16 py-6 rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
