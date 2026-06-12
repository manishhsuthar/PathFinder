import { useEffect, useState } from 'react';

const Stars = () => {
  return (
    <div className="stars-container">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}
        />
      ))}
      <style>{`
        .stars-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .star {
          position: absolute;
          background: hsl(262, 83%, 58%);
          border-radius: 50%;
          animation: twinkle 4s infinite ease-in-out;
          opacity: 0.15;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.05;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Stars;