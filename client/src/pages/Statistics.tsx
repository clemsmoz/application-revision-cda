import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useQuizHistory } from "@/hooks/useQuizHistory";
import { BarChart, TrendingUp, Trophy, AlertTriangle, Calendar, Target } from "lucide-react";
import { Link } from "wouter";

export default function Statistics() {
  const {
    history,
    getGlobalStats,
    getWeakPoints,
    getMasteredModules,
    getProgressionOverTime,
    clearHistory,
  } = useQuizHistory();

  const globalStats = getGlobalStats();
  const weakPoints = getWeakPoints(70);
  const masteredModules = getMasteredModules(80);
  const progression = getProgressionOverTime();

  // Fonction pour obtenir la couleur selon le score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-orange-600";
    return "text-red-600";
  };

  // Fonction pour obtenir le badge selon le score
  const getScoreBadge = (score: number) => {
    if (score >= 90) return { label: "Excellent", variant: "default" as const };
    if (score >= 80) return { label: "Très bien", variant: "default" as const };
    if (score >= 70) return { label: "Bien", variant: "secondary" as const };
    if (score >= 60) return { label: "Passable", variant: "secondary" as const };
    return { label: "À améliorer", variant: "destructive" as const };
  };

  if (history.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">📊 Statistiques</h1>
          <p className="text-muted-foreground">
            Suivez votre progression et identifiez vos points forts et faibles
          </p>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Vous n'avez pas encore passé de quiz. Commencez par répondre à quelques questions pour voir vos statistiques !
          </AlertDescription>
        </Alert>

        <div className="mt-6">
          <Link href="/quiz">
            <Button>
              Commencer un quiz
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2">📊 Statistiques</h1>
          <p className="text-muted-foreground">
            Suivez votre progression et identifiez vos points forts et faibles
          </p>
        </div>
        <Button variant="outline" onClick={() => {
          if (confirm("Êtes-vous sûr de vouloir effacer tout l'historique ?")) {
            clearHistory();
          }
        }}>
          Effacer l'historique
        </Button>
      </div>

      {/* Statistiques globales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de quiz</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{globalStats.totalAttempts}</div>
            <p className="text-xs text-muted-foreground">
              {globalStats.totalQuestions} questions au total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Score moyen</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getScoreColor(globalStats.averageScore)}`}>
              {globalStats.averageScore.toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">
              {globalStats.correctAnswers} / {globalStats.totalQuestions} bonnes réponses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meilleur score</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getScoreColor(globalStats.bestScore)}`}>
              {globalStats.bestScore.toFixed(1)}%
            </div>
            <Badge {...getScoreBadge(globalStats.bestScore)} className="mt-1">
              {getScoreBadge(globalStats.bestScore).label}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Modules maîtrisés</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {masteredModules.length}
            </div>
            <p className="text-xs text-muted-foreground">
              Score ≥ 80%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Progression par bloc */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progression par bloc</CardTitle>
          <CardDescription>
            Votre score moyen pour chaque bloc de compétences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {globalStats.blocs.map((bloc) => {
            if (bloc.attempts === 0) return null;
            
            const badge = getScoreBadge(bloc.averageScore);
            
            return (
              <div key={bloc.bloc}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      {bloc.bloc === 'bloc1' && 'Bloc 1 : Front-end'}
                      {bloc.bloc === 'bloc2' && 'Bloc 2 : Back-end'}
                      {bloc.bloc === 'bloc3' && 'Bloc 3 : Déploiement'}
                    </span>
                    <Badge {...badge}>
                      {badge.label}
                    </Badge>
                  </div>
                  <span className={`font-bold ${getScoreColor(bloc.averageScore)}`}>
                    {bloc.averageScore.toFixed(1)}%
                  </span>
                </div>
                <Progress value={bloc.averageScore} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {bloc.attempts} quiz • {bloc.modules.length} modules testés
                </p>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Points faibles */}
      {weakPoints.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Points à améliorer
            </CardTitle>
            <CardDescription>
              Modules avec un score moyen inférieur à 70%
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weakPoints.map((module) => (
                <div key={module.moduleId} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{module.moduleId}</div>
                    <div className="text-sm text-muted-foreground">
                      {module.attempts} tentative{module.attempts > 1 ? 's' : ''}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className={`font-bold ${getScoreColor(module.averageScore)}`}>
                        {module.averageScore.toFixed(1)}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Meilleur : {module.bestScore.toFixed(1)}%
                      </div>
                    </div>
                    <Link href={`/quiz/${module.moduleId}`}>
                      <Button size="sm" variant="outline">
                        Réviser
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Modules maîtrisés */}
      {masteredModules.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-green-600" />
              Modules maîtrisés
            </CardTitle>
            <CardDescription>
              Modules avec un score moyen supérieur ou égal à 80%
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {masteredModules.map((module) => (
                <div key={module.moduleId} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{module.moduleId}</div>
                    <div className="text-sm text-muted-foreground">
                      {module.attempts} tentative{module.attempts > 1 ? 's' : ''}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">
                      {module.averageScore.toFixed(1)}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Meilleur : {module.bestScore.toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Progression dans le temps */}
      {progression.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Progression dans le temps
            </CardTitle>
            <CardDescription>
              Évolution de votre score moyen par jour
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {progression.slice(-10).map((day, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{day.date}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {day.attempts} quiz
                      </span>
                      <span className={`font-bold ${getScoreColor(day.averageScore)}`}>
                        {day.averageScore.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <Progress value={day.averageScore} className="h-1.5" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
