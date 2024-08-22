/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import EventCard from "./EventCard.jsx";
import Header from "./Header.jsx";  // Import Header
import Footer from "./Footer.jsx";  // Import Footer

const Events = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((response) => {
        console.log('Raw response:', response);
        return response.text();
      })
      .then((text) => {
        console.log('Raw text:', text);
        try {
          const data = JSON.parse(text);
          setPosts(data);
        } catch (error) {
          setError('Error parsing JSON: ' + error.message);
          console.error('Error parsing JSON:', error);
        }
      })
      .catch((error) => {
        setError('Error fetching events: ' + error.message);
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Football Event Posts</h1> 
          {error && <p className="text-red-500 text-center">{error}</p>}  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <EventCard
                key={post.id}
                name={post.name}
                image={`http://localhost:8000/${post.image}`}
                description={post.description}
              />
            ))}
          </div>
          
        
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Football is a simple game. 22 men chase a ball for 90 minutes and at the end, the Germans always win. - Gary Lineker",
                "Some people believe football is a matter of life and death. I am very disappointed with that attitude. I can assure you it is much, much more important than that. - Bill Shankly",
                "You have to show up in the World Cup, and in the World Cup anything can happen. - Lionel Messi",
                "I learned all about life with a ball at my feet. - Ronaldinho",
                "In football, the worst blindness is only seeing the ball. - Nelson Falcão Rodrigues",
                "The more difficult the victory, the greater the happiness in winning. - Pelé"
              ].map((quote, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"  // Add hover animation
                >
                  <p className="text-gray-700 mb-4">{quote}</p>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer /> 
    </div>
  );
};

export default Events;
