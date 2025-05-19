import React, { useState } from 'react';

import { X } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface Media {
  id: number;
  url: string;
  caption: string;
  type: 'image' | 'video';
}
const App = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/61cbb213-bff3-4505-a271-899127f8a9bf/y73iVNeibz.lottie"
      loop
      autoplay
    />
  );
};
const mediaItems: Media[] = [
  {
    id: 1,
    url: "/images/img1.jpg",
    caption: "KIYUKKK",
    type: "image"
  },
  {
    id: 2,
    url: "/images/img9.jpg",
    caption: "LAWOOOO",
    type: "image"
  },
  {
    id: 3,
    url: "/images/img7.jpg",
    caption: "NI PUN KIYUKK",
    type: "image"
  },
  {
    id: 4,
    url: "/images/img2.jpg",
    caption: "ITIKKKK",
    type: "image"
  },
  {
    id: 5,
    url: "/images/img5.jpg",
    caption: "DENGOR LAGU LU SAMBIL JADI COMEL",
    type: "image"
  },
  {
    id: 6,
    url: "/images/img6.jpg",
    caption: "DENGOR LAGU LU SAMBIL JADI COMEL V2",
    type: "image"
  },
  {
    id: 7,
    url: "images/vid4.mp4",
    caption: "YANG NI DEKAT AIRPORT NAK GI HANTAR UMMI UMRAH",
    type: "video"
  },
  {
    id: 8,
       url: "images/vid2.mp4",
    caption: "PEGANG KUCING",
    type: "video"
  },
  {
    id: 9,
       url: "images/vid5.mp4",
    caption: "DEKAT PANTAI",
    type: "video"
  }
];

const Gallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-800 mb-4 text-center">
          Captured Moments
        </h2>

        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          A collection of beautiful memories and special moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-w-4 aspect-h-3">
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={item.url}
                    className="object-cover w-full h-full"
                    muted
                    autoPlay
                    loop
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <p className="text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={24} />
            </button>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.caption}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.url}
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
              />
            )}
            <p className="text-white text-center mt-4 text-lg">
              {selectedMedia.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
