import { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, AlertCircle, BookOpen, Lightbulb, Code as CodeIcon } from 'lucide-react';

interface ModuleData {
  id: string;
  bloc: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  sections: Array<{
    id: string;
    title: string;
    content: Array<any>;
  }>;
  keyPoints: string[];
  resources: Array<{
    type: string;
    title: string;
    url: string;
  }>;
}

export default function FicheBloc() {
  const [, params] = useRoute('/fiches/:blocId');
  const blocId = params?.blocId || '';
  
  const [modules, setModules] = useState<ModuleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeModule, setActiveModule] = useState<string>('');

  const blocInfo: Record<string, { title: string; color: string }> = {
    bloc1: { title: 'Bloc 1 : Développer une application sécurisée', color: 'blue' },
    bloc2: { title: 'Bloc 2 : Concevoir et développer une application organisée en couches', color: 'purple' },
    bloc3: { title: 'Bloc 3 : Préparer le déploiement d\'une application sécurisée', color: 'green' },
  };

  useEffect(() => {
    async function loadModules() {
      try {
        setLoading(true);
        // Liste des modules par bloc
        const moduleFiles: Record<string, string[]> = {
          bloc1: [
            'bloc1-algorithmique',
            'bloc1-git',
            'bloc1-html-css',
            'bloc1-javascript-poo',
            'bloc1-javascript-async',
            'bloc1-react',
            'bloc1-securite',
            'bloc1-tests-unitaires',
            'bloc1-php-symfony',
            'bloc1-nodejs-express',
            'bloc1-react-native',
            'bloc1-methodes-agiles',
          ],
          bloc2: [
            'bloc2-ux-design',
            'bloc2-figma',
            'bloc2-sql',
            'bloc2-uml',
            'bloc2-nosql',
            'bloc2-conception-bdd',
            'bloc2-droit-internet',
          ],
          bloc3: [
            'bloc3-docker',
            'bloc3-plans-tests',
            'bloc3-deploiement',
          ],
        };

        const files = moduleFiles[blocId] || [];
        const loadedModules: ModuleData[] = [];

        for (const file of files) {
          try {
            const response = await fetch(`/data/${file}.json`);
            if (response.ok) {
              const data = await response.json();
              loadedModules.push(data);
            }
          } catch (err) {
            console.error(`Erreur lors du chargement de ${file}:`, err);
          }
        }

        setModules(loadedModules);
        if (loadedModules.length > 0) {
          setActiveModule(loadedModules[0].id);
        }
      } catch (err) {
        setError('Erreur lors du chargement des modules');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadModules();
  }, [blocId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto" />
          <p className="text-gray-600">Chargement des modules...</p>
        </div>
      </div>
    );
  }

  if (error || modules.length === 0) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="w-4 h-4" />
        <AlertDescription>
          {error || 'Aucun module trouvé pour ce bloc'}
        </AlertDescription>
      </Alert>
    );
  }

  const currentModule = modules.find(m => m.id === activeModule);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">
          {blocInfo[blocId]?.title || 'Fiches de Révision'}
        </h1>
        <p className="text-gray-600">{modules.length} modules disponibles</p>
      </div>

      {/* Tabs pour les modules */}
      <Tabs value={activeModule} onValueChange={setActiveModule} className="space-y-6">
        <TabsList className="flex-wrap h-auto gap-2 bg-transparent">
          {modules.map((module) => (
            <TabsTrigger
              key={module.id}
              value={module.id}
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <span className="mr-2">{module.icon}</span>
              {module.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {modules.map((module) => (
          <TabsContent key={module.id} value={module.id} className="space-y-6">
            {/* Module Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl`} style={{ backgroundColor: module.color }}>
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">{module.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{module.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Sections */}
            {module.sections && module.sections.length > 0 ? (
              module.sections.map((section) => (
                <Card key={section.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.content.map((item, idx) => (
                      <div key={idx}>
                        {item.type === 'paragraph' && (
                          <p className="text-gray-700 leading-relaxed">{item.text}</p>
                        )}
                        {item.type === 'definition' && (
                          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                            <p className="font-semibold text-blue-900">{item.term}</p>
                            <p className="text-blue-800 mt-1">{item.definition}</p>
                          </div>
                        )}
                        {item.type === 'table' && (
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-gray-100">
                                  {item.headers.map((header: string, i: number) => (
                                    <th key={i} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                                      {header}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {item.rows.map((row: string[], i: number) => (
                                  <tr key={i} className="hover:bg-gray-50">
                                    {row.map((cell, j) => (
                                      <td key={j} className="border border-gray-300 px-4 py-2">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {item.type === 'code' && (
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm">
                              <code>{item.code}</code>
                            </pre>
                          </div>
                        )}
                        {item.type === 'alert' && (
                          <Alert variant={item.level === 'danger' ? 'destructive' : 'default'}>
                            <AlertCircle className="w-4 h-4" />
                            <AlertDescription>{item.text}</AlertDescription>
                          </Alert>
                        )}
                        {item.type === 'list' && (
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {item.items.map((listItem: string, i: number) => (
                              <li key={i}>{listItem}</li>
                            ))}
                          </ul>
                        )}
                        {item.type === 'subtitle' && (
                          <h4 className="text-lg font-semibold text-gray-900 mt-4">{item.text}</h4>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-8 text-center text-gray-500">
                  <p>Contenu en cours de préparation...</p>
                </CardContent>
              </Card>
            )}

            {/* Points Clés */}
            {module.keyPoints && module.keyPoints.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    Points Clés à Retenir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Badge variant="secondary" className="mt-0.5">
                          {idx + 1}
                        </Badge>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Ressources */}
            {module.resources && module.resources.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CodeIcon className="w-5 h-5" />
                    Ressources Complémentaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.resources.map((resource, idx) => (
                      <li key={idx}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center gap-2"
                        >
                          <span>{resource.title}</span>
                          <span className="text-xs text-gray-500">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
