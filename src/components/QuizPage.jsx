import React, { useState } from "react";

const QuizPage = ({ onBackClick }) => {
  const [topic, setTopic] = useState("Basics");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const quizData = {
    Basics: [
      {
        question: "Who wrote the Preamble? (Hint: Not Shakespeare 😜)",
        options: [
          "Dr. B.R. Ambedkar",
          "Mahatma Gandhi",
          "Thomas Edison",
          "Albert Einstein",
        ],
        answer: "Dr. B.R. Ambedkar",
      },
      {
        question: "How many Fundamental Rights are there?",
        options: ["5", "6", "7", "8"],
        answer: "6",
      },
      {
        question: "Which animal is NOT in the emblem of India? 🐘",
        options: ["Lion", "Elephant", "Horse", "Bull"],
        answer: "Elephant",
      },
    ],
    Rights: [
      {
        question: "Under which Article is 'Right to Equality' mentioned?",
        options: ["Article 12", "Article 14", "Article 19", "Article 32"],
        answer: "Article 14",
      },
      {
        question: "Which Article guarantees 'Freedom of Speech and Expression'?",
        options: ["Article 16", "Article 17", "Article 19(1)(a)", "Article 22"],
        answer: "Article 19(1)(a)",
      },
      {
        question: "Right to Constitutional Remedies is under which Article?",
        options: ["Article 32", "Article 21", "Article 45", "Article 370"],
        answer: "Article 32",
      },
    ],
    Amendments: [
      {
        question: "Which amendment lowered the voting age from 21 to 18?",
        options: ["42nd", "44th", "61st", "97th"],
        answer: "61st",
      },
      {
        question: "Which amendment added the Fundamental Duties?",
        options: ["42nd", "44th", "46th", "52nd"],
        answer: "42nd",
      },
      {
        question: "Which article allows amending the Constitution?",
        options: ["Article 360", "Article 368", "Article 370", "Article 356"],
        answer: "Article 368",
      },
    ],
  };

  const questions = quizData[topic];

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) setScore(score + 1);

    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) setCurrentQuestion(nextQ);
    else setShowScore(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setQuizStarted(false);
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

        .container { padding: 3rem 2rem; max-width: 800px; margin: 0 auto; width: 100%; }
        
        h1 { 
          text-align: center; 
          color: white; 
          font-family: 'Segoe UI', sans-serif;
          font-size: 2.2rem;
          margin-bottom: 2.5rem;
          font-weight: 800;
        }

        .quiz-card {
          background: rgba(255,255,255,0.95);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          animation: slideUp 0.6s ease;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        label {
          display: block;
          margin-bottom: 1rem;
          color: #1a1a2e;
          font-weight: 600;
          font-size: 0.95rem;
        }

        select {
          width: 100%;
          padding: 0.9rem 1rem;
          margin-bottom: 2rem;
          border-radius: 10px;
          border: 2px solid #e0e0e0;
          background: white;
          color: #1a1a2e;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        select:focus {
          border-color: #667eea;
          outline: none;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        button {
          padding: 1rem 2rem;
          margin-right: 0.8rem;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .question {
          margin: 2.5rem 0 2rem 0;
          font-weight: 700;
          font-size: 1.3rem;
          color: #1a1a2e;
          line-height: 1.5;
        }

        .options {
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .options button {
          background: #f0f0f0;
          color: #1a1a2e;
          padding: 1.1rem;
          text-align: left;
          border: 2px solid #e0e0e0;
          margin: 0;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .options button:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-color: #667eea;
          transform: translateX(8px);
        }

        .score {
          text-align: center;
          padding: 2.5rem;
          background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
          border-radius: 15px;
          margin-top: 0;
        }

        .score h2 {
          color: #1a1a2e;
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .score p {
          color: #666;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .top-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .top-buttons button {
          margin-right: 0;
          min-width: 150px;
        }

        .question-counter {
          font-size: 0.95rem;
          color: #667eea;
          font-weight: 600;
          text-align: right;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .container { padding: 1.5rem 1rem; }
          h1 { font-size: 1.5rem; }
          .nav-top { padding: 1rem 1.5rem; }
          .top-buttons { flex-direction: column; }
        }
      `}</style>

      <div className="nav-top">
        <h1>🧠 Quiz Master</h1>
      </div>

      <div className="page-wrapper">
        <div className="container">
          <div className="quiz-card">
          {!quizStarted && !showScore && (
            <>
              <h2 style={{ marginBottom: "2rem", color: "#1a1a2e", fontSize: "1.8rem" }}>Select a Topic</h2>
              <label style={{ display: "block", marginBottom: "1rem", color: "#1a1a2e", fontWeight: "600" }}>Choose your quiz topic:</label>
              <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="Basics">🎯 Basics of Constitution</option>
                <option value="Rights">⚖️ Fundamental Rights</option>
                <option value="Amendments">📝 Amendments</option>
              </select>

              <div className="top-buttons">
                <button onClick={() => setQuizStarted(true)}>Start Quiz ▶️</button>
                <button onClick={onBackClick}>🏠 Back to Home</button>
              </div>
            </>
          )}

          {quizStarted && !showScore && (
            <>
              <div className="question-counter">Question {currentQuestion + 1}/{questions.length}</div>
              <div style={{ marginBottom: "2rem", color: "#667eea", fontWeight: "600", fontSize: "1rem" }}>
                📚 Topic: <strong>{topic}</strong>
              </div>

              <div className="question">{questions[currentQuestion].question}</div>
              <div className="options">
                {questions[currentQuestion].options.map((opt, index) => (
                  <button key={index} onClick={() => handleAnswer(opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}

          {showScore && (
            <div className="score">
              <h2>🎉 Quiz Complete!</h2>
              <p style={{ fontSize: "1.6rem", fontWeight: "700", color: "#667eea", margin: "1.5rem 0" }}>
                You scored {score} out of {questions.length}
              </p>
              <p>
                {score === questions.length
                  ? "🔥 Perfect! You're a Constitution Master!"
                  : score >= 2
                  ? "⚡ Great job! Keep learning more!"
                  : "📘 Keep going — knowledge is power!"}
              </p>

              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={handleRestart} style={{ marginRight: "0" }}>Restart Quiz 🔁</button>
                <button onClick={onBackClick}>Back to Home 🏠</button>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
