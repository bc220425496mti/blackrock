import AnimatedSection from "./AnimatedSection";

export default function About() {
  const stats = [
    { value: "$50M+", label: "Pipeline Generated" },
    { value: "300%", label: "Average Revenue Increase" },
    { value: "$250K+", label: "Average Deal Size" },
    { value: "150+", label: "Enterprise Deals Closed" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold gradient-text mb-6" data-testid="about-title">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A visionary leader combining technical expertise with strategic business acumen
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional portrait" 
              className="rounded-2xl shadow-2xl hover-scale w-full max-w-md mx-auto"
              data-testid="about-image"
            />
          </AnimatedSection>
          
          <AnimatedSection>
            <div data-testid="about-content">
              <h3 className="text-4xl font-bold mb-6 gradient-text">Transforming Enterprise Sales Performance</h3>
              <div className="text-xl mb-6 super-bright-text font-semibold italic">
                "I live for the challenge of turning complex B2B deals into breakthrough revenue growth."
              </div>
              <div className="space-y-6 mb-8">
                <div className="text-lg leading-relaxed space-y-4">
                  <p className="text-muted-foreground">
                    Over the past decade, I've built my career around one core mission: <span className="text-primary font-semibold">helping enterprise organizations unlock exponential revenue growth through strategic sales transformation</span>. From my early days closing telecom deals to leading multi-million dollar SaaS implementations, I've consistently delivered results that exceed expectations.
                  </p>
                  <p className="text-muted-foreground">
                    As <span className="text-accent font-semibold">CEO of Albader Inc</span> and former <span className="text-secondary font-semibold">Sales Manager at Imperial Resource Group</span>, I've generated <span className="fire-gradient font-bold">$50M+ in pipeline revenue</span> across technology, financial services, and telecommunications sectors. My approach combines deep technical expertise with proven sales methodologies, enabling clients to achieve <span className="text-primary font-bold">300% revenue increases</span> and close deals averaging <span className="text-accent font-bold">$250K+</span>.
                  </p>
                  <p className="text-muted-foreground">
                    Today, I specialize in <span className="phenomenal-glow font-semibold">cross-industry B2B sales strategy, digital marketing automation, and financial market analysis</span> for Fortune 500 companies. Whether you're launching a new product, entering new markets, or need to accelerate your sales cycle, I bring the proven frameworks and hands-on experience to drive measurable impact.
                  </p>
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg border-2 border-primary/30 mt-6">
                    <p className="text-lg font-semibold super-bright-text text-center">
                      <i className="fas fa-phone mr-2"></i>Ready to transform your sales performance? 
                      <span className="fire-gradient">Let's discuss your revenue goals.</span>
                    </p>
                    <p className="text-center mt-2 text-primary font-bold">📞 03284175897 | 📧 contact@albaderinc.com</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6" data-testid="about-stats">
                {stats.map((stat, index) => {
                  const colors = ['primary', 'secondary', 'accent', 'primary'];
                  const icons = ['fas fa-dollar-sign', 'fas fa-chart-line', 'fas fa-handshake', 'fas fa-trophy'];
                  return (
                    <div key={index} className="glassmorphism p-6 rounded-lg card-hover-effect border-gradient" data-testid={`stat-${index}`}>
                      <div className={`text-3xl text-${colors[index]} mb-2 flex items-center justify-center phenomenal-glow font-bold`}>
                        <i className={`${icons[index]} mr-2`}></i>{stat.value}
                      </div>
                      <div className="text-sm super-bright-text font-semibold">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
