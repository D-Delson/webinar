import Section from "./Section";

interface TestimonialCardProps {
  avatarColor: string;
}

function TestimonialCard({ avatarColor }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* 5 Star Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        We went from 10-15 customers per day to 50+ calls in the first month. We
        weren&apos;t bad before — we were just invisible. This changed
        everything.
      </p>

      {/* Customer Info */}
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 ${avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-lg shrink-0`}
        >
          RK
        </div>
        <div>
          <p className="text-gray-900 font-bold">Rajesh Kumar</p>
          <p className="text-gray-500 text-sm">Restaurant Owner, Chennai</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Avatar colors: blue, orange, dark grey/black (repeating pattern)
  const avatarColors = [
    "bg-blue-600",
    "bg-orange-500",
    "bg-gray-900",
    "bg-blue-600",
    "bg-orange-500",
    "bg-gray-900",
  ];

  return (
    <Section className="">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2">
            Results That Speak
          </h2>
          <p className="text-lg md:text-4xl text-gray-400 italic">
            (And Why We&apos;re Different)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 lg:gap-8">
            {avatarColors?.slice(0, 2).map((color, index) => (
              <TestimonialCard key={index} avatarColor={color} />
            ))}
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            {avatarColors?.slice(2, 4).map((color, index) => (
              <TestimonialCard key={index} avatarColor={color} />
            ))}
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            {avatarColors?.slice(4, 6).map((color, index) => (
              <TestimonialCard key={index} avatarColor={color} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
