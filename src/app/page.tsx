import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import AnimationPreferences from "@/components/AnimationPreferences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <AnimationPreferences>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-white text-gray-900">
        <Hero />
        <Services />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </AnimationPreferences>
  );
}
