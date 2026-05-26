import TitleSection from "./TitleSection";

const testimonials = [
  {
    name: "Arnaud Labenne",
    role: "Directeur chez Dotsafe",
    text: "Bastien a livré un travail exceptionnel. Son sens du détail et sa réactivité ont fait toute la différence. Notre application est intuitive, rapide et les retours utilisateurs sont excellents.",
    stars: 5,
  },
  {
    name: "Richard Albiach",
    role: "Directeur chez Addeo",
    text: "Un développeur web vraiment compétent et professionnel. Il a su comprendre nos besoins rapidement et proposer des solutions techniques pertinentes. Je le recommande sans hésitation.",
    stars: 5,
  },
  {
    name: "Damien Bertrand",
    role: "Chef de projet à la CDC",
    text: "Collaboration très fluide du début à la fin. Le résultat est moderne, responsive et parfaitement aligné avec notre identité visuelle. Nous avons hâte de travailler ensemble à nouveau.",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-[4px]">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 1.5L12.39 6.26L17.5 7.05L13.75 10.7L14.78 15.79L10 13.27L5.22 15.79L6.25 10.7L2.5 7.05L7.61 6.26L10 1.5Z"
            fill="#FDC435"
            stroke="#FDC435"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, text, stars }) {
  return (
    <div className="flex flex-col gap-[20px] bg-white rounded-[24px] shadow-sm p-[28px] md:p-[36px]">
      <p className="font-nunito text-[15px] md:text-[17px] text-gray leading-relaxed flex-1">
        {text}
      </p>

      <StarRating count={stars} />

      <div className="flex items-center gap-[12px] pt-[4px] border-t border-gray-100">
        <div className="w-[44px] h-[44px] rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
          <span className="font-poppins font-bold text-charcoal text-[18px]">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-playfair font-semibold text-charcoal text-[16px]">{name}</p>
          <p className="font-nunito text-gray text-[13px]">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Testimonials({ title }) {
  return (
    <div className="flex flex-col mt-[60px] md:mt-[120px] gap-[40px] md:gap-[60px] md:mx-[8%]">
      <TitleSection title={title} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px]">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
