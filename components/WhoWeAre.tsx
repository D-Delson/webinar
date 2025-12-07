import Section from "./Section";

interface FeatureCardProps {
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, iconBg, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start justify-center gap-2">
      <div className="flex items-center justify-start gap-4">
        <div
          className={`w-10 h-10 ${iconBg} rounded-sm w-full flex-1 min-w-10 flex items-center justify-center`}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <Section id="about" className="bg-gray-50">
      <div className="max-w-6xl mx-auto">


        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Who We Are
              </h2>
              <p className="font-semibold text-[38px] text-[#94A2B8] italic leading-[70px] tracking-[-0.16px] align-middle capitalize">
                (And Why We&apos;re Different)</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                We&apos;re{" "}
                <span className="font-bold text-blue-600">EDUCATORS</span> and{" "}
                <span className="font-bold text-blue-600">CONSULTANTS</span>{" "}
                who&apos;ve worked with 1,000+ TamilNadu Business
              </p>
              <p className="text-gray-700 leading-relaxed">
                We know the problems because we&apos;ve seen them hundreds of
                times: talented teams leaving, loans getting rejected, and
                projects ending in disputes.
              </p>
            </div>

            {/* Quotation Block */}
            <div className="flex gap-4 my-6">
              <div className="w-1 bg-blue-600 shrink-0"></div>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                Our job isn&apos;t to judge your current state. Our job is to
                show you exactly what needs to improve, and then guide you
                through improving it.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase">
                WHAT MAKES US DIFFERENT:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl shrink-0">✓</span>
                  <span>
                    We focus on{" "}
                    <span className="font-bold">IMMEDIATE IMPACT</span> (results
                    in weeks)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl shrink-0">✓</span>
                  <span>
                    We explain <span className="font-bold">WHY</span>, not just{" "}
                    <span className="font-bold">WHAT</span> (you learn)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl shrink-0">✓</span>
                  <span>
                    We work <span className="font-bold">WITH</span> your team
                    (not replace them)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-6 space-y-2">
            <div></div>
            <FeatureCard
              icon="🏢"
              iconBg="bg-blue-100"
              title="MSME Owners & Entrepreneurs"
              description="Shops, restaurants, salons, manufacturing units. You want practical solutions, not expensive theory."
            />
            <FeatureCard
              icon="⚡"
              iconBg="bg-purple-100"
              title="Startup Founders"
              description="Visionaries needing execution help. Avoid the expensive mistakes that kill startups early."
            />
            <FeatureCard
              icon="🏗️"
              iconBg="bg-orange-100"
              title="Construction & Contractors"
              description="Project managers who need systems that save money, document changes, and prevent disputes."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
