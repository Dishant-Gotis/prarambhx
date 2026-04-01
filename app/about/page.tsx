import AboutSection from "@/components/ui/about-section";
import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials-demo";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <AboutSection />
      <AnimatedTestimonialsDemo />
    </div>
  );
}
