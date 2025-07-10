import { Search, Filter, SortAsc, Layers } from "lucide-react";

interface FilterControlsProps {
  filters: {
    search: string;
    category: string;
    sortBy: "title" | "difficulty" | "category";
  };
  onFiltersChange: (filters: {
    search: string;
    category: string;
    sortBy: "title" | "difficulty" | "category";
  }) => void;
  categories: string[];
  resultCount: number;
}

export function FilterControls({
  filters,
  onFiltersChange,
  categories,
  resultCount,
}: FilterControlsProps) {
  return (
    <div className="space-y-6 mb-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search blocks, tags, or code..."
              value={filters.search}
              onChange={(e) =>
                onFiltersChange({ ...filters, search: e.target.value })
              }
              className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent w-full sm:w-80"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={filters.category}
              onChange={(e) =>
                onFiltersChange({ ...filters, category: e.target.value })
              }
              className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <SortAsc className="h-4 w-4 text-muted-foreground" />
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFiltersChange({ ...filters, sortBy: e.target.value as "title" | "difficulty" | "category" })
              }
              className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            >
              <option value="title">Sort by Title</option>
              <option value="difficulty">Sort by Difficulty</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {resultCount} block{resultCount !== 1 ? "s" : ""} found
        </p>
        <div className="flex items-center space-x-2">
          <Layers className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Production ready
          </span>
        </div>
      </div>
    </div>
  );
}
