import { useState, useEffect } from 'react';
import { Sparkles, Heart, Infinity } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const EyesSection = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculatePupilPosition = (eyeX: number, eyeY: number) => {
    const deltaX = mouseX - eyeX;
    const deltaY = mouseY - eyeY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 80, 8);
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  return (
    <section className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Infinity className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши глаза — навсегда</h2>
          <p className="text-xl text-muted-foreground">
            Два взгляда, соединённых в вечности
          </p>
        </div>

        <div className="relative flex items-center justify-center mb-16" style={{ minHeight: '400px' }}>
          <svg 
            viewBox="0 0 1200 600" 
            className="w-full max-w-5xl drop-shadow-2xl"
            style={{ 
              filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.3))',
              transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)`
            }}
          >
            <defs>
              <radialGradient id="greenEyeInfinity" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="30%" stopColor="#92400e" />
                <stop offset="40%" stopColor="#065f46" />
                <stop offset="70%" stopColor="#047857" />
                <stop offset="85%" stopColor="#059669" />
                <stop offset="100%" stopColor="#10b981" />
              </radialGradient>
              
              <radialGradient id="brownEyeInfinity" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#451a03" />
                <stop offset="40%" stopColor="#78350f" />
                <stop offset="70%" stopColor="#92400e" />
                <stop offset="85%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#d97706" />
              </radialGradient>
              
              <radialGradient id="pupilGrad" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="70%" stopColor="#000000" />
                <stop offset="100%" stopColor="#1f2937" />
              </radialGradient>

              <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981">
                  <animate attributeName="stop-color" values="#10b981;#059669;#10b981" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#ef4444">
                  <animate attributeName="stop-color" values="#ef4444;#dc2626;#ef4444" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#d97706">
                  <animate attributeName="stop-color" values="#d97706;#b45309;#d97706" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              <filter id="glowFilter">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="strongGlowFilter">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 200 300 
                 C 200 150, 400 150, 400 300
                 C 400 150, 600 150, 600 300
                 C 600 450, 400 450, 400 300
                 C 400 450, 200 450, 200 300 Z"
              fill="none"
              stroke="url(#infinityGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              filter="url(#strongGlowFilter)"
              opacity="0.9"
            >
              <animate
                attributeName="stroke-width"
                values="12;16;12"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>

            <g id="leftEyeGroup">
              <ellipse cx="280" cy="300" rx="100" ry="110" fill="white" opacity="0.95" />
              <ellipse cx="280" cy="300" rx="75" ry="75" fill="url(#greenEyeInfinity)" filter="url(#glowFilter)" />
              
              <g transform={`translate(${calculatePupilPosition(280, 300).x}, ${calculatePupilPosition(280, 300).y})`}>
                <ellipse cx="280" cy="300" rx="35" ry="35" fill="url(#pupilGrad)" />
                <ellipse cx="270" cy="290" rx="10" ry="12" fill="white" opacity="0.9" />
                <ellipse cx="285" cy="305" rx="5" ry="6" fill="white" opacity="0.6" />
              </g>

              <path d="M 200 280 Q 280 230, 360 280" stroke="#1f2937" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 200 320 Q 280 370, 360 320" stroke="#1f2937" strokeWidth="4" fill="none" strokeLinecap="round" />
            </g>

            <g id="rightEyeGroup">
              <ellipse cx="920" cy="300" rx="100" ry="110" fill="white" opacity="0.95" />
              <ellipse cx="920" cy="300" rx="75" ry="75" fill="url(#brownEyeInfinity)" filter="url(#glowFilter)" />
              
              <g transform={`translate(${calculatePupilPosition(920, 300).x}, ${calculatePupilPosition(920, 300).y})`}>
                <ellipse cx="920" cy="300" rx="35" ry="35" fill="url(#pupilGrad)" />
                <ellipse cx="910" cy="290" rx="10" ry="12" fill="white" opacity="0.9" />
                <ellipse cx="925" cy="305" rx="5" ry="6" fill="white" opacity="0.6" />
              </g>

              <path d="M 840 280 Q 920 230, 1000 280" stroke="#1f2937" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M 840 320 Q 920 370, 1000 320" stroke="#1f2937" strokeWidth="4" fill="none" strokeLinecap="round" />
            </g>

            <circle cx="600" cy="300" r="25" fill="#ef4444" opacity="0.8" filter="url(#glowFilter)">
              <animate
                attributeName="r"
                values="25;32;25"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>

            {[...Array(12)].map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const radius = 80;
              const x = 600 + Math.cos(angle) * radius;
              const y = 300 + Math.sin(angle) * radius;
              
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#ef4444"
                  opacity="0.6"
                >
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2s"
                    begin={`${i * 0.15}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border-emerald-700/50 p-8 hover:border-emerald-500/70 transition-all duration-500 glow-effect text-center">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-800 to-amber-700 border-2 border-amber-600" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 border-2 border-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-emerald-400">Мои глаза</h3>
            <p className="text-lg text-muted-foreground mb-2">Зелёные с карим у зрачка</p>
            <p className="text-sm text-muted-foreground italic">"В них — лес после дождя"</p>
          </Card>

          <Card className="bg-gradient-to-br from-amber-950/40 to-amber-900/20 border-amber-700/50 p-8 hover:border-amber-500/70 transition-all duration-500 glow-effect text-center">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-900 to-amber-800 border-2 border-amber-700" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700 to-amber-600 border-2 border-amber-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-amber-600">Её глаза</h3>
            <p className="text-lg text-muted-foreground mb-2">Карие и тёплые</p>
            <p className="text-sm text-muted-foreground italic">"В них — солнце и уют"</p>
          </Card>
        </div>

        <Card className="bg-card border-border p-8 md:p-12 text-center hover:border-primary/50 transition-all duration-500 glow-effect">
          <Infinity className="w-10 h-10 text-primary mx-auto mb-6 animate-pulse" />
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed mb-6 font-semibold">
            Наши взгляды встретились — и время остановилось
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 italic">
            "Говорят, глаза — зеркало души. Значит, наши души связаны навечно"
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Sparkles className="w-6 h-6 text-emerald-500 animate-pulse" />
            <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
            <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
          </div>
          <p className="text-base text-muted-foreground mt-6">
            Два разных цвета, одна бесконечная любовь ♾️
          </p>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground italic animate-fade-in">
          <p>✨ Подвигай мышкой — глаза следят за тобой ✨</p>
        </div>
      </div>
    </section>
  );
};
