import { Heart, Camera, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FloatingHearts } from "@/components/FloatingHearts";
import { DaysCounter } from "@/components/DaysCounter";
import { SecretMessage } from "@/components/SecretMessage";
import { StarryBackground } from "@/components/StarryBackground";
import { VideoPlayer } from "@/components/VideoPlayer";

const Index = () => {
  const moments = [
    {
      type: "video",
      video: "https://kinescope.io/tEFJhbgPyyN9gGmvinThg4",
      poster: "",
      title: "Наше видео",
      description: "Особенный момент"
    },
    {
      type: "video",
      video: "https://kinescope.io/dJTK1snTh6dTXruuiPVmX8",
      poster: "",
      title: "Ещё один момент",
      description: "Наша история продолжается"
    },
    {
      type: "video",
      video: "https://kinescope.io/p8hnJENeRpfCuZtrNYb7f9",
      poster: "",
      title: "Вместе",
      description: "Каждый день с тобой — подарок"
    },
    {
      type: "video",
      video: "https://kinescope.io/pUPnTTC4uCmxer8p1ZHequ",
      poster: "",
      title: "Наши моменты",
      description: "Каждый момент особенный"
    },

    {
      type: "video",
      video: "https://kinescope.io/sLVcBtbKEtXQET1nbHyAnB",
      poster: "",
      title: "Только мы",
      description: "Наша история"
    },
    {
      type: "video",
      video: "https://kinescope.io/6XsNZVtjqprp3C9kKERoxR",
      poster: "",
      title: "С тобой",
      description: "Каждая секунда бесценна"
    },
    {
      type: "video",
      video: "https://kinescope.io/pdwryxeHPcrv7TzLsHZeJv",
      poster: "",
      title: "Наши дни",
      description: "Те самые моменты"
    },
    {
      type: "video",
      video: "https://kinescope.io/pd8nPx1EaXmC1Z4Whw1gL9",
      poster: "",
      title: "Особенные моменты",
      description: "Наши воспоминания"
    },
    {
      type: "video",
      video: "https://kinescope.io/pSrXLCUcTwxn9rh7b6eQ8N",
      poster: "",
      title: "Вместе навсегда",
      description: "Каждое мгновение с тобой"
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
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12">
        
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

      <section className="py-10 px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold"></h2>
          </div>
          
          <div className="mb-8">
            <DaysCounter />
          </div>
          
          <Card className="bg-transparent border-border/30 p-8 md:p-12 mb-8 hover:border-primary/50 transition-all duration-300 animate-slide-up backdrop-blur-sm">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Всё началось с <span className="text-primary font-semibold">26 марта 2025</span> — и с тех пор каждый день стал особенным.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic">Кто бы знал, что наша встреча приведёт к чему-то такому настоящему 💞</p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            {moments.filter(m => m.type === 'image').map((moment, index) => (
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

      <section className="py-10 px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Наши моменты</h2>
          </div>
          
          <Card className="bg-transparent border-border/30 p-8 md:p-12 hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Фото и видео — как кадры из нашего фильма.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Иногда весёлые, иногда милые, иногда просто тихие, но всегда — <span className="text-primary font-semibold">наши</span>.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 animate-slide-up">
            {moments.slice(0, -3).map((moment, index) => (
              moment.type === "image" ? (
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
              ) : (
                <div key={index} className="overflow-hidden rounded-lg">
                  <VideoPlayer 
                    src={moment.video || ""}
                    title={moment.title}
                    description={moment.description}
                    poster={moment.poster}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative z-10">
          <SecretMessage />
        </div>
      </section>

      <section className="py-10 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8"></h2>
          </div>
          
          <Card className="bg-transparent border-border/30 p-8 md:p-12 hover:border-primary/50 transition-all duration-300 animate-slide-up backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              Спасибо, что ты рядом.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              За смех, за заботу, за поддержку.
            </p>
            <p className="text-xl md:text-2xl text-primary font-semibold">За то, что ты — моя ❤️</p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-slide-up">
            {moments.slice(-3).map((moment, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <VideoPlayer 
                  src={moment.video || ""}
                  title={moment.title}
                  description={moment.description}
                  poster={moment.poster}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 relative z-10">
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