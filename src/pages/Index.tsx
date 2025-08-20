import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { useState } from "react";
import { HoverButton } from "@/components/ui/hover-button";
import { CTASection } from "@/components/ui/cta-with-rectangle";
import { Features } from "@/components/ui/features-8";
import { Preview } from "@/components/ui/parallax-demo";
import { Gallery4 } from "@/components/ui/gallery4";
import { ShuffleCards } from "@/components/ui/demo";

const Index = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="relative min-h-screen">
      {/* Background do hero section e stats */}
      <div className="fixed top-0 left-0 right-0 h-[calc(100vh+10rem)] z-0" style={{
      backgroundImage: 'url("/lovable-uploads/87824824-ec87-437c-91ec-63561e7fa1ab.png")',
      backgroundPosition: isMobile ? 'right -100px center' : 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      maxHeight: 'calc(100vh + 10rem)'
    }} />

      {/* Barra de navegação fixa */}
      <header className="fixed top-0 left-0 right-0 z-50 glass bg-black/90 backdrop-blur-lg">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8">
              <svg width="32" height="32" viewBox="0 0 197 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-36 ">
                <rect x="0.936157" y="5.29504" width="5.29582" height="35.9824" fill="#0019FF" />
                <rect x="6.23242" y="5.29504" width="4.719" height="29.5451" transform="rotate(-90 6.23242 5.29504)" fill="#3448FF" />
                <rect x="6.23242" y="29.7748" width="4.719" height="29.5451" transform="rotate(-90 6.23242 29.7748)" fill="#001AFF" />
                <rect x="35.7772" y="5.29504" width="4.45964" height="3.83419" fill="#3448FF" />
                <rect x="31.3176" y="9.12927" width="4.45964" height="4.12913" fill="#3448FF" />
                <rect width="4.45964" height="4.12913" transform="matrix(-1 0 0 1 35.7772 17.0926)" fill="#0019FF" />
                <rect x="26.8582" y="13.2583" width="4.45964" height="3.83419" fill="#3448FF" />
                <rect width="4.45964" height="3.83419" transform="matrix(-1 0 0 1 40.2368 21.2217)" fill="#0019FF" />
                <path d="M63.6356 31.1014H62.0991V8.22499H78.5223V9.62489H63.6356V19.5949H78.0101V20.9607H63.6356V31.1014ZM88.969 31.4428C85.7594 31.4428 83.5059 29.9063 83.5059 27.2431C83.5059 24.4092 85.9643 23.3507 88.9007 23.0093L97.1976 22.0533V20.5509C97.1976 16.8975 95.5929 15.3611 91.598 15.3611C87.6032 15.3611 85.418 16.8975 85.418 20.1753V20.3461H83.9157V20.1753C83.9157 16.8634 86.6472 13.9953 91.6663 13.9953C96.583 13.9953 98.6317 16.8975 98.6317 20.3802V31.1014H97.3001V26.3554H97.1976C96.105 29.599 92.9638 31.4428 88.969 31.4428ZM85.0083 27.1407C85.0083 29.121 86.2716 30.1795 89.208 30.1795C93.476 30.1795 97.1976 28.0284 97.1976 23.4873V23.18L89.447 24.0677C86.4765 24.375 85.0083 25.0579 85.0083 27.1407ZM106.961 31.1014H105.424V14.3367H106.756V19.629H106.893C107.507 16.761 110.034 13.9953 114.131 13.9953C118.911 13.9953 121.301 17.478 121.301 21.5411V31.1014H119.765V21.4387C119.765 17.6828 117.921 15.3611 113.824 15.3611C109.419 15.3611 106.961 18.2633 106.961 23.0776V31.1014ZM137.853 31.1014H134.404C131.297 31.1014 129.248 29.8722 129.248 26.0139V15.6684H126.141V14.3367H129.248V10.0346H130.785V14.3367H137.853V15.6684H130.785V26.3895C130.785 28.9845 132.116 29.7015 134.78 29.7015H137.853V31.1014ZM151.205 31.4428C145.776 31.4428 142.225 27.7211 142.225 22.702C142.225 17.717 145.776 13.9953 151.205 13.9953C156.6 13.9953 160.185 17.717 160.185 22.702C160.185 27.7211 156.6 31.4428 151.205 31.4428ZM151.205 30.0771C156.259 30.0771 158.683 27.1748 158.683 22.702C158.683 18.2633 156.259 15.3611 151.205 15.3611C146.152 15.3611 143.728 18.2633 143.728 22.702C143.728 27.1748 146.152 30.0771 151.205 30.0771ZM167.648 31.1014H166.111V14.3367H167.443V19.3559H167.545C168.023 16.5219 170.072 13.9953 174.237 13.9953C177.959 13.9953 180.11 16.2829 180.691 19.5949H180.827C181.305 16.6927 183.422 13.9953 187.588 13.9953C191.992 13.9953 194.314 17.1707 194.314 21.5411V31.1014H192.812V21.4387C192.812 17.3755 191.002 15.3611 187.246 15.3611C182.876 15.3611 180.964 18.0926 180.964 23.0776V31.1014H179.461V21.4387C179.461 17.3755 177.652 15.3611 173.93 15.3611C169.491 15.3611 167.648 18.0926 167.648 23.0776V31.1014Z" fill="#E7E7E7" />
                <rect x="61.6703" y="8.20667" width="1.9849" height="1.83852" fill="#0A1940" />
              </svg>
            </div>
            
          </div>
          
          {isMobile ? <div className="relative">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300 hover:text-white">
                <Menu size={24} />
              </button>
              
              {isMenuOpen && <div className="absolute right-0 top-full mt-2 w-48 py-2 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">Home</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">Sobre</a>
                  <a href="#servicos" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">Serviços</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">Portfolio</a>
                  <a href="#contato" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10">
                    Fale com a Fantom
                  </a>
                </div>}
            </div> : <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-gray-300 hover:text-white">Home</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">Sobre</a>
              <a href="#servicos" className="text-sm text-gray-300 hover:text-white">Serviços</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">Portfolio</a>
              <HoverButton>
                <a href="#contato">Contato</a>
              </HoverButton>
            </div>}
        </nav>
      </header>

      <div className="relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-center min-h-[calc(100vh-10rem)] px-4 text-left pt-32">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm border rounded-full border-white/20 gap-2 bg-white/5 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Fantom Web
            </div>
            <h1 className="text-[36px] md:text-[36px] font-medium mb-6 bg-gradient-to-r from-[#0EA5E9] via-[#E9E9E9] to-[#7F92F3] bg-clip-text text-transparent bg-[size:200%_200%] animate-gradient leading-[120%] max-w-2xl">
            Criamos estratégia e tecnologia para escalar negócios.
            </h1>
            <p className="text-md text-gray-400 mb-8 max-w-xl font-regular">
            Sites e plataformas com alta performance, segurança e foco em conversão e resultados mensuráveis
            </p>
            <HoverButton className="">
              <a href="https://wa.link/b6swzf" target="_blank" rel="noopener noreferrer">Falar com a Fantom</a>
            </HoverButton>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center relative min-h-[500px]">
            <ShuffleCards />
          </div>
        </div>

        <div className="relative glass-top">
          <div className="relative py-24 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-400">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">+1M</div>
                <div className="text-gray-400">Gerados para nossos clientes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <Features />

        {/* Parallax Section - Temporarily Disabled
        <div className="relative">
          <Preview />
        </div>
        */}

        {/* Gallery Section */}
        <Gallery4 items={undefined} />

        {/* Início do background sólido */}
        <div className="relative bg-[#01061D]">
          {/* CTA Section */}
          <div id="contato">
            <CTASection badge={{
            text: "Comece agora"
          }} title="Acelere seus resultados com a Fantom." description="Fale com nosso time e descubra como podemos projetar a solução certa para você." action={{
            text: "Fale com um especialista",
            href: "https://wa.link/b6swzf",
            variant: "default"
          }} className="bg-[#01061D]" />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;