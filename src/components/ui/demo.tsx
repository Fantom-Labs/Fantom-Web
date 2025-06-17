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
  );
}

export { ShuffleCards } 