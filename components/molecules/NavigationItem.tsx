import Link from "next/link";

type NavigationItemProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

export default function NavigationItem({
  href,
  children,
  active = false,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={`px-5 py-3 rounded-full font-semibold transition ${
        active
          ? "bg-[#456abd] text-white"
          : "text-[#173f7a] hover:text-[#456abd]"
      }`}
    >
      {children}
    </Link>
  );
}