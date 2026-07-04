import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import TopSelling from "@/app/components/top-selling";
import Reviews from "@/app/components/reviews";
export default function Home() {
  return (
    <main
       
 
>

      <Navbar />

      <Hero />

<TopSelling />
<Reviews />
    </main>
    
  );
}