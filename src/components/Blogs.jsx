/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";


function Blogs() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/posts") // Update the URL to match your Laravel API endpoint
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleKnowMore = (post) => {
    setSelectedPost(post.id === selectedPost ? null : post.id);
  };

  return (
    <div className="bg-green-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {posts?.map((post) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {post.image && (
                  <img
                    src={`http://localhost:8000/${post.image}`} // Updated URL for image
                    alt={post.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150"; // Fallback image
                    }}
                  />
                )}
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-1 font-bold">
                    {new Date(post.created_at).toLocaleDateString()}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.name}
                  </h3>
                  <div className="flex flex-wrap mb-4">
                    <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {post.meta_keyword}
                    </span>
                  </div>
                  {selectedPost === post.id && (
                    <p className="text-gray-700 mb-4">{post.description}</p>
                  )}
                  <div className="flex justify-between">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                      onClick={() => handleKnowMore(post)}
                    >
                      Description
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
