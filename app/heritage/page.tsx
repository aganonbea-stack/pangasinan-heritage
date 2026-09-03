"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/atoms/Button";
import {
  MapPin,
  TreePine,
  Landmark,
  Mountain,
  Search,
  ArrowRight,
} from "lucide-react";

const sites = [
  {
    name: "Alaminos Hundred Islands",
    slug: "alaminos-hundred-islands",
    category: "Natural Wonders",
    location: "Alaminos City, Pangasinan",
    image: "/images/alaminos.jpg",
    description:
      "A famous natural attraction known for its beautiful islands, clear waters, and scenic views. It is one of Pangasinan's most popular tourist destinations.",
    tags: ["Island Hopping", "Nature"],
  },
  {
    name: "Bolinao Lighthouse",
    slug: "bolinao-lighthouse",
    category: "Historical Landmarks",
    location: "Bolinao, Pangasinan",
    image: "/images/bolinao.jpg",
    description:
      "A historic lighthouse overlooking the coast of Bolinao. It offers visitors a beautiful view of the sea and surrounding landscape.",
    tags: ["Heritage", "Sightseeing"],
  },
  {
    name: "Balungao's Hot Spring",
    slug: "balungao-hot-spring",
    category: "Natural Wonders",
    location: "Balungao, Pangasinan",
    image: "/images/balungao.jpg",
    description:
      "A relaxing natural destination surrounded by scenic landscapes and refreshing waters, perfect for visitors looking for a peaceful getaway.",
    tags: ["Nature", "Relaxation"],
  },
];

const categories = [
  {
    name: "All Sites",
    icon: MapPin,
  },
  {
    name: "Natural Wonders",
    icon: TreePine,
  },
  {
    name: "Historical Landmarks",
    icon: Landmark,
  },
  {
    name: "Cultural Heritage",
    icon: Mountain,
  },
];

export default function HeritagePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Sites");

  const filteredSites = sites.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Sites" ||
      site.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#edf2fa] text-[#173f7a]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center">
            <Image
              src="/images/pang logo.png"
              alt="Pangasinan Logo"
              width={65}
              height={65}
              className="object-contain"
            />
          </Link>

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

      {/* ================= HERO ================= */}
      <section className="relative h-[400px] overflow-hidden">

        <Image
          src="/images/pangasinan.jpg"
          alt="Pangasinan Heritage"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0c315f]/65" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 md:px-10 flex items-end pb-12">

          <div className="text-white">

            <div className="inline-block bg-[#456abd] px-2 py-1 mb-4 text-sm">
              Home → Heritage Sites
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              Heritage Sites
            </h1>

            <p className="text-lg md:text-xl">
              Explore the history, culture, and natural beauty of Pangasinan.
            </p>

          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">

        <div className="mb-8">

          <h2 className="text-4xl md:text-5xl font-bold text-[#173f7a]">
            Discover Heritage Sites
          </h2>

          <p className="mt-2 text-[#45679f] text-lg">
            Explore places worth visiting across Pangasinan.
          </p>

        </div>

        {/* ================= SEARCH ================= */}
        <div className="relative w-full max-w-xl mb-6">

          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search heritage sites..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-full py-4 pl-14 pr-6 outline-none text-gray-700 shadow-sm focus:ring-2 focus:ring-[#456abd]"
          />

        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="flex flex-wrap gap-3 mb-10">

          {categories.map((category) => {

            const Icon = category.icon;
            const active = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition font-semibold ${
                  active
                    ? "bg-[#456abd] text-white border-[#456abd]"
                    : "bg-white text-[#456abd] border-gray-200 hover:bg-[#456abd] hover:text-white"
                }`}
              >
                <Icon size={19} />
                {category.name}
              </button>
            );
          })}

        </div>

        {/* ================= HERITAGE CARDS ================= */}
        <div className="space-y-6">

          {filteredSites.map((site) => (

            <article
              key={site.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row min-h-[385px]"
            >

              {/* IMAGE */}
              <div className="relative w-full md:w-[280px] lg:w-[320px] min-h-[280px] md:min-h-full shrink-0">

                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover"
                />

              </div>

              {/* DETAILS */}
              <div className="flex-1 p-7 md:p-9 flex flex-col justify-center">

                <span className="w-fit px-4 py-2 rounded-full bg-[#e9effb] text-[#456abd] text-sm font-bold uppercase tracking-wide">
                  {site.category}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-[#123f7b] mt-5">
                  {site.name}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-[#456abd]">

                  <MapPin size={20} />

                  <span className="text-base md:text-lg">
                    {site.location}
                  </span>

                </div>

                <p className="text-[#45679f] text-base md:text-lg leading-relaxed mt-5 max-w-4xl">
                  {site.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-3 mt-5">

                  {site.tags.map((tag) => (

                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-[#f0f3f8] text-[#45679f]"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                {/* ================= VIEW DETAILS ================= */}
                <Link
                  href={`/heritage/${site.slug}`}
                  className="mt-6 w-fit flex items-center gap-3"
                >
                  <Button className="flex items-center gap-3">
                    View Details
                    <ArrowRight size={19} />
                  </Button>
                </Link>

              </div>

            </article>

          ))}

          {filteredSites.length === 0 && (

            <div className="bg-white rounded-3xl p-12 text-center shadow">

              <h3 className="text-2xl font-bold text-[#173f7a]">
                No heritage sites found
              </h3>

              <p className="text-gray-500 mt-2">
                Try searching for another heritage site.
              </p>

            </div>

          )}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#06265c] text-white mt-12">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>

              <Image
                src="/images/pang logo.png"
                alt="Pangasinan Logo"
                width={70}
                height={70}
                className="object-contain mb-3"
              />

              <p className="text-white/70 max-w-sm">
                Discover the history, culture, and natural beauty of Pangasinan.
              </p>

            </div>

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

          <div className="border-t border-white/20 mt-8 pt-5 text-sm text-white/60">
            © 2026 Pangasinan Heritage. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}