import { useRef } from "react";
import { useInView } from "../hooks/useInView";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  image?: string;
  subItems?: string[];
}

const services: Service[] = [
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
    gradient: "from-[#4ADE80] to-[#22C55E]",
    image: "/assets/generated/seo-service.dim_800x500.jpg",
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
    gradient: "from-[#22C55E] to-[#16A34A]",
    image: "/assets/generated/digital-marketing-service.dim_800x500.jpg",
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
    gradient: "from-[#4ADE80] to-[#84CC16]",
    image: "/assets/generated/social-media-gym-engagement.dim_800x600.jpg",
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
    gradient: "from-[#86EFAC] to-[#22C55E]",
    image: "/assets/generated/responsive-web-design-devices.dim_800x600.jpg",
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
    gradient: "from-[#16A34A] to-[#4ADE80]",
    image: "/assets/generated/graphic-design-service.dim_800x500.jpg",
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Business Automation & Digital Setup",
    description: "",
    gradient: "from-[#4ADE80] to-[#A3E635]",
    image: "/assets/generated/business-automation-service.dim_800x500.jpg",
    subItems: [
      "CRM Setup & Integration",
      "Lead Management Systems",
      "WhatsApp & Email Automation",
      "Sales Funnel Setup",
      "Analytics & Reporting Dashboard",
    ],
  },
];

const serviceDots = [
  {
    id: "sd1",
    top: "10%",
    left: "8%",
    color: "#4ADE80",
    size: 4,
    delay: 0,
    dur: 8,
  },
  {
    id: "sd2",
    top: "25%",
    left: "92%",
    color: "#A3E635",
    size: 3,
    delay: 1.5,
    dur: 11,
  },
  {
    id: "sd3",
    top: "40%",
    left: "15%",
    color: "#22C55E",
    size: 5,
    delay: 0.7,
    dur: 9,
  },
  {
    id: "sd4",
    top: "60%",
    left: "80%",
    color: "#16A34A",
    size: 3,
    delay: 2.3,
    dur: 7.5,
  },
  {
    id: "sd5",
    top: "75%",
    left: "50%",
    color: "#4ADE80",
    size: 4,
    delay: 1.0,
    dur: 10,
  },
  {
    id: "sd6",
    top: "85%",
    left: "25%",
    color: "#A3E635",
    size: 3,
    delay: 3.1,
    dur: 8.5,
  },
  {
    id: "sd7",
    top: "18%",
    left: "60%",
    color: "#22C55E",
    size: 4,
    delay: 0.4,
    dur: 12,
  },
  {
    id: "sd8",
    top: "50%",
    left: "95%",
    color: "#4ADE80",
    size: 2,
    delay: 2.0,
    dur: 9.5,
  },
  {
    id: "sd9",
    top: "90%",
    left: "70%",
    color: "#16A34A",
    size: 5,
    delay: 1.8,
    dur: 7,
  },
];

const driftOrbs = [
  {
    id: "do1",
    color: "#4ADE80",
    size: 200,
    top: "20%",
    left: "5%",
    delay: 0,
    dur: 12,
  },
  {
    id: "do2",
    color: "#A3E635",
    size: 160,
    top: "55%",
    left: "75%",
    delay: 3,
    dur: 15,
  },
  {
    id: "do3",
    color: "#22C55E",
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            border: "1px solid rgba(34, 197, 94, 0.12)",
            animation: "rotate-slow 28s linear infinite",
            background:
              "conic-gradient(from 0deg, rgba(74,222,128,0.08), rgba(34,197,94,0.08), rgba(163,230,53,0.06), rgba(74,222,128,0.08))",
          }}
        />
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
            border: "1px solid rgba(22, 163, 74, 0.1)",
            animation: "rotate-slow 18s linear infinite reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
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
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-white font-bold text-xl mb-3">
                {service.title}
              </h3>

              {service.description && (
                <p className="text-[#A7B2C8] text-sm font-medium leading-relaxed">
                  {service.description}
                </p>
              )}

              {service.subItems && service.subItems.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {service.subItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[#A7B2C8] text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4ADE80] to-[#22C55E] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl w-full h-40 object-cover mt-4 opacity-90"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
