import Image from "next/image";

type TickProps = {
  desc: string;
};

const Tick = ({ desc }: TickProps) => {
  return (
    <div className="flex items-start gap-3 w-full">
      <Image
        src="/hr/tick.svg"
        width={20}
        height={20}
        alt="tick"
        className="mt-1"
      />
      <p className="font-semibold text-[18px] leading-[26px] text-[#071711]">
        {desc}
      </p>
    </div>
  );
};

const HROffer = () => {
  return (
    <>
      {/* TOP SECTION */}
      <section className="px-6 md:px-28 py-12 font-sans">
        <div className="flex flex-col md:flex-row md:gap-12">

          {/* LEFT */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="font-extrabold text-[#071711] text-[30px] leading-[41px] uppercase">
              <span className="italic text-[#E53D25]">Who is</span>{" "}
              this 30-Day Team Setup Service
            </h1>

            <p className="font-normal text-[16px] leading-[30px] text-[#647388] mt-6">
              We work exclusively with established Tamil Nadu business owners
              ready for real operational change.
            </p>
          </div>

          {/* RIGHT */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col gap-5 md:px-12">
            <Tick desc="You run a shop or small business in Tamil Nadu" />
            <Tick desc="You have 5-18 employees" />
            <Tick desc="Your business has been running for at least 1 year" />
            <Tick desc="You want to delegate work with confidence" />
            <Tick desc="You want your team to work clearly without daily follow-ups" />
            <Tick desc="You are ready to make small changes in how work is organised" />
          </div>

        </div>
      </section>

      {/* OFFER SECTION */}
      <div className="relative w-full bg-[#071711] text-center flex flex-col justify-between gap-4 items-center text-white pt-16 pb-8">

        {/* FLOATING BADGE (on background boundary) */}
        <div
          className="absolute -top-4 md:-top-5 
          left-1/2 -translate-x-1/2        /* mobile center */
          md:left-28 md:translate-x-0      /* desktop align with content */
          bg-gradient-to-r from-[#17D488] via-[#56D914] to-[#17D488]
          text-[#135D2F]
          px-3 py-1 rounded-full font-medium
          shadow-[0_-4px_4px_#B5FF8F]
          text-[18px]
  "
        >
          limited time offer: 00:00:00:00
        </div>

        {/* EXISTING CONTENT */}
        <p className="bg-white px-8 w-fit rounded-3xl mt-8 text-[13px] py-2 text-black">
          This is hands-on support, not just advice.
        </p>

        <h1 className="font-black text-[64px] text-[#E9ED26]">
          ₹5,000
        </h1>

        <div className="flex justify-center gap-2 md:gap-6 items-center capitalize px-4">
          <p className="text-[12px] md:text-[14px] font-normal leading-6">
            Focused attention for your shop
          </p>

          <span className="w-2.5 h-2.5 bg-white rounded-full inline-block"></span>

          <p className="text-[12px] md:text-[14px] font-normal leading-6">
            Guide you through 30-day setup
          </p>

          <span className="w-2.5 h-2.5 bg-white rounded-full inline-block"></span>

          <p className="text-[12px] md:text-[14px] font-normal leading-6">
            Support real implementation
          </p>
        </div>
      </div>
    </>
  );
};

export default HROffer;