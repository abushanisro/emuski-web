'use client'

import React, { useEffect, useRef } from 'react';

interface LightRaysProps {
  raysOrigin?: 'top-center' | 'top-left' | 'top-right' | 'center';
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

export const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = '#00ffff',
  raysSpeed = 1.5,
  lightSpread = 0.8,
  rayLength = 1.2,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.1,
  distortion = 0.05,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      if (followMouse) {
        const rect = canvas.getBoundingClientRect();
        mousePos.current = {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        };
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Get origin position
    const getOriginPosition = () => {
      const w = canvas.width;
      const h = canvas.height;
      switch (raysOrigin) {
        case 'top-left':
          return { x: 0, y: 0 };
        case 'top-right':
          return { x: w, y: 0 };
        case 'center':
          return { x: w / 2, y: h / 2 };
        case 'top-center':
        default:
          return { x: w / 2, y: 0 };
      }
    };

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01 * raysSpeed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const origin = getOriginPosition();
      const rayCount = Math.floor(30 * lightSpread);

      // Apply mouse influence
      const influencedOrigin = {
        x: origin.x + (mousePos.current.x * canvas.width - origin.x) * mouseInfluence,
        y: origin.y + (mousePos.current.y * canvas.height - origin.y) * mouseInfluence,
      };

      // Draw rays
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2 * lightSpread;
        const noise = Math.sin(time + i * noiseAmount) * distortion;
        const finalAngle = angle + noise;

        const rayLen = canvas.height * rayLength;
        const endX = influencedOrigin.x + Math.cos(finalAngle) * rayLen;
        const endY = influencedOrigin.y + Math.sin(finalAngle) * rayLen;

        // Create gradient for each ray
        const gradient = ctx.createLinearGradient(
          influencedOrigin.x,
          influencedOrigin.y,
          endX,
          endY
        );

        const opacity = 0.1 + Math.sin(time + i * 0.5) * 0.05;
        gradient.addColorStop(0, `${raysColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${raysColor}${Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${raysColor}00`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1 + Math.sin(time + i) * 0.5;
        ctx.beginPath();
        ctx.moveTo(influencedOrigin.x, influencedOrigin.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, followMouse, mouseInfluence, noiseAmount, distortion]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default LightRays;
