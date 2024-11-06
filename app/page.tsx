'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Mail, Github, Twitter, Instagram, ChevronDown, ChevronUp, Coffee } from 'lucide-react';
import { Inter } from 'next/font/google';
import { AppSlideshow } from '@/components/AppSlideshow';

const interBlack = Inter({ 
  subsets: ['latin'],
  weight: ['900']
});

export default function Home() {
  const [showAllApps, setShowAllApps] = useState(false);
  const appsContainerRef = useRef<HTMLDivElement>(null);

  const featuredApps = [
    { name: 'Directory Boilerplate', url: 'https://directory-boilerplate-ai-agents.vercel.app/' },
    { name: 'ScreenPost', url: 'https://screenpost.vercel.app/' },
    { name: 'PrankPe', url: 'https://prankpe.online/' },
    { name: 'Aum Meditation', url: 'https://aumkaram.vercel.app/' },
  ];

  const allApps = [
    ...featuredApps,
    { name: 'Notion Page Loader', url: 'https://load-notion.vercel.app/' },
    { name: 'Customise My Waitlist', url: 'https://customise-my-waitlist.vercel.app/' },
    { name: 'HEIC to JPG Converter', url: 'https://llamacoder.together.ai/share/J7pR1' },
    { name: 'Image Resize Tool', url: 'https://llamacoder.together.ai/share/mcGa_' },
    { name: 'To-Do App', url: 'https://llamacoder.together.ai/share/EntZB' },
    { name: 'Pomodoro Timer', url: 'https://llamacoder.together.ai/share/7a0Hj' },
    { name: 'Network Speed Monitor', url: 'https://llamacoder.together.ai/share/qrFvi' },
    { name: 'Notes App', url: 'https://llamacoder.together.ai/share/bpOvD' },
    { name: 'Vedic Numerology Calculator', url: 'https://llamacoder.together.ai/share/PAVEn' },
    { name: 'Kundli Matching Tool', url: 'https://llamacoder.together.ai/share/3X7r7' },
    { name: 'Strong Password Generator', url: 'https://llamacoder.together.ai/share/4eHy-' },
  ];

  const posts = [
    {
      title: 'Building Apps with No-Code Tools',
      date: '2024-01-15',
      slug: 'building-apps-with-no-code-tools',
      excerpt: 'Explore how to create powerful applications without writing traditional code.',
      keywords: ['no-code', 'development', 'tools'],
    },
    {
      title: 'The Power of Free Development Tools',
      date: '2024-01-10',
      slug: 'power-of-free-development-tools',
      excerpt: 'A comprehensive guide to the best free tools for modern app development.',
      keywords: ['tools', 'development', 'free'],
    },
    {
      title: 'Automating Your Workflow',
      date: '2024-01-05',
      slug: 'automating-your-workflow',
      excerpt: 'Learn how to automate repetitive tasks and boost your productivity.',
      keywords: ['automation', 'workflow', 'productivity'],
    },
  ];

  const displayedApps = showAllApps ? allApps : featuredApps;

  const scatterApps = () => {
    const container = appsContainerRef.current;
    if (!container) return;

    const apps = container.getElementsByClassName('scattered-app');
    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    
    // Grid layout
    const columns = 4;
    const rows = Math.ceil(apps.length / columns);
    const cellWidth = width / columns;
    const cellHeight = 60; // Fixed height for each row

    Array.from(apps).forEach((app, index) => {
      const element = app as HTMLElement;
      
      // Calculate grid position
      const row = Math.floor(index / columns);
      const col = index % columns;
      
      // Calculate position
      const x = (col * cellWidth) + (cellWidth / 2) - width / 2;
      const y = (row * cellHeight) - 150; // Start higher up
      
      // Very slight rotation
      const rotation = (Math.random() - 0.5) * 5;

      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
      element.style.setProperty('--rotation', `${rotation}deg`);
      element.style.animationDelay = `${index * 0.05}s`; // Note: Fixed the syntax error here
    });
  };

  useEffect(() => {
    if (showAllApps) {
      scatterApps();
    }
  }, [showAllApps]);

  return (
    <div className="flex justify-center">
      <div className="container max-w-6xl py-10 px-4 sm:px-6 lg:px-8 mt-8">
        <section className="space-y-6 mb-12 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              <span className="wave">👋</span> Hi, I&apos;m <span className={`name-highlight ${interBlack.className}`}>Damburudhar</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A <span className="highlight-1">full-stack</span> developer 
              <span className="highlight-2"> passionate</span> about 
              <span className="highlight-3"> building</span> 
              <span className="highlight-4"> useful</span> apps mostly using 
              <span className="highlight-1"> no-code</span> tools and put them out for <span className="highlight-1">public use</span>. Check them out in the apps section. I&apos;m also building two <span className="highlight-2">SaaS</span> products in <span className="highlight-3">AI space</span> and will be launching them soon. Very active on <span className="highlight-4">Twitter</span>.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/dambrubaba" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://twitter.com/scionofshiv" target="_blank">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://instagram.com/devtoolz" target="_blank">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:dambrureddy321@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="outline" className="flex gap-2" asChild>
              <Link href="https://www.buymeacoffee.com/damburudhar" target="_blank">
                <Coffee className="h-4 w-4" />
                <span>Buy me a coffee</span>
              </Link>
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center">Featured Apps</h2>
            <AppSlideshow />
            
            {showAllApps && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4 text-foreground text-center">All Apps</h3>
                <div 
                  ref={appsContainerRef}
                  className="grid-apps-container"
                >
                  {allApps.map((app, index) => (
                    <Link 
                      key={app.name}
                      href={app.url}
                      target="_blank"
                      className="grid-app app-tag group text-foreground hover:text-primary"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <span>{app.name}</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Button
              variant="ghost"
              onClick={() => setShowAllApps(!showAllApps)}
              className="flex items-center gap-2 mx-auto text-foreground relative z-10"
            >
              {showAllApps ? (
                <>Show Less <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>View All Apps <ChevronDown className="h-4 w-4" /></>
              )}
            </Button>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground text-center">My Blogs</h2>
            <div className="grid gap-6 max-w-md mx-auto">
              {posts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <Card className="transition-all duration-300 hover:shadow-md overflow-hidden">
                    <CardHeader className="py-2 px-4">
                      <CardTitle className="transition-colors group-hover:text-primary text-lg text-foreground">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 px-4">
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                        <div className="transform-gpu transition-all duration-300 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100">
                          <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2">
                            {post.keywords.map((keyword) => (
                              <span key={keyword} className="app-tag text-xs text-foreground">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}