import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    const newPositions = [...positions];
    newPositions.push(newPositions.shift());
    setPositions(newPositions);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    handleShuffle();
  };

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < testimonials.length - 1;

  return (
    <div className="w-full h-full">
      {/* Desktop version - Shuffling cards with navigation arrows */}
      <div className="hidden md:block w-full h-full">
        {/* Navigation arrows - positioned above the cards */}
        <div className="flex justify-end gap-2 mb-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={handlePrevious}
            disabled={!canScrollPrev}
            className="disabled:pointer-events-auto text-white hover:text-white/80"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleNext}
            disabled={!canScrollNext}
            className="disabled:pointer-events-auto text-white hover:text-white/80"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
        
        {/* Cards container */}
        <div className="grid place-content-center overflow-visible w-full h-full">
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