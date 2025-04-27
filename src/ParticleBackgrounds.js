import { useEffect, useRef, useState } from "react";

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

//  Wave Background - Creates elegant flowing waves with a subtle color scheme that adds movement without distraction.
export const WaveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let phase = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const drawWave = (phase, amplitude, wavelength, color) => {
            ctx.beginPath();
            for (let x = 0; x <= canvas.width; x++) {
                const y = amplitude * Math.sin((x / wavelength) + phase) + (canvas.height / 2);
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(240, 240, 255, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw multiple waves with different parameters
            drawWave(phase * 0.8, 50, 200, 'rgba(65, 105, 225, 0.2)');
            drawWave(phase * 0.7, 40, 150, 'rgba(70, 130, 180, 0.3)');
            drawWave(phase * 0.9, 30, 100, 'rgba(100, 149, 237, 0.4)');

            phase += 0.02;
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
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


// Bubble Background - Features colorful floating bubbles that gently pulse and move around the screen, creating a playful yet professional look.
export const BubbleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let bubbles = [];
        let animationFrameId;

        const colors = [
            'rgba(255, 107, 129, 0.4)',
            'rgba(42, 157, 143, 0.4)', 
            'rgba(106, 76, 147, 0.4)',
            'rgba(244, 162, 97, 0.4)',
            'rgba(38, 70, 83, 0.4)'
        ];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initBubbles();
        };

        const initBubbles = () => {
            bubbles = [];
            const bubbleCount = Math.floor(window.innerWidth / 30);

            for (let i = 0; i < bubbleCount; i++) {
                bubbles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 30 + 10,
                    speedX: Math.random() * 0.8 - 0.4,
                    speedY: Math.random() * 0.8 - 0.4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    pulseSpeed: 0.01 + Math.random() * 0.03,
                    pulseDirection: 1,
                    pulseSize: 0
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bubbles.forEach(bubble => {
                // Pulsing effect
                bubble.pulseSize += bubble.pulseSpeed * bubble.pulseDirection;
                if (bubble.pulseSize > 0.2 || bubble.pulseSize < -0.2) {
                    bubble.pulseDirection *= -1;
                }
                
                const radius = bubble.radius * (1 + bubble.pulseSize);
                
                // Draw bubble
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = bubble.color;
                ctx.fill();
                
                // Add slight shine to bubbles
                const gradient = ctx.createRadialGradient(
                    bubble.x - radius * 0.3, bubble.y - radius * 0.3, 0,
                    bubble.x, bubble.y, radius
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
                
                // Update position
                bubble.x += bubble.speedX;
                bubble.y += bubble.speedY;

                // Bounce off walls
                if (bubble.x < 0 || bubble.x > canvas.width) {
                    bubble.speedX = -bubble.speedX;
                }

                if (bubble.y < 0 || bubble.y > canvas.height) {
                    bubble.speedY = -bubble.speedY;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
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

// Flowing gradient animation 
// Gradient Flow Background - Produces a mesmerizing flowing gradient effect that slowly shifts colors, giving your section a modern and artistic feel.
export const GradientFlowBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let time = 0;
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Create a complex gradient flow using simplex noise simulation
            for (let x = 0; x < canvas.width; x += 20) {
                for (let y = 0; y < canvas.height; y += 20) {
                    // Simulate simplex noise with sin/cos functions
                    const xOffset = Math.sin((x / 100) + time) * Math.cos((y / 100) - time);
                    const yOffset = Math.cos((x / 100) - time) * Math.sin((y / 100) + time);
                    
                    // Generate colors based on position and time
                    const r = 100 + 50 * Math.sin(xOffset);
                    const g = 120 + 50 * Math.cos(yOffset);
                    const b = 200 + 50 * Math.sin(xOffset + yOffset);
                    
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.05)`;
                    ctx.beginPath();
                    ctx.arc(x + (xOffset * 10), y + (yOffset * 10), 25, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            time += 0.01;
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
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

// Constellation Background - Creates an interactive star field that connects points as users move their mouse, perfect for a tech-focused portfolio.
export const ConstellationBackground = () => {
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let stars = [];
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = Math.floor((canvas.width * canvas.height) / 5000);

            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    brightness: Math.random() * 0.8 + 0.2,
                    pulseSpeed: 0.02 + Math.random() * 0.03,
                    pulseDirection: Math.random() > 0.5 ? 1 : -1,
                    pulseBrightness: 0
                });
            }
        };

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const connectStarsToMouse = () => {
            const maxDistance = 200;
            
            stars.forEach(star => {
                const dx = mousePosition.x - star.x;
                const dy = mousePosition.y - star.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.8;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(star.x, star.y);
                    ctx.lineTo(mousePosition.x, mousePosition.y);
                    ctx.stroke();
                }
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(10, 15, 30, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Connect nearby stars
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - distance / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw and update stars
            stars.forEach(star => {
                // Update star pulse
                star.pulseBrightness += star.pulseSpeed * star.pulseDirection;
                if (Math.abs(star.pulseBrightness) > 0.3) {
                    star.pulseDirection *= -1;
                }
                
                const brightness = star.brightness + star.pulseBrightness;
                
                // Draw star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
                ctx.fill();
                
                // Add glow effect
                const glow = ctx.createRadialGradient(
                    star.x, star.y, 0,
                    star.x, star.y, star.radius * 4
                );
                glow.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.5})`);
                glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
                
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();
            });
            
            // Connect stars to mouse
            connectStarsToMouse();

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosition]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};