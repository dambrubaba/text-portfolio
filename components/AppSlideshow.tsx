'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const featuredApps = [
  { 
    name: 'Directory Boilerplate', 
    url: 'https://directory-boilerplate-ai-agents.vercel.app/',
    image: '/directory-boilerplate.png'  // You'll need to add these images
  },
  { 
    name: 'ScreenPost', 
    url: 'https://screenpost.vercel.app/',
    image: '/screenpost.png'
  },
  { 
    name: 'PrankPe', 
    url: 'https://prankpe.online/',
    image: '/prankpe.png'
  },
  { 
    name: 'Aum Meditation', 
    url: 'https://aumkaram.vercel.app/',
    image: '/aum-meditation.png'
  },
];

export function AppSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredApps.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredApps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredApps.length) % featuredApps.length);
  };

  return (
    <div className="relative w-full aspect-video max-w-2xl mx-auto">
      <Card className="overflow-hidden">
        <Link href={featuredApps[currentSlide].url} target="_blank">
          <div className="relative w-full aspect-video">
            <Image
              src={featuredApps[currentSlide].image}
              alt={featuredApps[currentSlide].name}
              fill
              className="object-cover transition-transform duration-500"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">
                {featuredApps[currentSlide].name}
              </h3>
            </div>
          </div>
        </Link>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredApps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
} 