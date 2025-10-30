import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  title?: string;
  description?: string;
  poster?: string;
}

const getYouTubeEmbedUrl = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  return null;
};

export const VideoPlayer = ({ src, title, description, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeEmbedUrl = getYouTubeEmbedUrl(src);

  if (youtubeEmbedUrl) {
    return (
      <div className="relative group">
        <div className="relative overflow-hidden rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300 aspect-video">
          <iframe
            className="w-full h-full"
            src={youtubeEmbedUrl}
            title={title || "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {(title || description) && (
          <div className="mt-4">
            {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
            {description && <p className="text-muted-foreground">{description}</p>}
          </div>
        )}
      </div>
    );
  }

  const handlePlayPause = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
        <video
          className="w-full h-full object-cover cursor-pointer"
          src={src}
          poster={poster}
          onClick={handlePlayPause}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls
          playsInline
        />
        
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-primary/90 rounded-full p-4">
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
          </div>
        )}
      </div>
      
      {(title || description) && (
        <div className="mt-4">
          {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
    </div>
  );
};