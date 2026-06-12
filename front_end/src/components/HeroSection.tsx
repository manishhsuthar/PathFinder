import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sparkles, Play, ArrowRight, Brain, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8F7FF] via-[#F3F0FF] to-background">
      {/* Background Image with subtle overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      /> 
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7FF]/50 via-transparent to-background pointer-events-none" />

      {/* Hero content wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* AI Highlight Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-xs sm:text-sm mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered Career Guidance for Diploma Students</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Discover Your <br />
              <span className="gradient-text">Ideal Career Path</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              AI-powered guidance for diploma students. Analyze your strengths, track academic progress, and receive personalized career recommendations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
              <Link to="/signup" className="w-full sm:w-auto">
                <Button variant="accent" size="lg" className="w-full sm:w-auto group gap-2 shadow-accent/20 shadow-lg">
                  Start Career Assessment
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <button 
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 bg-white/50 backdrop-blur-sm">
                  <Play className="w-4 h-4 text-accent fill-accent/10" />
                  Watch Demo
                </Button>
              </button>
            </div>

            {/* Credibility Indicators / Additional Elements */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60 w-full">
              <div>
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-xs text-slate-500 font-medium">Students Guided</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-xs text-slate-500 font-medium">Career Domains</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">AI</p>
                <p className="text-xs text-slate-500 font-medium">Recommendations</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-xs text-slate-500 font-medium">Secure Dashboard</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium App Preview / Dashboard Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full min-h-[350px] sm:min-h-[450px]">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
            
            {/* Main Mockup Card */}
            <div className="w-full max-w-[400px] glass-card-strong p-5 rounded-2xl shadow-2xl relative border border-white/40 overflow-hidden bg-white/80 animate-fade-in-up">
              
              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">AI Analyzer</h4>
                    <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Analysis
                    </span>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">Sem 5</span>
              </div>

              {/* Mockup Profile info */}
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-medium text-slate-600 mb-1">
                  <span>Academic Standing</span>
                  <span className="text-accent font-bold">CGPA: 8.95</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent h-full rounded-full w-[89.5%]" />
                </div>
              </div>

              {/* Skills breakdown */}
              <div className="space-y-2 mb-5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Skill Map</span>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Problem Solving</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full">
                      <div className="bg-accent h-full rounded-full w-[92%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Software Development</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full">
                      <div className="bg-accent h-full rounded-full w-[85%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Database Management</span>
                      <span>78%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full">
                      <div className="bg-accent/70 h-full rounded-full w-[78%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Career Card (Floating Effect) */}
              <div className="bg-gradient-to-r from-accent to-[#A855F7] text-white p-4 rounded-xl shadow-lg relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-purple-200 font-bold block mb-1">AI MATCH</span>
                    <h5 className="font-bold text-sm leading-tight">Frontend Web Developer</h5>
                    <p className="text-[10px] text-purple-100 mt-1">Matching technical skills & academic profile.</p>
                  </div>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-bold">95% Match</span>
                </div>
              </div>
            </div>

            {/* Secondary floating element: Accuracy Badges */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 glass-card p-3 rounded-xl shadow-lg border border-white/60 flex items-center gap-2 animate-bounce [animation-duration:4s]">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-800">Recommendation</p>
                <p className="text-[9px] text-slate-500">95% Accuracy Rate</p>
              </div>
            </div>

            {/* Third floating element: Career Roadmap */}
            <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-lg border border-white/60 flex items-center gap-2 animate-bounce [animation-duration:5s]">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-800">Dynamic Roadmap</p>
                <p className="text-[9px] text-slate-500">5 Steps to Success</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;