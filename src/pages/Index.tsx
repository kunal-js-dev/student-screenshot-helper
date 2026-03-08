import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Search, ExternalLink, Sparkles, GraduationCap, LogIn, LogOut, User, Loader2 } from "lucide-react";
import aiToolsBgVideo from "@/assets/ai-tools-bg.mp4";
import { categories } from "@/data/tools";
import { CategoryCard } from "@/components/CategoryCard";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { user, loading, signOut } = useAuth();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      tools: cat.tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(search.toLowerCase()) ||
          tool.description.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) =>
      activeCategory ? cat.id === activeCategory : cat.tools.length > 0
    );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="font-heading text-xl font-bold text-foreground">
              AI Tools<span className="text-primary"> Hub</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Student Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="gap-1">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut} className="gap-1">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative container mx-auto px-4 py-10 text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10 rounded-2xl"
          src={aiToolsBgVideo}
        />
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          AI Productivity Tools
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Curated collection of the best AI tools to supercharge your studies.
          Find free tools marked with a ✅ badge.
        </p>

        {/* Search */}
        <div className="mx-auto mt-6 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-input bg-card py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        {/* Category pills */}
        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setActiveCategory(activeCategory === cat.id ? null : cat.id)
              }
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.icon} {cat.title.replace("AI ", "")}
            </button>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No tools found. Try a different search term.
          </p>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>
          Made with ❤️ for students • {categories.reduce((a, c) => a + c.tools.length, 0)}+ AI tools curated
        </p>
      </footer>
    </div>
  );
};

export default Index;
