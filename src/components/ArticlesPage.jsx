import React, { useState } from "react";

const ArticlesPage = ({ onBackClick }) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The 106th Constitutional Amendment: Women's Reservation Bill",
      date: "September 2023",
      image: "https://newstodaynet.com/wp-content/uploads/2023/09/Womens-Reservation-Bill-1.webp",
      summary:
        "The Parliament passed the Women's Reservation Bill ensuring 33% reservation for women in Lok Sabha and State Assemblies.",
      content:
        "The 106th Amendment, also known as the Nari Shakti Vandan Adhiniyam, is a landmark move in promoting gender equality in political representation. It will come into effect after delimitation following the next census.",
    },
    {
      id: 2,
      title: "Supreme Court Ruling on Same-Sex Marriage",
      date: "October 2023",
      image: "https://media.assettype.com/barandbench/2023-03/a6d4a549-4365-4754-87fd-8e89b67c8ad5/02.jpg?w=1200&ar=40:21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
      summary:
        "The Supreme Court declined to legalize same-sex marriages but emphasized equality and anti-discrimination for LGBTQ+ individuals.",
      content:
        "The verdict recognized the right to live with dignity for queer couples but stated that the lawmaking responsibility lies with Parliament. The judgment highlighted the need for a future legal framework to protect civil unions.",
    },
    {
      id: 3,
      title: "Right to Privacy and AI Surveillance",
      date: "June 2024",
      image: "https://ecdn.teacherspayteachers.com/thumbitem/Right-to-Privacy-The-Fourth-Amendment-in-Theory-and-Practice-3596200-1516186466/original-3596200-1.jpg",
      summary:
        "The growing use of facial recognition and AI tools led to debates around Article 21 – the Right to Privacy.",
      content:
        "A recent public interest litigation (PIL) questioned unregulated AI surveillance. The court directed the government to draft clear data protection policies aligned with the Digital Personal Data Protection Act, 2023.",
    },
  ]);

  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleRefresh = () => {
    setArticles([...articles].sort(() => Math.random() - 0.5));
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
        
        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
          align-items: center;
        }
        
        .nav-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 3rem;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-top h1 {
          font-size: 1.5rem;
          background: linear-gradient(135deg, #00d4ff, #0099ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-top button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .nav-top button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .container { padding: 3rem 2rem; max-width: 900px; margin: 0 auto; width: 100%; }
        
        h1 { 
          text-align: center; 
          color: white; 
          font-family: 'Segoe UI', sans-serif;
          font-size: 2.5rem;
          margin-bottom: 2.5rem;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .article-card {
          background: rgba(255,255,255,0.95);
          padding: 1.6rem;
          margin-bottom: 2rem;
          border-radius: 15px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          border-left: 5px solid #667eea;
          display: block;
        }

        .article-image {
          display: block;
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 1rem;
          background: #eee;
        }

        /* Desktop - image left, content right */
        @media (min-width: 900px) {
          .article-card {
            display: grid;
            grid-template-columns: 320px 1fr;
            gap: 1.2rem;
            align-items: start;
            padding: 1.25rem;
          }

          .article-image { height: 180px; border-radius: 10px; }
          .article-title { margin-top: 0; }
        }

        .article-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(0,0,0,0.3);
          background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(102,126,234,0.05) 100%);
        }

        .article-title {
          font-size: 1.6rem;
          color: #1a1a2e;
          font-weight: 700;
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .article-date {
          font-size: 0.9rem;
          color: #999;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .article-summary {
          margin-bottom: 1.5rem;
          color: #444;
          line-height: 1.7;
          font-size: 1rem;
        }

        .article-content {
          margin-top: 1.5rem;
          color: #333;
          line-height: 1.8;
          background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #667eea;
        }

        button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 0;
          font-size: 0.95rem;
        }

        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .top-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2.5rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .top-buttons button {
          margin-top: 0;
          min-width: 150px;
        }

        @media (max-width: 768px) {
          .container { padding: 1.5rem 1rem; }
          h1 { font-size: 1.8rem; }
          .nav-top { padding: 1rem 1.5rem; }
          .top-buttons { flex-direction: column; }
        }
      `}</style>

      <div className="nav-top">
        <h1>📰 Constitutional Updates</h1>
      </div>

      <div className="page-wrapper">
        <div className="container">
          <div className="top-buttons">
            <button onClick={handleRefresh}>🔄 Refresh Updates</button>
            <button onClick={onBackClick}>🏠 Back to Home</button>
          </div>

          {articles.map((article) => (
            <div key={article.id} className="article-card">
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-image"
                  loading="lazy"
                  onError={(e) => {
                    // fallback to a lightweight inline SVG placeholder if the image fails to load
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
                      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="220" viewBox="0 0 800 220"><rect width="100%" height="100%" fill="#e8eaf6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#667eea" font-family="Segoe UI, Arial" font-size="20">Image unavailable</text></svg>`
                    );
                  }}
                />
              ) : (
                <div className="article-image" aria-hidden="true"></div>
              )}
              <div className="article-title">{article.title}</div>
              <div className="article-date">📅 {article.date}</div>
              <div className="article-summary">{article.summary}</div>
              <button onClick={() => handleToggle(article.id)}>
                {expanded === article.id ? "Hide Details ▲" : "Read More ▼"}
              </button>

              {expanded === article.id && (
                <div className="article-content">{article.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;
