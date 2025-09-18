import React, { useState, useEffect } from 'react';

const HeroFloatingElements: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const capabilities = ['SAP S/4HANA', 'SAP CX', 'AI Strategy', 'Joule', 'GenAI', 'ML & Analytics'];
  const [positions, setPositions] = useState([
    { x: 15, y: 25, dx: 0.3, dy: 0.2 },
    { x: 75, y: 65, dx: -0.2, dy: 0.3 },
    { x: 35, y: 75, dx: 0.25, dy: -0.15 },
    { x: 85, y: 15, dx: -0.15, dy: 0.35 },
    { x: 55, y: 45, dx: 0.2, dy: -0.25 }
  ]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % capabilities.length);
        setIsVisible(true);
      }, 1000);
    }, 5000);
    
    const moveInterval = setInterval(() => {
      setPositions(prev => prev.map(pos => {
        let newX = pos.x + pos.dx;
        let newY = pos.y + pos.dy;
        let newDx = pos.dx;
        let newDy = pos.dy;
        
        if (newX <= 5 || newX >= 95) newDx = -newDx;
        if (newY <= 5 || newY >= 95) newDy = -newDy;
        
        return { x: Math.max(5, Math.min(95, newX)), y: Math.max(5, Math.min(95, newY)), dx: newDx, dy: newDy };
      }));
    }, 80);
    
    return () => {
      clearInterval(textInterval);
      clearInterval(moveInterval);
    };
  }, []);

  return (
    <>
      {/* Floating Circles */}
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full transition-all duration-2000 ease-in-out z-10 blur-3xl"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            transform: 'translate(-50%, -50%)',
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 80%)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.15) 40%, transparent 80%)'
              : 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 80%)'
          }}
        />
      ))}
      
      {/* Rotating Text */}
      <div className="text-center relative z-20">
        <div className="min-h-[200px] pt-8 pb-12 px-4 relative">
          <div className="text-lg font-medium text-gray-500 mb-6 uppercase tracking-widest text-center">
            Expertise in
          </div>
          
          <div className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg transition-all duration-1000 ease-in-out transform relative z-10 text-center ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'
          }`} style={{lineHeight: '1.3', paddingBottom: '20px'}}>
            {capabilities[currentText]}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroFloatingElements;