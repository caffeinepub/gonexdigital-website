import { useInView } from "../hooks/useInView";

const reasons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Results-Driven",
    description:
      "Every strategy is backed by data. We focus on metrics that actually matter — leads, conversions, and revenue.",
    color: "#4ADE80",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Creative Excellence",
    description:
      "We don't do mediocre. Our creative team pushes boundaries to deliver stunning visuals and compelling narratives.",
    color: "#A3E635",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "On-Time Delivery",
    description:
      "Deadlines are sacred. We plan meticulously and deliver on schedule — every time, without compromising quality.",
    color: "#22C55E",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Client-First Approach",
    description:
      "You're not just a client — you're a partner. We listen, adapt, and stay fully transparent throughout the process.",
    color: "#16A34A",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. Clear packages and honest quotes so you can plan with confidence.",
    color: "#4ADE80",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Full-Service Agency",
    description:
      "From branding to development to marketing — one team, one vision, complete digital transformation.",
    color: "#A3E635",
  },
];

const stars = [
  { id: "s1", top: "8%", left: "12%", size: 3, delay: 0, dur: 2.5, ci: 0 },
  { id: "s2", top: "18%", left: "85%", size: 2, delay: 0.8, dur: 3.2, ci: 1 },
  { id: "s3", top: "32%", left: "5%", size: 4, delay: 1.6, dur: 2.8, ci: 2 },
  { id: "s4", top: "48%", left: "92%", size: 2, delay: 0.3, dur: 3.8, ci: 0 },
  { id: "s5", top: "62%", left: "70%", size: 3, delay: 2.1, dur: 2.2, ci: 1 },
  { id: "s6", top: "78%", left: "20%", size: 2, delay: 1.0, dur: 4.0, ci: 2 },
  { id: "s7", top: "88%", left: "55%", size: 3, delay: 1.4, dur: 2.6, ci: 0 },
  { id: "s8", top: "55%", left: "40%", size: 2, delay: 2.8, dur: 3.4, ci: 1 },
];

const STAR_COLORS = ["#4ADE80", "#A3E635", "#22C55E"] as const;
const STAR_GLOWS = [
  "0 0 8px #4ADE80, 0 0 16px #4ADE8066",
  "0 0 8px #A3E635, 0 0 16px #A3E63566",
  "0 0 8px #22C55E, 0 0 16px #22C55E66",
] as const;

const ambientBlobs = [
  {
    id: "ab1",
    color: "#4ADE80",
    size: 350,
    top: "-5%",
    left: "-8%",
    delay: 0,
    dur: 9,
  },
  {
    id: "ab2",
    color: "#22C55E",
    size: 300,
    top: "60%",
    left: "75%",
    delay: 2.5,
    dur: 11,
  },
  {
    id: "ab3",
    color: "#A3E635",
    size: 250,
    top: "40%",
    left: "45%",
    delay: 4.5,
    dur: 8,
  },
];

export default function WhyChoose() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(34,197,94,0.03) 50%, transparent 100%)",
      }}
    >
      {/* Animated background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient pulsing blobs */}
        {ambientBlobs.map((blob) => (
          <div
            key={blob.id}
            style={{
              position: "absolute",
              top: blob.top,
              left: blob.left,
              width: blob.size,
              height: blob.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 65%)`,
              animation: `aurora-pulse ${blob.dur}s ease-in-out infinite`,
              animationDelay: `${blob.delay}s`,
              opacity: 0.08,
              filter: "blur(45px)",
            }}
          />
        ))}

        {/* Twinkling stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: STAR_COLORS[star.ci],
              animation: `twinkle ${star.dur}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: STAR_GLOWS[star.ci],
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 fade-in ${isInView ? "visible" : ""}`}
        >
          <p className="text-sm font-semibold tracking-widest mb-3 gradient-text">
            THE GONEXDIGITAL DIFFERENCE
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            Why Choose Gonexdigital?
          </h2>
          <p className="text-[#A7B2C8] mt-4 text-base font-medium max-w-lg mx-auto">
            We combine strategy, creativity, and technology to deliver results
            that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              data-ocid={`why.item.${i + 1}`}
              className={`bg-[#111827] border border-white/[0.08] rounded-2xl p-8 card-glow transition-all duration-500 cursor-default fade-in fade-in-delay-${Math.min(i + 1, 5)} ${
                isInView ? "visible" : ""
              }`}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{ color: reason.color, background: `${reason.color}18` }}
              >
                {reason.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">
                {reason.title}
              </h3>
              <p className="text-[#A7B2C8] text-sm font-medium leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
