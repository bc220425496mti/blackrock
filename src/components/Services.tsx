import AnimatedSection from "./AnimatedSection";

export default function Services() {
  const services = [
    {
      title: "Enterprise Sales Strategy",
      description: "Develop and execute comprehensive sales strategies for Fortune 500 companies, including go-to-market planning, territory optimization, and competitive positioning.",
      metrics: "$20M+ pipeline generated",
      icon: "fas fa-chess-queen",
      features: [
        "Strategic account planning and management",
        "Complex B2B sales cycle optimization", 
        "C-level executive relationship building",
        "Cross-functional team leadership"
      ]
    },
    {
      title: "Digital Marketing Automation",
      description: "Transform lead generation and customer acquisition through AI-powered marketing automation, CRM integration, and data-driven campaign optimization.",
      metrics: "300% conversion rate increase",
      icon: "fas fa-robot", 
      features: [
        "Salesforce & HubSpot implementation",
        "Lead scoring and nurturing systems",
        "Multi-channel campaign orchestration",
        "ROI tracking and analytics"
      ]
    },
    {
      title: "Cross-Industry Solutions",
      description: "Leverage deep expertise across financial services, technology, and telecommunications to drive revenue growth and market expansion.",
      metrics: "150+ deals closed",
      icon: "fas fa-globe",
      features: [
        "Financial services compliance and solutions",
        "Technology and SaaS implementations", 
        "Telecommunications infrastructure sales",
        "Industry-specific value proposition development"
      ]
    },
    {
      title: "Revenue Acceleration",
      description: "Implement proven methodologies to compress sales cycles, increase deal sizes, and maximize customer lifetime value through strategic account expansion.",
      metrics: "$250K+ average deal size",
      icon: "fas fa-rocket",
      features: [
        "Sales process optimization and automation",
        "Deal velocity and pipeline management",
        "Customer success and expansion strategies", 
        "Performance metrics and forecasting"
      ]
    }
  ];

  const clientLogos = [
    { name: "Fortune 500 Technology", logo: "🏢" },
    { name: "Global Financial Services", logo: "🏦" },
    { name: "Enterprise SaaS", logo: "☁️" },
    { name: "Telecommunications", logo: "📡" },
    { name: "AI & Cloud Infrastructure", logo: "🤖" },
    { name: "Digital Transformation", logo: "⚡" }
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6" data-testid="services-title">
              Enterprise Sales Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven methodologies and cross-industry experience delivering exceptional revenue growth for Fortune 500 companies
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="glassmorphism p-8 rounded-xl card-hover-effect border-gradient h-full" data-testid={`service-${index}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-2xl text-primary`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-accent font-semibold">{service.metrics}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check-circle text-primary mr-3 mt-1"></i>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Social Proof Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border-gradient">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold phenomenal-glow mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-lg text-muted-foreground">
                Successfully delivered results across multiple industries and market segments
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{client.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary/20 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-primary">156%</h4>
                  <p className="text-sm text-muted-foreground">Average Quota Attainment</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-secondary">40%</h4>
                  <p className="text-sm text-muted-foreground">Sales Cycle Reduction</p>
                </div>
                <div className="bg-accent/20 rounded-lg p-4">
                  <h4 className="text-2xl font-bold text-accent">220%</h4>
                  <p className="text-sm text-muted-foreground">Account Value Increase</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}