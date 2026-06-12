import { ClipboardList, Cpu, Target, Award, Map, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Enter Academic Data',
    description: 'Quickly input your semester marks and diploma credentials into our secure system.'
  },
  {
    step: '02',
    icon: Cpu,
    title: 'AI Performance Analysis',
    description: 'Our AI algorithms evaluate your grades to understand your academic trends and strengths.'
  },
  {
    step: '03',
    icon: Target,
    title: 'Identify Strengths & Weaknesses',
    description: 'Discover your core engineering competencies and see which areas have room for growth.'
  },
  {
    step: '04',
    icon: Award,
    title: 'Career Recommendations',
    description: 'Receive personalized suggestions for high-matching career domains based on your profile.'
  },
  {
    step: '05',
    icon: Map,
    title: 'Personalized Roadmap',
    description: 'Get a step-by-step skill-building roadmap detailing everything you need to study next.'
  }
];

const InfoSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 px-4 bg-gradient-to-b from-[#F8F7FF] to-white overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
            The Workflow
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
            How <span className="gradient-text">PathFinder</span> Works
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Get from academic entries to your dream career path in five easy, automated steps.
          </p>
        </div>

        {/* Process Timeline */}
        <div className={`relative transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-8 -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center group"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Bubble */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative mb-6 z-10
                    ${activeStep === index 
                      ? 'bg-accent border-accent text-white scale-110 shadow-lg shadow-accent/25' 
                      : 'bg-white border-slate-200 text-slate-400 group-hover:border-accent/40 group-hover:text-accent'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                    
                    {/* Badge Number */}
                    <span className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center border transition-all duration-300
                      ${activeStep === index 
                        ? 'bg-white text-accent border-accent' 
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Step Content */}
                  <h3 className={`font-display text-base font-bold mb-2 transition-colors duration-300
                    ${activeStep === index ? 'text-accent' : 'text-slate-800'}`}
                  >
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[180px]">
                    {item.description}
                  </p>
                  
                  {/* Small desktop indicator */}
                  {index < 4 && (
                    <div className="hidden md:block lg:hidden mt-4 text-slate-300">
                      <ArrowRight className="w-5 h-5 mx-auto" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default InfoSection;
