import NavBar from "@/components/AppHeader";
import Footer from "@/components/AppFooter";
import HeroCarousel from "@/components/Carousel";
import Results from "@/components/Results";
import Highlights from "@/components/Highlights";
import News from "@/components/LastNews";
import SportsNews from '@/components/SportsNews';
import VideoSection from "@/components/Video";
import NewsMobile from "@/components/NewsAppMobile";
import AdBanner from "@/components/AdBanner";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />

      <AdBanner/>
      
      {/* HeroCarousel FORA do container - largura total */}
      <HeroCarousel />
      
      {/* Conteúdo normal da página DENTRO do container */}
      <main className="max-w-7xl mx-auto px-4 py-8">
      </main>
      <Results/>
      
      {/* Desktop: Mostra Highlights e News */}
      <div className="hidden md:block">
        <Highlights/>
        <News/>
      </div>
      
      {/* Mobile: Mostra apenas NewsMobile */}
      <div className="block md:hidden">
        <NewsMobile/>
      </div>
      
      <SportsNews/>
      <VideoSection/>
      <Footer />
    </div>
  );
}