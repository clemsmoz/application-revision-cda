import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Rocket, ArrowRight, Brain, BarChart } from 'lucide-react';
import { useQuizHistory } from '@/hooks/useQuizHistory';

export default function Quiz() {
  const { history, getGlobalStats } = useQuizHistory();
  const globalStats = getGlobalStats();
  const blocs = [
    {
      id: 'bloc1',
      title: 'Bloc 1',
      subtitle: 'Développer une application sécurisée',
      description: 'Testez vos connaissances sur l\'algorithmique, Git, HTML/CSS, JavaScript, React, la sécurité et les tests',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      questions: 10,
    },
    {
      id: 'bloc2',
      title: 'Bloc 2',
      subtitle: 'Concevoir et développer une application organisée en couches',
      description: 'Évaluez vos compétences en SQL, UML, NoSQL et conception de bases de données',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      questions: 5,
    },
    {
      id: 'bloc3',
      title: 'Bloc 3',
      subtitle: 'Préparer le déploiement d\'une application sécurisée',
      description: 'Vérifiez vos acquis sur Docker, les tests et le déploiement',
      icon: Rocket,
      color: 'from-green-500 to-green-600',
      questions: 5,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Quiz de Révision</h1>
            <p className="text-gray-600">Testez vos connaissances sur les différents modules du programme CDA</p>
          </div>
        </div>
      </div>

      {/* Navigation vers statistiques */}
      {history.length > 0 && (
        <div className="flex justify-end">
          <Link href="/statistics">
            <Button variant="outline" className="gap-2">
              <BarChart className="w-4 h-4" />
              Voir mes statistiques
            </Button>
          </Link>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">107</p>
              <p className="text-sm text-gray-500 mt-1">Questions disponibles</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">33</p>
              <p className="text-sm text-gray-500 mt-1">Modules disponibles</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">{history.length}</p>
              <p className="text-sm text-gray-500 mt-1">Quiz complétés</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quiz Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisissez un quiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocs.map((bloc) => {
            const Icon = bloc.icon;
            return (
              <Card key={bloc.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${bloc.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{bloc.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-700">
                    {bloc.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600">{bloc.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{bloc.questions} questions</span>
                    <span className="text-gray-500">~{Math.ceil(bloc.questions * 1.5)} min</span>
                  </div>
                  <Link href={`/quiz/${bloc.id}`}>
                    <Button className="w-full">
                      Commencer le quiz
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
