import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#123f7b]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/pang logo.png"
              alt="Pangasinan Logo"
              width={65}
              height={65}
              className="object-contain"
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="flex items-center gap-2 md:gap-5">

            <Link
              href="/"
              className="px-5 py-3 rounded-full font-semibold hover:text-[#456abd] transition"
            >
              Home
            </Link>

            <Link
              href="/heritage"
              className="px-5 py-3 rounded-full font-semibold hover:text-[#456abd] transition"
            >
              Heritage Sites
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 rounded-full bg-[#456abd] text-white font-semibold"
            >
              About
            </Link>

          </nav>
        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="relative h-[430px] md:h-[500px] overflow-hidden">

        {/* PANGASINAN IMAGE */}
        <Image
          src="/images/pangasinan.jpg"
          alt="Pangasinan"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center">

          <div className="text-white max-w-xl">

            <p className="text-sm md:text-base font-semibold mb-4 uppercase tracking-wide">
              Home &gt; About
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>

            <p className="text-base md:text-lg leading-relaxed">
              The Pangasinan Heritage website is developed to
              showcase and preserve the province&apos;s historical,
              cultural, and natural treasures. It provides useful
              information about Pangasinan&apos;s heritage sites and
              encourages visitors to discover the beauty and
              history of the province.
            </p>

          </div>

        </div>
      </section>


      {/* ================= ABOUT PANGASINAN ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-14">

        <p className="text-sm font-bold uppercase text-[#456abd] mb-3">
          About Pangasinan
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#123f7b] mb-6">
              A Province Rich in Heritage
            </h2>

            <p className="text-[#45679f] leading-relaxed mb-6 text-base md:text-lg">
              Pangasinan is a province known for its rich
              cultural heritage, historical landmarks, beautiful
              natural attractions, and meaningful traditions.
            </p>

            <p className="text-[#45679f] leading-relaxed text-base md:text-lg">
              Our goal is to provide an accessible platform where
              visitors can discover and learn more about the
              heritage, culture, and natural beauty of Pangasinan.
            </p>

          </div>


          {/* CHURCH IMAGE */}
          <div className="relative h-[280px] md:h-[330px] rounded-2xl overflow-hidden shadow-md">

            <Image
              src="/images/manaoag.jpg"
              alt="Pangasinan Heritage"
              fill
              className="object-cover"
            />

          </div>

        </div>
      </section>


      {/* ================= FEATURED DESTINATIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">

        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#123f7b] mb-10">
          FEATURED DESTINATIONS
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          {/* CARD 1 */}
          <div className="bg-[#f0f3f8] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">

            <div className="relative h-44">

              <Image
                src="/images/alaminos.jpg"
                alt="Alaminos Hundred Islands"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="font-bold text-lg text-[#123f7b]">
                Alaminos Hundred Islands
              </h3>

              <p className="text-sm text-[#45679f] mt-2 leading-relaxed">
                A beautiful natural attraction known for its
                islands and scenic views.
              </p>

              <Link
                href="/heritage/alaminos-hundred-islands"
                className="inline-block mt-4 text-sm font-bold text-[#456abd] hover:underline"
              >
                Explore →
              </Link>

            </div>
          </div>


          {/* CARD 2 */}
          <div className="bg-[#f0f3f8] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">

            <div className="relative h-44">

              <Image
                src="/images/balungao.jpg"
                alt="Balungao Hot Spring"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="font-bold text-lg text-[#123f7b]">
                Balungao&apos;s Hot Spring
              </h3>

              <p className="text-sm text-[#45679f] mt-2 leading-relaxed">
                A relaxing natural destination surrounded by
                beautiful landscapes.
              </p>

              <Link
                href="/heritage/balungao-hot-spring"
                className="inline-block mt-4 text-sm font-bold text-[#456abd] hover:underline"
              >
                Explore →
              </Link>

            </div>
          </div>


          {/* CARD 3 */}
          <div className="bg-[#f0f3f8] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">

            <div className="relative h-44">

              <Image
                src="/images/bolinao.jpg"
                alt="Bolinao Lighthouse"
                fill
                className="object-cover"
              />

            </div>

            <div className="p-5">

              <h3 className="font-bold text-lg text-[#123f7b]">
                Bolinao Lighthouse
              </h3>

              <p className="text-sm text-[#45679f] mt-2 leading-relaxed">
                A historic landmark overlooking the beautiful
                coast of Bolinao.
              </p>

              <Link
                href="/heritage/bolinao-lighthouse"
                className="inline-block mt-4 text-sm font-bold text-[#456abd] hover:underline"
              >
                Explore →
              </Link>

            </div>
          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-[#06265c] text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between gap-10">


            {/* LOGO + DESCRIPTION */}
            <div>

              <Image
                src="/images/pang logo.png"
                alt="Pangasinan Logo"
                width={80}
                height={80}
                className="object-contain mb-3"
              />

              <p className="text-white/70 max-w-sm leading-relaxed">
                Discover the history, culture, and natural beauty
                of Pangasinan.
              </p>

            </div>


            {/* QUICK LINKS */}
            <div className="flex flex-col gap-2">

              <h4 className="font-bold mb-2">
                Quick Links
              </h4>

              <Link
                href="/"
                className="text-white/70 hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/heritage"
                className="text-white/70 hover:text-white transition"
              >
                Heritage Sites
              </Link>

              <Link
                href="/about"
                className="text-white/70 hover:text-white transition"
              >
                About
              </Link>

            </div>


            {/* SOCIAL MEDIA */}
            <div>

              <h4 className="font-bold mb-4">
                Follow Us
              </h4>

              <div className="flex gap-3">

                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  f
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  ◎
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  ▶
                </div>

              </div>

            </div>

          </div>


          {/* COPYRIGHT */}
          <div className="border-t border-white/20 mt-8 pt-5 text-sm text-white/60 text-center">

            © 2026 Pangasinan Heritage. All rights reserved.

          </div>

        </div>

      </footer>

    </main>
  );
}