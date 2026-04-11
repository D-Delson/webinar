import Image from "next/image";

type InfoBoxProps = {
    desc: string;
}
const InfoBox = ({ desc }: InfoBoxProps) => {
    return (
        <div className="bg-[#2C3A35] rounded w-full h-[54px] flex items-center justify-center font-extralight text-[14px] text-center md:text-[20px] leading-[26px]">{desc}</div>
    )
}

const HRNextPlan = () => {
    return (
        <section className="bg-[#071711] border-b border-b-[#E53D25]">

            <div className="w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-[250px] md:h-[420px] relative">
                    <Image
                        src={"/hr/hr_plan_1.png"}
                        alt="plan image 1"
                        fill
                    />
                </div>
                <div className="w-full md:w-1/2 h-[250px] md:h-[420px] relative">
                    <Image
                        src={"/hr/hr_plan_2.png"}
                        alt="plan image 2"
                        fill
                    />
                </div>
            </div>

            <div className="text-white px-6 md:px-28 py-12 flex flex-col gap-4 items-center md:flex-row justify-between">
                <h1 className="font-semibold text-[36px] leading-[51px] uppercase text-center md:text-start">
                    What we do in the
                    <br className="hidden md:block" />
                    <span className="text-[#E53D25] italic">{" "} next 30 days</span>
                </h1>
                <p className="font-light bg-white text-[#071711] px-8 text-[14px] py-2 md:py-4 rounded-4xl text-center">
                    This is hands-on support, not just advice.
                </p>
            </div>

            {/* Box */}
            <div className="px-6 md:px-28 py-4 flex flex-col gap-3 md:gap-12 items-center md:flex-row text-[#FAFCFF] mb-16">
                <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-6">
                    <InfoBox desc="Review your current team structure and daily work flow" />
                    <InfoBox desc="Clarify roles so each worker knows what they are responsible for" />
                    <InfoBox desc="Set simple rules for delegating work" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-6">
                    <InfoBox desc="Create a basic system to track daily and weekly work" />
                    <InfoBox desc="Help you transfer work knowledge so new staff settle faster" />
                    <InfoBox desc="Align the team with how you want the business to run" />
                </div>
            </div>

        </section>
    )
}

export default HRNextPlan;