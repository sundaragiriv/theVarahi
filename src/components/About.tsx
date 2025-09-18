import React from 'react';

const About: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><circle cx="12" cy="12" r="4" strokeWidth="2" /></svg>
      ),
      title: 'Reliability',
      description: 'Consistent delivery and dependable partnerships that enterprises can count on.'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><ellipse cx="12" cy="12" rx="10" ry="6" strokeWidth="2" /><circle cx="12" cy="12" r="3" strokeWidth="2" /></svg>
      ),
      title: 'Clarity',
      description: 'Transparent communication and clear documentation throughout every engagement.'
    },
    {
      icon: (
        <svg className="h-8 w-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" strokeWidth="2" /></svg>
      ),
      title: 'Measurable Outcomes',
      description: 'Focus on KPIs and business metrics that matter to your organization.'
    }
  ];

  const leadership = [
    { name: 'Raj Patel', role: 'Managing Director', experience: '15+ years SAP CX' },
    { name: 'Sarah Chen', role: 'Head of AI Practice', experience: '12+ years ML/AI' },
    { name: 'Michael Kumar', role: 'CX Architecture Lead', experience: '18+ years Enterprise CX' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            About Varahi
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-ink/70 leading-relaxed mb-8">
              Founded by enterprise software veterans, Varahi specializes in customer experience 
              and AI transformations that deliver measurable business outcomes. We combine deep SAP CX 
              expertise with modern AI capabilities to help Fortune 500 companies modernize their 
              customer engagement platforms.
            </p>
            <p className="text-lg text-ink/60 leading-relaxed">
              Our team of certified architects and consultants has successfully implemented over 200+ 
              CX projects across manufacturing, financial services, retail, and technology sectors. 
              We focus on sustainable solutions that scale with your business and deliver ROI within 
              the first 90 days.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 transition-all duration-700">
          <h3 className="text-2xl font-bold text-ink text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-brand/10 mx-auto mb-6 group-hover:bg-brand/20 transition-colors duration-200">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-ink mb-3">{value.title}</h4>
                <p className="text-ink/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="transition-all duration-700">
          <h3 className="text-2xl font-bold text-ink text-center mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-brand/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-ink mb-1">{leader.name}</h4>
                <p className="text-brand font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-ink/60">{leader.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;