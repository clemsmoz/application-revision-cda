import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, TrendingUp, Target, Code, Database, Rocket } from 'lucide-react';

export default function Dashboard() {
  const blocs = [
    {
      id: 'bloc1',
      title: 'Bloc 1',
      subtitle: 'Développer une application sécurisée',
      description: 'Algorithmique, Git, HTML/CSS, JavaScript, React, Tests, Sécurité',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      modules: 20,
    },
    {
      id: 'bloc2',
      title: 'Bloc 2',
      subtitle: 'Concevoir et développer une application organisée en couches',
      description: 'UX/UI, Figma, SQL, UML, NoSQL, Conception BDD, Droit',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      modules: 10,
    },
    {
      id: 'bloc3',
      title: 'Bloc 3',
      subtitle: 'Préparer le déploiement d\'une application sécurisée',
      description: 'Docker, Tests, Déploiement, DevOps',
      icon: Rocket,
      color: 'from-green-500 to-green-600',
      modules: 3,
    },
  ];

  const stats = [
    {
      label: 'Modules',
      value: '33',
      icon: BookOpen,
      color: 'text-blue-600',
    },
    {
      label: 'Questions Quiz',
      value: '107',
      icon: Brain,
      color: 'text-purple-600',
    },
    {
      label: 'Progression',
      value: '0%',
      icon: TrendingUp,
      color: 'text-green-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
          <Target className="w-4 h-4" />
          <span>Préparez votre titre CDA</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Application de Révision CDA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Révisez efficacement les 33 modules du programme Concepteur Développeur d'Applications
          avec des fiches détaillées et des quiz interactifs.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Blocs Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Les 3 Blocs de Compétences</h2>
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
                    <span className="text-gray-500">{bloc.modules} modules</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/fiches/${bloc.id}`}>
                      <Button variant="default" className="flex-1">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Fiches
                      </Button>
                    </Link>
                    <Link href={`/quiz/${bloc.id}`}>
                      <Button variant="outline" className="flex-1">
                        <Brain className="w-4 h-4 mr-2" />
                        Quiz
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions Rapides</CardTitle>
          <CardDescription>Accédez rapidement aux fonctionnalités principales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/fiches">
              <Button variant="outline" className="w-full justify-start h-auto py-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 mt-0.5 text-blue-600" />
                  <div className="text-left">
                    <div className="font-medium">Toutes les Fiches</div>
                    <div className="text-sm text-gray-500">Accédez à toutes les fiches de révision</div>
                  </div>
                </div>
              </Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline" className="w-full justify-start h-auto py-4">
                <div className="flex items-start gap-3">
                  <Brain className="w-5 h-5 mt-0.5 text-purple-600" />
                  <div className="text-left">
                    <div className="font-medium">Tous les Quiz</div>
                    <div className="text-sm text-gray-500">Testez vos connaissances</div>
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
