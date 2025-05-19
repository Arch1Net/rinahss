import React, { useState } from 'react';
import {
  Star, Music, Heart, Coffee, Smile, BookOpen,
  Cake, Flower, Sunset,Cat, ThumbsDown, Candy, Utensils, Tv, Droplet
} from 'lucide-react';

interface Fact {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
  color: string;
}

const facts: Fact[] = [
  {
    id: 1,
    title: "Birthday Girl",
    content: "Born on the 21st of October — mark your calendars!",
    icon: <Cake className="h-8 w-8" />,
    color: "bg-pink-100 text-pink-500",
  },
{
  id: 2,
  title: "Love Flowers",
  content: "Especially peonies — soft, elegant, and absolutely beautiful 🌸💐",
  icon: <Flower className="h-8 w-8" />,
  color: "bg-rose-100 text-rose-500",
},

  {
    id: 3,
    title: "Comell Infinity/100",
    content: "Overflowing with cuteness — it’s off the charts! ✨💖",
    icon: <Heart className="h-8 w-8" />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "Sofia the First Fan",
    content: "Fav show masa makan 🍽️👑",
    icon: <Tv className="h-8 w-8" />,
    color: "bg-violet-100 text-violet-500",
  },
  {
    id: 5,
    title: "Fav Foods",
    content: "Ayam gunting, mac & cheese, tomyam, kuey tiaw kungfu, dumplings (especially Mee Tarik Warisan!)",
    icon: <Utensils className="h-8 w-8" />,
    color: "bg-orange-100 text-orange-500",
  },
  {
    id: 6,
    title: "Chocolate Lover",
    content: "Kinder Bueno & Beryl's = happiness 🍫💘",
    icon: <Candy className="h-8 w-8" />,
    color: "bg-brown-100 text-brown-500",
  },
  {
    id: 7,
    title: "Tak Suka Ni...",
    content: "Mee kuning (except mee kari), sayurrr, and soya 🤢",
    icon: <ThumbsDown className="h-8 w-8" />,
    color: "bg-gray-100 text-gray-600",
  },
  {
    id: 8,
    title: "Air Fav",
    content: "Tea o’ bengg forever 🧋🫖",
    icon: <Droplet className="h-8 w-8" />,
    color: "bg-teal-100 text-teal-500",
  },
 {
  id: 10,
  title: "Sunset & Sea Lover",
  content: "There's nothing more peaceful than watching a beautiful sunset or sunrise by the sea 🌅🌊",
  icon: <Sunset className="h-8 w-8" />,  // Alternatively, you can use another icon that represents the sea or sunset
  color: "bg-orange-100 text-orange-500", // Soft orange to match the sunset vibe
}


];

const Facts: React.FC = () => {
  const [expandedFact, setExpandedFact] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedFact(expandedFact === id ? null : id);
  };

  return (
    <section id="facts" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-800 mb-4 text-center">
          Fun Facts About Rinahs
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Discover what makes Rinahs the most iconic, loveable, and unique soul 💗
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer ${
                expandedFact === fact.id ? 'ring-2 ring-pink-300 transform scale-105' : ''
              }`}
              onClick={() => toggleExpand(fact.id)}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full ${fact.color} flex items-center justify-center mb-4`}>
                  {fact.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                  {fact.title}
                </h3>
                <p className="text-gray-600">{fact.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
