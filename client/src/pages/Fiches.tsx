import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Rocket, ArrowRight } from 'lucide-react';

export default function Fiches() {
  const blocs = [
    {
      id: 'bloc1',
      title: 'Bloc 1',
      subtitle: 'Développer une application sécurisée',
      description: 'Algorithmique, Git, HTML/CSS, JavaScript, React, Tests unitaires, Sécurité, PHP/Symfony, Node.js/Express, React Native, Méthodes agiles',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      modules: 12,
    },
    {
      id: 'bloc2',
      title: 'Bloc 2',
      subtitle: 'Concevoir et développer une application organisée en couches',
      description: 'UX Design, Figma, SQL, UML, NoSQL, Conception de bases de données, Droit de l\'internet',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      modules: 7,
    },
    {
      id: 'bloc3',
      title: 'Bloc 3',
      subtitle: 'Préparer le déploiement d\'une application sécurisée',
      description: 'Docker, Plans de tests, Déploiement',
      icon: Rocket,
      color: 'from-green-500 to-green-600',
      modules: 3,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Fiches de Révision</h1>
        <p className="text-gray-600">
          Accédez aux fiches détaillées des 22 modules du programme CDA, organisées par bloc de compétences.
        </p>
      </div>

      {/* Blocs Grid */}
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
                <Link href={`/fiches/${bloc.id}`}>
                  <Button className="w-full">
                    Voir les fiches
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
