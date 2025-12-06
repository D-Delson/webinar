import Section from "./Section";

interface StatProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base lg:text-lg text-gray-700 font-normal">
        {label}
      </div>
    </div>
  );
}

export default function Statistics() {
  const stats: StatProps[] = [
    { value: "1000+", label: "Business Helped" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "₹50Cr+", label: "Revenue Improved" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <Section className="bg-gray-50 !pb-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white p-4 md:p-6 gap-4 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}
