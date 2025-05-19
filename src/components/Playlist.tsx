import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  src: string;
}

const songs: Song[] = [
  { id: 1, title: "Enchanted", artist: "Taylor Swift", duration: "5:52", src: "/music/Enchanted.mp3" },
  { id: 2, title: "Dayligt", artist: "Taylor Swift", duration: "4:49", src: "/music/Daylight.mp3" },
  { id: 3, title: "Wildest Dreams", artist: "Taylor Swift", duration: "3:54", src: "/music/Wildest Dreams.mp3" },
  { id: 4, title: "Back To December", artist: "Taylor Swift", duration: "4:47", src: "/music/Back to December.mp3" },
  { id: 5, title: "About You", artist: "The 1975", duration: "5:25", src: "/music/About You.mp3" },
];

const Playlist: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const songsPerPage = 3;
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (audioRef.current) {
      // In a real app, we would set the src to the actual MP3 file
      // For demo purposes, we'll just simulate the audio functionality
      audioRef.current.src = currentSong.src;
      
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
        startProgressAnimation();
      } else {
        audioRef.current.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
      
      audioRef.current.muted = isMuted;
    }
  }, [currentSong, isPlaying, isMuted]);
  
  const startProgressAnimation = () => {
    if (audioRef.current) {
      const animate = () => {
        if (audioRef.current) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animate();
    }
  };
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handlePrevious = () => {
    const prevIndex = songs.findIndex(song => song.id === currentSong.id) - 1;
    if (prevIndex >= 0) {
      setCurrentSong(songs[prevIndex]);
    } else {
      setCurrentSong(songs[songs.length - 1]);
    }
  };
  
  const handleNext = () => {
    const nextIndex = songs.findIndex(song => song.id === currentSong.id) + 1;
    if (nextIndex < songs.length) {
      setCurrentSong(songs[nextIndex]);
    } else {
      setCurrentSong(songs[0]);
    }
  };
  
  const handleSongSelect = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  // Calculate pagination
  const totalPages = Math.ceil(songs.length / songsPerPage);
  const paginatedSongs = songs.slice(
    currentPage * songsPerPage,
    (currentPage + 1) * songsPerPage
  );
  
  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="playlist" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-800 mb-4 text-center">
            Celebration Playlist
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 text-center">
            A collection of songs to celebrate the special occasion.
          </p>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Album Art and Player */}
            <div className="p-6 bg-gradient-to-r from-pink-100 to-pink-50">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                  <img 
                    src="/images/flowers/peonies.jpg" 
                    alt="Album Art" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-serif text-2xl font-semibold text-gray-800 mb-1">
                    {currentSong.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{currentSong.artist}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                    <div 
                      className="bg-pink-400 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <button 
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                      onClick={handlePrevious}
                    >
                      <SkipBack size={24} />
                    </button>
                    
                    <button 
                      className="w-12 h-12 rounded-full bg-pink-400 text-white flex items-center justify-center hover:bg-pink-500 transition-colors"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                    </button>
                    
                    <button 
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                      onClick={handleNext}
                    >
                      <SkipForward size={24} />
                    </button>
                    
                    <button 
                      className="text-gray-600 hover:text-pink-500 transition-colors ml-2"
                      onClick={toggleMute}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Playlist */}
            <div className="p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Songs</h4>
              
              <div className="space-y-2">
                {paginatedSongs.map(song => (
                  <div 
                    key={song.id}
                    className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${
                      currentSong.id === song.id ? 'bg-pink-50' : ''
                    }`}
                    onClick={() => handleSongSelect(song)}
                  >
                    <div className="flex items-center">
                      {currentSong.id === song.id && isPlaying ? (
                        <div className="w-4 h-4 mr-3 flex-shrink-0">
                          <div className="playing-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      ) : (
                        <span className="w-4 h-4 flex items-center justify-center mr-3 text-xs text-gray-500">{song.id}</span>
                      )}
                      
                      <div>
                        <p className="font-medium text-gray-800">{song.title}</p>
                        <p className="text-sm text-gray-500">{song.artist}</p>
                      </div>
                    </div>
                    
                    <span className="text-sm text-gray-500">{song.duration}</span>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={goToPrevPage}
                    disabled={currentPage === 0}
                  >
                    &laquo;
                  </button>
                  
                  <div className="mx-4 flex items-center">
                    <span className="text-sm text-gray-600">
                      Page {currentPage + 1} of {totalPages}
                    </span>
                  </div>
                  
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages - 1}
                  >
                    &raquo;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;