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
          Visitors Page
        </h1>
        <p className="text-xs font-medium mb-4 text-center text-gray-500">
          Welcome to the visitors page! Here you can explore various sections of
          our website.
        </p>

        {/* Image Section */}
        <section className="mt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://media.istockphoto.com/id/1097457362/photo/skills-with-the-soccer-ball.jpg?s=612x612&w=0&k=20&c=Wl63eH1DJnDKzFQURwNCu807PWDCyThETfmd1Fl5b64=",
              "https://www.shutterstock.com/image-photo/young-boy-soccer-ball-doing-260nw-1227550027.jpg",
              "https://miro.medium.com/v2/resize:fit:1400/1*jSldYCi6cEAqInkSsZomWQ.jpeg",
              "https://i.guim.co.uk/img/media/787c74d2e9a1613cbc71ac0253ebc493a1b85341/0_176_5274_3164/master/5274.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=f7cb96375966119ecb1fe6625992c5c9",
              "https://www.shutterstock.com/image-photo/football-goalman-ball-action-outdoors-260nw-161077826.jpg",
              "https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg",
              "https://imageio.forbes.com/specials-images/imageserve/633b6c847b304297ba78b209/Paris-Saint-Germain-v-OGC-Nice---Ligue-1-Uber-Eats/0x0.jpg?format=jpg&crop=3059,2038,x130,y114,safe&height=2038&width=3059.jpg",
              "https://images.immediate.co.uk/production/volatile/sites/3/2024/01/Lautaro-Martinez-a6cb877.jpg?quality=90&fit=700,466.jpg",
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

        <section className="bg-gray-100 py-20 px-8 flex justify-between items-center overflow-hidden relative">
          {/* Content box */}
          <div className="relative z-20 max-w-xs min-w-min p-6 bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col items-start text-left mb-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
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
              space to connect and enjoy football. Explore our events and join a
              community passionate about the game.
            </p>
          </div>

          {/* Image with description */}
          <div className="relative z-20 max-w-xs min-w-min p-6 bg-opacity-80 rounded-lg shadow-lg flex flex-col items-start text-left mb-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="https://d9xgh21e58uhc.cloudfront.net/wp-content/uploads/cms/f/FOOTBALL.jpg"
              alt="Football"
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              style={{ maxWidth: "400px", maxHeight: "300px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 text-black text-xs text-center bg-gray-100 p-2">
              <p className="m-0 mt-4">
                Forest Town Mission F.C. 1909 - Dedicated to fostering local
                football talent and building a strong community through the
                beautiful game.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20 px-8 flex justify-between items-center overflow-hidden relative">
          {/* Content box */}
          {/* Image with description */}
          <div className="relative z-20 max-w-xs min-w-min p-6 bg-opacity-80 rounded-lg shadow-lg flex flex-col items-start text-left mb-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <img
              src="https://e2e85xpajrr.exactdn.com/wp-content/uploads/2021/03/21190301/SOCCER-SCIENCE-AND-YOUTH-DEVELOPMENT-FOOTBALL-7.webp?strip=all&lossy=1&ssl=1.jpg"
              alt="Football"
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              style={{ maxWidth: "400px", maxHeight: "300px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 text-black text-xs text-center bg-gray-100 p-2">
              <p className="m-0 mt-4">
                Youth development in football focuses on nurturing young talent
                through academies, training programs, and mentorship.
              </p>
            </div>
          </div>

          {/* Image with description */}
          <div className="relative z-20 max-w-xs min-w-min p-6 bg-white bg-opacity-80 rounded-lg shadow-lg flex flex-col items-start text-left mb-6 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">Youth Development</h2>
            <p className="text-sm mb-2">
              Our mission is to offer top-notch football experiences through
              engaging events and content. We aim to unite football lovers from
              across the globe, nurturing a shared passion for the sport. Many
              clubs are investing in youth academies to nurture the next
              generation of talent. Scholarships and youth programs are being
              expanded to reach more young players, providing them with the
              resources they need to excel in football.
            </p>
            <p className="text-sm mb-2">
              From exciting matches to insightful blogs, we deliver high-quality
              experiences for fans of all ages. Join us in celebrating football
              and stay updated with the latest news. The promotion of youth
              tournaments at both national and international levels offers young
              players the opportunity to compete, develop their skills, and gain
              valuable experience on the field.
            </p>
            <p className="text-sm">
              Whether you’re a player, coach, or fan, our platform provides a
              space to connect and enjoy football. Explore our events and join a
              community passionate about the game. By supporting youth
              development initiatives, we help foster the future stars of
              football, ensuring the sport continues to thrive for generations
              to come.
            </p>
          </div>
        </section>

        {/* Quotes Section */}
        <section className="bg-white p-6 rounded-lg ">
          <h3 className="text-2xl  mb-4  text-gray-900">
            Inspiring Quotes and images
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-2 lg:col-span-1">
              <div className="grid grid-cols-1 gap-6">
                <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <p className="text-xs text-black font-bold">
                    The only limit to our realization of tomorrow is our doubts
                    of today. - Franklin D. Roosevelt
                  </p>
                </blockquote>
                <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <p className="text-xs text-black font-bold">
                    Success is not final, failure is not fatal: It is the
                    courage to continue that counts. - Winston Churchill
                  </p>
                </blockquote>
                <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <p className="text-xs text-black font-bold">
                    Believe you can and you are halfway there. - Theodore
                    Roosevelt
                  </p>
                </blockquote>
                <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <p className="text-xs text-black font-bold">
                    Football is like life - it requires perseverance,
                    self-denial, hard work, sacrifice, dedication, and respect
                    for authority. - Vince Lombardi
                  </p>
                </blockquote>
                <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <p className="text-xs text-black font-bold">
                    You have to fight to reach your dream. You have to sacrifice
                    and work hard for it. - Lionel Messi
                  </p>
                </blockquote>
                <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
                  <p className="text-xs text-black font-bold">
                    I do not have time for hobbies. At the end of the day, I
                    treat my job as a hobby. It is something I love doing. -
                    David Beckham
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2 flex items-center justify-center rounded-lg shadow-lg p-6">
              <div className="relative w-full h-full">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.dailymail.co.uk/i/pix/2017/02/04/18/3CD3D74200000578-4191674-Eden_Hazard_showcased_his_masterful_skills_once_more_to_put_Arse-a-27_1486234035298.jpg"
                    alt="Football"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 mt-12">
          <div className="relative bg-cover bg-center h-[500px] w-full rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              src="https://d12eu00glpdtk2.cloudfront.net/public/images/local/_760x500_clip_center-center_none/football-facts-cover.jpg"
              alt="Football Background"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white rounded-lg">
              <h3 className="text-4xl font-extrabold mb-4  text-gray-800">
                Football News
              </h3>
              <p className="text-lg font-medium mb-6 text-center  text-gray-800">
                Stay updated with the latest football news, events, and scores.
              </p>
              <a
                href="/News"
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>

          <div
            className="relative bg-cover bg-center h-[500px] w-full rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            style={{
              backgroundImage:
                'url("https://enwpgo.wordpress.com/wp-content/uploads/2023/09/sports-blog-header.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full px-6 text-center text-white">
              <h3 className="text-4xl font-extrabold mb-4 text-gray-900">
                Football Blogs
              </h3>
              <p className="text-lg font-medium mb-10 text-gray-800">
                Explore our football blogs for the latest updates, analysis, and
                expert opinions on your favorite teams and players. Stay
                connected with the community and dive into game strategies.
              </p>
            </div>
            <div className="relative z-10 flex items-center justify-center h-full p-6">
              <a
                href="/Blog"
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Explore More
              </a>
            </div>
          </div>

          <div
            className="relative bg-cover bg-center h-[500px] w-full rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            style={{
              backgroundImage: 'url("https://your-image-url-here.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full px-6 text-center text-white">
              <h3 className="text-4xl font-extrabold mb-4 text-gray-900">
                Football Events
              </h3>
              <div className="flex flex-col items-center justify-center h-full px-6">
                <a
                  href="/events"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors mb-4"
                >
                  Explore Events
                </a>
                <p className="text-lg font-medium text-gray-800">
                  Stay updated with the latest football events, match schedules,
                  and scores. From thrilling tournaments to local matches, find
                  all the information you need to stay ahead of the game.
                  Explore upcoming fixtures, event details, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Bottom Section */}
        <section className="py-6 flex justify-center items-center">
          <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Learn More About Football
            </h3>
            <h6 className="text-base text-center">
              Football, known as the beautiful game, is more than just a sport.
              It’s a global phenomenon that unites people across different
              cultures and continents. Whether it is the thrill of a last-minute
              goal, the electrifying atmosphere of a packed stadium, or the
              passion of millions of fans, football has an unparalleled ability
              to inspire and bring people together. Understanding football goes
              beyond knowing the rules of the game. It involves appreciating the
              history of legendary clubs, analyzing the strategies employed by
              top managers, and recognizing the skill and dedication of players
              who spend countless hours perfecting their craft. From grassroots
              football in small communities to the grand stage of the World Cup,
              the sport has the power to shape identities and create lifelong
              memories. Football is also a reflection of society, with stories
              of triumph, adversity, and the pursuit of greatness. By diving
              deeper into the world of football, you can gain insights into the
              socio-economic and cultural impact of the sport, explore the
              evolution of tactics and playing styles, and discover the stories
              behind some of the most iconic moments in football history.
              Whether you are a seasoned fan or new to the game, learning more
              about football will enrich your understanding and enhance your
              enjoyment of the sport.
            </h6>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisitorHome;
