'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const apps = [
    {
      name: 'Directory Boilerplate',
      url: 'https://directory-boilerplate-ai-agents.vercel.app/',
      description: 'A modern directory template for AI agents and tools',
      image: '/directory-boilerplate.png',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/dambrubaba/directory-boilerplate',
      showGithub: true
    },
    {
      name: 'ScreenPost',
      url: 'https://screenpost.vercel.app/',
      description: 'Create beautiful screenshots for social media',
      image: '/screenpost.png',
      tech: ['React', 'Lucide', 'Tailwind'],
      showGithub: false
    },
    {
      name: 'PrankPe',
      url: 'https://prankpe.online/',
      description: 'Generate fun prank payment screenshots',
      image: '/prankpe.png',
      tech: ['Next.js', 'TypeScript', 'Shadcn UI'],
      showGithub: false
    },
    {
      name: 'Aum Meditation',
      url: 'https://aumkaram.vercel.app/',
      description: 'A peaceful meditation and mindfulness app',
      image: '/aum-meditation.png',
      tech: ['React', 'Next.js', 'Tailwind', 'Shadcn UI'],
      showGithub: false
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % apps.length);
  }, [apps.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + apps.length) % apps.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className="featured-projects-container">
      <div className="showcase-navigation">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handlePrevious}
          className="nav-button"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="showcase-window">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="showcase-card"
            >
              <div className="showcase-image-container">
                <Image
                  src={apps[currentIndex].image}
                  alt={apps[currentIndex].name}
                  fill
                  className="showcase-image"
                  priority
                />
                <div className="showcase-overlay">
                  <div className="showcase-content">
                    <h3 className="showcase-title">{apps[currentIndex].name}</h3>
                    <p className="showcase-description">{apps[currentIndex].description}</p>
                    <div className="showcase-tech">
                      {apps[currentIndex].tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="showcase-links">
                      <Button variant="secondary" size="sm" asChild>
                        <Link href={apps[currentIndex].url} target="_blank">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Visit Site
                        </Link>
                      </Button>
                      {apps[currentIndex].showGithub && apps[currentIndex].github && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={apps[currentIndex].github} target="_blank">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleNext}
          className="nav-button"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="showcase-indicators">
        {apps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
} 