import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

export default function FeaturedPlants() {
  return (
    <section className="relative -mt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-center text-white text-3xl lg:text-4xl mt-20 lg:mt-29 font-bold mb-14">
          Our Trendy Plants
        </h2>

        {/* First Card */}
        <div className="relative rounded-[50px] lg:rounded-[110px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden lg:overflow-visible mb-8">

          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[320px]">

            {/* Plant */}
            <div className="relative flex justify-center items-center h-[250px] lg:h-auto">
              <Image
                src="/images/plant4.png"
                alt="Plant"
                width={400}
                height={400}
                className="w-[220px] sm:w-[260px] lg:w-auto lg:absolute lg:left-6 lg:-top-24"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center mt-4 text-white px-6 pb-8 lg:pr-10 lg:px-0">

              <h3 className="text-[22px] font-medium">
                Peace Lily
              </h3>

              <p className="text-[11px] text-gray-300 mt-2 leading-5 max-w-[260px]">
                The Peace Lily is a beautiful indoor plant known for its glossy green leaves and elegant white flowers. It adds a fresh, modern look to homes and offices while helping improve indoor air quality. It's an excellent choice for beginners because it requires minimal care.
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
        <div className="relative rounded-[50px] lg:rounded-[110px] border mt-12 lg:mt-18 border-white/10 bg-white/5 backdrop-blur-md overflow-hidden lg:overflow-visible">

          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:h-[320px]">

            {/* Plant (Mobile Top) */}
            <div className="relative flex justify-center items-center h-[250px] lg:hidden">
              <Image
                src="/images/plant6.png"
                alt="Plant"
                width={600}
                height={460}
                className="w-[240px]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center mt-4 text-white px-6 pb-8 lg:pl-40 lg:px-0">

              <h3 className="text-[22px] font-medium">
                Zebra Haworthia
              </h3>

              <p className="text-[11px] text-gray-300 mt-2 leading-5 max-w-[260px]">
                Zebra Haworthia is a compact succulent with striking dark green leaves covered in white zebra-like stripes. Its unique appearance and drought tolerance make it a perfect desk, shelf, or windowsill plant for beginners and busy plant lovers.
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

            {/* Desktop Plant */}
            <div className="relative hidden lg:flex items-center justify-center">
              <Image
                src="/images/plant6.png"
                alt="Plant"
                width={600}
                height={460}
                className="absolute left-6 -top-36"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}