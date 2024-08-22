/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {post.image && (
          <img
            src={`http://localhost:8000/${post.image}`} // Ensure the URL is correct
            alt={post.name}
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/1200x800"; // Fallback image
            }}
          />
        )}
        <div className="p-6 sm:p-8 lg:p-10">
          <h1 className="text-3xl font-bold mb-4">{post.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {post.description}
          </p>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">{new Date(post.created_at).toLocaleDateString()}</span>
            <span className="text-gray-500 mr-2"></span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
