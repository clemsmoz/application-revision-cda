import { Book, GitBranch, Code, Database, Shield, Rocket, FileText } from "lucide-react";

export default function FicheGlobale() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <header className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-indigo-600">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-indigo-600 p-3 rounded-xl">
              <Book className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Fiche de Révision Globale
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                Concepteur Développeur d'Applications (CDA)
              </p>
            </div>
          </div>
          <div className="flex gap-4 text-sm text-gray-500 mt-4">
            <span>📅 Novembre 2025</span>
            <span>•</span>
            <span>✍️ Manus AI</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            Introduction : Le Rôle du CDA
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Le <strong>Concepteur Développeur d'Applications (CDA)</strong> est un professionnel polyvalent qui maîtrise l'ensemble du cycle de vie d'une application, de l'analyse des besoins à la mise en production sécurisée. Il intervient à la fois sur les aspects techniques (développement front-end et back-end, gestion de bases de données) et sur les aspects méthodologiques (conception UX/UI, modélisation UML, tests, DevOps).
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Cette fiche synthétise les concepts fondamentaux des <strong>trois grands blocs de compétences</strong> du titre professionnel CDA.
          </p>
        </section>

        {/* Bloc 1 */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-green-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-xl">
              <Code className="w-7 h-7 text-green-600" />
            </div>
            Bloc 1 : Développer une application sécurisée
          </h2>

          {/* Algorithmique */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🧮</span>
              1. Fondamentaux de l'Algorithmique
            </h3>
            <p className="text-gray-700 mb-4">
              L'algorithmique est la base de tout programme informatique. Un algorithme est une suite d'instructions logiques qui résout un problème de manière optimale et compréhensible.
            </p>
            
            <div className="bg-green-50 rounded-xl p-6 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Structures de Contrôle</h4>
              <table className="w-full text-sm">
                <thead className="bg-green-100">
                  <tr>
                    <th className="text-left p-3 rounded-tl-lg">Type</th>
                    <th className="text-left p-3">Description</th>
                    <th className="text-left p-3 rounded-tr-lg">Exemples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-200">
                  <tr>
                    <td className="p-3 font-medium">Conditionnelles</td>
                    <td className="p-3">Choisir une branche d'exécution selon une condition (Vrai/Faux)</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">if/else</code>, <code className="bg-white px-2 py-1 rounded">switch/case</code></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Itératives (Boucles)</td>
                    <td className="p-3">Répéter un bloc d'instructions</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">for</code>, <code className="bg-white px-2 py-1 rounded">while</code>, <code className="bg-white px-2 py-1 rounded">do/while</code></td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Attention :</strong> Éviter les boucles infinies (condition de sortie mal calculée) et l'abus d'imbrication de <code>if/else</code>.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Fonctions et Procédures</h4>
              <table className="w-full text-sm">
                <thead className="bg-green-100">
                  <tr>
                    <th className="text-left p-3 rounded-tl-lg">Concept</th>
                    <th className="text-left p-3">Rôle</th>
                    <th className="text-left p-3 rounded-tr-lg">Passage de Paramètres</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-200">
                  <tr>
                    <td className="p-3 font-medium">Procédure (Sub)</td>
                    <td className="p-3">Exécute un traitement sans retourner de valeur</td>
                    <td className="p-3"><strong>ByVal</strong> : par copie (protège l'original)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Fonction</td>
                    <td className="p-3">Exécute un traitement et retourne une valeur typée</td>
                    <td className="p-3"><strong>ByRef</strong> : par référence (modifie l'original)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Git */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-orange-600" />
              2. Gestion de Version avec Git
            </h3>
            <p className="text-gray-700 mb-4">
              Git est le système de contrôle de version distribué standard. Il permet de suivre l'historique des modifications et de travailler en équipe sur un même projet.
            </p>

            <div className="bg-orange-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Commandes Essentielles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <code className="text-orange-600 font-semibold">git init</code>
                  <p className="text-sm text-gray-600 mt-1">Initialise un nouveau dépôt Git local</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <code className="text-orange-600 font-semibold">git add &lt;fichier&gt;</code>
                  <p className="text-sm text-gray-600 mt-1">Ajoute les modifications à la zone de staging</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <code className="text-orange-600 font-semibold">git commit -m "..."</code>
                  <p className="text-sm text-gray-600 mt-1">Enregistre les modifications dans l'historique</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <code className="text-orange-600 font-semibold">git branch &lt;nom&gt;</code>
                  <p className="text-sm text-gray-600 mt-1">Crée une nouvelle branche de développement</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <code className="text-orange-600 font-semibold">git merge &lt;branche&gt;</code>
                  <p className="text-sm text-gray-600 mt-1">Fusionne une branche (peut créer des conflits)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <code className="text-orange-600 font-semibold">git push / pull</code>
                  <p className="text-sm text-gray-600 mt-1">Publie / récupère les commits du dépôt distant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Web Front-end */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌐</span>
              3. Développement Web Front-end
            </h3>

            <div className="bg-blue-50 rounded-xl p-6 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Le Trio Fondamental</h4>
              <table className="w-full text-sm">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="text-left p-3 rounded-tl-lg">Langage</th>
                    <th className="text-left p-3">Rôle</th>
                    <th className="text-left p-3 rounded-tr-lg">Concepts Clés</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-200">
                  <tr>
                    <td className="p-3 font-medium">HTML5</td>
                    <td className="p-3">Structure et Contenu</td>
                    <td className="p-3">Balises (éléments), Attributs</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">CSS3</td>
                    <td className="p-3">Style et Présentation</td>
                    <td className="p-3">Sélecteurs, Propriétés, Cascade</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">JavaScript</td>
                    <td className="p-3">Comportement et Interactivité</td>
                    <td className="p-3">DOM, Événements, Asynchrone (Promises, async/await)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">⚛️</span>
                React JS : Développement par Composants
              </h4>
              <table className="w-full text-sm">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="text-left p-3 rounded-tl-lg">Concept</th>
                    <th className="text-left p-3">Description</th>
                    <th className="text-left p-3 rounded-tr-lg">Hook Associé</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-200">
                  <tr>
                    <td className="p-3 font-medium">Composant</td>
                    <td className="p-3">Brique de base réutilisable (fonction retournant du JSX)</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">State (État)</td>
                    <td className="p-3">Données internes qui déclenchent un re-rendu</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">useState()</code></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Props</td>
                    <td className="p-3">Données passées du parent à l'enfant (immuables)</td>
                    <td className="p-3">-</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Effets de Bord</td>
                    <td className="p-3">Opérations externes (API, DOM, timers)</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">useEffect()</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bloc 2 */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Database className="w-7 h-7 text-blue-600" />
            </div>
            Bloc 2 : Concevoir et développer une application organisée en couches
          </h2>

          {/* UX Design */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              1. UX Design et Prototypage (Figma)
            </h3>
            <p className="text-gray-700 mb-4">
              L'<strong>UX (User Experience)</strong> vise à optimiser l'expérience utilisateur, tandis que l'<strong>UI (User Interface)</strong> se concentre sur l'aspect visuel. Figma est l'outil de référence pour la conception d'interfaces.
            </p>

            <div className="bg-pink-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Concepts Clés de Figma</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <strong className="text-pink-600">Frame</strong>
                  <p className="text-sm text-gray-600 mt-1">Conteneur de design (simule l'écran)</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <strong className="text-pink-600">Composant</strong>
                  <p className="text-sm text-gray-600 mt-1">Modèle réutilisable (Master + Instances)</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <strong className="text-pink-600">Auto Layout</strong>
                  <p className="text-sm text-gray-600 mt-1">Mise en page dynamique et flexible</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-pink-200">
                  <strong className="text-pink-600">Prototypage</strong>
                  <p className="text-sm text-gray-600 mt-1">Ajout d'interactivité (Triggers, Smart Animate)</p>
                </div>
              </div>
            </div>
          </div>

          {/* UML */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">📐</span>
              2. Modélisation avec UML
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>UML (Unified Modeling Language)</strong> est un langage graphique pour spécifier, visualiser et documenter les artefacts d'un système logiciel.
            </p>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Diagrammes Comportementaux</h4>
              <table className="w-full text-sm">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="text-left p-3 rounded-tl-lg">Diagramme</th>
                    <th className="text-left p-3 rounded-tr-lg">Objectif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-200">
                  <tr>
                    <td className="p-3 font-medium">Cas d'Utilisation</td>
                    <td className="p-3">Modéliser les fonctionnalités du système (Acteurs + CU)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Machine à États</td>
                    <td className="p-3">Succession d'états et transitions d'un objet</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Activité</td>
                    <td className="p-3">Modéliser un algorithme ou un processus métier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SQL / NoSQL */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-teal-600" />
              3. Gestion des Données : SQL et NoSQL
            </h3>

            <div className="bg-teal-50 rounded-xl p-6 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Les 4 Composantes du SQL</h4>
              <table className="w-full text-sm">
                <thead className="bg-teal-100">
                  <tr>
                    <th className="text-left p-3 rounded-tl-lg">Composante</th>
                    <th className="text-left p-3">Rôle</th>
                    <th className="text-left p-3 rounded-tr-lg">Commandes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-200">
                  <tr>
                    <td className="p-3 font-medium">LDD (Définition)</td>
                    <td className="p-3">Gérer la structure de la base</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">CREATE</code>, <code className="bg-white px-2 py-1 rounded">ALTER</code>, <code className="bg-white px-2 py-1 rounded">DROP</code></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">LMD (Manipulation)</td>
                    <td className="p-3">Gérer les données (CRUD)</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">SELECT</code>, <code className="bg-white px-2 py-1 rounded">INSERT</code>, <code className="bg-white px-2 py-1 rounded">UPDATE</code>, <code className="bg-white px-2 py-1 rounded">DELETE</code></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">LCD (Contrôle Données)</td>
                    <td className="p-3">Gérer les droits d'accès</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">GRANT</code>, <code className="bg-white px-2 py-1 rounded">REVOKE</code></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">LCT (Contrôle Transactions)</td>
                    <td className="p-3">Assurer l'intégrité</td>
                    <td className="p-3"><code className="bg-white px-2 py-1 rounded">COMMIT</code>, <code className="bg-white px-2 py-1 rounded">ROLLBACK</code></td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="text-sm text-gray-700">
                  <strong>💡 Propriétés ACID :</strong> Atomicité, Cohérence, Isolation, Durabilité (garantissent la fiabilité des transactions).
                </p>
              </div>
            </div>

            <div className="bg-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Bases NoSQL</h4>
              <p className="text-sm text-gray-700 mb-3">
                Les bases NoSQL sont utilisées pour les grands volumes de données ou les schémas flexibles. Propriétés <strong>BASE</strong> : Basically Available, Soft state, Eventually consistent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-cyan-200">
                  <strong className="text-cyan-600">Document</strong>
                  <p className="text-xs text-gray-600 mt-1">Stocke en JSON/BSON (ex: MongoDB)</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-cyan-200">
                  <strong className="text-cyan-600">Clé-Valeur</strong>
                  <p className="text-xs text-gray-600 mt-1">Paires simples (ex: Redis)</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-cyan-200">
                  <strong className="text-cyan-600">Colonne</strong>
                  <p className="text-xs text-gray-600 mt-1">Optimisé Big Data (ex: Cassandra)</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-cyan-200">
                  <strong className="text-cyan-600">Graphe</strong>
                  <p className="text-xs text-gray-600 mt-1">Relations complexes (ex: Neo4j)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloc 3 */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-l-4 border-red-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="bg-red-100 p-3 rounded-xl">
              <Rocket className="w-7 h-7 text-red-600" />
            </div>
            Bloc 3 : Préparer le déploiement d'une application sécurisée
          </h2>

          {/* Tests */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🧪</span>
              1. Plans de Tests et Sécurité
            </h3>

            <div className="bg-amber-50 rounded-xl p-6 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3">Typologie des Tests</h4>
              <table className="w-full text-sm">
                <thead className="bg-amber-100">
                  <tr>
                    <th className="text-left p-3 rounded-tl-lg">Type</th>
                    <th className="text-left p-3">Objectif</th>
                    <th className="text-left p-3 rounded-tr-lg">Outils</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-200">
                  <tr>
                    <td className="p-3 font-medium">Unitaire</td>
                    <td className="p-3">Valider une unité de code isolée</td>
                    <td className="p-3">Jest (GIVEN-WHEN-THEN)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Intégration</td>
                    <td className="p-3">Vérifier l'interaction entre composants</td>
                    <td className="p-3">Postman (API)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">E2E (Bout en Bout)</td>
                    <td className="p-3">Simuler le parcours utilisateur complet</td>
                    <td className="p-3">Cypress</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">TDD</td>
                    <td className="p-3">Développement piloté par les tests</td>
                    <td className="p-3">Cycle RED-GREEN-REFACTOR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Sécurité : Prévention des Failles (OWASP Top 10)
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border-l-4 border-red-400">
                  <strong className="text-red-600">Injection SQL</strong>
                  <p className="text-sm text-gray-700 mt-1">Utiliser des ORM ou requêtes préparées. NE JAMAIS faire confiance aux données clientes.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-red-400">
                  <strong className="text-red-600">Contrôle d'Accès Défaillant</strong>
                  <p className="text-sm text-gray-700 mt-1">Vérifier les droits (rôles, propriété) à chaque accès.</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-red-400">
                  <strong className="text-red-600">Défaillances Cryptographiques</strong>
                  <p className="text-sm text-gray-700 mt-1">Hacher les mots de passe avec bcrypt ou Argon2id (algorithmes lents + sel).</p>
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-red-400">
                  <strong className="text-red-600">Failles XSS</strong>
                  <p className="text-sm text-gray-700 mt-1">Nettoyer les données entrantes/sortantes (ex: DOMPurify).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Docker */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🐳</span>
              2. DevOps et Conteneurisation avec Docker
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>DevOps</strong> est une culture visant à automatiser et intégrer les processus entre développement et exploitation. <strong>Docker</strong> permet d'isoler une application dans un conteneur portable.
            </p>

            <div className="bg-sky-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Commandes Clés</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-sky-200">
                  <code className="text-sky-600 font-semibold">docker pull &lt;image&gt;</code>
                  <p className="text-xs text-gray-600 mt-1">Télécharge une image</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-sky-200">
                  <code className="text-sky-600 font-semibold">docker run &lt;image&gt;</code>
                  <p className="text-xs text-gray-600 mt-1">Crée et démarre un conteneur</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-sky-200">
                  <code className="text-sky-600 font-semibold">docker ps</code>
                  <p className="text-xs text-gray-600 mt-1">Liste les conteneurs actifs</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-sky-200">
                  <code className="text-sky-600 font-semibold">docker exec -it &lt;id&gt;</code>
                  <p className="text-xs text-gray-600 mt-1">Exécute une commande dans un conteneur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lexique */}
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Lexique : Acronymes et Définitions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">ACID</h3>
              <p className="text-sm text-gray-700"><strong>A</strong>tomicité, <strong>C</strong>ohérence, <strong>I</strong>solation, <strong>D</strong>urabilité. Propriétés garantissant la fiabilité des transactions dans les SGBDR.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">API</h3>
              <p className="text-sm text-gray-700"><strong>Application Programming Interface</strong>. Interface permettant à des applications de communiquer entre elles.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">BASE</h3>
              <p className="text-sm text-gray-700"><strong>B</strong>asically <strong>A</strong>vailable, <strong>S</strong>oft state, <strong>E</strong>ventually consistent. Propriétés des bases NoSQL privilégiant la disponibilité.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">BDD</h3>
              <p className="text-sm text-gray-700"><strong>Behavior-Driven Development</strong>. Développement piloté par le comportement, spécifié en langage métier (Gherkin).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">CDA</h3>
              <p className="text-sm text-gray-700"><strong>Concepteur Développeur d'Applications</strong>. Titre professionnel de niveau 6 (Bac+3/4).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">CSS</h3>
              <p className="text-sm text-gray-700"><strong>Cascading Style Sheets</strong>. Langage de style pour définir l'apparence des pages web.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">CRUD</h3>
              <p className="text-sm text-gray-700"><strong>Create, Read, Update, Delete</strong>. Quatre opérations de base sur les données.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">DevOps</h3>
              <p className="text-sm text-gray-700">Contraction de <strong>Dev</strong>elopment et <strong>Op</strong>eration<strong>s</strong>. Culture visant à automatiser le cycle de vie logiciel.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">DOM</h3>
              <p className="text-sm text-gray-700"><strong>Document Object Model</strong>. Représentation objet de la page HTML, manipulable par JavaScript.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">E2E</h3>
              <p className="text-sm text-gray-700"><strong>End-to-End</strong>. Tests de bout en bout simulant le parcours utilisateur complet.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">HTML</h3>
              <p className="text-sm text-gray-700"><strong>HyperText Markup Language</strong>. Langage de balisage pour structurer le contenu web.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">JSX</h3>
              <p className="text-sm text-gray-700"><strong>JavaScript XML</strong>. Extension syntaxique permettant d'écrire du HTML dans le code JavaScript (React).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">LCD</h3>
              <p className="text-sm text-gray-700"><strong>Langage de Contrôle des Données</strong>. Composante SQL pour gérer les droits d'accès (GRANT, REVOKE).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">LCT</h3>
              <p className="text-sm text-gray-700"><strong>Langage de Contrôle des Transactions</strong>. Composante SQL pour gérer les transactions (COMMIT, ROLLBACK).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">LDD</h3>
              <p className="text-sm text-gray-700"><strong>Langage de Définition des Données</strong>. Composante SQL pour créer/modifier la structure (CREATE, ALTER, DROP).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">LMD</h3>
              <p className="text-sm text-gray-700"><strong>Langage de Manipulation des Données</strong>. Composante SQL pour gérer les données (SELECT, INSERT, UPDATE, DELETE).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">NoSQL</h3>
              <p className="text-sm text-gray-700"><strong>Not Only SQL</strong>. Bases de données non relationnelles (Document, Clé-Valeur, Colonne, Graphe).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">ORM</h3>
              <p className="text-sm text-gray-700"><strong>Object-Relational Mapping</strong>. Technique pour manipuler une base de données via des objets.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">OWASP</h3>
              <p className="text-sm text-gray-700"><strong>Open Web Application Security Project</strong>. Organisation publiant les 10 vulnérabilités web les plus critiques.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">POO</h3>
              <p className="text-sm text-gray-700"><strong>Programmation Orientée Objet</strong>. Paradigme basé sur les classes et les objets.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">RWD</h3>
              <p className="text-sm text-gray-700"><strong>Responsive Web Design</strong>. Approche de conception adaptant l'affichage à tous les appareils.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">SGBDR</h3>
              <p className="text-sm text-gray-700"><strong>Système de Gestion de Bases de Données Relationnelles</strong>. Logiciel gérant des bases SQL (ex: MySQL, PostgreSQL).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">SPA</h3>
              <p className="text-sm text-gray-700"><strong>Single Page Application</strong>. Application web chargée une seule fois, mise à jour dynamiquement.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">SQL</h3>
              <p className="text-sm text-gray-700"><strong>Structured Query Language</strong>. Langage standard pour interagir avec les bases de données relationnelles.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">TDD</h3>
              <p className="text-sm text-gray-700"><strong>Test-Driven Development</strong>. Développement piloté par les tests (cycle RED-GREEN-REFACTOR).</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">UI</h3>
              <p className="text-sm text-gray-700"><strong>User Interface</strong>. Interface utilisateur, aspect visuel de l'application.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">UML</h3>
              <p className="text-sm text-gray-700"><strong>Unified Modeling Language</strong>. Langage de modélisation graphique pour spécifier et documenter les systèmes.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">UX</h3>
              <p className="text-sm text-gray-700"><strong>User Experience</strong>. Expérience utilisateur, qualité de l'interaction avec l'application.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-purple-600 mb-2">XSS</h3>
              <p className="text-sm text-gray-700"><strong>Cross-Site Scripting</strong>. Faille de sécurité permettant l'injection de scripts malveillants.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-6">
          <p>© 2025 - Fiche de Révision CDA - Créé par Manus AI</p>
        </footer>
      </div>
    </div>
  );
}
