
type InforCardProps = {
    value: string;
    status: string;
    desc: string;
    color?: string;
}

const InfoCard = ({ value, status, desc, color = "#4F47E6" }: InforCardProps) => {
    return (
        <>
            <div className="border border-gray-200 md:border-none rounded-2xl h-[197px] bg-white flex flex-col justify-around text-center">
                <div style={{ color }} className={`font-extrabold text-[40px]`}>{value}</div>
                <div className="font-semibold text-[16px] tracking-[9%] uppercase text-[#94A3B8]">{status}</div>
                <div className="font-medium text-[20px] leading-[22px] text-[#475569] px-8">{desc}</div>
            </div>
        </>
    )
}

const HROutcome = () => {
    return (
        <>
            <section className="px-6 md:px-28 py-12 font-sans bg-[#F9FAFC] border-b border-b-[#E53D25]">
                {/* header */}
                <div>
                    <h2 className="font-extrabold text-[30px] leading-[41px] uppercase text-center">
                        <span className="italic text-[#E53D25]">30-day</span>{"  "} transition outcome
                    </h2>
                    <p className="text-gray-500 text-center text-[20px] leading-[33px] tracking-normal mt-8">This service works best for owners who want clarity and structure, not shortcuts.
                    </p>
                </div>
                {/* boxes */}
                <div className="w-full mt-8 flex flex-col gap-3 md:flex-row mb-12">
                    <InfoCard
                        value="5M"
                        status="morning status"
                        desc="See all work status in 5 minutes each day."
                    />
                    <InfoCard
                        value="1WK"
                        status="ONBOARDING"
                        desc="New staff learn their job in the first week."
                    />
                    <InfoCard
                        color="#22C55F"
                        value="95%"
                        status="CLARITY"
                        desc="Workers know exactly what to do each day."
                    />
                    <InfoCard
                        value="2X"
                        status="RETENTION"
                        desc="Good workers stay longer with role clarity."
                    />
                </div>
            </section>
        </>
    )
}

export default HROutcome;