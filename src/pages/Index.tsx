import { Heart, Clock, Camera, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FloatingHearts } from "@/components/FloatingHearts";
import { DaysCounter } from "@/components/DaysCounter";
import { SecretMessage } from "@/components/SecretMessage";
import { StarryBackground } from "@/components/StarryBackground";

const Index = () => {
  const moments = [
    {
      image: "https://cdn.poehali.dev/projects/94baf9c3-5830-4413-aedd-3bf0178de4c8/files/e7bebf29-d381-4466-8f16-e00a6482222f.jpg",
      title: "Первая встреча",
      description: "Момент, который изменил всё"
    },
    {
      image: "https://cdn.poehali.dev/projects/94baf9c3-5830-4413-aedd-3bf0178de4c8/files/ca9a68cf-ff24-4b79-994d-7160f20a9b00.jpg",
      title: "Наш смех",
      description: "Когда счастье не спрятать"
    },
    {
      image: "https://cdn.poehali.dev/projects/94baf9c3-5830-4413-aedd-3bf0178de4c8/files/f5ca2810-c46b-4987-bafa-61d7b7895a6e.jpg",
      title: "Вечер вдвоём",
      description: "Время только для нас"
    }
  ];

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-950" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,100,150,0.15),transparent_50%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(80,80,120,0.12),transparent_50%)]" />
      <div className="fixed inset-0 backdrop-blur-2xl opacity-40" />
      <StarryBackground />
      <FloatingHearts />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-12 relative">
            <div className="absolute inset-0 animate-ping opacity-20">
              <Heart className="w-32 h-32 text-primary mx-auto" fill="currentColor" />
            </div>
            <Heart className="w-32 h-32 text-primary animate-pulse mx-auto relative z-10" fill="currentColor" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-8 text-foreground tracking-tight flex items-center justify-center gap-4">
            <span>Мы❤️</span>
            <span className="text-8xl md:text-[10rem]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif' }}></span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
          
          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light mb-4">Т & М</p>
          
          <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto italic font-light">Наша любовь, написанная сердцем</p>
          
          <div className="mt-8">
            <Sparkles className="w-8 h-8 text-primary mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12 animate-slide-up">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">С самого начала</h2>
          </div>
          
          <div className="mb-12">
            <DaysCounter />
          </div>
          
          <Card className="bg-transparent border-border/30 p-8 md:p-12 mb-8 hover:border-primary/50 transition-all duration-300 animate-slide-up backdrop-blur-sm">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Всё началось с <span className="text-primary font-semibold">26 марта 2025</span> — и с тех пор каждый день стал особенным.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
              Кто бы знал, что случайная встреча приведёт к чему-то такому настоящему 💞
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            {moments.map((moment, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 hover:glow-effect transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 animate-parallax"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12 animate-slide-up">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Наши моменты</h2>
          </div>
          
          <Card className="bg-card border-border p-8 md:p-12 hover:border-primary/50 transition-all duration-300 animate-slide-up glow-effect">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Эти фото — как кадры из нашего фильма.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Иногда весёлые, иногда милые, иногда просто тихие, но всегда — <span className="text-primary font-semibold">наши</span>.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-slide-up">
            {[moments[0], moments[1]].map((moment, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-transparent border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 animate-parallax"
                  />
                </div>
                <div className="p-6 bg-black/30 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2">{moment.title}</h3>
                  <p className="text-muted-foreground">{moment.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <SecretMessage />
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Спасибо тебе</h2>
          </div>
          
          <Card className="bg-transparent border-border/30 p-8 md:p-12 hover:border-primary/50 transition-all duration-300 animate-slide-up backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              Спасибо, что ты рядом.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              За смех, за заботу, за поддержку.
            </p>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              За то, что просто ты — моя ❤️
            </p>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 animate-slide-up">
            {moments.map((moment, index) => (
              <div 
                key={index}
                className="group aspect-square overflow-hidden rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <img 
                  src={moment.image}
                  alt={`Момент ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0 animate-parallax"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <div className="glow-effect rounded-full p-4 inline-block mb-8">
            <Heart className="w-12 h-12 text-primary animate-pulse" fill="currentColor" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">Продолжение следует...</h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
            Я хочу, чтобы таких моментов было ещё тысячи.
          </p>
          <p className="text-2xl md:text-3xl text-foreground font-semibold">
            Потому что с тобой — всегда мало 💫
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;