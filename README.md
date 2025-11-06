# Application de Révision CDA

Application web interactive pour la révision du titre professionnel Concepteur Développeur d'Applications (CDA).

## 🚀 Fonctionnalités

- 📚 Fiches de révision organisées par blocs de compétences
- 🎯 Quiz interactifs pour tester vos connaissances
- 📖 Lexique des termes techniques
- 📊 Dashboard de progression
- 🌓 Mode sombre/clair
- 📱 Interface responsive

## 🛠️ Technologies

- **Frontend:** React, TypeScript, Vite
- **UI:** Tailwind CSS, Radix UI
- **Backend:** Node.js, Express
- **Déploiement:** Vercel

## 📦 Installation locale

```bash
# Installer les dépendances
pnpm install

# Lancer en mode développement
pnpm dev

# Construire pour la production
pnpm build

# Lancer en production
pnpm start
```

## 🌐 Déploiement sur Vercel

### Méthode rapide (recommandée)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez le dépôt `application-revision-cda`
5. Vercel détectera automatiquement la configuration
6. Cliquez sur "Deploy"

**C'est tout !** Votre application sera déployée en quelques secondes avec une URL HTTPS automatique.

### Configuration automatique

Le fichier `vercel.json` est déjà configuré pour :
- Utiliser `pnpm` comme gestionnaire de paquets
- Construire l'application avec `pnpm build`
- Servir les fichiers depuis `dist/public`
- Gérer le routing côté client (SPA)

### Variables d'environnement (optionnel)

Si vous souhaitez personnaliser l'application, vous pouvez ajouter ces variables d'environnement dans les paramètres Vercel :

- `VITE_APP_TITLE` : Titre de l'application
- `VITE_APP_LOGO` : URL du logo

## 📝 Structure du projet

```
application-revision-cda/
├── client/              # Code frontend
│   ├── public/         # Fichiers statiques et données JSON
│   └── src/            # Code source React
│       ├── components/ # Composants réutilisables
│       ├── pages/      # Pages de l'application
│       └── contexts/   # Contextes React
├── server/             # Code backend
│   └── index.ts        # Serveur Express
├── shared/             # Code partagé
└── dist/               # Build de production
```

## 🎓 Blocs de compétences

### Bloc 1 : Développer la partie front-end
- HTML/CSS
- JavaScript
- React
- Accessibilité

### Bloc 2 : Développer la partie back-end
- Node.js
- SQL
- UML
- UX Design

### Bloc 3 : Piloter et déployer
- Docker
- Déploiement
- Plans de tests

## 📄 Licence

MIT

## 👤 Auteur

Développé dans le cadre de la formation CDA
