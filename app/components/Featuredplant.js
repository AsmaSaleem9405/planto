import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";

export default function FeaturedPlants() {
  return (
    <section className="relative -mt-10 pb-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <h2 className="text-center text-white text-4xl font-bold mb-14">
          Our Trendy Plants
        </h2>

        {/* First Card */}

        <div className="relative overflow-hidden rounded-[45px] border border-white/10 backdrop-blur-xl bg-white/10 mb-14">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Plant */}

            <div className="flex justify-center lg:justify-start">

              <Image
                src="/images/plant2.png"
                alt="Peace Lily"
                width={360}
                height={360}
                className="-mt-12 lg:-ml-8"
              />

            </div>

            {/* Content */}

            <div className="text-white px-8 py-12">

              <p className="text-green-300 uppercase tracking-[4px] mb-2">
                Indoor Collection
              </p>

              <h3 className="text-4xl font-bold">
                Peace Lily
              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                Peace Lily is admired for its elegant white flowers and lush
                green foliage. It thrives in indirect sunlight and adds a calm,
                refreshing atmosphere to any room.

              </p>

              <div className="flex items-center gap-6 mt-8">

                <h4 className="text-3xl font-bold">
                  Rs. 599/-
                </h4>

                <button className="border border-white rounded-full px-6 py-3 hover:bg-green-600 transition">
                  Explore
                </button>

                <button className="border border-white rounded-full p-3 hover:bg-green-600 transition">
                  <FiShoppingBag />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Second Card */}

        <div className="relative overflow-hidden rounded-[45px] border border-white/10 backdrop-blur-xl bg-white/10">

          <div className="grid lg:grid-cols-2 items-center">

            {/* Content */}

            <div className="text-white px-8 py-12 order-2 lg:order-1">

              <p className="text-green-300 uppercase tracking-[4px] mb-2">
                Air Purifying Plant
              </p>

              <h3 className="text-4xl font-bold">
                Snake Plant
              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                One of the easiest indoor plants to maintain. Snake Plant
                naturally enhances interior décor while requiring minimal
                watering and care.

              </p>

              <div className="flex items-center gap-6 mt-8">

                <h4 className="text-3xl font-bold">
                  Rs. 579/-
                </h4>

                <button className="border border-white rounded-full px-6 py-3 hover:bg-green-600 transition">
                  Explore
                </button>

                <button className="border border-white rounded-full p-3 hover:bg-green-600 transition">
                  <FiShoppingBag />
                </button>

              </div>

            </div>

            {/* Plant */}

            <div className="flex justify-center lg:justify-end order-1 lg:order-2">

              <Image
                src="/images/plant3.png"
                alt="Snake Plant"
                width={320}
                height={320}
                className="-mb-5 lg:mr-6"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}