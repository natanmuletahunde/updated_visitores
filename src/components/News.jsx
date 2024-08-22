/* News.jsx */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [hoveredPostId, setHoveredPostId] = useState(null);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/news") 
      .then((response) => response.json())
      .then((data) => setPosts(data));

    setTimeout(() => {
      setAnimateHeader(true);
    }, 100);
  }, []);

  const handlePostHover = (postId) => {
    setHoveredPostId(postId);
  };

  const handlePostUnhover = () => {
    setHoveredPostId(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-white text-gray-800 py-20 cursor-pointer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl font-bold mb-4 transition-transform duration-700 ${
              animateHeader ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
            } hover:scale-105`}
          >
            Welcome to Our Football News Page
          </h1>
          <p
            className={`text-lg mb-8 transition-transform duration-700 ${
              animateHeader ? 'transform translate-x-0 opacity-100 delay-200' : 'transform -translate-x-full opacity-0'
            } hover:scale-105`}
          >
            Stay up-to-date with the latest news and updates from the world of football.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto h-[60vh]">
            {posts.slice(0, 6).map((post) => (
              <div
                key={post.id}
                className={`bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg ${
                  hoveredPostId === post.id
                    ? 'bg-white text-gray-800 hover:bg-gray-800 hover:text-white'
                    : 'bg-gray-800 text-white hover:bg-white hover:text-gray-800'
                }`}
                onMouseEnter={() => handlePostHover(post.id)}
                onMouseLeave={handlePostUnhover}
              >
                <div className="p-6">
                  {post.image && (
                    <img
                      src={`http://localhost:8000/${post.image}`}
                      alt={post.name}
                      className="w-full h-64 object-cover mb-4 rounded-lg"
                    />
                  )}
                  <h2 className="text-xl font-bold mb-2">{post.name}</h2>
                  <p className="mb-4">
                    {hoveredPostId === post.id ? post.hoverContent : post.description}
                  </p>
                  <Link
                    to={`/newsdetail/${post.id}`}
                    className="text-blue-500 hover:text-blue-400 transition-colors duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
