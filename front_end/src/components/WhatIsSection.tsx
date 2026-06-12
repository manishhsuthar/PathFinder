import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Check, Sparkles, GraduationCap, BarChart2, ShieldCheck, Compass } from 'lucide-react';

const WhatIsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Personalized Recommendations",
      desc: "Get tailor-made career suggestions based on your grades and personal tech interests."
    },
    {
      title: "Skill & Competency Mapping",
      desc: "Identify your strengths, soft skills, and tech knowledge visually sorted by competence levels."
    },
    {
      title: "Actionable Career Roadmaps",
      desc: "Receive step-by-step guides showing which skills, frameworks, and tools to master for your dream job."
    },
    {
      title: "Academic Progress Analysis",
      desc: "Monitor your grades and semester progress to see exactly where you can boost your GPA."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Interactive Graphic (Mockup / Illustration) */}
          <div className="lg:col-span-5 relative w-full flex justify-center order-last lg:order-first">
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full blur-3xl -z-10 opacity-70" />
            
            {/* CSS Layered Card Illustration */}
            <div className="relative w-full max-w-[380px] h-[360px] flex items-center justify-center">
              
              {/* Graphic Card 1: Academic progress graph mockup */}
              <div className="absolute top-4 left-2 w-[220px] glass-card p-4 rounded-xl border border-purple-100/50 shadow-md transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-white/95">
                <div className="flex items-center gap-1.5 mb-2">
                  <BarChart2 className="w-4 h-4 text-purple-600" />
                  <span className="text-[10px] font-bold text-slate-800">Academic Improvement</span>
                </div>
                <div className="flex gap-2 items-end h-16 pt-2">
                  <div className="flex-1 bg-purple-100 rounded-t h-[40%]" />
                  <div className="flex-1 bg-purple-200 rounded-t h-[55%]" />
                  <div className="flex-1 bg-purple-300 rounded-t h-[70%]" />
                  <div className="flex-1 bg-accent rounded-t h-[90%] relative">
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold text-accent">9.2</span>
                  </div>
                </div>
                <div className="flex justify-between text-[8px] text-slate-400 mt-1 font-medium">
                  <span>Sem 1</span>
                  <span>Sem 2</span>
                  <span>Sem 3</span>
                  <span>Sem 4</span>
                </div>
              </div>

              {/* Graphic Card 2: Skill Badges */}
              <div className="absolute bottom-6 left-6 w-[200px] glass-card p-4 rounded-xl border border-purple-100/50 shadow-lg transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-white/95 z-20">
                <div className="flex items-center gap-1.5 mb-3">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                  <span className="text-[10px] font-bold text-slate-800">Competency Map</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[9px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium">JavaScript</span>
                  <span className="text-[9px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium">Problem Solving</span>
                  <span className="text-[9px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium">SQL</span>
                  <span className="text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">OOPs</span>
                  <span className="text-[9px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-medium">Git</span>
                </div>
              </div>

              {/* Graphic Card 3: Connected steps */}
              <div className="absolute top-16 right-0 w-[180px] glass-card p-3 rounded-xl border border-purple-100/50 shadow-md transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 bg-white/95 z-10">
                <div className="flex items-center gap-1.5 mb-2">
                  <Compass className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[10px] font-bold text-slate-800">Next Career Step</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[9px] font-bold text-emerald-700">1</div>
                    <span className="text-[9px] font-semibold text-slate-700">Database Design</span>
                  </div>
                  <div className="w-0.5 h-2 bg-slate-200 ml-2" />
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center text-[9px] font-bold text-accent">2</div>
                    <span className="text-[9px] font-semibold text-slate-700">Rest API Basics</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                Why PathFinder?
              </span>
              
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Designed to Bridge the Gap Between <span className="gradient-text">Academics & Industry</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                PathFinder is specifically engineered to help diploma students find their ideal career path. By analyzing your academic progress, identifying core tech competencies, and mapping out a personalized development path, we turn your credentials into real opportunities.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-0.5">{benefit.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Link to="/signup">
                  <Button variant="accent" size="default" className="gap-1.5 font-semibold">
                    Get Started Now
                    <Check className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
