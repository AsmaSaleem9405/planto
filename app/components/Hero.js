import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

export default function Hero() {
  return (
 <section>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div className="text-white">

            <p className="uppercase tracking-[6px] text-green-300 mb-4">
              Indoor Collection
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Breathe Life <br />
              Into Your Home
            </h1>

            <p className="mt-6 text-gray-200 text-lg max-w-xl leading-8">
              Transform your living space with premium indoor plants that
              combine natural beauty with effortless care. Our carefully
              selected collection brings freshness, elegance, and a calming
              atmosphere to every room.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full font-semibold">
                Explore Plants
              </button>

              <button className="flex items-center gap-3 border border-white px-6 py-4 rounded-full hover:bg-white hover:text-black transition">
                <FaPlay />
                Watch Video
              </button>

            </div>

            {/* Review Card */}

            <div className="mt-12 bg-white/10 backdrop-blur-md rounded-3xl p-5 max-w-md border border-white/20">

              <div className="flex items-center gap-4">

                <Image
                  src="/images/customer.png"
                  alt="Customer"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>

                  <div className="flex text-yellow-400 mb-1">

                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />

                  </div>

                  <p className="text-sm text-gray-200">
                    "Beautiful healthy plants with fast delivery. My living
                    room feels fresh and elegant."
                  </p>

                  <h4 className="mt-2 font-semibold">
                    Sarah Williams
                  </h4>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative flex justify-center">

            
            {/* Floating Card */}

            <div className="absolute bottom-12 right-0 lg:right-4 bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-72 shadow-xl">

              <Image
                src="/images/plant1.png"
                alt="Monstera Deliciosa"
                width={140}
                height={140}
                className="mx-auto"
              />

              <h3 className="text-white text-xl font-bold mt-4">
                Monstera Deliciosa
              </h3>

              <p className="text-gray-200 text-sm mt-2 leading-6">
                An iconic tropical plant with stunning split leaves that
                instantly adds elegance and freshness to modern interiors.
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-green-300 text-2xl font-bold">
                  $39
                </span>

                <button className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-full text-white">
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}