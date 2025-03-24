import { useState } from "react";

const images = [
  "https://i.ytimg.com/vi/2cFC0XtV5f0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB7-KzVvOWGJYJEpb51uc4vlkatSg",
  "https://i.ytimg.com/vi/ypntBS9bxzw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAAr9vuUZkxjqTt_-GW-ywsLKSjhA",
  "https://i.ytimg.com/vi/JfvD0Ktg4pA/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgVCg_MA8=&rs=AOn4CLAmkDPIFHj0Si6sJlf-_zjeXWt12A",
  "https://i.ytimg.com/vi/0oZHR3XvC_g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAT-7oMyP-JAinGx70Va7bEotKnNg",
  "https://i.ytimg.com/vi/Pf8paGZl3NU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTCg-MA8=&rs=AOn4CLAMx9uaOpN6HIrehEgz2CjH_y4F1w",
  "https://i.ytimg.com/vi/SNNZ2T3oTeA/sddefault.jpg",
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-6xl pb-20 text-green-700 font-bold text-center">Photo Gallery</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative cursor-pointer" onClick={() => setSelectedImage(image)}>
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-40 md:h-60 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
