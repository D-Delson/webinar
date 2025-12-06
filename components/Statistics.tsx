import Section from "./Section";

interface StatProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
        {value}
      </div>
      <div className="text-base md:text-lg text-gray-700 font-normal">
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
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white p-6 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}
