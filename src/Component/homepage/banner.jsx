'use client'
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full-400 bg-white  mt-2"> 
     <section className="w-full  px-6 md:px-16 py-12 md:py-0 md:min-h-145 flex flex-col justify-between overflow-hidden">

      {/* Top: two-column layout */}
      <div className="flex flex-col md:flex-row items-center justify-between flex-1 gap-8 pt-10">

        {/* LEFT: Text content */}
        <div className="md:w-[45%] z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A1D4E] leading-tight mb-6">
            Find Your <br />
            <span className="text-[#1A56DB]">Next Read</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-sm leading-relaxed">
            Explore thousands of books across different genres and find the perfect book for you.
          </p>

          <Link href="/allBooks">
            <button className="flex items-center gap-3 bg-[#1A56DB] hover:bg-[#1447C0] text-white font-semibold text-lg px-8 py-4 rounded-xl transition duration-300 mb-3">
              <span>📖</span>
           Browse Now 
              <span>→</span>
            </button>
          </Link>
          <p className="text-gray-400 text-sm pl-1">Go to All Books and discover more</p>
        </div>

        {/* RIGHT: Illustration with floating category badges */}
        <div className="md:w-[55%] relative flex items-center justify-center min-h-90">

          {/* Background circle */}
          <div className="absolute w-85 h-85 bg-[#D6E8FF] rounded-full opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Book stack illustration using CSS */}
          <div className="relative z-10 flex items-end justify-center gap-1 mt-8">
            {/* Open book base */}
            <div className="relative">
              {/* Book spines */}
              <div className="flex items-end gap-1 mb-1">
                <div className="w-10 h-28 bg-[#1A3A6E] rounded-sm" />
                <div className="w-10 h-36 bg-[#1A56DB] rounded-sm" />
                <div className="w-10 h-32 bg-[#2A9D8F] rounded-sm" />
                <div className="w-10 h-24 bg-[#457B9D] rounded-sm" />
                <div className="w-10 h-30 bg-[#1D3557] rounded-sm" />
              </div>
              {/* Open book */}
              <div className="flex">
                <div className="w-28 h-6 bg-white border border-gray-200 rounded-bl-lg" style={{transform:'perspective(200px) rotateX(20deg)', transformOrigin:'bottom'}}/>
                <div className="w-28 h-6 bg-gray-50 border border-gray-200 rounded-br-lg" style={{transform:'perspective(200px) rotateX(20deg)', transformOrigin:'bottom'}}/>
              </div>
            </div>

            {/* Magnifying glass */}
            <div className="absolute -right-4 top-6 text-5xl rotate-[-20deg] opacity-90">🔍</div>
            {/* Plant */}
            <div className="absolute -right-10 bottom-0 text-4xl">🪴</div>
          </div>

          {/* Floating Category Badges */}
          <div className="absolute top-4 left-[28%] bg-white rounded-2xl shadow-md px-4 py-3 flex flex-col items-center gap-1 text-xs font-medium text-gray-700">
            <span className="text-xl">📘</span>
            Fiction
          </div>

          <div className="absolute top-0 left-[52%] bg-white rounded-2xl shadow-md px-4 py-3 flex flex-col items-center gap-1 text-xs font-medium text-gray-700">
            <span className="text-xl text-green-600">🚀</span>
            <span className="text-center leading-tight">Science<br/>Fiction</span>
          </div>

          <div className="absolute top-6 right-4 bg-white rounded-2xl shadow-md px-4 py-3 flex flex-col items-center gap-1 text-xs font-medium text-gray-700">
            <span className="text-xl">🔎</span>
            Mystery
          </div>

          <div className="absolute top-[40%] left-4 bg-white rounded-2xl shadow-md px-4 py-3 flex flex-col items-center gap-1 text-xs font-medium text-gray-700">
            <span className="text-xl">🩷</span>
            Romance
          </div>

          <div className="absolute top-[35%] right-2 bg-white rounded-2xl shadow-md px-4 py-3 flex flex-col items-center gap-1 text-xs font-medium text-gray-700">
            <span className="text-xl text-green-600">⊞</span>
            More
          </div>

          {/* Decorative dots */}
          <div className="absolute top-12 left-[45%] w-2 h-2 rounded-full bg-[#1A56DB] opacity-40" />
          <div className="absolute bottom-16 left-[30%] w-2 h-2 rounded-full bg-[#1A56DB] opacity-30" />
          <div className="absolute top-[55%] right-[20%] w-2 h-2 rounded-full bg-green-400 opacity-40" />
          <div className="absolute top-[20%] right-[25%] text-green-400 text-lg font-bold opacity-50">+</div>
          <div className="absolute bottom-12 right-[30%] text-green-400 text-lg font-bold opacity-50">+</div>
          <div className="absolute top-8 left-[38%] text-blue-400 text-lg font-bold opacity-40">+</div>
        </div>
      </div>

      {/* BOTTOM: 3 feature strips */}
      <div className="w-full border-t border-blue-100 mt-6 pt-6 pb-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">

        <div className="flex items-center gap-4 md:border-r border-blue-100 md:pr-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">📚</div>
          <div>
            <p className="font-semibold text-[#0A1D4E] text-sm">Wide Collection</p>
            <p className="text-gray-400 text-xs">Thousands of books across all genres</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:border-r border-blue-100 md:px-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">👥</div>
          <div>
            <p className="font-semibold text-[#0A1D4E] text-sm">Easy Borrowing</p>
            <p className="text-gray-400 text-xs">Simple, fast and convenient</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:pl-8">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">🛡️</div>
          <div>
            <p className="font-semibold text-[#0A1D4E] text-sm">Trusted Community</p>
            <p className="text-gray-400 text-xs">Safe platform for book lovers like you</p>
          </div>
        </div>

      </div>

    </section>
    </div>
  );
};

export default Banner;