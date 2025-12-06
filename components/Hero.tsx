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
        <div className="flex items-center justify-center gap-2 mb-6 border rounded-full px-4 py-2 w-fit">
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
          <p className="text-sm md:text-base text-blue-600 font-medium">
            HELPING TAMIL NADU BUSINESS GROW SMARTER
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
          Your Business Deserves
        </h1>

        {/* Sub-headline Split */}
        <div className="mb-6">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500">
            Better Operations
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 ml-2">
            We Make It Happen.
          </span>
        </div>

        {/* Descriptive Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl mx-auto">
          We&apos;re consultants who help you improve business. We&apos;re
          educators who show you how.
        </p>

        {/* Supporting Statement */}
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join 1000+ Tamil Nadu businesses improving their operations with our
          guidance.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors">
            See How We Can Help
          </button>
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md text-base font-semibold hover:bg-gray-50 transition-colors">
            View Success Stories
          </button>
        </div>

        {/* Trusted Across Industries Section */}
        <div className="mt-16">
          <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-6">
            TRUSTED ACROSS INDUSTRIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 text-base md:text-lg text-gray-700">
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
