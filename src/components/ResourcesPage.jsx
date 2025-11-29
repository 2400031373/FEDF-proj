import React from "react";

const ResourcesPage = ({ onBackClick }) => {
  const resources = [
    {
      category: "📘 Study Guides",
      items: [
        {
          title: "Introduction to the Indian Constitution",
          link: "https://www.india.gov.in/my-government/constitution-india",
        },
        {
          title: "Fundamental Rights Simplified",
          link: "https://byjus.com/ias-questions/fundamental-rights-in-the-constitution/",
        },
        {
          title: "Link for others",
          link: "https://en.wikipedia.org/wiki/Special:Search?go=Go&search=peoples+rights+india&ns0=1",
        },
      ],
    },
    {
      category: "🎥 Video Resources",
      items: [
        {
          title: "Preamble & Articles Explained (Animated)",
          link: "https://www.youtube.com/watch?v=jz8Fx1u1Rdo",
        },
        {
          title: "Amendments in Indian Constitution",
          link: "https://www.youtube.com/watch?v=PIgqRudE7Yk",
        },
      ],
    },
    {
      category: "🌐 Official Links",
      items: [
        {
          title: "Legislative Department - Constitution Portal",
          link: "https://legislative.gov.in/",
        },
        {
          title: "PRS India - Bill & Amendment Tracker",
          link: "https://prsindia.org/",
        },
      ],
    },
  ];

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

        .category {
          background: rgba(255,255,255,0.95);
          margin-bottom: 2rem;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          border-left: 5px solid #667eea;
          transition: all 0.3s ease;
        }

        .category:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .category h2 {
          color: #667eea;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e0e0e0;
          font-weight: 700;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin: 1rem 0;
          padding: 1.2rem 1.5rem;
          background: #f8f8f8;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        li:hover {
          background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
          transform: translateX(8px);
        }

        a {
          text-decoration: none;
          color: #667eea;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        a:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        button {
          width: 100%;
          margin-top: 0;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .container { padding: 1.5rem 1rem; }
          h1 { font-size: 1.8rem; }
          .nav-top { padding: 1rem 1.5rem; }
          .category { padding: 1.5rem; }
        }
      `}</style>

      <div className="nav-top">
        <h1>📚 Learning Resources</h1>
        <button onClick={onBackClick}>🏠 Back</button>
      </div>

      <div className="page-wrapper">
        <div className="container">
        {resources.map((section, i) => (
          <div key={i} className="category">
            <h2>{section.category}</h2>
            <ul>
              {section.items.map((res, j) => (
                <li key={j}>
                  <a href={res.link} target="_blank" rel="noopener noreferrer">
                    {res.title} ↗️
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <button onClick={onBackClick}>
          🏠 Back to Home
        </button>
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
