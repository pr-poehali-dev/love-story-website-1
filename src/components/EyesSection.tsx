import { useState, useEffect } from 'react';
import { Sparkles, Heart, Infinity } from 'lucide-react';
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

  const calculatePupilPosition = (eyeX: number, eyeY: number, maxDistance = 15) => {
    const deltaX = mouseX - eyeX;
    const deltaY = mouseY - eyeY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 30, maxDistance);
    
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  return (
    <section className="py-20 px-4 relative z-10 overflow-hidden bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Infinity className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">В твоих глазах</h2>
          <p className="text-xl text-muted-foreground">
            Я вижу целый мир
          </p>
        </div>

        <div 
          className="relative flex items-center justify-center mb-16 bg-black/60 rounded-3xl p-12 backdrop-blur-sm border border-primary/20"
          style={{ minHeight: '500px' }}
        >
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="relative group cursor-pointer" id="green-eye">
              <svg 
                viewBox="0 0 300 300" 
                className="w-48 h-48 md:w-64 md:h-64 transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 40px rgba(16, 185, 129, 0.6))',
                }}
              >
                <defs>
                  <radialGradient id="greenIris">
                    <stop offset="0%" stopColor="#92400e" />
                    <stop offset="15%" stopColor="#78350f" />
                    <stop offset="25%" stopColor="#065f46" />
                    <stop offset="40%" stopColor="#047857" />
                    <stop offset="60%" stopColor="#059669" />
                    <stop offset="80%" stopColor="#10b981" />
                    <stop offset="95%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </radialGradient>

                  <radialGradient id="greenPupil">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="85%" stopColor="#000000" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </radialGradient>

                  <pattern id="irisPattern" patternUnits="userSpaceOnUse" width="300" height="300">
                    <g>
                      {[...Array(60)].map((_, i) => {
                        const angle = (i / 60) * Math.PI * 2;
                        return (
                          <line
                            key={i}
                            x1="150"
                            y1="150"
                            x2={150 + Math.cos(angle) * 140}
                            y2={150 + Math.sin(angle) * 140}
                            stroke="#065f46"
                            strokeWidth={Math.random() * 2 + 0.5}
                            opacity={Math.random() * 0.4 + 0.2}
                          />
                        );
                      })}
                    </g>
                  </pattern>
                </defs>

                <circle cx="150" cy="150" r="145" fill="url(#greenIris)" />
                <circle cx="150" cy="150" r="145" fill="url(#irisPattern)" opacity="0.6" />
                
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const r1 = 60;
                  const r2 = 140;
                  return (
                    <line
                      key={i}
                      x1={150 + Math.cos(angle) * r1}
                      y1={150 + Math.sin(angle) * r1}
                      x2={150 + Math.cos(angle) * r2}
                      y2={150 + Math.sin(angle) * r2}
                      stroke="#047857"
                      strokeWidth="3"
                      opacity="0.5"
                    />
                  );
                })}

                <circle 
                  cx="150" 
                  cy="150" 
                  r="65" 
                  fill="#92400e" 
                  opacity="0.3"
                />

                <g transform={`translate(${calculatePupilPosition(150, 300).x * 3}, ${calculatePupilPosition(150, 300).y * 3})`}>
                  <circle cx="150" cy="150" r="55" fill="url(#greenPupil)" />
                  <circle cx="140" cy="135" r="15" fill="white" opacity="0.8" />
                  <circle cx="155" cy="155" r="8" fill="white" opacity="0.5" />
                </g>

                <circle cx="150" cy="150" r="145" fill="none" stroke="#065f46" strokeWidth="2" opacity="0.3" />
              </svg>
              
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-emerald-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                💚 Твои
              </div>
            </div>

            <div className="relative group cursor-pointer" id="brown-eye">
              <svg 
                viewBox="0 0 300 300" 
                className="w-48 h-48 md:w-64 md:h-64 transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  filter: 'drop-shadow(0 0 40px rgba(217, 119, 6, 0.6))',
                }}
              >
                <defs>
                  <radialGradient id="brownIris">
                    <stop offset="0%" stopColor="#451a03" />
                    <stop offset="20%" stopColor="#78350f" />
                    <stop offset="40%" stopColor="#92400e" />
                    <stop offset="60%" stopColor="#b45309" />
                    <stop offset="80%" stopColor="#d97706" />
                    <stop offset="95%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#92400e" />
                  </radialGradient>

                  <radialGradient id="brownPupil">
                    <stop offset="0%" stopColor="#000000" />
                    <stop offset="85%" stopColor="#000000" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </radialGradient>

                  <pattern id="brownIrisPattern" patternUnits="userSpaceOnUse" width="300" height="300">
                    <g>
                      {[...Array(60)].map((_, i) => {
                        const angle = (i / 60) * Math.PI * 2;
                        return (
                          <line
                            key={i}
                            x1="150"
                            y1="150"
                            x2={150 + Math.cos(angle) * 140}
                            y2={150 + Math.sin(angle) * 140}
                            stroke="#78350f"
                            strokeWidth={Math.random() * 2 + 0.5}
                            opacity={Math.random() * 0.4 + 0.2}
                          />
                        );
                      })}
                    </g>
                  </pattern>
                </defs>

                <circle cx="150" cy="150" r="145" fill="url(#brownIris)" />
                <circle cx="150" cy="150" r="145" fill="url(#brownIrisPattern)" opacity="0.6" />
                
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const r1 = 60;
                  const r2 = 140;
                  return (
                    <line
                      key={i}
                      x1={150 + Math.cos(angle) * r1}
                      y1={150 + Math.sin(angle) * r1}
                      x2={150 + Math.cos(angle) * r2}
                      y2={150 + Math.sin(angle) * r2}
                      stroke="#b45309"
                      strokeWidth="3"
                      opacity="0.5"
                    />
                  );
                })}

                <circle 
                  cx="150" 
                  cy="150" 
                  r="65" 
                  fill="#451a03" 
                  opacity="0.3"
                />

                <g transform={`translate(${calculatePupilPosition(450, 300).x * 3}, ${calculatePupilPosition(450, 300).y * 3})`}>
                  <circle cx="150" cy="150" r="55" fill="url(#brownPupil)" />
                  <circle cx="140" cy="135" r="15" fill="white" opacity="0.8" />
                  <circle cx="155" cy="155" r="8" fill="white" opacity="0.5" />
                </g>

                <circle cx="150" cy="150" r="145" fill="none" stroke="#78350f" strokeWidth="2" opacity="0.3" />
              </svg>
              
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-amber-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                🤎 Её
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Heart 
              className="w-12 h-12 text-primary animate-pulse" 
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8))'
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 border-emerald-700/50 p-8 hover:border-emerald-500/70 transition-all duration-500 text-center">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-800 to-amber-700 border-2 border-amber-600" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 border-2 border-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-emerald-400">Зелёные с карим</h3>
            <p className="text-muted-foreground italic">"Как лес на рассвете — загадочные и глубокие"</p>
          </Card>

          <Card className="bg-gradient-to-br from-amber-950/40 to-amber-900/20 border-amber-700/50 p-8 hover:border-amber-500/70 transition-all duration-500 text-center">
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-900 to-amber-800 border-2 border-amber-700" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700 to-amber-600 border-2 border-amber-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-amber-600">Карие и тёплые</h3>
            <p className="text-muted-foreground italic">"Как янтарь на солнце — согревают взглядом"</p>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 p-8 md:p-12 text-center hover:border-primary/60 transition-all duration-500 backdrop-blur-sm">
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed mb-6 font-semibold">
            Когда наши взгляды встречаются
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 italic">
            "Весь мир вокруг исчезает. Остаёмся только мы двое"
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Sparkles className="w-6 h-6 text-emerald-500 animate-pulse" />
            <Infinity className="w-10 h-10 text-primary animate-pulse" />
            <Sparkles className="w-6 h-6 text-amber-600 animate-pulse" />
          </div>
          <p className="text-base text-muted-foreground mt-6">
            Две души, один взгляд 💚🤎
          </p>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground italic animate-fade-in">
          <p>✨ Подвигай мышкой — зрачки следят за тобой ✨</p>
        </div>
      </div>
    </section>
  );
};
