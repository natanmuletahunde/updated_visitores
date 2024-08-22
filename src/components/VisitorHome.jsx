/* eslint-disable no-unused-vars */
/* VisitorHome.jsx */
import React from "react";
import Header from "./Header"; // Import Header
import Footer from "./Footer"; // Import Footer

const VisitorHome = () => {
  return (
    <div>
      <Header />

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          This is the Visitors Page
        </h1>
        <p className="text-2xl font-extrabold mb-4 text-center">
          Welcome to the visitors page! Here you can explore various sections of
          our website.
        </p>

        {/* Image Section */}
        <section className="mb-12">
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
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={src}
                  alt={`Football ${index + 1}`}
                  className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Quotes Section */}
        <section className="bg-green-800 p-6 rounded-lg shadow-md">
  <h2 className="text-4xl font-bold mb-4 text-center text-white">
    Inspiring Quotes
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <blockquote className="bg-green-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <p className="text-white font-bold">
        The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt
      </p>
    </blockquote>
    <blockquote className="bg-green-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <p className="text-white font-bold">
        Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill
      </p>
    </blockquote>
    <blockquote className="bg-green-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <p className="text-white font-bold">
        Believe you can and you are  halfway there. - Theodore Roosevelt
      </p>
    </blockquote>
    <blockquote className="bg-green-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <p className="text-white font-bold">
        Football is like life - it requires perseverance, self-denial, hard work, sacrifice, dedication, and respect for authority. - Vince Lombardi
      </p>
    </blockquote>
    <blockquote className="bg-green-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <p className="text-white font-bold">
        You have to fight to reach your dream. You have to sacrifice and work hard for it. - Lionel Messi
      </p>
    </blockquote>
    <blockquote className="bg-green-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
      <p className="text-white font-bold">
        I do not  have time for hobbies. At the end of the day, I treat my job as a hobby. It is  something I love doing. - David Beckham
      </p>
    </blockquote>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default VisitorHome;
