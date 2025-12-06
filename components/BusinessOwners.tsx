import Section from "./Section";

interface ProblemCardProps {
  category: string;
  categoryColor: string;
  headline: string;
  description: string;
  icon: string;
  bgColor: string;
}

function ProblemCard({
  category,
  categoryColor,
  headline,
  description,
  icon,
  bgColor,
}: ProblemCardProps) {
  return (
    <div className="rounded-lg shadow-md">
      <div
        className={`flex justify-center items-center rounded-t-lg`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-6xl">{icon}</div>
      </div>
      <div className="mb-4 bg-white p-6 rounded-b-lg">
        <p className={`text-sm font-bold uppercase ${categoryColor} mb-3`}>
          {category}
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {headline}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function BusinessOwners() {
  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            For Business Owners Who Refuse To{" "}
            <span className="text-blue-600">Stay Small</span>.
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            You didn&apos;t start a business to chase staff, fight with banks,
            or lose customers to competitors. We fix the things that silently
            hold you back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="col-span-2">
            <ProblemCard
              category="TEAM & HR"
              categoryColor="text-pink-600"
              headline="Business grows only when people grow."
              description="You can't scale if everything depends on you. We help you build simple systems so your team knows what to do, how to do it, and why it matters."
              icon="👥"
              bgColor="#E0B0FF"
            />
          </div>

          <ProblemCard
            category="STARTUP TECH"
            categoryColor="text-pink-600"
            headline="Clear thinking saves more money than good coding."
            description="Most startups don't fall in development; they fall in definition. We sit with you as a Business Analyst, turning your idea into a clear, buildable plan."
            icon="💡"
            bgColor="#FFC0CB"
          />
          <ProblemCard
            category="LOANS & CREDIT"
            categoryColor="text-green-600"
            headline="Good businesses shouldn't be punished by paperwork."
            description="Banks don't see your hard work, they see your files. We prepare your numbers, documents and credit profile so they finally see the real strength of your business."
            icon="🔍"
            bgColor="#C0FFD3"
          />
          <ProblemCard
            category="ONLINE VISIBILITY"
            categoryColor="text-blue-600"
            headline="Your business should be discovered, not guessed."
            description="You've worked hard to build a good shop. We make sure people can actually find it when they search 'near me' on Google. So the calls, visits and orders come to you first."
            icon="🌐"
            bgColor="#C0ECFF"
          />
          <ProblemCard
            category="PROJECTS"
            categoryColor="text-orange-600"
            headline="Good work deserves a clean finish, not a fight."
            description="You deliver quality construction, but loose agreements and missing records invite last-minute disputes. We give you simple contracts and tracking sheets that protect both sides."
            icon="🤝"
            bgColor="#FFE5C0"
          />
        </div>
      </div>
    </Section>
  );
}
