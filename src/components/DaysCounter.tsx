import { useEffect, useState } from 'react';
import { Heart, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const DaysCounter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const startDate = new Date('2025-03-26T00:00:00');
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      setDays(totalDays);
      setHours(totalHours);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 p-8 md:p-12 text-center hover:border-primary/30 transition-all duration-500">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Calendar className="w-8 h-8 text-primary/70" />
        <h3 className="text-2xl md:text-3xl font-bold">Вместе уже</h3>
      </div>
      
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-bold text-primary/60 mb-2">
            {days}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            {days % 10 === 1 && days % 100 !== 11 ? 'день' : 
             days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20) ? 'дня' : 'дней'}
          </div>
        </div>
        
        <Heart className="w-8 h-8 text-primary/60" fill="currentColor" />
        
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-bold text-primary/50 mb-2">
            {hours}
          </div>
          <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
            {hours % 10 === 1 && hours % 100 !== 11 ? 'час' : 
             hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 >= 20) ? 'часа' : 'часов'}
          </div>
        </div>
      </div>
      
      <p className="text-lg md:text-xl text-muted-foreground mt-6 italic">
        И каждый момент — бесценен ✨
      </p>
    </Card>
  );
};