"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query) {
      const searchResults = categories.flatMap((category) =>
        category.services
          .filter((service) =>
            service.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((service) => ({
            ...service,
            category: category.name,
          }))
      );
      setResults(searchResults);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={result.providers[0].image}
                alt={result.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
                <p className="text-gray-600 mb-4">{result.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Category: {result.category}
                </p>
                <Link href={`/business/${result.providers[0].id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
}
