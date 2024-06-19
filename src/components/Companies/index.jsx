import companyImg1 from "@/assets/company1.png";
import companyImg2 from "@/assets/company2.png";
import companyImg3 from "@/assets/company3.png";
import companyImg4 from "@/assets/company4.png";
import companyImg5 from "@/assets/company5.png";
const Companies = () => {
  return (
    <div className="flex flex-col gap-8 py-8 lg:py-16 lg:flex-row lg:w-[1184px] lg:mx-auto lg:gap-16">
      <div className="flex gap-7 md:justify-center lg:justify-between lg:gap-0 lg:flex-1">
        <img src={companyImg1} alt="" className="w-[30%] md:w-[25%]" />
        <img src={companyImg2} alt="" className="w-[30%] md:w-[25%]" />
        <img src={companyImg3} alt="" className="w-[30%] md:w-[25%]" />
      </div>
      <div className="flex justify-center gap-6 lg:gap-16 lg:flex-1 lg:justify-start ">
        <img src={companyImg4} alt="" className="w-[30%] md:w-[25%]" />
        <img src={companyImg5} alt="" className="w-[30%] md:w-[25%]" />
      </div>
    </div>
  );
};

export default Companies;
