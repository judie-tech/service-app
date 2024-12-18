import Image from "next/image"
import { cn } from "@/lib/utils"

interface CategoryGridProps {
  categories: {
    id: string
    name: string
    icon: string
    color: string
  }[]
  selectedCategory: string | null
  onSelectCategory: (category: string) => void
}

export default function CategoryGrid({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryGridProps) {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.name)}
            className={cn(
              "p-4 rounded-lg transition-all",
              selectedCategory === category.name
                ? "bg-purple-100 scale-105"
                : "bg-purple-50 hover:bg-purple-100"
            )}
          >
            <div className="flex flex-col items-center gap-2">
              <Image
                src={category.icon}
                alt={category.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

