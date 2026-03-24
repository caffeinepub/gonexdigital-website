import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "SEO",
    description:
      "Dominate search rankings with data-driven SEO strategies that drive organic traffic and qualified leads to your business.",
    gradient: "from-[#41C8FF] to-[#4C6FFF]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
    title: "Ads Marketing",
    description:
      "High-converting paid campaigns across Google, Meta, and more. Every rupee spent delivers measurable ROI.",
    gradient: "from-[#D84BFF] to-[#7A4DFF]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    title: "Social Media Management",
    description:
      "Build an engaged community with content that resonates. We handle strategy, creation, and daily management.",
    gradient: "from-[#4C6FFF] to-[#D84BFF]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Web & App Development",
    description:
      "Blazing-fast, pixel-perfect websites and apps built with modern tech. From landing pages to enterprise platforms.",
    gradient: "from-[#41C8FF] to-[#7A4DFF]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
    title: "Graphic Designing",
    description:
      "Visual identities that leave a lasting impression. Logos, branding, print, and digital design crafted with precision.",
    gradient: "from-[#7A4DFF] to-[#41C8FF]",
  },
];

const serviceDots = [
  {
    id: "sd1",
    top: "10%",
    left: "8%",
    color: "#41C8FF",
    size: 4,
    delay: 0,
    dur: 8,
  },
  {
    id: "sd2",
    top: "25%",
    left: "92%",
    color: "#D84BFF",
    size: 3,
    delay: 1.5,
    dur: 11,
  },
  {
    id: "sd3",
    top: "40%",
    left: "15%",
    color: "#7A4DFF",
    size: 5,
    delay: 0.7,
    dur: 9,
  },
  {
    id: "sd4",
    top: "60%",
    left: "80%",
    color: "#4C6FFF",
    size: 3,
    delay: 2.3,
    dur: 7.5,
  },
  {
    id: "sd5",
    top: "75%",
    left: "50%",
    color: "#41C8FF",
    size: 4,
    delay: 1.0,
    dur: 10,
  },
  {
    id: "sd6",
    top: "85%",
    left: "25%",
    color: "#D84BFF",
    size: 3,
    delay: 3.1,
    dur: 8.5,
  },
  {
    id: "sd7",
    top: "18%",
    left: "60%",
    color: "#7A4DFF",
    size: 4,
    delay: 0.4,
    dur: 12,
  },
  {
    id: "sd8",
    top: "50%",
    left: "95%",
    color: "#41C8FF",
    size: 2,
    delay: 2.0,
    dur: 9.5,
  },
  {
    id: "sd9",
    top: "90%",
    left: "70%",
    color: "#4C6FFF",
    size: 5,
    delay: 1.8,
    dur: 7,
  },
];

const driftOrbs = [
  {
    id: "do1",
    color: "#41C8FF",
    size: 200,
    top: "20%",
    left: "5%",
    delay: 0,
    dur: 12,
  },
  {
    id: "do2",
    color: "#D84BFF",
    size: 160,
    top: "55%",
    left: "75%",
    delay: 3,
    dur: 15,
  },
  {
    id: "do3",
    color: "#4C6FFF",
    size: 240,
    top: "70%",
    left: "35%",
    delay: 1,
    dur: 13,
  },
];

export default function Services() {
  const { ref, isInView } = useInView();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Animated background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Drifting ambient orbs */}
        {driftOrbs.map((orb) => (
          <div
            key={orb.id}
            style={{
              position: "absolute",
              top: orb.top,
              left: orb.left,
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              animation: `drift-x ${orb.dur}s ease-in-out infinite`,
              animationDelay: `${orb.delay}s`,
              opacity: 0.07,
              filter: "blur(35px)",
            }}
          />
        ))}

        {/* Glowing dots */}
        {serviceDots.map((dot) => (
          <div
            key={dot.id}
            style={{
              position: "absolute",
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              background: dot.color,
              animation: `float-particle ${dot.dur}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
              opacity: 0.55,
              boxShadow: `0 0 8px ${dot.color}, 0 0 16px ${dot.color}55`,
            }}
          />
        ))}

        {/* Rotating gradient ring — center-right */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "65%",
            width: 600,
            height: 600,
            marginTop: -300,
            marginLeft: -300,
            borderRadius: "50%",
            border: "1px solid rgba(76, 111, 255, 0.12)",
            animation: "rotate-slow 28s linear infinite",
            background:
              "conic-gradient(from 0deg, rgba(65,200,255,0.08), rgba(122,77,255,0.08), rgba(216,75,255,0.06), rgba(65,200,255,0.08))",
          }}
        />
        {/* Inner ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "65%",
            width: 400,
            height: 400,
            marginTop: -200,
            marginLeft: -200,
            borderRadius: "50%",
            border: "1px solid rgba(122, 77, 255, 0.1)",
            animation: "rotate-slow 18s linear infinite reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        {/* Header */}
        <div
          className={`text-center mb-16 fade-in ${isInView ? "visible" : ""}`}
        >
          <p className="text-sm font-semibold tracking-widest mb-3 gradient-text">
            WHAT WE DO
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Our Services
          </h2>
          <p className="text-[#A7B2C8] mt-4 text-base font-medium max-w-lg mx-auto">
            End-to-end digital solutions crafted to grow your brand online.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              className={`relative bg-[#111827] border border-white/[0.08] rounded-2xl p-8 card-glow transition-all duration-500 cursor-default fade-in fade-in-delay-${Math.min(i + 1, 5)} ${
                isInView ? "visible" : ""
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${
                  service.gradient
                } text-white mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-white font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-[#A7B2C8] text-sm font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Filler card */}
          <div
            className={`hidden lg:flex relative bg-gradient-to-br from-[#4C6FFF]/10 to-[#D84BFF]/10 border border-white/[0.08] rounded-2xl p-8 items-center justify-center fade-in fade-in-delay-5 ${
              isInView ? "visible" : ""
            }`}
          >
            <div className="text-center">
              <p className="gradient-text font-black text-5xl mb-2">&infin;</p>
              <p className="text-[#A7B2C8] font-semibold text-sm">
                Limitless Possibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
