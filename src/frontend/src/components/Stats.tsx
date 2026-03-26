import { useCounter } from "../hooks/useCounter";
import { useInView } from "../hooks/useInView";

const portfolioItems = [
  {
    title: "Social Media Management",
    image:
      "/assets/generated/portfolio-social-media-management.dim_600x400.jpg",
  },
  {
    title: "Ad Marketing",
    image: "/assets/generated/portfolio-ad-marketing.dim_600x400.jpg",
  },
  {
    title: "Graphic & Logo Design",
    image: "/assets/generated/portfolio-graphic-logo-design.dim_600x400.jpg",
  },
  {
    title: "Web & App Development",
    image: "/assets/generated/portfolio-web-app-development.dim_600x400.jpg",
  },
];

const particles = [
  { id: "p1", top: "8%", left: "5%", size: 3, delay: 0, dur: 7, ci: 0 },
  { id: "p2", top: "15%", left: "18%", size: 2, delay: 1.2, dur: 9, ci: 1 },
  { id: "p3", top: "22%", left: "72%", size: 4, delay: 0.5, dur: 8, ci: 2 },
  { id: "p4", top: "35%", left: "88%", size: 2, delay: 2.1, dur: 11, ci: 0 },
  { id: "p5", top: "55%", left: "94%", size: 3, delay: 0.8, dur: 6.5, ci: 1 },
  { id: "p6", top: "68%", left: "62%", size: 2, delay: 3.0, dur: 10, ci: 2 },
  { id: "p7", top: "75%", left: "30%", size: 4, delay: 1.5, dur: 7.5, ci: 0 },
  { id: "p8", top: "82%", left: "10%", size: 2, delay: 0.3, dur: 12, ci: 1 },
  { id: "p9", top: "45%", left: "45%", size: 3, delay: 2.7, dur: 8.5, ci: 2 },
  { id: "p10", top: "90%", left: "78%", size: 2, delay: 1.0, dur: 9.5, ci: 0 },
  { id: "p11", top: "12%", left: "55%", size: 3, delay: 4.2, dur: 7, ci: 1 },
  { id: "p12", top: "60%", left: "2%", size: 2, delay: 3.5, dur: 11, ci: 2 },
];

const PARTICLE_COLORS = ["#41C8FF", "#7A4DFF", "#D84BFF"] as const;
const PARTICLE_GLOWS = [
  "0 0 6px #41C8FF",
  "0 0 6px #7A4DFF",
  "0 0 6px #D84BFF",
] as const;

const orbs = [
  {
    id: "orb1",
    color: "#41C8FF",
    size: 380,
    top: "10%",
    left: "-5%",
    delay: 0,
    animDur: 7,
  },
  {
    id: "orb2",
    color: "#7A4DFF",
    size: 340,
    top: "50%",
    left: "60%",
    delay: 2,
    animDur: 9,
  },
  {
    id: "orb3",
    color: "#D84BFF",
    size: 280,
    top: "70%",
    left: "20%",
    delay: 4,
    animDur: 11,
  },
  {
    id: "orb4",
    color: "#4C6FFF",
    size: 320,
    top: "5%",
    left: "80%",
    delay: 1,
    animDur: 13,
  },
];

function StatCounter({
  target,
  suffix,
  label,
  active,
}: { target: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(target, 2000, active);
  return (
    <div className="text-center">
      <p className="text-5xl font-black text-white mb-2">
        <span className="gradient-text">
          {count}
          {suffix}
        </span>
      </p>
      <p className="text-[#A7B2C8] font-semibold text-sm tracking-wide">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Animated background layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Aurora orbs */}
        {orbs.map((orb) => (
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
              animation: `aurora-pulse ${orb.animDur}s ease-in-out infinite`,
              animationDelay: `${orb.delay}s`,
              opacity: 0.07,
              filter: "blur(40px)",
            }}
          />
        ))}

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: PARTICLE_COLORS[p.ci],
              animation: `float-particle ${p.dur}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
              opacity: 0.5,
              boxShadow: PARTICLE_GLOWS[p.ci],
            }}
          />
        ))}

        {/* Animated scan line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, #4C6FFF 30%, #7A4DFF 60%, transparent 100%)",
            animation: "scan-line 10s linear infinite",
            opacity: 0.25,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats strip */}
        <div
          className={`bg-[#111827] border border-white/[0.08] rounded-2xl p-12 mb-16 fade-in ${
            isInView ? "visible" : ""
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(76,111,255,0.08) 0%, rgba(122,77,255,0.05) 50%, rgba(216,75,255,0.08) 100%), #111827",
            boxShadow: "inset 0 0 80px rgba(76,111,255,0.05)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StatCounter
              target={150}
              suffix="+"
              label="Projects Delivered"
              active={isInView}
            />
            <StatCounter
              target={2}
              suffix="+"
              label="Years Experience"
              active={isInView}
            />
            <StatCounter
              target={25}
              suffix="+"
              label="Happy Clients"
              active={isInView}
            />
          </div>
        </div>

        {/* Portfolio grid header */}
        <div
          className={`text-center mb-12 fade-in fade-in-delay-1 ${
            isInView ? "visible" : ""
          }`}
        >
          <p className="text-sm font-semibold tracking-widest mb-3 gradient-text">
            OUR WORK
          </p>
          <h2 className="text-4xl font-black text-white">Portfolio</h2>
          <p className="text-[#A7B2C8] mt-3 text-base font-medium">
            A glimpse into what we create.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`portfolio.item.${i + 1}`}
              className={`relative rounded-2xl overflow-hidden group cursor-default fade-in fade-in-delay-${Math.min(i + 2, 5)} ${
                isInView ? "visible" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/90 via-[#0B0F1A]/30 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-base mb-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
