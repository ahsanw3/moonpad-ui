const TeamMember = ({ image, name, designation }) => {
  console.log(name, designation)
  return (
    <div className="">
      <div className=" bg-slate-50/10">
        <img src={image} alt="profile" />
      </div>
      {/* {name ? <h1 className="uppercase flex justify-center text-lg pt-5">{name}</h1>:<></>} */}
      {name ? console.log(true):console.log(false)}
      {/* {designation ? <p className="flex justify-center text-xs pb-5">{designation}</p>:<></>} */}
    </div>
  )
}
export default TeamMember
