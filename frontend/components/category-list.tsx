import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Category {
  id: number
  name: string
  icon: string
}

interface CategoryListProps {
  categories: Category[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export default function CategoryList({ categories, selectedCategory, onSelectCategory }: CategoryListProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onSelectCategory(category.name === selectedCategory ? null : category.name)}
            variant="outline"
            className={cn(
              "flex items-center gap-2",
              category.name === selectedCategory && "bg-purple-100 text-purple-600"
            )}
          >
            <span className="text-xl">{category.icon}</span>
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

