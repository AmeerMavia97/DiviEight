import { Users, Building, Briefcase, ArrowRight } from "lucide-react";

import BgImage from '@/assets/Banners/InfoBannerImage.webp'
import IntroBlock from "@/component/layout/IntroBlock/IntroBlock";

// BACKGROUND STYLES
const AboutBgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#000000c9",
  backgroundBlendMode: "color",
  backgroundPosition: "center",
}

const SmartMoveSection = () => {
  return (
    <section style={AboutBgImage} className='py-20 relative  bg-black bg-ontain bg-center bg-fixed'>
      

      
      <div className="container mx-auto px-6 lg:px-20 pt-7 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 data-aos-offset="10" data-aos="fade-down" data-aos-duration="1000"   className=" text-4xl md:text-5xl lg:text-6xl text-brandLight font-head font-bold mb-4">
           Your Smartest Real Estate Move {" "}
            <span className="text-brandGreen">Starts Here</span>
          </h2>
          
          <p data-aos-offset="10" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200"  className="font-[400] font-para text-brandLight text-lg md:text-lg tracking-[0.4px] mb-7 max-w-2xl mx-auto">
            Join thousands who are already co-owning properties smarter, faster, and more securely.
          </p>
          
          {/* CTA Buttons */}
          <div data-aos-offset="10" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200"  className="flex flex-wrap justify-center gap-4">
            <button  className=" bg-brandGreen text-brandLight font-para flex rounded-full px-6 items-center gap-3">
              <Users className="w-5 h-5" />
              Start as Buyer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-brandGreen text-brandLight font-para border-[1.5px] flex rounded-full px-6 items-center gap-3">
              <Building className="w-5 h-5" />
              List a Property
            </button>
            <button  className="text-brandLight border border-brandGreen font-para rounded-full flex gap-3 items-center px-6 py-3.5">
              <Briefcase className="w-5 h-5" />
              Join as Agent
            </button>
          </div>
        </div>
      </div>


      
    </section>
  );
};

export default SmartMoveSection;
