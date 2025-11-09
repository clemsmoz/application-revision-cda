import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { ArrowRight, Settings, Shuffle, Clock, Target } from 'lucide-react';

export default function QuizConfig() {
  const [, params] = useRoute('/quiz/:blocId/config');
  const [, setLocation] = useLocation();
  const blocId = params?.blocId || '';
  
  const [questionCount, setQuestionCount] = useState(10);
  const [maxQuestions, setMaxQuestions] = useState(20);
  const [difficulty, setDifficulty] = useState('all');
  const [randomOrder, setRandomOrder] = useState(true);
  const [timedMode, setTimedMode] = useState(false);
  const [timeLimit, setTimeLimit] = useState(15);

  const blocInfo: Record<string, { title: string; color: string }> = {
    bloc1: { title: 'Bloc 1', color: 'blue' },
    bloc2: { title: 'Bloc 2', color: 'purple' },
    bloc3: { title: 'Bloc 3', color: 'green' },
  };

  useEffect(() => {
    // Charger le nombre total de questions disponibles
    async function loadQuestionCount() {
      try {
        const response = await fetch('/data/quiz-questions.json');
        if (response.ok) {
          const data = await response.json();
          const blocQuestions = data.questions?.filter((q: any) => q.bloc === blocId) || [];
          setMaxQuestions(blocQuestions.length);
          setQuestionCount(Math.min(10, blocQuestions.length));
        }
      } catch (err) {
        console.error('Erreur lors du chargement des questions:', err);
      }
    }
    loadQuestionCount();
  }, [blocId]);

  const handleStartQuiz = () => {
    // Stocker la configuration dans localStorage
    const config = {
      questionCount,
      difficulty,
      randomOrder,
      timedMode,
      timeLimit: timedMode ? timeLimit : null,
    };
    localStorage.setItem(`quiz-config-${blocId}`, JSON.stringify(config));
    setLocation(`/quiz/${blocId}`);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-br from-${blocInfo[blocId]?.color}-500 to-${blocInfo[blocId]?.color}-600 rounded-lg flex items-center justify-center`}>
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Configuration du Quiz</h1>
            <p className="text-gray-600">{blocInfo[blocId]?.title}</p>
          </div>
        </div>
      </div>

      {/* Configuration Card */}
      <Card>
        <CardHeader>
          <CardTitle>Personnalisez votre quiz</CardTitle>
          <CardDescription>
            Configurez les paramètres selon vos besoins de révision
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Nombre de questions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-gray-600" />
                <Label className="text-base font-semibold">Nombre de questions</Label>
              </div>
              <span className="text-2xl font-bold text-blue-600">{questionCount}</span>
            </div>
            <Slider
              value={[questionCount]}
              onValueChange={(value) => setQuestionCount(value[0])}
              min={5}
              max={maxQuestions}
              step={5}
              className="w-full"
            />
            <p className="text-sm text-gray-500">
              Maximum disponible : {maxQuestions} questions
            </p>
          </div>

          {/* Difficulté */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Difficulté</Label>
            <RadioGroup value={difficulty} onValueChange={setDifficulty}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all" className="font-normal cursor-pointer">
                  Toutes les questions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="easy" id="easy" />
                <Label htmlFor="easy" className="font-normal cursor-pointer">
                  Facile (concepts de base)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="font-normal cursor-pointer">
                  Moyen (application pratique)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hard" id="hard" />
                <Label htmlFor="hard" className="font-normal cursor-pointer">
                  Difficile (concepts avancés)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Options avancées */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Options avancées</Label>
            
            {/* Ordre aléatoire */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Shuffle className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium">Ordre aléatoire</p>
                  <p className="text-sm text-gray-500">Mélanger les questions et les réponses</p>
                </div>
              </div>
              <Switch
                checked={randomOrder}
                onCheckedChange={setRandomOrder}
              />
            </div>

            {/* Mode chronométré */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium">Mode chronométré</p>
                    <p className="text-sm text-gray-500">Limiter le temps total du quiz</p>
                  </div>
                </div>
                <Switch
                  checked={timedMode}
                  onCheckedChange={setTimedMode}
                />
              </div>
              
              {timedMode && (
                <div className="ml-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Temps limite</Label>
                    <span className="text-lg font-semibold text-blue-600">{timeLimit} min</span>
                  </div>
                  <Slider
                    value={[timeLimit]}
                    onValueChange={(value) => setTimeLimit(value[0])}
                    min={5}
                    max={60}
                    step={5}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Résumé */}
          <div className="p-4 bg-blue-50 rounded-lg space-y-2">
            <p className="font-semibold text-blue-900">Résumé de la configuration</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• {questionCount} questions{difficulty !== 'all' ? ` (difficulté: ${difficulty})` : ''}</li>
              <li>• Ordre {randomOrder ? 'aléatoire' : 'séquentiel'}</li>
              <li>• {timedMode ? `Temps limité à ${timeLimit} minutes` : 'Pas de limite de temps'}</li>
              <li>• Temps estimé : ~{Math.ceil(questionCount * 1.5)} minutes</li>
            </ul>
          </div>

          {/* Bouton de démarrage */}
          <Button onClick={handleStartQuiz} className="w-full" size="lg">
            Commencer le quiz
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
