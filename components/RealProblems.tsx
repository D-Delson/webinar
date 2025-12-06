import Section from "./Section";

interface PointProps {
  number: number;
  title: string;
  description: string;
}

function NumberedPoint({ number, title, description }: PointProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-10 h-10 bg-[#E6F6FF] text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function RealProblems() {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <div>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">
              THE DIFFERENCE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3">
              We Don&apos;t Sell Theory.
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-500 mb-6">
              We Solve <span className="text-blue-600">Real Problems.</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Most consultants hand you a 50-page report and leave. We stay, we
              implement, and we ensure you actually see the results in your bank
              account.
            </p>
          </div>

          {/* Right Column - Numbered Points */}
          <div className="space-y-6">
            <NumberedPoint
              number={1}
              title="Practical, Not Academic"
              description="We don't use MBA jargon. We use methods that work in the chaos of real Tamil Nadu markets. Simple, actionable steps only."
            />
            <NumberedPoint
              number={2}
              title="Fair, Transparent Pricing"
              description="Business improvement shouldn't require taking out a loan. Our pricing is designed for MSMEs, not corporate giants."
            />
            <NumberedPoint
              number={3}
              title="You Talk To Humans"
              description="No automated chats. No junior interns. You get direct access to consultants who understand your specific context."
            />
            <NumberedPoint
              number={4}
              title="Measured Results"
              description="We don't believe in vague promises. We track visibility, revenue, and efficiency metrics so you know exactly what you paid for."
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
