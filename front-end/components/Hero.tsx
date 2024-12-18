"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex items-center gap-3 flex-col justify-center pt-14 pb-7">
      <h2 className="font-bold text-[46px] text-center">
        Find Home<span className="text-primary"> Service/Repair </span>
        <br></br>Near You
      </h2>
      <h2 className="text-xl text-gray-400">
        Explore Best Home Services & Repair near you{" "}
      </h2>
      <form onSubmit={handleSearch} className="mt-4 flex gap-4 items-center">
        <Input
          placeholder="Search"
          className="rounded-full md:w-[350px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" className="rounded-full h-[46px]">
          <Search className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

export default Hero;
