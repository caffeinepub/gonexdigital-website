import { useInView } from "../hooks/useInView";

const DOTS = [0, 1, 2, 3, 4, 5, 6, 7];

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="home"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center overflow-hidden hero-mesh"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob-1 absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #4C6FFF 0%, #7A4DFF 50%, transparent 70%)",
            top: "-100px",
            right: "-100px",
          }}
        />
        <div
          className="blob-2 absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #41C8FF 0%, #4C6FFF 60%, transparent 70%)",
            bottom: "-50px",
            left: "-80px",
          }}
        />
        <div
          className="blob-3 absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #D84BFF 0%, #7A4DFF 60%, transparent 70%)",
            top: "40%",
            right: "20%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className={`fade-in ${isInView ? "visible" : ""}`}>
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-gradient-to-r from-[#41C8FF] to-[#7A4DFF]" />
            <span
              className="text-sm font-semibold tracking-widest"
              style={{
                background: "linear-gradient(90deg,#41C8FF,#7A4DFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Elevating Every Byte.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
            We Build <span className="gradient-text">Websites, Brands</span>{" "}
            &amp; Digital Growth
          </h1>

          {/* Subtext */}
          <p className="text-[#A7B2C8] text-lg font-medium leading-relaxed mb-10 max-w-xl">
            Gonexdigital helps businesses grow online through stunning design,
            smart marketing, and powerful digital strategies.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tally.so/r/44LKKA"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.primary_button"
              className="btn-gradient text-white font-bold px-8 py-4 rounded-full text-base tracking-wide shadow-glow"
            >
              Start Your Project
            </a>
            <a
              href="#work"
              data-ocid="hero.secondary_button"
              className="border border-white/20 hover:border-[#4C6FFF]/60 text-white font-bold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 hover:bg-white/5"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right — Neon mesh graphic */}
        <div
          className={`hidden lg:flex justify-center items-center fade-in fade-in-delay-3 ${isInView ? "visible" : ""}`}
        >
          <div className="relative w-[480px] h-[480px]">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full border border-[#4C6FFF]/20"
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            />
            <div
              className="absolute inset-8 rounded-full border border-[#7A4DFF]/25"
              style={{ animation: "pulse-glow 3s ease-in-out infinite 0.5s" }}
            />
            <div
              className="absolute inset-16 rounded-full border border-[#41C8FF]/20"
              style={{ animation: "pulse-glow 3s ease-in-out infinite 1s" }}
            />

            {/* Center glow orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-48 h-48 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(76,111,255,0.5) 0%, rgba(122,77,255,0.3) 50%, transparent 70%)",
                  boxShadow:
                    "0 0 80px rgba(76,111,255,0.4), 0 0 160px rgba(122,77,255,0.2)",
                }}
              />
            </div>

            {/* Floating G */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-8xl font-black gradient-text"
                style={{ textShadow: "none" }}
              >
                G
              </span>
            </div>

            {/* Dots */}
            {DOTS.map((i) => {
              const angle = (i / 8) * 2 * Math.PI;
              const r = 200;
              const x = 240 + r * Math.cos(angle);
              const y = 240 + r * Math.sin(angle);
              return (
                <div
                  key={`dot-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: x - 4,
                    top: y - 4,
                    background: i % 2 === 0 ? "#41C8FF" : "#D84BFF",
                    boxShadow: `0 0 8px ${i % 2 === 0 ? "#41C8FF" : "#D84BFF"}`,
                    animation: `pulse-glow ${2 + i * 0.3}s ease-in-out infinite`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
