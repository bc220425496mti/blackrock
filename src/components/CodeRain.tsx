import { useEffect, useRef } from "react";

export default function CodeRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const javaKeywords = [
      'public', 'class', 'static', 'void', 'main', 'String[]', 'args', 'System.out.println',
      'private', 'protected', 'extends', 'implements', 'interface', 'abstract',
      'new', 'this', 'super', 'return', 'if', 'else', 'for', 'while', 'try', 'catch',
      '{}', '();', 'int', 'boolean', 'double', 'float', 'char', 'long', 'byte', 'short',
      'ArrayList', 'HashMap', 'LinkedList', 'Scanner', 'BufferedReader', 'FileWriter',
      '@Override', '@Deprecated', '@SuppressWarnings', 'final', 'synchronized', 'volatile'
    ];

    const createCodeElement = () => {
      const codeElement = document.createElement('div');
      codeElement.className = 'code-char';
      codeElement.textContent = javaKeywords[Math.floor(Math.random() * javaKeywords.length)];
      
      // Random positioning
      codeElement.style.left = Math.random() * 100 + '%';
      codeElement.style.animationDuration = (Math.random() * 3 + 2) + 's';
      codeElement.style.animationDelay = Math.random() * 2 + 's';
      codeElement.style.fontSize = (Math.random() * 8 + 10) + 'px';
      
      container.appendChild(codeElement);
      
      // Remove element after animation
      setTimeout(() => {
        if (codeElement.parentNode) {
          codeElement.parentNode.removeChild(codeElement);
        }
      }, 6000);
    };

    // Create initial batch of code elements
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createCodeElement(), i * 200);
    }

    // Continue creating elements periodically
    const interval = setInterval(createCodeElement, 800);

    return () => {
      clearInterval(interval);
      // Clean up existing elements
      const elements = container.querySelectorAll('.code-char');
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="java-code-rain absolute inset-0 overflow-hidden pointer-events-none z-0"
      data-testid="code-rain"
    />
  );
}