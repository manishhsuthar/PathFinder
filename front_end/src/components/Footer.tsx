import { Link } from 'react-router-dom';
import { Linkedin, Github, Instagram, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Footer: Multi-column links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white mb-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-accent" />
              </div>
              <span className="font-display font-extrabold tracking-wider text-base">
                PATHFINDER
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AI-powered guidance platform for diploma students. Analyze your grades, identify key competencies, and get personalized career roadmaps.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Product */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white transition-colors">Roadmaps</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer: Copyright & Socials */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500">
            © 2026 PathFinder. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-accent/20 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-accent/20 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-accent/20 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
