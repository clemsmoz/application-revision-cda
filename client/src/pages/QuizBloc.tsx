import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Trophy,
  RotateCcw,
  Home
} from 'lucide-react';

interface Question {
  id: string;
  module: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function QuizBloc() {
  const [, params] = useRoute('/quiz/:blocId');
  const [, setLocation] = useLocation();
  const blocId = params?.blocId || '';
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());
  const [endTime, setEndTime] = useState<number | null>(null);

  const blocInfo: Record<string, { title: string; color: string }> = {
    bloc1: { title: 'Bloc 1', color: 'blue' },
    bloc2: { title: 'Bloc 2', color: 'purple' },
    bloc3: { title: 'Bloc 3', color: 'green' },
  };

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);
        const response = await fetch('/data/quiz-questions.json');
        if (response.ok) {
          const data = await response.json();
          const blocQuestions = data[blocId] || [];
          setQuestions(blocQuestions);
          setAnsweredQuestions(new Array(blocQuestions.length).fill(false));
        }
      } catch (err) {
        console.error('Erreur lors du chargement des questions:', err);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, [blocId]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleValidate = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      setEndTime(Date.now());
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setQuizCompleted(false);
    setEndTime(null);
  };

  const getTimeTaken = () => {
    if (!endTime) return '0:00';
    const seconds = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getScorePercentage = () => {
    return questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto" />
          <p className="text-gray-600">Chargement du quiz...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="w-4 h-4" />
        <AlertDescription>
          Aucune question disponible pour ce quiz
        </AlertDescription>
      </Alert>
    );
  }

  if (quizCompleted) {
    const percentage = getScorePercentage();
    const passed = percentage >= 70;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
              passed ? 'bg-green-100' : 'bg-orange-100'
            }`}>
              <Trophy className={`w-10 h-10 ${passed ? 'text-green-600' : 'text-orange-600'}`} />
            </div>
            <CardTitle className="text-3xl">Quiz Terminé !</CardTitle>
            <CardDescription className="text-lg mt-2">
              {passed ? 'Félicitations ! Vous avez réussi le quiz.' : 'Continuez vos révisions pour améliorer votre score.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Score */}
            <div className="text-center space-y-2">
              <div className="text-6xl font-bold text-gray-900">
                {percentage}%
              </div>
              <p className="text-gray-600">
                {score} / {questions.length} réponses correctes
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Temps</p>
                <p className="text-xl font-semibold text-gray-900">{getTimeTaken()}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Trophy className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Résultat</p>
                <p className="text-xl font-semibold text-gray-900">
                  {passed ? 'Réussi' : 'À améliorer'}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button onClick={handleRestart} variant="outline" className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Recommencer
              </Button>
              <Button onClick={() => setLocation('/')} className="flex-1">
                <Home className="w-4 h-4 mr-2" />
                Retour au Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Quiz {blocInfo[blocId]?.title}
            </h1>
            <p className="text-gray-600">
              Question {currentQuestionIndex + 1} sur {questions.length}
            </p>
          </div>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Score: {score}/{answeredQuestions.filter(a => a).length}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showExplanation && isCorrect;
              const showIncorrect = showExplanation && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? 'border-green-500 bg-green-50'
                      : showIncorrect
                      ? 'border-red-500 bg-red-50'
                      : isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex-1">{option}</span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <Alert className={selectedAnswer === currentQuestion.correctAnswer ? 'border-green-500' : 'border-orange-500'}>
              <AlertDescription>
                <p className="font-semibold mb-2">
                  {selectedAnswer === currentQuestion.correctAnswer ? '✅ Bonne réponse !' : '❌ Réponse incorrecte'}
                </p>
                <p>{currentQuestion.explanation}</p>
              </AlertDescription>
            </Alert>
          )}

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            {!showExplanation ? (
              <Button
                onClick={handleValidate}
                disabled={selectedAnswer === null}
                className="flex-1"
              >
                Valider
              </Button>
            ) : (
              <Button onClick={handleNext} className="flex-1">
                {currentQuestionIndex < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
