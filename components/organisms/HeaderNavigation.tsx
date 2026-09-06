import Image from "next/image";
import Link from "next/link";
import NavigationItem from "../molecules/NavigationItem";

type HeaderNavigationProps = {
  activePage?: "home" | "heritage" | "about";
};

export default function HeaderNavigation({
  activePage,
}: HeaderNavigationProps) {
  return (
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
        <nav className="flex items-center gap-3 md:gap-6">

          <NavigationItem
            href="/"
            active={activePage === "home"}
          >
            Home
          </NavigationItem>

          <NavigationItem
            href="/heritage"
            active={activePage === "heritage"}
          >
            Heritage Sites
          </NavigationItem>

          <NavigationItem
            href="/about"
            active={activePage === "about"}
          >
            About
          </NavigationItem>

        </nav>

      </div>
    </header>
  );
}