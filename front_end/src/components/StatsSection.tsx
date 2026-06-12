import { Users, GraduationCap, Percent, MessageSquare } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Students Guided',
    desc: 'Diploma students matching their profiles.'
  },
  {
    icon: GraduationCap,
    value: '50+',
    label: 'Career Domains',
    desc: 'Covering IT, core engineering & design.'
  },
  {
    icon: Percent,
    value: '95%',
    label: 'Recommendation Accuracy',
    desc: 'Proven match rates based on feedback.'
  },
  {
    icon: MessageSquare,
    value: '1,000+',
    label: 'Career Insights Generated',
    desc: 'Actionable guidance reports delivered.'
  }
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-accent/5 border-y border-slate-100 relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none mb-1.5">
                    {item.value}
                  </h3>
                  <p className="text-sm font-bold text-slate-800 leading-tight mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-slate-500 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
