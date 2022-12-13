import { Carousel } from 'antd'

import TeamMember from './TeamMember'

import settings from '../../team_settings'
import team_data from '../../team_data'

const Team = () => {
  return (
    <div className="pb-5 pt-8 sm:pb-10 sm:pt-14 lg:pb-14 lg:pt-20 2xl:pb-20 2xl:pt-28 px-7">
      <h1 className="uppercase flex justify-center pb-5 text-2xl font-extrabold md:text-3xl lg:text-4xl 2xl:text-6xl">
        Meet the Team
      </h1>
      <p className="flex justify-center text-xs font-medium pb-5 sm:pb-10 md:pb-14 lg:pb-18 2xl:pb-22 sm:text-sm md:text-base lg:text-lg 2xl:text-3xl">
        The ones who are making everything happen.
      </p>
      <Carousel autoplay={true} autoplaySpeed={2500} speed={7000} {...settings}>
        {team_data.map((team_member, index) => {
          return (
            <div key={index}>
              <div className="mx-5 my-5">
                <TeamMember team_member={team_member} />
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
export default Team
