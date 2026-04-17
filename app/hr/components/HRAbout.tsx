// import Image from "next/image";

// const HRAbout = () => {
//     return (
//         <>
//             {/* Background div */}
//             <div className="w-full h-[108vh] bg-[#071711] flex justify-center items-center font-sans ">
//                 <div className="w-[1370px] h-[554px] flex gap-8 hidden">

//                     <div className="h-full w-1/2">
//                         <Image
//                             src={"/hr/hr_about.png"}
//                             alt={"hero"}
//                             width={650}
//                             height={550}
//                             className="object-cover"
//                         />
//                     </div>
//                     <div className="h-full w-1/2 flex flex-col justify-between">
//                         {/* header */}
//                         <div className="text-center">
//                             <h1 className="font-extrabold text-white text-[46px] leading-[50px] tracking-[0%] uppercase">
//                                 Does your business stop
//                                 <span className="text-[#E9ED26]"> when you step away</span>
//                             </h1>
//                             <p className="flex items-center justify-center  gap-2 mt-[46px] text-white font-semibold text-2xl capitalize text-center">
//                                 <span className="w-[5px] h-[25px] bg-[#E9ED26] inline-block"></span>
//                                 You're not alone. 90% of MSMEs hit this wall.
//                             </p>
//                         </div>
//                         <div>
//                             <p className="font-semibold text-white italic text-[22px] leading-[34px] text-center tracking-[0%]">
//                                 "This happens to every business owner. Until they fix their team."
//                             </p>
//                         </div>
//                         {/* boxes */}
//                         <div className="mb-4 mx-12">
//                             <div className="bg-[#092018] border border-[#18382C] rounded">
//                                 <p className="font-light text-white px-8 py-4 text-[16px]">
//                                     We setup simple <span className="text-[#E9ED26]">TEAM AUTOPILOT SYSTEMS</span>  so your business runs without constant supervision.
//                                 </p>
//                             </div>
//                             <div className="uppercase py-4 text-white text-center w-full mt-8 bg-gradient-to-r from-[#E84127] via-[#DC2D1D] to-[#D41F17]">
//                                 <p className="font-semibold text-[18px]">Build a Self-Running Team</p>
//                             </div>
//                         </div>
//                     </div>




//                 </div>
//                 {/* mobile screen */}
//                 <div className="h-[108vh] w-full text-white mx-4 py-16 flex flex-col">
//                     <div>

//                         {/* header */}
//                         <div className="text-center">
//                             <h1 className="font-extrabold text-white text-[26px] leading-7 tracking-[0%] uppercase">
//                                 Does your business stop
//                                 <span className="text-[#E9ED26]"> when you step away</span>
//                             </h1>
//                             <p className="flex items-center justify-center  gap-2 mt-[46px] text-white font-semibold text-xs capitalize text-center">
//                                 <span className="w-[5px] h-[25px] bg-[#E9ED26] inline-block"></span>
//                                 You're not alone. 90% of MSMEs hit this wall.
//                             </p>
//                         </div>
//                         <div>
//                             <p className="font-semibold text-white italic text-[14px] leading-[27px] text-center tracking-[0%]">
//                                 "This happens to every business owner. Until they fix their team."
//                             </p>
//                         </div>
//                         {/* boxes */}
//                         <div className="mb-4 mx-12">
//                             <div className="bg-[#092018] border border-[#18382C] rounded leading-[22px]">
//                                 <p className="font-light text-white px-8 py-4 text-[16px]">
//                                     We setup simple <span className="text-[#E9ED26]">TEAM AUTOPILOT SYSTEMS</span>  so your business runs without constant supervision.
//                                 </p>
//                             </div>
//                             <div className="uppercase py-4 text-white text-center w-full mt-8 bg-gradient-to-r from-[#E84127] via-[#DC2D1D] to-[#D41F17]">
//                                 <p className="font-semibold text-[18px]">Build a Self-Running Team</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <Image
//                             src={"/hr/hr_about.png"}
//                             alt={"hero"}
//                             width={650}
//                             height={550}
//                             className="object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default HRAbout;

import Image from "next/image";

const HRAbout = () => {
    return (
        <>
            <section className="bg-[#071711] w-full h-[108vh] px-6 py-12 md:px-24 gap-6 flex flex-col md:flex-row-reverse md:items-center">
                <div className=" w-full h-1/2 md:h-[540px] font-sans flex flex-col justify-between">

                    <div>
                        <h1 className="uppercase text-white text-center font-black text-[24px] leading-[27px] md:text-[40px] md:leading-[50px]">
                            Does your business stop <br />
                            <span className="text-[#E9ED26]">when you step away</span>
                        </h1>
                        <p className="flex items-center justify-center  gap-1 mt-[46px] text-white font-medium  text-xs 
                        md:text-[24px] capitalize text-center md:leading-[51px] tracking-normal">
                            <span className=" w-0.5 md:w-[5px] h-3 md:h-[25px] bg-[#E9ED26] inline-block"></span>
                            You're not alone. 90% of MSMEs hit this wall.
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-white italic text-[14px] md:text-[24px] leading-[27px] md:leading-[34px] text-center tracking-[0%]">
                            "This happens to every business owner. Until they fix their team."
                        </p>
                    </div>
                    <div className="mb-4 md:mx-12">
                        <div className="bg-[#092018] border border-[#18382C] rounded leading-[22px]">
                            <p className="font-extralight text-white px-8 py-4 text-[16px] ">
                                We setup simple <span className="text-[#E9ED26]">TEAM AUTOPILOT SYSTEMS</span>  so your business runs without constant supervision.
                            </p>
                        </div>
                        <div className="uppercase py-4 text-white text-center w-full mt-8 bg-gradient-to-r from-[#E84127] via-[#DC2D1D] to-[#D41F17]">
                            <p className="font-semibold text-[18px]">Build a Self-Running Team</p>
                        </div>
                    </div>

                </div>
                {/* <div className="w-full h-1/2 md:h-[540px] relative"> */}
                <div className="w-full  md:h-[540px] relative aspect-square">
                    <Image
                        src={"/hr/hr_about.png"}
                        alt={"hero"}
                        fill
                        className="object-cover"
                    />
                </div>

            </section>
        </>
    )

}

export default HRAbout;