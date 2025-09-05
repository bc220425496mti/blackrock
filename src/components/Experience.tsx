import { useQuery } from "@tanstack/react-query";
import { type Experience } from "@shared/schema";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const { data: experiences = [], isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  const experienceImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
  ];

  if (isLoading) {
    return (
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-muted-foreground">Loading experience...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-padding bg-muted relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6" data-testid="experience-title">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From startup leadership to corporate innovation
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform md:-translate-x-0.5"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <AnimatedSection key={experience.id}>
                <div className={`relative timeline-item pl-16 md:pl-0 md:flex md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`} data-testid={`experience-${index}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="glassmorphism p-6 rounded-lg card-hover-effect border-gradient">
                      <div className="text-primary font-mono text-sm mb-2 bg-primary/10 px-3 py-1 rounded-full inline-block" data-testid={`experience-date-${index}`}>
                        <i className="fas fa-calendar-alt mr-2"></i>{experience.startDate} - {experience.endDate || 'Present'}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 gradient-text" data-testid={`experience-title-${index}`}>
                        <i className="fas fa-briefcase mr-2 text-primary"></i>{experience.title}
                      </h3>
                      <p className="text-lg text-secondary mb-2" data-testid={`experience-company-${index}`}>
                        <i className="fas fa-building mr-2"></i>{experience.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        <i className="fas fa-map-marker-alt mr-2"></i>{experience.location} • {experience.type}
                      </p>
                      <p className="text-muted-foreground" data-testid={`experience-description-${index}`}>
                        {experience.description}
                      </p>
                    </div>
                  </div>
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 1 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <img 
                      src={experienceImages[index % experienceImages.length]} 
                      alt={`${experience.title} at ${experience.company}`} 
                      className="rounded-lg shadow-lg hover-scale"
                      data-testid={`experience-image-${index}`}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
