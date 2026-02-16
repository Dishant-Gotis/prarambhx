import { GoogleGeminiEffectDemo } from "@/components/ui/google-gemini-effect-demo";
import { HeroSection } from "@/components/ui/hero-odyssey";
import HoverFooter from "@/components/ui/hover-footer";

export default function Home() {
  return (
    <div className="w-full bg-black text-white">
      <section className="flex w-full min-h-screen justify-center items-center">
        <HeroSection />
      </section>
      <section className="relative w-full">
        <GoogleGeminiEffectDemo />
      </section>
      <section className="relative w-full">
        <HoverFooter />
      </section>
    </div>
  );
}
