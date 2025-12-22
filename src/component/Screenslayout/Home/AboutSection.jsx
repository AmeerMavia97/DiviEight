import AboutImage1 from "@/assets/Banners/AboutUsImage1.avif";
import AboutImage2 from "@/assets/Banners/AboutUsImage2.webp";
import AboutImage3 from "@/assets/Banners/AboutUsImage3.jpeg";
import { ArrowUpRight, Minus } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-[#ffffff] dark:bg-brandDark px-6 sm:px-10 lg:px-12 py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-3 lg:pr-20">
          <h4
            data-aos="fade-up"
            className="uppercase tracking-[0.5px] font-[600] font-head text-brandDark dark:text-brandLight"
          >
            About Us
          </h4>

          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-[36px] sm:text-[40px] lg:text-[46px] leading-[42px] lg:leading-[48px] font-bold font-head text-brandDark dark:text-brandLight"
          >
            Real Estate Ownership, Reimagined for Modern Buyers
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="800"
            className="mt-4 text-[15px] font-para text-brandDark dark:text-brandLight"
          >
            At DiviEight, we make second-home ownership achievable by connecting
            compatible buyers and handling every step from matching to
            post-closing management. Our platform blends technology,
            transparency, and real-estate expertise to make shared ownership
            simple, fair, and stress-free.
          </p>

          {/* FEATURES LIST */}
          <ul
            data-aos="fade-up"
            data-aos-delay="1100"
            className="mt-5  text-[14px] font-[400] font-para text-brandDark dark:text-brandLight"
          >
            <li className="flex gap-1">
              <Minus /> Smart matching based on financial compatibility
            </li>
            <li className="flex gap-1">
              <Minus /> Trusted agent network with milestone-based referral
              tracking
            </li>
            <li className="flex gap-1">
              <Minus /> Seamless co-ownership tools for scheduling, expenses
            </li>
            <li className="flex gap-1">
              <Minus /> Immutable ledger records for long-term trust and
              transparency
            </li>
          </ul>

          {/* CTA */}
          <button
            data-aos="fade-up"
            data-aos-delay="900"
            className="mt-6 flex items-center gap-4 px-2 pl-6 pr-3 py-2 text-[15.5px] font-[450] font-para rounded-full bg-[#46acb4] text-brandLight w-max"
          >
            Learn More
            <span className="bg-brandLight rounded-full p-1.5 text-brandDark">
              <ArrowUpRight className="size-5" />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-5">
          <div className="grid gap-5">
            <ImageCard src={AboutImage1} aos="fade-down" />
            <ImageCard src={AboutImage2} aos="fade-up" />
          </div>

          <ImageCard src={AboutImage3} aos="fade-left" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



const ImageCard = ({ src, aos }) => (
  <div
    data-aos={aos}
    className="relative h-full rounded-[7px] before:absolute before:inset-0 before:bg-[#00000015] before:rounded-[7px]"
  >
    <img
      src={src}
      alt=""
      className="h-full w-full object-cover rounded-[7px]"
    />
  </div>
);
