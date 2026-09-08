import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const sites = [
  {
    name: "Alaminos Hundred Islands",
    slug: "alaminos-hundred-islands",
    category: "Natural Wonders",
    location: "Alaminos City, Pangasinan",
    image: `${basePath}/images/alaminos.jpg`,
    description:
      "A famous natural attraction known for its beautiful islands, clear waters, and scenic views. It is one of Pangasinan's most popular tourist destinations.",
    tags: ["Island Hopping", "Nature"],
  },
  {
    name: "Bolinao Lighthouse",
    slug: "bolinao-lighthouse",
    category: "Historical Landmarks",
    location: "Bolinao, Pangasinan",
    image: `${basePath}/images/bolinao.jpg`,
    description:
      "A historic lighthouse overlooking the coast of Bolinao. It offers visitors a beautiful view of the sea and surrounding landscape.",
    tags: ["Heritage", "Sightseeing"],
  },
  {
    name: "Balungao's Hot Spring",
    slug: "balungao-hot-spring",
    category: "Natural Wonders",
    location: "Balungao, Pangasinan",
    image: `${basePath}/images/balungao.jpg`,
    description:
      "A relaxing natural destination surrounded by scenic landscapes and refreshing waters, perfect for visitors looking for a peaceful getaway.",
    tags: ["Nature", "Relaxation"],
  },
];

export function generateStaticParams() {
  return sites.map((site) => ({
    slug: site.slug,
  }));
}

export default async function HeritageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const site = sites.find((item) => item.slug === slug);

  if (!site) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#edf2fa] text-[#173f7a]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src={`${basePath}/images/pang-logo.png`}
              alt="Pangasinan Logo"
              width={65}
              height={65}
              className="object-contain"
              priority
            />
          </Link>

          {/* NAVIGATION */}
          <nav className="flex items-center gap-3 md:gap-6">
            <Link
              href="/"
              className="px-5 py-3 rounded-full font-semibold hover:text-[#456abd] transition"
            >
              Home
            </Link>

            <Link
              href="/heritage"
              className="px-6 py-3 rounded-full bg-[#456abd] text-white font-semibold"
            >
              Heritage Sites
            </Link>

            <Link
              href="/about"
              className="px-5 py-3 rounded-full font-semibold hover:text-[#456abd] transition"
            >
              About
            </Link>
          </nav>

        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        {/* BACK BUTTON */}
        <Link
          href="/heritage"
          className="inline-flex items-center gap-2 text-[#456abd] font-semibold hover:underline mb-8"
        >
          ← Back to Heritage Sites
        </Link>

        {/* DETAILS CARD */}
        <article className="bg-white rounded-3xl overflow-hidden shadow-lg">

          {/* HERITAGE IMAGE */}
          <div className="relative w-full h-[320px] md:h-[500px]">
            <Image
              src={site.image}
              alt={site.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* INFORMATION */}
          <div className="p-7 md:p-12">

            {/* CATEGORY */}
            <span className="inline-block px-4 py-2 rounded-full bg-[#e9effb] text-[#456abd] text-sm font-bold uppercase tracking-wide">
              {site.category}
            </span>

            {/* TITLE */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#123f7b] mt-5">
              {site.name}
            </h1>

            {/* LOCATION */}
            <div className="flex items-center gap-2 mt-4 text-[#456abd]">
              <span className="text-xl">📍</span>
              <span className="text-lg">{site.location}</span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#45679f] text-lg leading-relaxed mt-7 max-w-4xl">
              {site.description}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-7">
              {site.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-[#f0f3f8] text-[#45679f]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </article>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#06265c] text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            {/* LOGO AND DESCRIPTION */}
            <div>
              <Image
                src={`${basePath}/images/pang-logo.png`}
                alt="Pangasinan Logo"
                width={70}
                height={70}
                className="object-contain mb-3"
              />

              <p className="text-white/70 max-w-sm">
                Discover the history, culture, and natural beauty of Pangasinan.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold mb-2">
                Quick Links
              </h4>

              <Link
                href="/"
                className="text-white/70 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/heritage"
                className="text-white/70 hover:text-white"
              >
                Heritage Sites
              </Link>

              <Link
                href="/about"
                className="text-white/70 hover:text-white"
              >
                About
              </Link>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/20 mt-8 pt-5 text-sm text-white/60">
            © 2026 Pangasinan Heritage. All rights reserved.
          </div>

        </div>
      </footer>

    </main>
  );
}