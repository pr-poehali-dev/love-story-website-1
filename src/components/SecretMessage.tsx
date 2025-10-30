import { useState } from 'react';
import { Lock, Unlock, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const SecretMessage = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <Card className="bg-transparent border-border/30 p-8 md:p-12 text-center hover:border-primary/50 transition-all duration-500">
      {!isRevealed ? (
        <div className="animate-fade-in">
          <Lock className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4"></h3>
          <p className="text-muted-foreground mb-8 text-lg"></p>
          <Button 
            onClick={() => setIsRevealed(true)}
            className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
          >❤️ Открыть ❤️</Button>
        </div>
      ) : (
        <div className="animate-fade-in">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary"></h3>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-foreground italic">
              "Ты знаешь, бывают люди, после встречи с которыми мир становится другим..."
            </p>
            <p className="text-muted-foreground">
              Ты именно такой человек. С тобой я чувствую себя как дома — в любом месте, в любое время.
            </p>
            <p className="text-foreground">
              Спасибо, что ты есть. Спасибо за каждый день, за каждую улыбку, за каждый момент рядом.
            </p>
            <p className="text-2xl md:text-3xl text-primary font-bold mt-8">Люблю тебя ❤️</p>
          </div>
        </div>
      )}
    </Card>
  );
};