import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Image from "@/assets/Banners/AboutUsImage2.webp";

const images = [
  { src: Image },
  { src: Image },
  { src: Image },
  { src: Image },
  { src: Image },
  { src: Image },
];

export default function PropertyGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="flex gap-5 ">

        <div
          className="relative rounded-2xl overflow-hidden cursor-pointer w-[63%]"
          onClick={() => setIndex(0)}
        >
          <img
            src={images[0].src}
            className="h-[80vh] w-full object-cover"
            alt="Property"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex(0);
            }}
            className="absolute bottom-6 right-6 bg-white font-para px-5 py-2.5 rounded-lg text-sm font-medium shadow"
          >
            View all photos
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 w-[37%]">
          {images.slice(1, 5).map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i + 1)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={img.src}
                className="h-full w-full object-cover"
                alt=""
              />

              {i === 3 && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(0);
                  }}
                  className="absolute inset-0 bg-black/50 font-para flex items-center justify-center text-brandLight text-sm font-[500]"
                >
                  Show more photos
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
        plugins={[Thumbnails]}
      />
    </>
  );
}
