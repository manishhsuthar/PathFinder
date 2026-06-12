import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState, useRef } from "react";

const faqs = [
  {
    question: "How does PathFinder work?",
    answer: "PathFinder analyzes your academic progress, tracks your marks across semesters, and recommends suitable career domains based on your technical strengths and interests."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, absolutely. All student records and academic performance data are stored securely and protected with strict privacy standards."
  },
  {
    question: "Can I update my marks later?",
    answer: "Yes, you can edit and update your academic marks at any time through your dashboard to refine your recommendations as you progress through semesters."
  },
  {
    question: "Who can use PathFinder?",
    answer: "Any diploma student looking for semester progress insights, strength analyses, and clear, structured career guidance is welcome to use the platform."
  }
];

const FAQSection = () => {
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
    <section ref={sectionRef} id="faq" className="py-24 px-4 bg-[#F8F7FF] relative overflow-hidden">
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
            Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Have questions about how PathFinder works? We've got answers.
          </p>
        </div>

        {/* Accordion Component */}
        <div className={`transition-all duration-1000 ease-out bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border-b border-slate-100 pb-2 last:border-b-0 last:pb-0"
              >
                <AccordionTrigger className="text-slate-800 font-bold hover:text-accent hover:no-underline text-base text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-sm leading-relaxed pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
