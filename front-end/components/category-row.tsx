import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ElementType
}

interface CategoryRowProps {
  categories: Category[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export default function CategoryRow({ categories, selectedCategory, onSelectCategory }: CategoryRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="flex flex-wrap md:flex-col gap-2">
        {categories.slice(0, isExpanded ? categories.length : 6).map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.name ? "default" : "outline"}
            className="flex items-center gap-2 w-full justify-start"
            onClick={() => onSelectCategory(category.name === selectedCategory ? null : category.name)}
          >
            <category.icon className="w-5 h-5" />
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
      {categories.length > 6 && (
        <Button
          variant="ghost"
          className="mt-2 w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Show More
            </>
          )}
        </Button>
      )}
    </div>
  )
}

