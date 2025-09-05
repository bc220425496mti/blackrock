import { useQuery } from "@tanstack/react-query";
import { type Skill } from "@shared/schema";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { data: skills = [], isLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const businessSkills = skills.filter(skill => skill.category === 'business');

  const technologies = [
    { icon: "fab fa-react", name: "React", color: "text-primary" },
    { icon: "fab fa-js", name: "JavaScript", color: "text-accent" },
    { icon: "fab fa-python", name: "Python", color: "text-secondary" },
    { icon: "fab fa-aws", name: "AWS", color: "text-primary" },
    { icon: "fab fa-node-js", name: "Node.js", color: "text-accent" },
    { icon: "fas fa-database", name: "Database", color: "text-secondary" },
  ];

  if (isLoading) {
    return (
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-muted-foreground">Loading skills...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6" data-testid="skills-title">
              Technical Arsenal
            </h2>
            <p className="text-xl text-muted-foreground">
              Mastering technologies that shape the digital future
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <AnimatedSection>
            <div data-testid="technical-skills">
              <h3 className="text-3xl font-bold mb-8">
                <i className="fas fa-code text-primary mr-4"></i>Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.id} className="skill-item" data-testid={`technical-skill-${index}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          '--progress': `${skill.percentage}%`,
                          width: inView ? `${skill.percentage}%` : '0%'
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Business Skills */}
          <AnimatedSection>
            <div data-testid="business-skills">
              <h3 className="text-3xl font-bold mb-8">
                <i className="fas fa-chart-line text-secondary mr-4"></i>Business Skills
              </h3>
              <div className="space-y-6">
                {businessSkills.map((skill, index) => (
                  <div key={skill.id} className="skill-item" data-testid={`business-skill-${index}`}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          '--progress': `${skill.percentage}%`,
                          width: inView ? `${skill.percentage}%` : '0%'
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Technology Stack */}
        <AnimatedSection>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12" data-testid="tech-stack-title">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8" data-testid="tech-stack">
              {technologies.map((tech, index) => (
                <div key={index} className="glassmorphism p-6 rounded-lg hover-scale text-center group" data-testid={`tech-${index}`}>
                  <i className={`${tech.icon} text-4xl ${tech.color} mb-4 group-hover:scale-110 transition-transform`}></i>
                  <p className="font-semibold">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
