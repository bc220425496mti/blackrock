import { useQuery } from "@tanstack/react-query";
import { type Project } from "@shared/schema";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

export default function Projects() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects/featured"],
  });

  const [filter, setFilter] = useState<string>("all");

  if (isLoading) {
    return (
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-muted-foreground">Loading projects...</div>
        </div>
      </section>
    );
  }

  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  const getColorClass = (index: number) => {
    const colors = ["primary", "secondary", "accent"];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="section-padding bg-muted relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6" data-testid="projects-title">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Innovative solutions that blend technology with business value
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "glassmorphism hover:bg-primary/20"
                }`}
                data-testid={`filter-${category}`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
          {filteredProjects.map((project, index) => (
            <AnimatedSection key={project.id}>
              <div className="glassmorphism rounded-xl overflow-hidden card-hover-effect glow-effect group border-gradient" data-testid={`project-${index}`}>
                <img 
                  src={project.imageUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`project-image-${index}`}
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <i className={`fas fa-${index % 2 === 0 ? 'brain' : index % 3 === 0 ? 'gamepad' : 'robot'} text-${getColorClass(index)} text-xl mr-3`}></i>
                    <h3 className="text-xl font-bold" data-testid={`project-title-${index}`}>{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4" data-testid={`project-technologies-${index}`}>
                    {project.technologies?.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`px-3 py-1 bg-${getColorClass(techIndex)}/20 text-${getColorClass(techIndex)} rounded-full text-xs font-mono`}
                        data-testid={`project-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    className={`w-full bg-${getColorClass(index)}/10 hover:bg-${getColorClass(index)}/20 text-${getColorClass(index)} py-2 px-4 rounded-lg transition-colors`}
                    data-testid={`project-view-${index}`}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>View Project
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-12">
            <button className="glassmorphism px-8 py-4 rounded-lg hover-scale text-lg font-semibold" data-testid="view-all-projects">
              <i className="fab fa-github mr-2"></i>View All Projects on GitHub
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
