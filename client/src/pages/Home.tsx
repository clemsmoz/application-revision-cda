import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { APP_TITLE } from "@/const";
import { Link } from "wouter";

/**
 * All content in this page are only for example, replace with your own feature implementation
 * When building pages, remember your instructions in Frontend Best Practices, Design Guide and Common Pitfalls
 */
export default function Home() {
  // If theme is switchable in App.tsx, we can implement theme toggling like this:
  // const { theme, toggleTheme } = useTheme();

  // Use APP_LOGO (as image src) and APP_TITLE if needed

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12 text-center">
        <div className="bg-indigo-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Book className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {APP_TITLE}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Fiches de révision professionnelles pour le titre CDA
        </p>
        <Link href="/fiche-globale">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
            📝 Voir la Fiche de Révision Globale
          </Button>
        </Link>
      </div>
    </div>
  );
}
