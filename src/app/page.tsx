import CanvasContainer from "@/components/CanvasContainer";
import Hero from "@/components/landing-page/Hero";

export default function Home() {
  return (
    <div>
      <div className='h-screen w-full fixed top-0 z-10'>
        <CanvasContainer />
      </div>
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
}
