"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Mock data representing EVERYTHING on your website (Plants, categories, reviews, pages)
const siteContent = [
  { id: 1, name: "Hosta Plant", type: "Plant", link: "/?id=1#plants" },
  { id: 2, name: "Haworthia Succulent", type: "Plant", link: "/?id=2#plants" },
  { id: 3, name: "Blue Torch Cactus", type: "Plant", link: "/?id=3#plants" },
  { id: 4, name: "Monstera Deliciosa", type: "Plant", link: "/?id=4#plants" },
  { id: 5, name: "Bird of Paradise", type: "Plant", link: "/?id=5#plants" },
  { id: 6, name: "Zebra Haworthia", type: "Plant", link: "/?id=6#plants" },
  { id: 7, name: "Snake Plant", type: "Plant", link: "/?id=7#plants" },
  { id: 8, name: "ZZ Plant", type: "Plant", link: "/?id=8#plants" },
  { id: 9, name: "Fiddle Leaf Fig", type: "Plant", link: "/?id=9#plants" },
  { id: 10, name: "Pothos", type: "Plant", link: "/?id=10#plants" },
  { id: 11, name: "Spider Plant", type: "Plant", link: "/?id=11#plants" },
  { id: 12, name: "Boston Fern", type: "Plant", link: "/?id=12#plants" },
  // You can easily add non-plant content here:
  { id: 101, name: "Customer Reviews & Testimonials", type: "Page", link: "/#review" },
  { id: 102, name: "Contact Planto Support", type: "Page", link: "/#contact" },
  { id: 103, name: "Best Selling Collections", type: "Page", link: "/#plants" },
    { id: 104, name: "Home", type: "Page", link: "/#home" },

];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Filter EVERYTHING on the website based on the query
  const results = siteContent.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 px-5 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Search : <span className="text-emerald-400">"{query}"</span>
      </h1>
      <p className="text-gray-400 mb-8">
        Found {results.length} matching items across the website.
      </p>

      <div className="flex flex-col gap-4">
        {results.length > 0 ? (
          results.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={item.link}
              className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition duration-200 block"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-emerald-400">
                    {item.name}
                  </h2>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">
                    Location: {item.type}
                  </span>
                </div>
                <span className="text-emerald-400 text-sm font-medium">
                  Go to page &rarr;
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-12 bg-white/5 rounded-xl border border-white/5">
            <p className="text-gray-400">No results found for your search.</p>
            <Link href="/" className="text-emerald-400 hover:underline mt-4 inline-block text-sm">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}