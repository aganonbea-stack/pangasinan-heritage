import Image from "next/image";
import Link from "next/link";

type HeritageCardProps = {
  name: string;
  slug: string;
  category: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
};

export default function HeritageCard({
  name,
  slug,
  category,
  location,
  image,
  description,
  tags,
}: HeritageCardProps) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
      <div className="relative w-full md:w-[320px] h-[260px] md:h-auto">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8 flex-1">
        <span className="inline-block px-4 py-2 rounded-full bg-[#e9effb] text-[#456abd] text-sm font-bold uppercase tracking-wide">
          {category}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[#173f7a] mt-5">
          {name}
        </h2>

        <div className="flex items-center gap-2 mt-4 text-[#456abd]">
          <span>📍</span>
          <span>{location}</span>
        </div>

        <p className="text-[#45679f] text-lg leading-relaxed mt-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-[#f0f3f8] text-[#45679f]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/heritage/${slug}`}
          className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full bg-[#456abd] text-white font-semibold hover:bg-[#36599f] transition"
        >
          View Details
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}