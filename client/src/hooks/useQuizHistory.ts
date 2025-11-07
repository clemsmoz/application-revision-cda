import { useState, useEffect } from 'react';

// Types
export interface QuizAttempt {
  id: string;
  moduleId: string;
  bloc: string;
  date: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: QuizAnswer[];
  duration: number; // en secondes
}

export interface QuizAnswer {
  questionId: number;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
}

export interface ModuleStats {
  moduleId: string;
  attempts: number;
  bestScore: number;
  averageScore: number;
  lastAttemptDate: string;
  totalQuestions: number;
}

export interface BlocStats {
  bloc: string;
  attempts: number;
  averageScore: number;
  modules: ModuleStats[];
}

const STORAGE_KEY = 'quiz_history';

export function useQuizHistory() {
  const [history, setHistory] = useState<QuizAttempt[]>([]);

  // Charger l'historique depuis localStorage au montage
  useEffect(() => {
    loadHistory();
  }, []);

  // Charger l'historique
  const loadHistory = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setHistory(parsed);
      }
    } catch (error) {
      console.error('Error loading quiz history:', error);
    }
  };

  // Sauvegarder l'historique
  const saveHistory = (newHistory: QuizAttempt[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      setHistory(newHistory);
    } catch (error) {
      console.error('Error saving quiz history:', error);
    }
  };

  // Ajouter une tentative
  const addAttempt = (attempt: Omit<QuizAttempt, 'id' | 'date'>) => {
    const newAttempt: QuizAttempt = {
      ...attempt,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      date: new Date().toISOString(),
    };

    const newHistory = [newAttempt, ...history];
    saveHistory(newHistory);
    return newAttempt;
  };

  // Obtenir les statistiques par module
  const getModuleStats = (moduleId: string): ModuleStats | null => {
    const moduleAttempts = history.filter(a => a.moduleId === moduleId);
    
    if (moduleAttempts.length === 0) {
      return null;
    }

    const scores = moduleAttempts.map(a => a.percentage);
    const bestScore = Math.max(...scores);
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

    return {
      moduleId,
      attempts: moduleAttempts.length,
      bestScore,
      averageScore,
      lastAttemptDate: moduleAttempts[0].date,
      totalQuestions: moduleAttempts[0].totalQuestions,
    };
  };

  // Obtenir les statistiques par bloc
  const getBlocStats = (bloc: string): BlocStats => {
    const blocAttempts = history.filter(a => a.bloc === bloc);
    
    // Grouper par module
    const moduleGroups = new Map<string, QuizAttempt[]>();
    blocAttempts.forEach(attempt => {
      if (!moduleGroups.has(attempt.moduleId)) {
        moduleGroups.set(attempt.moduleId, []);
      }
      moduleGroups.get(attempt.moduleId)!.push(attempt);
    });

    // Calculer les stats par module
    const moduleStats: ModuleStats[] = [];
    moduleGroups.forEach((attempts, moduleId) => {
      const scores = attempts.map(a => a.percentage);
      moduleStats.push({
        moduleId,
        attempts: attempts.length,
        bestScore: Math.max(...scores),
        averageScore: scores.reduce((a, b) => a + b, 0) / scores.length,
        lastAttemptDate: attempts[0].date,
        totalQuestions: attempts[0].totalQuestions,
      });
    });

    // Calculer la moyenne globale du bloc
    const allScores = blocAttempts.map(a => a.percentage);
    const averageScore = allScores.length > 0
      ? allScores.reduce((a, b) => a + b, 0) / allScores.length
      : 0;

    return {
      bloc,
      attempts: blocAttempts.length,
      averageScore,
      modules: moduleStats,
    };
  };

  // Obtenir les statistiques globales
  const getGlobalStats = () => {
    if (history.length === 0) {
      return {
        totalAttempts: 0,
        averageScore: 0,
        bestScore: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        blocs: [] as BlocStats[],
      };
    }

    const scores = history.map(a => a.percentage);
    const totalCorrect = history.reduce((sum, a) => sum + a.score, 0);
    const totalQuestions = history.reduce((sum, a) => sum + a.totalQuestions, 0);

    // Stats par bloc
    const blocs = ['bloc1', 'bloc2', 'bloc3'].map(bloc => getBlocStats(bloc));

    return {
      totalAttempts: history.length,
      averageScore: scores.reduce((a, b) => a + b, 0) / scores.length,
      bestScore: Math.max(...scores),
      totalQuestions,
      correctAnswers: totalCorrect,
      blocs,
    };
  };

  // Identifier les points faibles (modules avec score < 70%)
  const getWeakPoints = (threshold: number = 70): ModuleStats[] => {
    const moduleIds = new Set(history.map(a => a.moduleId));
    const weakModules: ModuleStats[] = [];

    moduleIds.forEach(moduleId => {
      const stats = getModuleStats(moduleId);
      if (stats && stats.averageScore < threshold) {
        weakModules.push(stats);
      }
    });

    // Trier par score moyen croissant
    return weakModules.sort((a, b) => a.averageScore - b.averageScore);
  };

  // Obtenir les modules maîtrisés (score >= 80%)
  const getMasteredModules = (threshold: number = 80): ModuleStats[] => {
    const moduleIds = new Set(history.map(a => a.moduleId));
    const masteredModules: ModuleStats[] = [];

    moduleIds.forEach(moduleId => {
      const stats = getModuleStats(moduleId);
      if (stats && stats.averageScore >= threshold) {
        masteredModules.push(stats);
      }
    });

    // Trier par score moyen décroissant
    return masteredModules.sort((a, b) => b.averageScore - a.averageScore);
  };

  // Obtenir la progression dans le temps
  const getProgressionOverTime = () => {
    if (history.length === 0) return [];

    // Grouper par date (jour)
    const byDate = new Map<string, QuizAttempt[]>();
    
    [...history].reverse().forEach(attempt => {
      const date = new Date(attempt.date).toLocaleDateString('fr-FR');
      if (!byDate.has(date)) {
        byDate.set(date, []);
      }
      byDate.get(date)!.push(attempt);
    });

    // Calculer la moyenne par jour
    const progression: { date: string; averageScore: number; attempts: number }[] = [];
    byDate.forEach((attempts, date) => {
      const scores = attempts.map(a => a.percentage);
      const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
      progression.push({ date, averageScore, attempts: attempts.length });
    });

    return progression;
  };

  // Effacer l'historique
  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  };

  // Supprimer une tentative
  const deleteAttempt = (attemptId: string) => {
    const newHistory = history.filter(a => a.id !== attemptId);
    saveHistory(newHistory);
  };

  return {
    history,
    addAttempt,
    getModuleStats,
    getBlocStats,
    getGlobalStats,
    getWeakPoints,
    getMasteredModules,
    getProgressionOverTime,
    clearHistory,
    deleteAttempt,
  };
}
