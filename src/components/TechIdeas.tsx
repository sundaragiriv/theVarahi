import React from 'react';

const TechIdeas: React.FC = () => {
  const posts = [
    {
      title: 'Building RAG Systems with SAP BTP Vector Engine',
      excerpt: 'Step-by-step guide to implementing Retrieval Augmented Generation using SAP\'s new vector database capabilities.',
      tag: 'AI/ML',
      date: '2025-01-15',
      readTime: '8 min read'
    },
    {
      title: 'Microservices Architecture for CX Integrations',
      excerpt: 'Design patterns and best practices for building scalable customer experience platforms with modern architecture.',
      tag: 'Architecture',
      date: '2025-01-12',
      readTime: '12 min read'
    },
    {
      title: 'Advanced Service Cloud Workflows',
      excerpt: 'Optimizing case management and SLA compliance with advanced workflow configurations and custom logic.',
      tag: 'SAP CX',
      date: '2025-01-08',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="tech-ideas" className="py-20 bg-paper/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            Tech Ideas
          </h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">
            Hands-on insights, patterns, and code for modern CX and AI implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="card p-6 group cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-brand/10 text-brand">
                    <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                    {post.tag}
                  </span>
                  <div className="flex items-center text-xs text-ink/60">
                    <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink group-hover:text-brand transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-ink/70 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-ink/10">
                  <span className="text-sm text-ink/60">{post.readTime}</span>
                  <div className="flex items-center space-x-1 text-brand font-medium group-hover:space-x-2 transition-all duration-200">
                    <span className="text-sm">Read more</span>
                    <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 transition-all duration-700">
          <a
            href="#"
            className="btn-secondary inline-flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
          >
            <span>View All Tech Ideas</span>
            <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechIdeas;