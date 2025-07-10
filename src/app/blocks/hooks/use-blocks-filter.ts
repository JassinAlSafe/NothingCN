import { useState, useMemo } from "react";
import { Block } from "../data/blocks";

interface FilterState {
    search: string;
    category: string;
    sortBy: "title" | "difficulty" | "category";
}

export function useBlocksFilter(blocks: Block[]) {
    const [filters, setFilters] = useState<FilterState>({
        search: "",
        category: "All",
        sortBy: "title",
    });

    const categories = useMemo(
        () => ["All", ...new Set(blocks.map((block) => block.category))],
        [blocks]
    );

    const allTags = useMemo(
        () => [...new Set(blocks.flatMap((block) => block.tags))],
        [blocks]
    );

    const filteredAndSortedBlocks = useMemo(() => {
        const result = blocks.filter((block) => {
            const matchesSearch =
                block.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                block.description
                    .toLowerCase()
                    .includes(filters.search.toLowerCase()) ||
                block.tags.some((tag) =>
                    tag.toLowerCase().includes(filters.search.toLowerCase())
                ) ||
                block.code.toLowerCase().includes(filters.search.toLowerCase());

            const matchesCategory =
                filters.category === "All" || block.category === filters.category;

            return matchesSearch && matchesCategory;
        });

        // Sort blocks
        result.sort((a, b) => {
            switch (filters.sortBy) {
                case "title":
                    return a.title.localeCompare(b.title);
                case "difficulty":
                    const difficultyOrder = { beginner: 1, intermediate: 2, advanced: 3 };
                    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
                case "category":
                    return a.category.localeCompare(b.category);
                default:
                    return 0;
            }
        });

        return result;
    }, [blocks, filters]);

    return {
        filters,
        setFilters,
        categories,
        allTags,
        filteredBlocks: filteredAndSortedBlocks,
    };
} 