import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

export default function FeaturedPlants() {
  return (
    <section className="relative -mt-10 pb-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-center text-white text-4xl mt-29 font-bold mb-14">
          Our Trendy Plants
        </h2>

        {/* First Card */}

     {/* First Card */}
<div className="relative h-[320px] rounded-[110px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-visible mb-8">

  <div className="grid grid-cols-2 h-full">

    {/* Plant */}
    <div className="relative flex items-center justify-center">
      <Image
        src="/images/plant4.png"
        alt="Plant"
        width={397}
        height={395}
        className="absolute left-6 -top-24"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-center text-white pr-10">

      <h3 className="text-[22px] font-medium">
        For Small Decs Ai Plat
      </h3>

      <p className="text-[11px] text-gray-300 mt-2 leading-5 max-w-[260px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <h4 className="text-[30px] font-semibold mt-4">
        Rs. 599/-
      </h4>

      <div className="flex items-center gap-3 mt-4">

        <button className="h-[38px] px-6 rounded-md border border-white text-sm hover:bg-green-600 transition-all duration-300">
          Explore
        </button>

        <button className="h-[38px] w-[38px] flex items-center justify-center rounded-md border border-white hover:bg-green-600 transition-all duration-300">
          <FiShoppingBag size={15} />
        </button>

      </div>

    </div>

  </div>

</div>
{/* Second Card */}
<div className="relative h-[320px] rounded-[110px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

  <div className="grid grid-cols-2 h-full">

    {/* Content */}
    <div className="flex flex-col justify-center text-white pl-10">

      <h3 className="text-[22px] font-medium">
        For Fresh Decs Ai Plat
      </h3>

      <p className="text-[11px] text-gray-300 mt-2 leading-5 max-w-[260px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <h4 className="text-[30px] font-semibold mt-4">
        Rs. 579/-
      </h4>

      <div className="flex items-center gap-3 mt-4">

        <button className="h-[38px] px-6 rounded-md border border-white text-sm hover:bg-green-600 transition-all duration-300">
          Explore
        </button>

        <button className="h-[38px] w-[38px] flex items-center justify-center rounded-md border border-white hover:bg-green-600 transition-all duration-300">
          <FiShoppingBag size={15} />
        </button>

      </div>

    </div>

    {/* Plant */}
    <div className="relative flex items-center justify-center">
      <Image
        src="/images/plant3.png"
        alt="Plant"
        width={200}
        height={200}
        className="absolute right-8 bottom-0"
      />
    </div>

  </div>

</div>
</div>


    </section>
  );
}