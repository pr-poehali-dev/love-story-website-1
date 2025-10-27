import { useState, useEffect } from 'react';
import { Eye, Sparkles, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const EyesSection = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculatePupilPosition = (eyeX: number, eyeY: number) => {
    const deltaX = mouseX - eyeX;
    const deltaY = mouseY - eyeY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 50, 12);
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const LeftEye = ({ centerX, centerY }: { centerX: number; centerY: number }) => {
    const pupil = calculatePupilPosition(centerX, centerY);
    
    return (
      <div className="relative" style={{ width: '200px', height: '200px' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
          <defs>
            <radialGradient id="greenEye" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="30%" stopColor="#92400e" />
              <stop offset="40%" stopColor="#065f46" />
              <stop offset="70%" stopColor="#047857" />
              <stop offset="85%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10b981" />
            </radialGradient>
            <radialGradient id="greenPupil" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="70%" stopColor="#000000" />
              <stop offset="100%" stopColor="#1f2937" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <ellipse cx="100" cy="100" rx="80" ry="90" fill="white" />
          
          <ellipse cx="100" cy="100" rx="65" ry="65" fill="url(#greenEye)" filter="url(#glow)" />
          
          <g transform={`translate(${pupil.x}, ${pupil.y})`}>
            <ellipse cx="100" cy="100" rx="30" ry="30" fill="url(#greenPupil)" />
            <ellipse cx="90" cy="90" rx="8" ry="10" fill="white" opacity="0.9" />
            <ellipse cx="105" cy="105" rx="4" ry="5" fill="white" opacity="0.6" />
          </g>
          
          <path
            d="M 35 100 Q 100 40, 165 100"
            stroke="#1f2937"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          <path
            d="M 35 100 Q 100 160, 165 100"
            stroke="#1f2937"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute -top-2 -right-2">
          <Sparkles className="w-6 h-6 text-emerald-500 animate-pulse" />
        </div>
      </div>
    );
  };

  const RightEye = ({ centerX, centerY }: { centerX: number; centerY: number }) => {
    const pupil = calculatePupilPosition(centerX, centerY);
    
    return (
      <div className="relative" style={{ width: '200px', height: '200px' }}>
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
          <defs>
            <radialGradient id="brownEye" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="40%" stopColor="#78350f" />
              <stop offset="70%" stopColor="#92400e" />
              <stop offset="85%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#d97706" />
            </radialGradient>
            <radialGradient id="brownPupil" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="70%" stopColor="#000000" />
              <stop offset="100%" stopColor="#1f2937" />
            </radialGradient>
          </defs>
          
          <ellipse cx="100" cy="100" rx="80" ry="90" fill="white" />
          
          <ellipse cx="100" cy="100" rx="65" ry="65" fill="url(#brownEye)" filter="url(#glow)" />
          
          <g transform={`translate(${pupil.x}, ${pupil.y})`}>
            <ellipse cx="100" cy="100" rx="30" ry="30" fill="url(#brownPupil)" />
            <ellipse cx="90" cy="90" rx="8" ry="10" fill="white" opacity="0.9" />
            <ellipse cx="105" cy="105" rx="4" ry="5" fill="white" opacity="0.6" />
          </g>
          
          <path
            d="M 35 100 Q 100 40, 165 100"
            stroke="#1f2937"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          <path
            d="M 35 100 Q 100 160, 165 100"
            stroke="#1f2937"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute -top-2 -right-2">
          <Heart className="w-6 h-6 text-amber-700 animate-pulse" fill="currentColor" />
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Eye className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши глаза</h2>
          <p className="text-xl text-muted-foreground">
            Они говорят больше, чем тысячи слов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <Card className="bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border-emerald-800/30 p-8 hover:border-emerald-600/50 transition-all duration-500 glow-effect">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex items-center justify-center" id="left-eye">
                <LeftEye centerX={typeof window !== 'undefined' ? window.innerWidth / 2 - 150 : 400} centerY={800} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-400">Мои глаза</h3>
              <p className="text-lg text-muted-foreground text-center mb-3">
                Зелёные с карим у зрачка
              </p>
              <p className="text-base text-muted-foreground text-center italic">
                "Как лес после дождя — глубокие и загадочные"
              </p>
              <div className="mt-6 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-800 to-amber-700 border-2 border-amber-600" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 border-2 border-emerald-400" />
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-amber-950/30 to-amber-900/10 border-amber-800/30 p-8 hover:border-amber-600/50 transition-all duration-500 glow-effect">
            <div className="flex flex-col items-center">
              <div className="mb-6 flex items-center justify-center" id="right-eye">
                <RightEye centerX={typeof window !== 'undefined' ? window.innerWidth / 2 + 150 : 800} centerY={800} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-600">Её глаза</h3>
              <p className="text-lg text-muted-foreground text-center mb-3">
                Карие и тёплые
              </p>
              <p className="text-base text-muted-foreground text-center italic">
                "Как шоколад на солнце — согревают одним взглядом"
              </p>
              <div className="mt-6 flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-900 to-amber-800 border-2 border-amber-700" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-700 to-amber-600 border-2 border-amber-500" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-card border-border p-8 md:p-12 text-center hover:border-primary/50 transition-all duration-300 glow-effect">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-4 italic">
            "Когда наши глаза встречаются, весь мир исчезает"
          </p>
          <p className="text-lg text-muted-foreground">
            В них я вижу дом, любовь и всё наше будущее ✨
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="text-center">
              <div className="text-4xl mb-2">💚</div>
              <p className="text-sm text-emerald-500">Зелёные</p>
            </div>
            <Heart className="w-8 h-8 text-primary animate-pulse mt-4" fill="currentColor" />
            <div className="text-center">
              <div className="text-4xl mb-2">🤎</div>
              <p className="text-sm text-amber-700">Карие</p>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground italic animate-fade-in">
          <p>✨ Подвигай мышкой — глаза следят за тобой ✨</p>
        </div>
      </div>
    </section>
  );
};
