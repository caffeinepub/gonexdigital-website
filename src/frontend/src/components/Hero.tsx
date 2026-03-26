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
              "radial-gradient(circle, #22C55E 0%, #16A34A 50%, transparent 70%)",
            top: "-100px",
            right: "-100px",
          }}
        />
        <div
          className="blob-2 absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #4ADE80 0%, #22C55E 60%, transparent 70%)",
            bottom: "-50px",
            left: "-80px",
          }}
        />
        <div
          className="blob-3 absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #84CC16 0%, #16A34A 60%, transparent 70%)",
            top: "40%",
            right: "20%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className={`fade-in ${isInView ? "visible" : ""}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-gradient-to-r from-[#4ADE80] to-[#22C55E]" />
            <span
              className="text-sm font-semibold tracking-widest"
              style={{
                background: "linear-gradient(90deg,#4ADE80,#22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Elevating Every Byte.
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
            From Clicks to Clients —{" "}
            <span className="gradient-text">We Make It Happen.</span>
          </h1>

          <p className="text-[#A7B2C8] text-lg font-medium leading-relaxed mb-10 max-w-xl">
            Gonexdigital is a full-service digital growth agency specializing in
            websites, ads &amp; branding.
          </p>

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
              className="border border-white/20 hover:border-[#22C55E]/60 text-white font-bold px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 hover:bg-white/5"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right — Neon mesh graphic with logo */}
        <div
          className={`hidden lg:flex justify-center items-center fade-in fade-in-delay-3 ${isInView ? "visible" : ""}`}
        >
          <div className="relative w-[480px] h-[480px]">
            {/* Outer rings */}
            <div
              className="absolute inset-0 rounded-full border border-[#22C55E]/20"
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            />
            <div
              className="absolute inset-8 rounded-full border border-[#16A34A]/25"
              style={{ animation: "pulse-glow 3s ease-in-out infinite 0.5s" }}
            />
            <div
              className="absolute inset-16 rounded-full border border-[#4ADE80]/20"
              style={{ animation: "pulse-glow 3s ease-in-out infinite 1s" }}
            />

            {/* Center glow orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-48 h-48 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(34,197,94,0.5) 0%, rgba(22,163,74,0.3) 50%, transparent 70%)",
                  boxShadow:
                    "0 0 80px rgba(34,197,94,0.4), 0 0 160px rgba(22,163,74,0.2)",
                }}
              />
            </div>

            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/uploads/untitled_design_8_-removebg-preview-picsart-aiimageenhancer-019d2b3a-9901-72fc-bd80-e0792a57c575-1.png"
                alt="Gonexdigital"
                className="w-36 h-36 object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 20px rgba(34,197,94,0.8)) drop-shadow(0 0 40px rgba(74,222,128,0.5))",
                }}
              />
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
                    background: i % 2 === 0 ? "#4ADE80" : "#A3E635",
                    boxShadow: `0 0 8px ${i % 2 === 0 ? "#4ADE80" : "#A3E635"}`,
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
