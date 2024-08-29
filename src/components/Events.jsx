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

  const websites = [
    {
      description: "FIFA's official site provides the latest news, scores, and event information from the world of football.",
      url: "https://www.fifa.com/"
    },
    {
      description: "UEFA champions league provides official updates, live matches, and in-depth coverage of the tournament.",
      url: "https://www.uefa.com/"
    },
    {
      description: "Premier League's official site for the latest on the English football league, including news, fixtures, and results.",
      url: "https://www.premierleague.com/"
    },
    {
      description: "La Liga official website provides the latest on Spanish football, including scores, news, and fixtures.",
      url: "https://www.laliga.com/en-GB"
    },
    {
      description: "Serie A provides official updates and coverage of the top football league in Italy.",
      url: "https://www.legaseriea.it/en"
    },
    {
      description: "Bundesliga's official site offers news, fixtures, and live scores from Germany's top football league.",
      url: "https://www.bundesliga.com/en/bundesliga"
    }
  ];

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
              {websites.map((website, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"  // Add hover animation
                >
                  <p className="text-gray-700 mb-4">{website.description}</p>
                  <a href={website.url} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800">
                      Learn More
                    </button>
                  </a>
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
