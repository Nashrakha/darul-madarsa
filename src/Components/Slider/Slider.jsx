
import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Slider() {
    const slides = [
        { image: "https://images.pexels.com/photos/19227959/pexels-photo-19227959/free-photo-of-courtyard-of-tilya-kori-madrasa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", text: "Learn Quran with Tajweed", cta: "Enroll Now" },
        { image: "https://images.pexels.com/photos/19439178/pexels-photo-19439178/free-photo-of-view-of-illuminated-tilya-kori-madrasah-registan-in-samarkand-uzbekistan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", text: "Islamic Studies for Everyone", cta: "Get Started" },
        { image: "https://images.pexels.com/photos/19439206/pexels-photo-19439206/free-photo-of-view-of-the-ulugh-beg-madrasah-and-tilya-kori-madrasah-in-samarkand-uzbekistan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", text: "Arabic Language Classes", cta: "Join Today" },
      ];

      const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
   <>
   <div className="relative w-full h-[60vh] md:h-[87vh] overflow-hidden mt-20">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute w-full h-full transition-opacity duration-1000 ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={slide.image} alt={slide.text} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
        <h2 className="text-lg md:text-4xl font-bold">{slide.text}</h2>
        <a href="/courses" className="mt-2 md:mt-4 bg-green-500 px-4 py-2 md:px-6 md:py-2 rounded shadow-md hover:bg-green-600">{slide.cta}</a>
      </div>
    </div>
  ))}
  <button onClick={prevSlide} className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-1 md:p-2 rounded-full text-white"><IoIosArrowDropleftCircle size={50} /></button>
  <button onClick={nextSlide} className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-1 md:p-2 rounded-full text-white"><IoIosArrowDroprightCircle size={50} /></button>
</div>

   </>
  )
}

export default Slider;