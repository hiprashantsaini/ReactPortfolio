import { useEffect, useRef } from "react";

// Enhanced ParticleBackground component with more attractive and beautiful design
export const EnhancedParticleBackground = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      let particles = [];
      let mousePosition = { x: null, y: null };
      let animationFrameId;
      
      // Configuration for the particle system
      const config = {
        particleCount: 100,
        baseRadius: 1,
        variantRadius: 1.5,
        baseSpeed: 0.2,
        variantSpeed: 0.6,
        interactionRadius: 200,
        colorPalette: [
          { r: 65, g: 105, b: 225, a: 0.5 },  // Royal Blue
          { r: 30, g: 144, b: 255, a: 0.5 },  // Dodger Blue
          { r: 100, g: 149, b: 237, a: 0.5 }, // Cornflower Blue
          { r: 0, g: 191, b: 255, a: 0.5 },   // Deep Sky Blue
          { r: 135, g: 206, b: 250, a: 0.5 }  // Light Sky Blue
        ],
        lineWidth: 0.5,
        pulseSpeed: 0.01,
        glowEffect: true
      };
      
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      };
      
      const initParticles = () => {
        particles = [];
        // Adjust particle count based on screen size
        const adjustedCount = Math.min(
          Math.floor((canvas.width * canvas.height) / 12000),
          config.particleCount
        );
        
        for (let i = 0; i < adjustedCount; i++) {
          const colorChoice = config.colorPalette[Math.floor(Math.random() * config.colorPalette.length)];
          
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: config.baseRadius + Math.random() * config.variantRadius,
            speedX: (Math.random() - 0.5) * config.variantSpeed,
            speedY: (Math.random() - 0.5) * config.variantSpeed,
            color: colorChoice,
            originalRadius: config.baseRadius + Math.random() * config.variantRadius,
            pulse: 0,
            pulseSpeed: config.pulseSpeed + (Math.random() * 0.01),
            historyPoints: [], // For trailing effect
            historyMax: 5,
            angle: Math.random() * Math.PI * 2
          });
        }
      };
      
      const calculateDistance = (x1, y1, x2, y2) => {
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
      };
      
      const drawGlow = (x, y, radius, color) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.8})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
        ctx.fill();
      };
      
      const connectParticles = () => {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < config.interactionRadius) {
              // Calculate line opacity based on distance
              const opacity = (1 - distance / config.interactionRadius) * 0.5;
              
              // Create gradient line between particles
              const gradient = ctx.createLinearGradient(
                particles[i].x,
                particles[i].y,
                particles[j].x,
                particles[j].y
              );
              
              gradient.addColorStop(0, `rgba(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b}, ${opacity})`);
              gradient.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`);
  
              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = config.lineWidth;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      };
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Apply subtle background gradient
        const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        bgGradient.addColorStop(0, 'rgba(20, 30, 48, 0.1)');
        bgGradient.addColorStop(1, 'rgba(36, 59, 85, 0.1)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections between particles
        connectParticles();
        
        // Update and draw particles
        particles.forEach(particle => {
          // Add slight oscillation to particle movement
          particle.pulse += particle.pulseSpeed;
          const pulseFactor = Math.sin(particle.pulse) * 0.5 + 0.5;
          const currentRadius = particle.originalRadius * (1 + pulseFactor * 0.3);
          
          // Update position with slight curve to movement
          particle.angle += 0.01;
          particle.x += particle.speedX + Math.sin(particle.angle) * 0.1;
          particle.y += particle.speedY + Math.cos(particle.angle) * 0.1;
          
          // Add mouse interaction
          if (mousePosition.x && mousePosition.y) {
            const distance = calculateDistance(particle.x, particle.y, mousePosition.x, mousePosition.y);
            if (distance < config.interactionRadius) {
              const force = (config.interactionRadius - distance) / config.interactionRadius;
              const directionX = particle.x - mousePosition.x;
              const directionY = particle.y - mousePosition.y;
              particle.x += directionX * force * 0.02;
              particle.y += directionY * force * 0.02;
            }
          }
          
          // Store position history for trailing effect
          particle.historyPoints.unshift({ x: particle.x, y: particle.y });
          if (particle.historyPoints.length > particle.historyMax) {
            particle.historyPoints.pop();
          }
          
          // Draw trailing effect
          if (particle.historyPoints.length > 1) {
            ctx.beginPath();
            ctx.moveTo(particle.historyPoints[0].x, particle.historyPoints[0].y);
            
            for (let i = 1; i < particle.historyPoints.length; i++) {
              const point = particle.historyPoints[i];
              ctx.lineTo(point.x, point.y);
              
              // Fade out the trail
              const alpha = (1 - i / particle.historyPoints.length) * 0.3;
              ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${alpha})`;
              ctx.lineWidth = currentRadius * (1 - i / particle.historyPoints.length);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
            }
          }
          
          // Add glow effect
          if (config.glowEffect) {
            drawGlow(particle.x, particle.y, currentRadius, particle.color);
          }
          
          // Draw the particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.color.a})`;
          ctx.fill();
          
          // Edge detection and repositioning
          if (particle.x < -50) particle.x = canvas.width + 50;
          if (particle.y < -50) particle.y = canvas.height + 50;
          if (particle.x > canvas.width + 50) particle.x = -50;
          if (particle.y > canvas.height + 50) particle.y = -50;
        });
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      // Track mouse position for interactive effects
      const handleMouseMove = (e) => {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
      };
      
      const handleMouseLeave = () => {
        mousePosition.x = null;
        mousePosition.y = null;
      };
      
      // Handle touch for mobile devices
      const handleTouch = (e) => {
        if (e.touches.length > 0) {
          mousePosition.x = e.touches[0].clientX;
          mousePosition.y = e.touches[0].clientY;
        }
      };
      
      // Event listeners
      window.addEventListener('resize', resize);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('touchmove', handleTouch);
      window.addEventListener('touchend', handleMouseLeave);
      
      resize();
      animate();
      
      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('touchmove', handleTouch);
        window.removeEventListener('touchend', handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
    
    return (
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
    );
  };
