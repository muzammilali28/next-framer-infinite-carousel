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
    </main>
  );
}
