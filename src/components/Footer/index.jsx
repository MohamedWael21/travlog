import logo from "@/assets/logo.png";
import facebookImg from "@/assets/facebook.png";
import tiwtterImg from "@/assets/twitter.png";
import instagramImg from "@/assets/instagram.png";
import FooterNav from "@/components/Footer/FooterNav";
const Footer = () => {
  return (
    <div className="py-8 flex flex-col gap-16 md:py-16 lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-8 lg:w-[45%]">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" />
            <h1 className="font-black leading-10 capitalize text-black text-base md:text-2xl">
              travlog
            </h1>
          </div>
          <p className="text-gray-1/2 text-base font-bold md:text-2xl md:leading-loose">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#">
            <img src={facebookImg} alt="facebook link" />
          </a>
          <a href="#">
            <img src={tiwtterImg} alt="twitter link" />
          </a>
          <a href="#">
            <img src={instagramImg} alt="instagram link" />
          </a>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default Footer;
