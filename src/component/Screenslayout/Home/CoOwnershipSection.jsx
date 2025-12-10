import { Button } from "@/component/ui/Button";
import BgImage from "@/assets/Banners/h-01.jpg"
import HeroImage1 from "@/assets/Banners/h-02.jpg"
import HeroImage2 from "@/assets/Banners/h-03.jpg"



// BACKGROUND STYLES
const AboutBgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#000000db",
  backgroundBlendMode: "color",
  backgroundPosition: "bottom",
};



export default function CoOwnershipSection() {
  return (
    <section style={AboutBgImage} className="relative dark py-20 px-6 md:px-14">
      <div className=" grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-md font-sans uppercase  text-brandWhite">
            Introducing
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Independent Co-Ownership
          </h2>
          <p className="text-lg text-gray-300 font-medium">
            Buys Shares | Sell Shares | Learn How
          </p>
          <p className="text-gray-400">
            We transform awesome vacation homes from “Ownership” into “Co-Ownership”. We don’t sell real estate. We show our clients how to select any vacation home, then divide the title and ownership.
          </p>
          <p className="text-gray-400">
            We invented the Independent Co-Ownership concept which dramatically reduces ownership costs.
          </p>
          <p className="text-gray-400">
            You know all about timeshares and residence clubs (who sell shares at marked up prices). That’s not what we do. We’re experienced consultants who guide clients in transforming ownership into co-ownership.
          </p>
          <Button variant="outline" className="mt-4">
            Book a Free Introductory Session to Learn How?
          </Button>
        </div>

        {/* Images */}
        <div className="relative flex justify-end items-center gap-6">
          <div className="hidden min-[890px]:flex  md:justify-center lg:justify-center">
          
          <img
            src={HeroImage2}
            alt="Investor Network"
            className="w-[200px] h-[200px] md:w-[210px] md:h-[220px] lg:w-[250px] lg:h-[260px] xl:w-[280px] xl:h-[310px] min-[1780px]:!w-[320px] min-[1780px]:!h-[340px] object-cover border-[5px] border-solid border-[#161616] mt-48 md:mt-72 -ml-24 md:-ml-34 lg:-ml-38 xl:-mr-48 z-10 rounded-[15px]"
          />
          <img
            src={HeroImage1}
            alt="Newlista Overview"
            className="h-[330px] w-[260px] md:w-[290px] md:h-[360px] lg:w-[360px] lg:h-[410px] xl:w-[430px] xl:h-[480px] min-[1780px]:!w-[470px] min-[1780px]:!h-[530px] object-cover rounded-[15px]"
          />
        </div>

          {/* <div className="w-72 md:w-96 rounded-xl overflow-hidden shadow-lg transform -translate-y-6 md:-translate-y-12">
            <img
              src={HeroImage1}
              alt="Vacation Home 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-80 md:w-[100%] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={HeroImage2}
              alt="Vacation Home 2"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
