import FramerScrollExample from "./_components/FramerScrollExample";
import AutoInfiniteScrollCarousel from "./_components/AutoInfiniteScrollCarousel";
import ImageFitTest from "./_components/ImageFitTest";
import { ScrollAnimations } from "./_components/ScrollAnimations";
import HorizontalScrollCarousel from "./_components/HorizontalScrollCarousel";
import MultiLayerParallax from "./_components/MultiLayerParallex";
import AnimateSVG from "./_components/AnimateSVG";
import AnimatedCounterExample from "./_components/AnimatedCounterExample";

export default function Home() {
  return (
    <main>
      {/* <FramerScrollExample />
      <AutoInfiniteScrollCarousel />
      <ImageFitTest />
      <ScrollAnimations />
      <HorizontalScrollCarousel />
      <MultiLayerParallax />
      <AnimateSVG />
      <div className="bg-red-200 flex items-center justify-center relative">
        <img src="/wheel.svg" alt="wheel-svg" className="z-[1] inset-0 rotate-0 hover:rotate-180 transition duration-1000 origin-center" />
        <img src="/spin-wheel-center-image.jpeg" alt="spin-wheel-center-image" className="absolute w-[340px] z-[0]" />
      </div>
      <div className="h-[40vh] w-screen bg-gradient-to-r from-orange-400 to-pink-500 flex flex-col justify-center items-center gap-y-3">
        Black
        <div className="flex justify-center items-centers">
          <div className="flex w-64 bg-gradient-to-r from-black rounded-full">
            <div className="relative -left-3 size-20 bg-black border-r-2 border-gray-500 rounded-full">
            </div>
            <p className="relative -left-20 mt-5 text-white">Hello</p>
            <p className="relative -left-10 text-white">Hello World</p>
          </div>
        </div>
        White
        <div className="flex justify-center items-centers">
          <div className="flex w-64 bg-gradient-to-r from-[#edf2ff] rounded-full p-[2px] relative before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-blue-400 after:absolute after:inset-x-8 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-blue-400">
            <div className="relative -left-3 size-20 scale-105 bg-white rounded-full z-[1]">
            </div>
            <p className="relative -left-20 mt-5 text-black z-[1]">Hello</p>
            <p className="relative -left-10 text-black">Hello World</p>
          </div>
        </div>
      </div> */}
      <AnimatedCounterExample />
    </main>
  );
}
