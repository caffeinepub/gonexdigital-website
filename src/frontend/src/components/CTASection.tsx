import { useInView } from "../hooks/useInView";

export default function CTASection() {
  const { ref, isInView } = useInView(0.3);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6"
    >
      <div
        className={`max-w-5xl mx-auto rounded-3xl p-16 text-center relative overflow-hidden fade-in ${isInView ? "visible" : ""}`}
        style={{
          background:
            "linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.2) 50%, rgba(74,222,128,0.15) 100%), #111827",
          border: "1px solid rgba(34,197,94,0.2)",
          boxShadow:
            "0 0 80px rgba(34,197,94,0.1), 0 0 160px rgba(22,163,74,0.08)",
        }}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #22C55E, transparent)",
              top: "-100px",
              left: "-50px",
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #4ADE80, transparent)",
              bottom: "-80px",
              right: "-40px",
            }}
          />
        </div>

        <div className="relative z-10">
          <p className="text-sm font-semibold tracking-widest mb-4 gradient-text">
            READY TO GROW?
          </p>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#A7B2C8] text-lg font-medium mb-10 max-w-xl mx-auto">
            Take the first step toward transforming your digital presence.
            Let&apos;s build something remarkable.
          </p>
          <a
            href="https://tally.so/r/44LKKA"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.primary_button"
            className="btn-gradient text-white font-bold px-12 py-5 rounded-full text-lg tracking-wide shadow-glow-lg inline-block"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
