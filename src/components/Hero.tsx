import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";
import AnimatedSection from "./AnimatedSection";
import profileImage from "../assets/profile-image.png";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const targetText = "Revenue Growth Excellence";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < targetText.length) {
        setTypedText(targetText.slice(0, typedText.length + 1));
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [typedText, targetText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
            <div className="flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Professional headshot" 
                className="w-64 h-64 rounded-full object-cover border-4 border-border shadow-lg"
                data-testid="profile-image"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
                <span className="text-foreground">Enterprise Sales Leader</span><br />
                <span className="text-muted-foreground">Driving</span> <span className="gradient-text">{typedText}</span>
                <span className="animate-blink">|</span>
              </h1>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.5}>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center" data-testid="hero-subtitle">
            <span className="text-foreground text-xl font-bold">Transforming Fortune 500 Sales Performance Across Tech, Finance & Telecom</span><br />
            <span className="font-semibold mt-4 block">300%+ Revenue Increases • Cross-Industry Expertise</span><br />
            <span className="font-bold mt-2 block">Proven track record: 95%+ quota attainment • 150+ enterprise deals closed</span>
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={1}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-testid="hero-actions">
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover-scale glow-effect text-lg font-semibold"
              data-testid="cta-contact"
            >
              <i className="fas fa-chart-line mr-2"></i>Scale Your Revenue
            </a>
            <a 
              href="#projects" 
              className="glassmorphism px-8 py-4 rounded-lg hover-scale text-lg font-semibold"
              data-testid="cta-projects"
            >
              <i className="fas fa-briefcase mr-2"></i>View Case Studies
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
        <i className="fas fa-chevron-down text-2xl text-primary"></i>
      </div>
    </section>
  );
}
