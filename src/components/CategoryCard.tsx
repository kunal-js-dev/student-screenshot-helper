import { ExternalLink } from "lucide-react";
import type { ToolCategory } from "@/data/tools";

interface CategoryCardProps {
  category: ToolCategory;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <div
      className="animate-fade-in rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <h3
        className="mb-3 font-heading text-lg font-bold"
        style={{ color: `hsl(var(--category-${category.colorVar}))` }}
      >
        {category.icon} {category.title}
      </h3>
      <ul className="space-y-2">
        {category.tools.map((tool) => (
          <li key={tool.name}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
            >
              <span className="flex items-center gap-2">
                {tool.free && (
                  <span className="text-xs" title="Free tier available">✅</span>
                )}
                <span className="font-medium text-foreground group-hover:text-primary">
                  {tool.name}
                </span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <p className="px-3 text-xs text-muted-foreground">
              {tool.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
