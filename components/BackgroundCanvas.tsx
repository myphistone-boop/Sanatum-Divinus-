import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store stars in a ref to keep them static between renders but allow regeneration on resize
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const generateStars = () => {
      const starCount = Math.floor((width * height) / 4000); // Density based on screen size
      const newStars: Star[] = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.1, // Varied small sizes
          opacity: Math.random() * 0.5 + 0.1 // Varied opacity for depth
        });
      }
      starsRef.current = newStars;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      generateStars();
    };

    window.addEventListener('resize', resize);
    resize();

    // Halos definitions
    const halos = [
      {
        x: width * 0.2,
        y: height * 0.3,
        radius: 600,
        color: 'rgba(217, 185, 94, 0.08)', // Gold
        vx: 0.1,
        vy: 0.05,
        phase: 0
      },
      {
        x: width * 0.8,
        y: height * 0.7,
        radius: 700,
        color: 'rgba(56, 189, 248, 0.1)', // Cyan
        vx: -0.08,
        vy: -0.05,
        phase: 2
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        radius: 800,
        color: 'rgba(167, 139, 250, 0.08)', // Violet
        vx: 0.05,
        vy: -0.02,
        phase: 4
      }
    ];

    const animate = () => {
      // 1. Draw Background Gradient
      const time = Date.now() * 0.0002;
      
      const r1 = Math.floor(15 + Math.sin(time) * 10);
      const g1 = Math.floor(23 + Math.sin(time * 0.5) * 5);
      const b1 = Math.floor(42 + Math.cos(time) * 10);
      
      const r2 = Math.floor(30 + Math.cos(time * 0.7) * 5);
      const g2 = Math.floor(51 + Math.sin(time * 0.3) * 10);
      const b2 = Math.floor(40 + Math.cos(time * 0.8) * 5);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `rgb(${r1}, ${g1}, ${b1})`);
      gradient.addColorStop(0.5, '#1e293b');
      gradient.addColorStop(1, `rgb(${r2}, ${g2}, ${b2})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Moving Halos
      halos.forEach(halo => {
        const currentX = halo.x + Math.sin(time * 2 + halo.phase) * 50;
        const currentY = halo.y + Math.cos(time * 3 + halo.phase) * 50;
        const currentRadius = halo.radius + Math.sin(time * 5 + halo.phase) * 20;

        const g = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, currentRadius);
        g.addColorStop(0, halo.color);
        g.addColorStop(0.5, halo.color.replace(/[\d.]+\)$/g, '0.01)'));
        g.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw Static Stars (Galaxy effect)
      ctx.fillStyle = '#FFF9EC'; // Sacred Cream color for stars
      starsRef.current.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0; // Reset alpha

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundCanvas;