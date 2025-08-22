import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    testimonial: "O site desenvolvido pela Fantom para a GrowLab foi essencial para nossa participação no Web Summit. A estrutura clara e o design geraram credibilidade instantânea.",
    author: "Andreia F. - CEO @ Growlab IA",
    image: "/lovable-uploads/image-growlab.png"
  },
  {
    id: 2,
    testimonial: "A Fantom redesenhou completamente nosso website, alinhando estética e usabilidade.", 
    author: "Mathews A. - CEO @ Lumuz",
    image: "/lovable-uploads/image-lumuz.png"
  },
  {
    id: 3,
    testimonial: "Contratamos a Fantom para criar a identidade visual e loja online da MyCocina e recebemos inúmeros elogios pela qualidade das imagens de produto e pela experiência de compra",
    author: "Kaio N. - Diretor Comercial @ MyCocina",
    image: "/lovable-uploads/image-mycocina.png"
  }
];

function ShuffleCards() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <div className="w-full h-full">
      {/* Desktop version - Shuffling cards */}
      <div className="hidden md:grid place-content-center overflow-visible w-full h-full">
        <div className="relative h-[360px] w-[280px] md:-ml-[110px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              handleShuffle={handleShuffle}
              position={positions[index]}
            />
          ))}
        </div>
      </div>

      {/* Mobile version - Simple stacked cards */}
      <div className="md:hidden space-y-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-slate-800/20 backdrop-blur-md border-2 border-slate-700 rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={`Avatar of ${testimonial.author}`}
                className="h-16 w-16 rounded-full border-2 border-slate-700 bg-slate-200 object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm italic text-slate-400 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium text-indigo-400">{testimonial.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ShuffleCards } 