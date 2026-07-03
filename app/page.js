import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import FeaturedPlants from "@/app/components/Featuredplant";
import TopSellingPlantsPage from "@/app/components/TopSellingPlantsPage"

export default function Home() {
  return (
    <main
       
  className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/bg-plant.png')",
  }}
>

      <Navbar />

      <Hero />
<FeaturedPlants/>
//*<TopSellingPlantsPage />*//
    </main>
    
  );
}