import React from "react"
import TeamMember from "./team/TeamMember"
import pic from "../images/profile-img.jpeg"
export default function Intro() {
  return (
    <div className=" font-lora text-white py-16">
      <h1 className="font-bold text-3xl flex justify-center"> MINT </h1>
      <p className="text-xl  flex justify-center">
        {" "}
        I'm about to ape into my own project
      </p>

      <div className="flex flex-wrap font-lora mt-4 gap-14  lg::w-[50%] lg:h-[60%] mx-auto justify-center pt-10">
        <div className="border-double text-center bg-slate-600/70 border-fuchsia-600  border-2 sm:col-span-6 col-span-12">
          <h1 className="font-extrabold text-2xl pt-4 px-20"> TOTAL MINTED </h1>
          <p className="text-xs font-semibold">The price is 0.042eth ETH + Gas Fee </p>
          <p className="text-xs mt-4 font-semibold"> 534/1000 </p>
          <div className="bg-black mx-16 rounded flex justify-around my-4">
            <button type="button" className="font-semibold">-</button>
            <p>2</p>
            <button type="button" className=" font-semibold">+</button>
          </div>
          <button type="buttom" className="bg-purple-900 mx-auto my-4 px-10 border-red-900 justify-center">MINT</button>
        </div>

         <div className="w-[30%] my-1">
        <TeamMember image={pic} />
        </div>
      </div>
    </div>
  );
}































// className="font-lora py-30 text-white w-[50%] mx-auto">
//       <h1 className="text-2xl flex justify-center font-bold "> MINT </h1>
//       <p className="flex justify-center">
//         {" "}
//         I'm About To Ape Into My Own Project
//       </p>

//       <div className="flex justify-center gap-10 py-10 ">
//         <div className="w-full">
//           <a
//             href="/"
//             className="block ring-0 ring-purple-800/90 ring-offset-4 ring-offset-transparent bg-slate-600/80 "
//           >
//             <h5 className=" text-2xl font-bold tracking-tight text-white text-center">
//               TOTAL MINTED
//             </h5>
//             <p className="text-bold text-xs text-center font-semibold">
//               The Price is 0.042eth ETH + Gas Free
//             </p>
//             <p className="text-center text-xs mt-4 font-semibold">534/1000 </p>

//             <div className=" h-10  w-32 mx-auto bg-blue">
//               <div className="flex flex-row h-10 w-full relative bg-transparent mt-1">
//                 <button
//                   data-action="decrement"
//                   class="bg-blue-900 h-full w-20 rounded-l cursor-pointer outline-none"
//                 >
//                   <span className="m-auto text-2xl font-thin">−</span>
//                 </button>
//                 <input
//                   type="number"
//                   className=" focus:outline-none text-center w-full bg-blue-900 md:text-basecursor-default flex items-center outline-none"
//                   name="custom-input-number"
//                   value="0"
//                 ></input>
//                 <button
//                   data-action="increment"
//                   className="bg-blue-900 h-full w-20 rounded-r cursor-pointer"
//                 >
//                   <span className="m-auto text-2xl font-thin">+</span>
//                 </button>
//               </div>
//             </div>
//             <button
//               type="button "
//               className="bg-indigo-700/50 font-semibold py-0 px-4 border border-gray-400 rounded shadow small mt-10 text-xs "
//             >
//               MINT{" "}
//             </button>
//           </a>
//         </div>
//         <div className="object-contain w-1/3">
//           <TeamMember image={pic} />
//         </div>
//       </div>
