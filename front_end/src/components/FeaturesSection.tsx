import { useEffect, useRef, useState } from 'react';
import { BarChart3, LayoutDashboard, Target, Compass } from 'lucide-react';

const features = [
  { 
    number: '01',
    icon: BarChart3, 
    title: 'Smart Grade Analysis', 
    description: 'Automatic marks evaluation highlighting your academic strengths and areas for improvement.' 
  },
  { 
    number: '02',
    icon: LayoutDashboard, 
    title: 'Personalized Dashboard', 
    description: 'Track all your progress in one place with visual semester performance graphs.' 
  },
  { 
    number: '03',
    icon: Target, 
    title: 'Skill & Strength Mapping', 
    description: 'Identify your technical competencies and soft skills classified by matching domains.' 
  },
  { 
    number: '04',
    icon: Compass, 
    title: 'Roadmap Guidance', 
    description: 'Get step-by-step career path guides outlining the precise skills to learn next.' 
  },
];

const FeatureCard = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative p-8 rounded-2xl bg-white border border-slate-100 shadow-md transition-all duration-500 ease-out group hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 cursor-pointer overflow-hidden
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ 
        transitionDelay: isVisible ? `${index * 120}ms` : '0ms' 
      }}
    >
      {/* Background shape on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
      
      {/* Feature Number */}
      <span className="absolute top-6 right-6 font-display text-4xl font-extrabold text-accent/10 group-hover:text-accent/20 transition-colors duration-300">
        {feature.number}
      </span>

      {/* Feature Icon */}
      <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
        <feature.icon className="w-7 h-7 text-accent" />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-slate-800 mb-3 group-hover:text-accent transition-colors duration-300">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8F7FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
            Powerful Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
            Everything You Need to <span className="gradient-text">Excel</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            PathFinder combines intelligence and usability to simplify academic insights and career guidance for diploma students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
