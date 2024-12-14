import React from "react";
import Header from "@/components/header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import PopularBusinesses from "@/components/PopularBusinesses";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CategorySection />
      <PopularBusinesses />
    </div>
  );
}
