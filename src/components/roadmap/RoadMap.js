import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import {
  rightCard1,
  rightCard2,
  leftCard1,
  leftCard2,
} from "../../content/roadmap";

import "aos/dist/aos.css";
import { forwardRef } from "react";

const RoadMap = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="py-5 mb:max-sm:px-5 items-center object-contain">
      <h1 className="uppercase flex justify-center pb-5 text-3xl font-extrabold sm:pb-10 md:pb-12 lg:pb-14 2xl:pb-16 sm:pt-10 md:text-4xl lg:text-5xl 2xl:text-6xl">
        Road Map
      </h1>
      <div className="absolute border-opacity-20 border-gray-100 h-[100%] border-[5px] left-[7%] sm:absolute sm:border-opacity-20 sm:border-gray-100 xl:h-[105%] sm:border-[5px] sm:left-[50%]"></div>
      <RightCard heading={rightCard1.heading} list={rightCard1.itemList} />
      <LeftCard heading={leftCard1.heading} list={leftCard1.itemList} />
      <RightCard heading={rightCard2.heading} list={rightCard2.itemList} />
      <LeftCard heading={leftCard2.heading} list={leftCard2.itemList} />
    </div>
  );
});
export default RoadMap;
