import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    name: "Priya Sharma",
    review:
      "Gonexdigital transformed our online presence completely. Our organic traffic tripled in just 4 months, and the website they built is absolutely stunning. Professional, responsive, and truly results-driven.",
  },
  {
    name: "Arjun Mehta",
    review:
      "Working with Gonexdigital was a game changer. Their social media strategy turned our brand into a recognized name in the industry. The team is creative, on-time, and always goes the extra mile.",
  },
  {
    name: "Sneha Patel",
    review:
      "The ads campaigns Gonexdigital ran for us delivered a 5x return on ad spend. Their transparent pricing and clear communication made the entire experience seamless. Highly recommend!",
  },
];

function EmptyAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
      style={{
        background: "linear-gradient(135deg, #4C6FFF 0%, #7A4DFF 100%)",
        border: "2px solid rgba(76,111,255,0.4)",
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 fade-in ${isInView ? "visible" : ""}`}
        >
          <p className="text-sm font-semibold tracking-widest mb-3 gradient-text">
            CLIENT STORIES
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className={`bg-[#111827] border border-white/[0.08] rounded-2xl p-8 card-glow transition-all duration-500 cursor-default flex flex-col gap-6 fade-in fade-in-delay-${i + 1} ${isInView ? "visible" : ""}`}
            >
              <div className="text-5xl font-black gradient-text leading-none">
                &ldquo;
              </div>
              <p className="text-[#A7B2C8] text-sm font-medium leading-relaxed flex-1">
                {t.review}
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-white/[0.06]">
                <EmptyAvatar name={t.name} />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
