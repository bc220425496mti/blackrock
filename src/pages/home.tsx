import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Scale Your Revenue?</h3>
            <p className="text-muted-foreground mb-6">
              Transform your sales performance with proven enterprise strategies and cross-industry expertise
            </p>
            <a href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover-scale glow-effect inline-block">
              Get In Touch
            </a>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © 2024 Portfolio. Crafted with passion and innovation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
