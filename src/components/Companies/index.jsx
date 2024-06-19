import companyImg1 from "@/assets/company1.png";
import companyImg2 from "@/assets/company2.png";
import companyImg3 from "@/assets/company3.png";
import companyImg4 from "@/assets/company4.png";
import companyImg5 from "@/assets/company5.png";
const Companies = () => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex gap-7">
        <img src={companyImg1} alt="" className="w-[30%]" />
        <img src={companyImg2} alt="" className="w-[30%]" />
        <img src={companyImg3} alt="" className="w-[30%]" />
      </div>
      <div className="flex justify-center gap-6">
        <img src={companyImg4} alt="" />
        <img src={companyImg5} alt="" />
      </div>
    </div>
  );
};

export default Companies;
