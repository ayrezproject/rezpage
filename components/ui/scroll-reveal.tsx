'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-in' | 'zoom-in' | 'slide-left' | 'slide-right';
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      const raf = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getInitialStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`,
      willChange: 'opacity, transform',
    };

    if (isVisible) {
      return {
        ...base,
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
      };
    }

    switch (animation) {
      case 'fade-up':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(0, 32px, 0)',
        };
      case 'fade-down':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(0, -32px, 0)',
        };
      case 'fade-in':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(0, 0, 0)',
        };
      case 'zoom-in':
        return {
          ...base,
          opacity: 0,
          transform: 'scale(0.95)',
        };
      case 'slide-left':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(36px, 0, 0)',
        };
      case 'slide-right':
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(-36px, 0, 0)',
        };
      default:
        return {
          ...base,
          opacity: 0,
          transform: 'translate3d(0, 30px, 0)',
        };
    }
  };

  return (
    <div
      ref={ref}
      style={getInitialStyle()}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
