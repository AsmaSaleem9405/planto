import dynamic from "next/dynamic";


const TopSelling = dynamic(() => import("@/app/components/top-selling"), {
  loading: () => <p>Loading...</p>,
});

const Reviews = dynamic(() => import("@/app/components/reviews"), {
  loading: () => <p>Loading...</p>,
});
const Navbar = dynamic(() => import("@/app/components/Navbar"), {
  loading: () => <p>Loading...</p>,
});
const Hero = dynamic(() => import("@/app/components/Hero"), {
  loading: () => <p>Loading...</p>,
});
const BestPlants = dynamic(() => import("@/app/components/BestPlants"), {
  loading: () => <p>Loading...</p>,
});


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TopSelling />
      <Reviews />
        <BestPlants />
    </main>
  );
}