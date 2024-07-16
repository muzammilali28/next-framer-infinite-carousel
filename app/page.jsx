import FramerScrollExample from "./_components/FramerScrollExample";
import AutoInfiniteScrollCarousel from "./_components/AutoInfiniteScrollCarousel";
import ImageFitTest from "./_components/ImageFitTest";
import { ScrollAnimations } from "./_components/ScrollAnimations";
import HorizontalScrollCarousel from "./_components/HorizontalScrollCarousel";
import MultiLayerParallax from "./_components/MultiLayerParallex";
import AnimateSVG from "./_components/AnimateSVG";

export default function Home() {
  return (
    <main>
      <FramerScrollExample />
      <AutoInfiniteScrollCarousel />
      <ImageFitTest />
      <ScrollAnimations />
      <HorizontalScrollCarousel />
      <MultiLayerParallax />
      <AnimateSVG />
      <div className="bg-red-200 flex items-center justify-center relative">
        <img src="/wheel.svg" alt="wheel-svg" className="z-[1] inset-0 rotate-0 hover:rotate-180 transition duration-1000 origin-center" />
        <img src="/spin-wheel-center-image.jpeg" alt="spin-wheel-center-image" className="absolute w-[340px] z-[0]"/>
      </div>
    </main>
  );
}
