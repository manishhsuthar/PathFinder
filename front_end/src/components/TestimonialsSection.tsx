import { Star, Quote } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Computer Engineering Student',
    text: 'PathFinder helped me discover Frontend Development as my ideal career path and gave me a clear roadmap to follow.',
    rating: 5,
    initials: 'RS'
  },
  {
    name: 'Priya Patel',
    role: 'Information Technology Student',
    text: 'The academic analysis showed me exactly which subjects were holding me back, allowing me to boost my GPA in the final semester.',
    rating: 5,
    initials: 'PP'
  },
  {
    name: 'Aman Verma',
    role: 'Electronics & Comm. Student',
    text: 'I was confused between higher studies and web design. PathFinder mapped my skills and gave me the confidence to choose web development.',
    rating: 5,
    initials: 'AV'
  }
];

const TestimonialsSection = () => {
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
    <section ref={sectionRef} id="testimonials" className="py-24 px-4 bg-white relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
            Loved by <span className="gradient-text">Students</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Read how diploma students use PathFinder to assess academic strengths and land custom roadmaps.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl hover:border-accent/20 transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/5 pointer-events-none" />
              
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Student Profile Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
