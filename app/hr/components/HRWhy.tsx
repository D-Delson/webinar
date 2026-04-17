import Image from "next/image"

const HRWhy = () => {
    return (
        <section className="px-4 md:px-28 py-10 md:py-24 font-sans w-full border-b border-[#E53D25] bg-[#F9FAFC]">

            <div className="flex flex-col md:flex-row items-center gap-8">

                {/* LEFT CONTENT */}
                <div className="flex flex-col md:w-1/2 ">

                    {/* HEADING */}
                    <h2 className="font-bold text-[#071711] text-[30px] md:text-[36px] leading-[38px] md:leading-[51px] uppercase tracking-normal">
                        You own a business with{" "} <span className="text-[#E53D25] italic">team.</span>{" "}
                        But you still do the work.
                    </h2>

                    {/* PARAGRAPH */}
                    <p className="mt-6 text-[20px] leading-7 md:leading-[33px] text-[#647388] font-normal">
                        Finding the right skilled staff takes months, and the moment they are trained,
                        they resign. You’re caught in a <span className="font-semibold">never-ending hiring loop.</span>
                        <br /><br />
                        Inside the shop, workers fight over roles. Deadlines are missed. Materials are wasted.
                        Orders are falling because you have no <span className="font-semibold"> time to meet new customers.</span>
                    </p>

                    {/* QUOTE BOX (IMPORTANT — missing earlier) */}
                    <div className="mt-8 bg-white border border-gray-200 rounded-lg p-4 md:p-5 shadow-sm mb-5">
                        <p className="italic font-bold text-[#2F3A45] text-[22px] md:text-[20px]">
                            “Stop being the 'Fire Fighter' in your own shop. Start building a system
                            that works even when you aren't there...”
                        </p>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                {/* <div className="w-full md:w-1/2 flex justify-center ">
                    <div className="relative w-[260px] h-[260px] md:w-[500px] md:h-[500px]">
                        <Image
                            src="/hr/hr_why_v2.png"
                            alt="workflow cycle"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div> */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <Image
                            src="/hr/hr_why_v2.png"
                            alt="workflow cycle"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HRWhy