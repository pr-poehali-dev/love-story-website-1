import { useState } from 'react';
import { Lock, Unlock, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const SecretMessage = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/30 p-8 md:p-12 text-center hover:border-primary/50 transition-all duration-500">
      {!isRevealed ? (
        <div className="animate-fade-in">
          <Lock className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Секретное послание</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Здесь спрятано что-то особенное...
          </p>
          <Button 
            onClick={() => setIsRevealed(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >
            <Unlock className="w-5 h-5 mr-2" />
            Открыть письмо
          </Button>
        </div>
      ) : (
        <div className="animate-fade-in">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Моей любимой
          </h3>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Great Vibes', cursive" }}>
            <p className="text-foreground text-2xl md:text-3xl">
              "Ты знаешь, бывают люди, после встречи с которыми мир становится другим..."
            </p>
            <p className="text-muted-foreground text-xl md:text-2xl">
              Ты именно такой человек. С тобой я чувствую себя как дома — в любом месте, в любое время.
            </p>
            <p className="text-foreground text-xl md:text-2xl">
              Спасибо, что ты есть. Спасибо за каждый день, за каждую улыбку, за каждый момент рядом.
            </p>
            <p className="text-3xl md:text-4xl text-primary mt-8">
              Я люблю тебя ❤️
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};