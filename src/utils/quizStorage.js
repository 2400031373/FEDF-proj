// Utilities for saving and loading quiz history in localStorage
const HISTORY_KEY = 'lens4laws_quiz_history';

export function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY) || '[]';
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function saveAttempt(attempt) {
  try {
    const history = loadHistory();
    history.unshift(attempt);
    // keep most recent 1000
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 1000)));
  } catch (e) {
    console.error('Failed to save quiz attempt', e);
  }
}

export function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (e) {
    console.error('Failed to clear history', e);
  }
}

export function exportAttemptCSV(attempt) {
  if (!attempt) return;
  const headers = ['attemptId', 'timestamp', 'topic', 'difficulty', 'duration', 'totalQuestions', 'correct', 'scorePercent', 'questionId', 'questionText', 'selectedAnswer', 'correctAnswer', 'isCorrect'];
  const rows = attempt.answers.map(a => [
    attempt.id,
    attempt.timestamp,
    attempt.topic,
    attempt.difficulty || '',
    attempt.duration || '',
    attempt.totalQuestions || '',
    attempt.correct || '',
    attempt.scorePercent || '',
    a.questionId || '',
    (a.text || '').replace(/"/g, '""'),
    a.selectedAnswer || '',
    a.correctAnswer || '',
    a.isCorrect ? '1' : '0'
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `quiz-${attempt.id}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function exportHistoryCSV(history) {
  if (!history || history.length === 0) return;
  const headers = ['id','timestamp','topic','difficulty','duration','totalQuestions','correct','scorePercent'];
  const rows = history.map(h => [h.id, h.timestamp, h.topic, h.difficulty || '', h.duration || '', h.totalQuestions || '', h.correct || '', h.scorePercent || '']);
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `quiz-history.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
