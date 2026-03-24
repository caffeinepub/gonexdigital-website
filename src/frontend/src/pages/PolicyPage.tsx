import { Link } from "@tanstack/react-router";

interface Section {
  title: string;
  content: string;
}

interface PolicyPageProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export default function PolicyPage({
  title,
  lastUpdated,
  intro,
  sections,
}: PolicyPageProps) {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Nav bar */}
      <header className="border-b border-white/[0.06] py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-black gradient-text">G</span>
            <span className="text-white font-bold text-lg">Gonexdigital</span>
          </Link>
          <Link
            to="/"
            data-ocid="policy.link"
            className="text-[#A7B2C8] hover:text-white text-sm font-semibold transition-colors"
          >
            &#8592; Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black text-white mb-2">{title}</h1>
        <p className="text-[#A7B2C8] text-sm font-medium mb-8">
          Last updated: {lastUpdated}
        </p>
        <p className="text-[#A7B2C8] font-medium leading-relaxed mb-10 text-base">
          {intro}
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-[#111827] border border-white/[0.08] rounded-2xl p-8"
            >
              <h2 className="text-white font-bold text-xl mb-4">
                {section.title}
              </h2>
              <p className="text-[#A7B2C8] font-medium leading-relaxed text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/[0.06] py-6 px-6 text-center">
        <p className="text-[#A7B2C8] text-sm font-medium">
          &copy; {new Date().getFullYear()} Gonexdigital. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
