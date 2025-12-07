import Image from "next/image";
import Section from "./Section";

interface ProblemCardProps {
  category: string;
  categoryColor: string;
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  topImg?: boolean;
}

function ProblemCard({
  category,
  categoryColor,
  headline,
  description,
  imageSrc,
  imageAlt,
  bgColor,
  topImg = false,
}: ProblemCardProps) {
  return (
    <div
      className={`${topImg
        ? "rounded-lg"
        : "rounded-lg md:rounded-l-lg md:flex flex-col md:flex-row"
        } shadow-md overflow-hidden`}
    >
      {topImg ? (
        <div
          className={`flex justify-center items-center rounded-t-lg p-4 md:p-8`}
          style={{ backgroundColor: bgColor }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={317}
            height={215}
            className="object-cover w-full max-w-full md:max-w-[317px] h-auto md:h-[216px]"
          />
        </div>
      ) : null}
      <div className="bg-white p-4 md:p-6 flex-1">
        <p className={`text-sm font-bold uppercase ${categoryColor} mb-3`}>
          {category}
        </p>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
          {headline}
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      {!topImg ? (
        <div
          className={`flex justify-center items-center p-4 md:p-8 md:rounded-r-lg shrink-0 flex-1`}
          style={{ backgroundColor: bgColor }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={317}
            height={215}
            className="object-cover w-full max-w-full md:max-w-[317px] h-auto md:h-[216px]"
          />
        </div>
      ) : null}
    </div>
  );
}

export default function BusinessOwners() {
  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="mb-4 text-center">
            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[42px] md:leading-[50px] lg:leading-[58px] font-semibold text-[#292F33] tracking-[-0.16px] capitalize">
              For Business Owners
            </h2>

            <h2 className="mt-2 text-[32px] md:text-[40px] lg:text-[44px] leading-[42px] md:leading-[50px] lg:leading-[58px] tracking-[-0.16px] capitalize">
              <span className="font-semibold italic text-[#94A2B8]">
                Who Refuse To{" "}
              </span>
              <span className="font-bold italic text-[#2663EB]">
                stay small.
              </span>
            </h2>
          </div>

          <p className="text-base md:text-lg text-[#485468] max-w-3xl mx-auto md:leading-[36px]">
            You didn&apos;t start a business to chase staff, fight with banks,
            or lose customers to competitors. We fix the things that silently
            hold you back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div className="col-span-1 md:col-span-2">
            <ProblemCard
              category="TEAM & HR"
              categoryColor="text-pink-600"
              headline="Business grows only when people grow."
              description="You can't scale if everything depends on you. We help you build simple systems so your team knows what to do, how to do it, and why it matters."
              imageSrc="/members_group.png"
              imageAlt="Team members group"
              bgColor="#F0EAFE"
            />
          </div>

          <ProblemCard
            category="STARTUP TECH"
            categoryColor="text-pink-600"
            headline="Clear thinking saves more money than good coding."
            description="Most startups don't fall in development; they fall in definition. We sit with you as a Business Analyst, turning your idea into a clear, buildable plan."
            imageSrc="/person_with_lap.png"
            imageAlt="Person with laptop"
            bgColor="#FDF3F8"
            topImg={true}
          />
          <ProblemCard
            category="LOANS & CREDIT"
            categoryColor="text-green-600"
            headline="Good businesses shouldn't be punished by paperwork."
            description="Banks don't see your hard work, they see your files. We prepare your numbers, documents and credit profile so they finally see the real strength of your business."
            imageSrc="/magnify_glass.png"
            imageAlt="Magnifying glass"
            bgColor="#EAFEF6"
            topImg={true}
          />

          <ProblemCard
            category="PROJECTS"
            categoryColor="text-orange-600"
            headline="Good work deserves a clean finish, not a fight."
            description="You deliver quality construction, but loose agreements and missing records invite last-minute disputes. We give you simple contracts and tracking sheets that protect both sides."
            imageSrc="/graph.png"
            imageAlt="Project graph"
            bgColor="#FFFBEA"
            topImg={true}
          />
          <ProblemCard
            category="ONLINE VISIBILITY"
            categoryColor="text-blue-600"
            headline="Your business should be discovered, not guessed."
            description="You've worked hard to build a good shop. We make sure people can actually find it when they search 'near me' on Google. So the calls, visits and orders come to you first."
            imageSrc="/google_search.png"
            imageAlt="Google search"
            bgColor="#F0F6FF"
            topImg={true}
          />
        </div>
      </div>
    </Section>
  );
}
