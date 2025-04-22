import React, { useState, useEffect, useCallback } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    '/images/leetcode1.png',
    '/images/leetcode2.png',
    '/images/leetcode3.png'
  ];

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 200);
  }, [images.length, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 200);
  }, [images.length, isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const handleImageClick = () => {
    window.open('https://leetcode.com/u/akash_thanda_14/', '_blank');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrevious]);

  useEffect(() => {
    const timer = setInterval(goToNext, 2000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="py-16 px-4">
      <div className="relative w-full h-[600px] bg-black rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full z-10 p-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center uppercase tracking-wider cursor-pointer hover:text-gray-300 transition-colors" onClick={handleImageClick}>
            LeetCode
          </h1>
        </div>
        
        <div className="w-full h-full relative">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 z-[1]' 
                  : 'opacity-0 z-0'
              }`}
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-[1]"></div>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-2xl font-bold w-10 h-10 flex items-center justify-center"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-2xl font-bold w-10 h-10 flex items-center justify-center"
          aria-label="Next slide"
        >
          →
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;