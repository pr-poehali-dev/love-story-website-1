import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartType {
  id: number;
  x: number;
  y: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartType[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newHeart: HeartType = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 2000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="fixed pointer-events-none z-50 animate-float-up"
          style={{
            left: heart.x - 64,
            top: heart.y - 64,
          }}
        >
          <Heart className="w-32 h-32 text-primary drop-shadow-2xl" fill="currentColor" />
        </div>
      ))}
    </>
  );
};