/* eslint-disable no-unused-vars */
/* VisitorHome.jsx */
import React from "react";
import Header from "./Header"; // Import Header
import Footer from "./Footer"; // Import Footer

const VisitorHome = () => {
  return (
    <div>
      <Header />

      
      {/* Main Content */}
      <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
    This is the Visitors Page
  </h1>
  <p className="text-xs font-medium mb-4 text-center text-gray-500">
    Welcome to the visitors page! Here you can explore various sections of
    our website.
  </p>

      {/* Image Section */}
<section className="mt-12 mb-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      "https://i.pinimg.com/474x/42/36/81/423681ce10143a63bff91face7ca582b.jpg",
      "https://www.bhmpics.com/downloads/football-players-wallpapers-/4.screen-0.jpg.webp",
      "https://i.pinimg.com/736x/46/9c/db/469cdb1050057aac01b54be10a0996ed.jpg",
      "https://i.pinimg.com/originals/20/0b/a6/200ba680643634028600d469fbdb3230.jpg",
      "https://thumbs.dreamstime.com/b/dynamic-moment-close-up-football-players-powerful-kick-action-frozen-time-dynamic-moment-close-up-football-players-291409853.jpg",
      "https://i.pinimg.com/736x/c8/67/98/c8679847b22d140ca046a7d1915de4b2.jpg",
      "https://qph.cf2.quoracdn.net/main-qimg-4bc1cd66ee9c9a72abd8521d175a53c5-lq",
      "https://img.freepik.com/premium-photo/soccer-player-kicks-ball-stadium_549702-4279.jpg",
    ].map((src, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-lg shadow-lg bg-white p-6"
      >
        <img
          src={src}
          alt={`Football ${index + 1}`}
          className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    ))}
  </div>
</section>

        <section className="bg-gray-100  py-10 flex justify-center items-center overflow-hidden">
        <div className="relative max-w-4xl w-full">
          <img
            src="https://graphicsfamily.com/wp-content/uploads/edd/2020/07/Football-Club-Emblem-Logo-Template-PSD-scaled.jpg"
            alt="Football Background"
            className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg slide-animation"
          />
        </div>
      </section>
      <section className="bg-gray-100 py-20 px-8 flex justify-between items-center overflow-hidden relative">
  {/* Content box */}
  <div className="relative z-20 max-w-xs min-w-min p-6 bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col items-start text-left mb-6"> {/* Added mb-6 for bottom margin */}
    <h2 className="text-xl font-bold mb-2">Our Mission</h2>
    <p className="text-sm mb-2">
      Our mission is to offer top-notch football experiences through 
      engaging events and content. We aim to unite football lovers from 
      across the globe, nurturing a shared passion for the sport.
    </p>
    <p className="text-sm mb-2">
      From exciting matches to insightful blogs, we deliver high-quality 
      experiences for fans of all ages. Join us in celebrating football 
      and stay updated with the latest news.
    </p>
    <p className="text-sm">
      Whether you’re a player, coach, or fan, our platform provides a 
      space to connect and enjoy football. Explore our events and join 
      a community passionate about the game.
    </p>
  </div>

  {/* Image with description */}
  <div className="relative z-20 max-w-xs min-w-min p-6 bg-opacity-80 rounded-lg shadow-lg flex flex-col items-start text-left mb-6">
  <img
    src="https://d9xgh21e58uhc.cloudfront.net/wp-content/uploads/cms/f/FOOTBALL.jpg"  // Replace with your actual image URL
    alt="Background Image"
    className="w-full h-auto object-cover" // Ensure image covers the container
    style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust as needed
  />
  <div className="absolute bottom-0 left-0 right-0 text-black text-xs text-center bg-gray-100 p-2">
    <p className="m-0 mt-4">
      Forest Town Mission F.C. 1909 - Dedicated to fostering local football talent and building a strong community through the beautiful game.
    </p>
  </div>
</div>

</section>


        {/* Quotes Section */}
<section className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-4xl font-bold mb-4 text-center text-black">
    Inspiring Quotes
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="col-span-2 lg:col-span-1">
      <div className="grid grid-cols-1 gap-6">
        <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <p className="text-xs text-black font-bold">
            The only limit to our realization of tomorrow is our doubts of
            today. - Franklin D. Roosevelt
          </p>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <p className="text-xs text-black font-bold">
            Success is not final, failure is not fatal: It is the courage to
            continue that counts. - Winston Churchill
          </p>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <p className="text-xs text-black font-bold">
            Believe you can and you are halfway there. - Theodore Roosevelt
          </p>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <p className="text-xs text-black font-bold">
            Football is like life - it requires perseverance, self-denial,
            hard work, sacrifice, dedication, and respect for authority. -
            Vince Lombardi
          </p>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <p className="text-xs text-black font-bold">
            You have to fight to reach your dream. You have to sacrifice and
            work hard for it. - Lionel Messi
          </p>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
          <p className="text-xs text-black font-bold">
            I do not have time for hobbies. At the end of the day, I treat
            my job as a hobby. It is something I love doing. - David Beckham
          </p>
        </blockquote>
      </div>
    </div>
    <div className="col-span-1 lg:col-span-2 flex items-center justify-center  rounded-lg shadow-lg p-6">
      <div className="relative w-full h-full">
        <img
          src="https://example.com/large-image.jpg"
          alt="Inspiring Quote"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
       <div className="relative w-full h-full">
  <img
    src="https://d9xgh21e58uhc.cloudfront.net/wp-content/uploads/cms/f/FOOTBALL.jpg"
    alt="Football"
    className="absolute inset-0 w-full h-full object-cover rounded-lg"
  />
  <div className="relative p-6 bg-opacity-75 bg-white rounded-lg">
    <p className="text-lg text-black font-bold">
     
    </p>
  </div>
</div>

      </div>
    </div>
  </div>
</section>


        {/* Additional Big Containers */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-500 text-white text-center p-10 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">
              Explore Our Latest Events
            </h3>
            <p className="text-sm">
              Discover upcoming football events and stay updated with the latest
              news.
            </p>
          </div>
          <div className="bg-green-500 text-white text-center p-10 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
            <p className="text-sm">
              Connect with other football enthusiasts and share your passion.
            </p>
          </div>
          <div className="bg-red-500 text-white text-center p-10 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Read Our Latest Blogs</h3>
            <p className="text-sm">
              Get insights and tips from experts in the football industry.
            </p>
          </div>
        </section>

        {/* New Bottom Section */}
        <section className="bg-gray-200 py-6 flex justify-end items-center">
          <div className="max-w-xs p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-right">
              Learn More About Football
            </h3>
            <p className="text-sm text-right">
              Dive deeper into the world of football with detailed articles and
              guides. Stay informed and become a football expert!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisitorHome;
