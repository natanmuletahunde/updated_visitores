/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const EventCard = ({ name, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out ${
        isHovered ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
        )}
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="mb-4">
          {isHovered ? description : description}
        </p>
        <a
          href={`http://localhost:8000/events/${name}`} // Adjust as needed
          className="text-blue-500 hover:text-blue-400 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default EventCard;
