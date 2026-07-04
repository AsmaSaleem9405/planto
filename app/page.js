import dynamic from "next/dynamic";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

const TopSelling = dynamic(() => import("@/app/components/top-selling"), {
  loading: () => <p>Loading...</p>,
});

const Reviews = dynamic(() => import("@/app/components/reviews"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TopSelling />
      <Reviews />
    </main>
  );
}