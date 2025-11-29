import React from "react";

const LoginPage = ({ onBackClick }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "2rem 1rem"
    }}>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .login-container {
          animation: slideUp 0.6s ease;
        }

        .login-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="login-container" style={{
        textAlign: "center",
        padding: "3rem 2.5rem",
        background: "rgba(255,255,255,0.95)",
        borderRadius: "25px",
        width: "100%",
        maxWidth: "450px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        backdropFilter: "blur(10px)"
      }}>
        <div className="login-icon">🔐</div>
        <h2 style={{ 
          fontFamily: "'Segoe UI', sans-serif", 
          color: "#1a1a2e",
          fontSize: "2.2rem",
          marginBottom: "0.3rem",
          fontWeight: "700"
        }}>Welcome Back</h2>
        
        <p style={{ 
          color: "#999",
          marginBottom: "2.5rem",
          fontSize: "0.95rem",
          fontWeight: "500"
        }}>Sign in to your account to continue learning</p>

        <form>
          <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
            <label style={{ 
              display: "block",
              marginBottom: "0.6rem",
              color: "#1a1a2e",
              fontWeight: "600",
              fontSize: "0.9rem"
            }}>👤 Username</label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              style={{ 
                width: "100%", 
                padding: "0.9rem 1rem", 
                borderRadius: "10px", 
                border: "2px solid #e0e0e0",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
                fontFamily: "inherit"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>

          <div style={{ marginBottom: "2rem", textAlign: "left" }}>
            <label style={{ 
              display: "block",
              marginBottom: "0.6rem",
              color: "#1a1a2e",
              fontWeight: "600",
              fontSize: "0.9rem"
            }}>🔑 Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              style={{ 
                width: "100%", 
                padding: "0.9rem 1rem", 
                borderRadius: "10px", 
                border: "2px solid #e0e0e0",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                boxSizing: "border-box",
                fontFamily: "inherit"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>

          <button type="submit" style={{ 
            width: "100%", 
            padding: "1rem", 
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "1rem",
            fontWeight: "700",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)"
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 12px 30px rgba(102, 126, 234, 0.6)";
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
            e.target.style.transform = "translateY(0)";
          }}>
            Sign In ➜
          </button>
        </form>

        <p style={{ marginBottom: "2rem", fontStyle: "italic", fontSize: "0.85rem", color: "#999" }}>
          💡 "Don't worry if you forget your password… even the Constitution has amendments!"
        </p>

        <button onClick={onBackClick} style={{ 
          width: "100%",
          background: "transparent",
          color: "#667eea",
          border: "2px solid #667eea",
          padding: "0.9rem 1.5rem",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "#667eea";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "#667eea";
        }}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
