'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

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

export default function Blog() {
  return (
    <div className="container max-w-4xl py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">
        <span className="highlight-function">Blog</span>
      </h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="group hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span key={keyword} className="app-tag text-xs">
                    {keyword}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}