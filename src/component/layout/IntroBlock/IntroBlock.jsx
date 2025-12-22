import React from "react";

const IntroBlock = ({
    badge,
    title,
    highlight,
    description,
    align = "center",
    highlightColor = "#46acb4",
}) => {
    const isCenter = align === "center";

    return (
        <div
            className={`max-w-3xl  ${isCenter ? "mx-auto text-center flex flex-col items-center" : "text-left"
                }`}
        >
            <div data-aos="fade-down" data-aos-duration="1000">
                {badge &&
                    <span className="text-black dark:text-white font-para font-semibold text-sm uppercase tracking-wider">
                        {badge}
                    </span>
                }
            </div>

            <h1
                data-aos-offset="10"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
                className="font-heading text-black  leading-[1.2em] font-head dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-3"
            >
                {title}{" "}
                {highlight && (
                    <span style={{ color: highlightColor }}>{highlight}</span>
                )}
            </h1>

            {description && (
                <p
                    data-aos-offset="10"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                    className="text-[15px] w-[80%] text-black font-para dark:text-white"
                >
                    {description}
                </p>
            )}
        </div>
    );
};

export default IntroBlock;
