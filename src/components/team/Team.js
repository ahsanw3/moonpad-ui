import { Carousel } from "antd";
import { motion } from "framer-motion";

import TeamMember from "./TeamMember";
import { teamMembers } from "../../content/team";
import { forwardRef } from "react";

const Team = forwardRef((props, ref) => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      ref={ref}
      className="pb-5 pt-8 sm:pb-10 sm:pt-14 lg:pb-14 lg:pt-20 2xl:pb-20 2xl:pt-28 px-7"
    >
      <h1 className="uppercase flex justify-center pb-5 text-2xl font-extrabold md:text-3xl lg:text-4xl 2xl:text-6xl">
        Meet the Team
      </h1>
      <p className="flex justify-center text-xs font-medium pb-5 sm:pb-10 md:pb-14 lg:pb-18 2xl:pb-22 sm:text-sm md:text-base lg:text-lg 2xl:text-3xl">
        The ones who are making everything happen.
      </p>

      <Carousel autoplay={true} autoplaySpeed={2500} speed={7000} {...settings}>
        {teamMembers.map((memberDetails, key) => {
          return (
            <div key={key}>
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="mx-5 my-5"
                key={key}
              >
                <TeamMember
                  image={memberDetails.image}
                  name={memberDetails.name}
                  designation={memberDetails.designation}
                  index={memberDetails.index}
                />
              </motion.div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
});
export default Team;
