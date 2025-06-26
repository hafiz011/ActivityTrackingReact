import React from 'react';

type Brand = {
  name: string;
  logo: string;
};

const brands: Brand[] = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "SecureNet", logo: "SN" },
  { name: "CloudBase", logo: "CB" },
  { name: "InnovateLabs", logo: "IL" },
];

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-cyan-400 mb-12 text-lg font-mono tracking-wide">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Trusted by forward-thinking teams around the globe
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-3 transition-all duration-300 hover:opacity-100 opacity-70 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 flex items-center justify-center text-lg font-extrabold text-cyan-200 shadow-lg border border-cyan-700/30 animate-hologram-card">
                {brand.logo}
              </div>
              <span className="font-semibold text-lg text-cyan-100 font-mono tracking-wide">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};