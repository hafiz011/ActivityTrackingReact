import React from 'react';


const brands: Brand[] = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "SecureNet", logo: "SN" },
  { name: "CloudBase", logo: "CB" },
  { name: "InnovateLabs", logo: "IL" },
];

export const TrustedBy: React.FC = () => {
  return (
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-12 text-lg">
            Trusted by forward-thinking teams around the globe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center gap-3 transition-opacity hover:opacity-100">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-sm font-bold">
                  {brand.logo}
                </div>
                <span className="font-semibold text-lg">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
);
};