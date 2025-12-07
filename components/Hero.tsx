import Section from "./Section";

export default function Hero() {
  return (
    <Section className="bg-white relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="text-center flex flex-col items-center justify-center max-w-4xl mx-auto relative z-10">
        {/* Top Tagline */}
        <div className="flex items-center justify-center gap-2 mb-6 border border-[#DBEAFE] rounded-full px-4 py-2 w-fit">
          <div className="w-2 h-2 bg-[#2663EB] rounded-full" />
          <p className="text-xs md:text-[13px] text-[#2663EB] font-bold">
            HELPING TAMIL NADU BUSINESS GROW SMARTER
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-[#292F33] mb-2">
          Your Business Deserves
        </h1>

        {/* Sub-headline Split */}
        <div className="mb-6 flex flex-col items-center justify-center gap-2 sm:gap-0">
          <span className="text-4xl md:text-5xl lg:text-[72px] font-bold text-[#94A3B8] italic">
            Better Operations
          </span>
          <span className="text-4xl md:text-5xl lg:text-[72px] font-bold text-[#2663EB] sm:ml-2">
            We Make It Happen.
          </span>
        </div>

        {/* Descriptive Paragraph */}
        <p className="text-lg md:text-2xl text-[#292F33] mb-4 max-w-2xl mx-auto">
          We&apos;re consultants who help you improve business. We&apos;re
          educators who show you how.
        </p>

        {/* Supporting Statement */}
        <p className="text-base md:text-2xl text-[#64758B] mb-8 max-w-2xl mx-auto">
          Join 1000+ Tamil Nadu businesses improving their operations with our
          guidance.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-[#2663EB] text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-[#2663EB]/90 transition-colors">
            See How We Can Help
          </button>
          <button className="bg-white border-2 border-[#E2E8F0] text-[#334156] px-8 py-3 rounded-md text-base font-semibold hover:bg-gray-50 transition-colors">
            View Success Stories
          </button>
        </div>

        {/* Trusted Across Industries Section */}
        <div className="mt-8">
          <p className="text-xs md:text-[18px] font-medium text-[#94A2B8] uppercase tracking-wider mb-6">
            TRUSTED ACROSS INDUSTRIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 text-base md:text-2xl text-[#7E7E7E]">
            <span>MSME</span>
            <span>Consturction</span>
            <span>Retail</span>
            <span>Service</span>
            <span>Textile</span>
            <span>Agriculture</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
