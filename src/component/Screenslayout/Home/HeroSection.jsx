import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/Icons/BuildingModal.png";

const CTA_LIST = [
  { text: "Start as Buyer", delay: 0, ml: "" },
  { text: "List a Property", delay: 300, ml: "ml-6" },
  { text: "Join as Agent", delay: 500, ml: "ml-11" },
];

const aosLeft = {
  "data-aos": "fade-left",
  "data-aos-duration": "1000",
};

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-brandLight dark:bg-brandDark relative pt-20 pb-16 overflow-hidden">
      {/* BIG TITLE */}
      <h1 className="text-brandDark dark:text-brandLight font-head uppercase font-Poppins font-[500] text-[210px] leading-[250px] mt-5 text-center tracking-[16px]">
        DIVI EIGHT
      </h1>

      {/* MAIN CARD */}
      <div className="bg-brandDark2 grid grid-cols-2 relative rounded-2xl overflow-hidden min-h-[75vh] mx-10">
        {/* LEFT CONTENT */}
        <div className="px-10 py-9">
          <div>
            <h1
              {...aosLeft}
              data-aos-delay="300"
              className="w-[56%] font-[600] font-head leading-[27px] pb-5 text-[22px] text-brandLight tracking-[0.3px]"
            >
              Buy Real Estate Together — The Smart Way to Own Property
            </h1>

            <h1
              {...aosLeft}
              data-aos-delay="500"
              className="w-[56%] font-[400] text-[17px] leading-[21px] h-[47px] font-head text-brandLight tracking-[0.3px]"
            >
              Co-own property with verified buyers, guided by vetted agents,
              backed by secure smart-ledger transparency.
            </h1>
          </div>

          {/* CTA PILLS */}
          <div className="px-10 pb-10 pt-20 flex flex-col gap-3">
            {CTA_LIST.map(({ text, delay, ml }) => (
              <h1
                key={text}
                {...aosLeft}
                data-aos-delay={delay}
                className={`border-brandGreen px-6 py-2 tracking-[0.2px] w-max font-[500] rounded-full border font-head text-brandLight text-[14.5px] ${ml}`}
              >
                {text}
              </h1>
            ))}
          </div>
        </div>

        {/* BLUR BACKGROUND */}
        <div className="bg-[#47aeb573] w-[650px] left-[25%] top-[40%] absolute h-[650px] rounded-2xl blur-3xl" />

        {/* ARROW ICON */}
        <div className="flex justify-end items-end pb-16 pr-20">
          <div
            data-aos="zoom-in-down"
            className="bg-[#46adb494] text-brandLight relative w-max rounded-lg px-3 py-3"
          >
            <ArrowUpRight className="size-16" />
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <img
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        src={heroImage}
        alt=""
        className="absolute bottom-16 left-[35%] h-[70%] w-[28%] z-50"
      />
    </section>
  );
};

export default HeroSection;
