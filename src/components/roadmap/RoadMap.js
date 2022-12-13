import LeftCard from './LeftCard'
import RightCard from './RightCard'

import roadmap_data from '../../roadmap_data'

const RoadMap = () => {
  var card_switch = false
  return (
    <div className="py-5 mb:max-sm:px-5 items-center object-contain">
      <h1 className="uppercase flex justify-center pb-5 text-3xl font-extrabold sm:pb-10 md:pb-12 lg:pb-14 2xl:pb-16 sm:pt-10 md:text-4xl lg:text-5xl 2xl:text-6xl">
        Road Map
      </h1>

      <div className="absolute border-opacity-20 border-gray-100 h-[100%] border-[5px] left-[7%] sm:absolute sm:border-opacity-20 sm:border-gray-100 xl:h-[105%] sm:border-[5px] sm:left-[50%]"></div>

      {roadmap_data.map((list_item, index) => {
        card_switch = !card_switch
        return (
          <div key={index}>
            {card_switch && (
              <RightCard list_item={list_item} />
            )}
            {!card_switch && (
              <LeftCard list_item={list_item} />
            )}
          </div>
        )
      })}
    </div>
  )
}
export default RoadMap
