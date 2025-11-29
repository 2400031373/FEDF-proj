import React, { useEffect, useState } from 'react';
import { loadHistory, clearHistory, exportAttemptCSV, exportHistoryCSV, saveAttempt } from '../utils/quizStorage';

const QuizHistory = ({ onClose }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const handleClear = () => {
    if (!confirm('Clear all quiz history? This cannot be undone.')) return;
    clearHistory();
    setHistory([]);
  };

  const handleDelete = (id) => {
    const next = history.filter(h => h.id !== id);
    localStorage.setItem('lens4laws_quiz_history', JSON.stringify(next));
    setHistory(next);
  };

  const handleExportAll = () => {
    exportHistoryCSV(history);
  };

  return (
    <div style={{ marginTop: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h3 style={{ margin: 0 }}>Quiz History</h3>
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button onClick={handleExportAll}>Export All CSV</button>
          <button onClick={handleClear} style={{ background: '#ff6b6b' }}>Clear All</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>

      {history.length === 0 && <p style={{ color: '#666' }}>No quiz attempts yet.</p>}

      <div style={{ display: 'grid', gap: '0.8rem' }}>
        {history.map(attempt => (
          <div key={attempt.id} style={{ padding: '0.9rem', borderRadius: 10, background: 'rgba(255,255,255,0.95)', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{attempt.topic || 'All Topics'}</strong>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>{new Date(attempt.timestamp).toLocaleString()}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800, color: '#2b6cb0' }}>{attempt.scorePercent ?? Math.round((attempt.correct / attempt.totalQuestions) * 100) + '%'}</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>{attempt.correct}/{attempt.totalQuestions} • {attempt.duration ? `${attempt.duration}s` : ''}</div>
              </div>
            </div>

            <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.6rem', justifyContent: 'flex-end' }}>
              <button onClick={() => exportAttemptCSV(attempt)}>Export CSV</button>
              <button onClick={() => handleDelete(attempt.id)} style={{ background: '#ff6b6b' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizHistory;
