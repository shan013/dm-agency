
const brands = [
  "Upwork",
  "fiverr.",
  "◍ asana",
  "Bēhance",
  "◍ slack",
];

export default function Brands() {
  return (
    <section className="brands">
      <div className="brands-track">
        {/* First set */}
        {brands.map((brand, index) => (
          <span key={`first-${index}`}>{brand}</span>
        ))}

        {/* Duplicate set for continuous scrolling */}
        {brands.map((brand, index) => (
          <span key={`second-${index}`} aria-hidden="true">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
