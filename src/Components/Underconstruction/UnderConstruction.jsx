import { useState, useEffect } from "react";

const UnderConstruction = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 5,
    minutes: 30,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white text-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">🚧 Page Under Construction 🚧</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        We are working hard to bring you something amazing. Stay tuned!
      </p>

      {/* Countdown Timer */}
      <div className="flex space-x-4 text-2xl md:text-4xl font-semibold mb-6">
        <div className="bg-white text-green-900 px-4 py-2 rounded shadow-md">{timeLeft.days}d</div>
        <div className="bg-white text-green-900 px-4 py-2 rounded shadow-md">{timeLeft.hours}h</div>
        <div className="bg-white text-green-900 px-4 py-2 rounded shadow-md">{timeLeft.minutes}m</div>
        <div className="bg-white text-green-900 px-4 py-2 rounded shadow-md">{timeLeft.seconds}s</div>
      </div>

      <a href="/" className="bg-green-500 px-6 py-2 rounded shadow-md text-white text-lg hover:bg-green-600">
        Back to Home
      </a>
    </div>
  );
};

export default UnderConstruction;
