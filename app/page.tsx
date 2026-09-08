"use client";

import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src={`${basePath}/images/pang logo.png`}
              alt="Pangasinan Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-8 text-sm font-bold text-gray-900">

            <Link
              href="/"
              className="bg-[#4164ad] text-white px-7 py-2 rounded-full"
            >
              Home
            </Link>

            <Link
              href="/heritage"
              className="hover:text-[#4164ad] transition"
            >
              Heritage Site
            </Link>

            <Link
              href="/about"
              className="hover:text-[#4164ad] transition"
            >
              About
            </Link>

          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* LIGHTHOUSE BACKGROUND */}
        <Image
          src={`${basePath}/images/bolinao.jpg`}
          alt="Bolinao Lighthouse"
          fill
          priority
          className="object-cover"
        />

        {/* WHITE / LIGHT FADE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-8 pt-20">

          <div className="max-w-xl">

            {/* WELCOME BADGE */}
            <div className="inline-block bg-[#4164ad] text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              Welcome to Pangasinan
            </div>

            {/* MAIN TITLE */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#061957] leading-tight">
              Discover Heritage.
              <br />
              Experience Pangasinan.
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm md:text-base text-[#24345c] leading-relaxed max-w-md">
              Explore the province&apos;s iconic destinations,
              <br />
              rich culture, and natural wonders.
              <br />
              Fast, accessible, and built for everyone—
              <br />
              even with limited mobile data.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-7">

              <Link
                href="/heritage"
                className="bg-[#4164ad] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#304f91] transition shadow-md"
              >
                Explore Destinations
              </Link>

              <Link
                href="/about"
                className="bg-white/80 border border-gray-300 text-[#263b6d] px-7 py-3 rounded-full text-sm font-bold hover:bg-white transition shadow-md"
              >
                Learn More
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}