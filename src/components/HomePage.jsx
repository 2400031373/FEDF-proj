import React, { useState, useEffect } from "react";

const HomePage = ({ onLoginClick, onArticlesClick, onQuizClick, onResourcesClick }) => {
  const [fact, setFact] = useState("");
  const [activeFact, setActiveFact] = useState(0);

  const funFacts = [
    "India has the longest written constitution in the world!",
    "The Constitution borrowed ideas from UK, USA, Ireland, and more.",
    "Constitution Day is celebrated on November 26.",
    "There are 6 Fundamental Rights and 11 Fundamental Duties.",
    "The word 'Socialist' was added to the Preamble in 1976.",
    "Originally recognized 14 languages; now 22 in the 8th Schedule.",
    "Justice M. Fathima Beevi was the first female Supreme Court judge in 1989.",
    "The President can grant pardons, reprieves, and remissions.",
    "India’s Constitution is over 470 articles long including amendments.",
    "It’s inspired by over 7 countries but uniquely Indian in spirit!"
  ];

  const showRandomFact = () => {
    const random = Math.floor(Math.random() * funFacts.length);
    setActiveFact(random);
    setFact(funFacts[random]);
  };

  return (
    <div className="container">
      {/* CSS at top */}
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }

        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          width: 100%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        nav .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        nav .logo img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(255,255,255,0.2);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        nav .logo h1 {
          margin: 0;
          font-family: 'Georgia', serif;
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(135deg, #00d4ff, #0099ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 2rem;
          margin: 0;
          align-items: center;
        }

        nav ul li {
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        nav ul li::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #00d4ff, #0099ff);
          transition: width 0.3s ease;
        }

        nav ul li:hover::after {
          width: 100%;
        }

        nav ul li span {
          cursor: pointer;
          font-weight: 600;
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          background: linear-gradient(135deg, #00d4ff, #0099ff);
          transition: all 0.3s ease;
          display: inline-block;
        }

        nav ul li span:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4);
        }

        .Main {
          flex: 1;
          text-align: center;
          padding: 5rem 2rem;
          color: white;
          animation: fadeInDown 0.8s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .Main h2 {
          font-family: 'Segoe UI', sans-serif;
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: white;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 2px;
        }

        .Main p {
          font-size: 1.3rem;
          margin: 0 auto 3rem auto;
          line-height: 1.8;
          max-width: 700px;
          color: rgba(255,255,255,0.95);
          font-weight: 300;
          width: 100%;
        }

        .section-title {
          font-family: 'Segoe UI', sans-serif;
          font-size: 2.2rem;
          color: white;
          margin: 3rem 0 2.5rem 0;
          text-align: center;
          font-weight: 700;
          letter-spacing: 1px;
          width: 100%;
        }

        .features-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          width: 100%;
          padding: 0 2rem 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          justify-items: center;
          align-items: center;
        }

        .feature-card {
          background: rgba(255,255,255,0.95);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          text-align: center;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
          width: 100%;
          max-width: 320px;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 30px 70px rgba(0,0,0,0.35);
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
        }

        .feature-card-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .feature-card h3 {
          font-family: 'Segoe UI', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1a1a2e;
          font-weight: 700;
        }

        .feature-card p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #555;
          font-weight: 500;
          flex-grow: 1;
        }

        .fun-fact-card .fact-display {
          margin-top: 1.5rem;
          font-style: italic;
          color: #667eea;
          background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
          padding: 1rem;
          border-radius: 12px;
          border-left: 4px solid #667eea;
          font-weight: 600;
          animation: slideIn 0.5s ease;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        footer {
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          width: 100%;
          border-top: 2px solid rgba(255,255,255,0.1);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.5rem;
          }

          nav .logo h1 {
            font-size: 1.3rem;
          }

          nav ul {
            gap: 1rem;
            font-size: 0.85rem;
          }

          .Main h2 {
            font-size: 2.2rem;
          }

          .features {
            grid-template-columns: 1fr;
            padding: 0 1rem 3rem 1rem;
          }
        }
      `}</style>

      {/* Body */}
      <nav>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Constitution_of_India.jpg"
            alt="Logo"
          />
          <h1>LENS4LAWS</h1>
        </div>
        <ul>
          <li onClick={onArticlesClick}>Articles</li>
          <li onClick={onQuizClick}>Quiz</li>
          <li onClick={onResourcesClick}>Resources</li>
          <li>About Us</li>
          <li><span onClick={onLoginClick}>Login</span></li>
        </ul>
      </nav>

      <section className="Main">
        <h2>✨ GETTING STARTED! ✨</h2>
        <p>
          Do you know what the Constitution is? Don't worry, this is for you! 
          Explore your rights, learn the laws, and discover interesting facts along the way.
        </p>

        <h3 className="section-title">🚀 What You Can Do Here</h3>
        <div className="features-wrapper">
          <div className="features">
            <div className="feature-card" onClick={onArticlesClick}>
              <div className="feature-card-icon">📚</div>
              <h3>Learn Articles</h3>
              <p>Dive into important sections and understand your rights and duties.</p>
            </div>
            <div className="feature-card" onClick={onQuizClick}>
              <div className="feature-card-icon">🧠</div>
              <h3>Quizzes</h3>
              <p>Test your knowledge and see how well you know the Constitution in a fun way.</p>
            </div>
            <div className="feature-card" onClick={onResourcesClick}>
              <div className="feature-card-icon">🎓</div>
              <h3>Resources</h3>
              <p>Access books, PDFs, and interactive tools for deeper learning.</p>
            </div>
            <div className="feature-card fun-fact-card" onClick={showRandomFact}>
              <div className="feature-card-icon">💡</div>
              <h3>Fun Facts</h3>
              <p>Click to discover quirky and interesting facts about our Constitution!</p>
              {fact && <div className="fact-display">🌟 {fact}</div>}
            </div>
            <div className="feature-card">
              <div className="feature-card-icon">ℹ️</div>
              <h3>About Us</h3>
              <p>Learn why this web exists and how it helps every citizen explore their rights.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 LENS4LAWS. Empowering Citizens Through Constitutional Knowledge ⚖️</p>
      </footer>
    </div>
  );
};

export default HomePage;
