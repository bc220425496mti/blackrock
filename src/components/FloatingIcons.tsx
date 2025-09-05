import { useEffect, useRef } from "react";

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const techIcons = [
      { icon: 'fab fa-react', color: 'text-primary' },
      { icon: 'fab fa-js', color: 'text-accent' },
      { icon: 'fab fa-python', color: 'text-secondary' },
      { icon: 'fab fa-aws', color: 'text-primary' },
      { icon: 'fab fa-node-js', color: 'text-accent' },
      { icon: 'fas fa-database', color: 'text-secondary' },
      { icon: 'fab fa-docker', color: 'text-primary' },
      { icon: 'fab fa-git-alt', color: 'text-accent' },
      { icon: 'fas fa-brain', color: 'text-secondary' },
      { icon: 'fas fa-gamepad', color: 'text-primary' }
    ];

    const createFloatingIcon = () => {
      const iconElement = document.createElement('i');
      const randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)];
      
      iconElement.className = `${randomIcon.icon} ${randomIcon.color} floating-icon text-2xl`;
      
      // Random positioning
      iconElement.style.left = Math.random() * 90 + '%';
      iconElement.style.top = Math.random() * 90 + '%';
      iconElement.style.animationDuration = (Math.random() * 4 + 6) + 's';
      iconElement.style.animationDelay = Math.random() * 3 + 's';
      
      container.appendChild(iconElement);
      
      // Remove element after animation cycles
      setTimeout(() => {
        if (iconElement.parentNode) {
          iconElement.parentNode.removeChild(iconElement);
        }
      }, 12000);
    };

    // Create initial icons
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createFloatingIcon(), i * 1000);
    }

    // Continue creating icons periodically
    const interval = setInterval(createFloatingIcon, 3000);

    return () => {
      clearInterval(interval);
      // Clean up existing elements
      const elements = container.querySelectorAll('.floating-icon');
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      data-testid="floating-icons"
    />
  );
}