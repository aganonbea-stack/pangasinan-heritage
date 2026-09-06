import HeritageCard from "../molecules/HeritageCard";

type HeritageSite = {
  name: string;
  slug: string;
  category: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
};

type HeritageGridProps = {
  sites: HeritageSite[];
};

export default function HeritageGrid({
  sites,
}: HeritageGridProps) {
  return (
    <div className="space-y-6">
      {sites.map((site) => (
        <HeritageCard
          key={site.slug}
          name={site.name}
          slug={site.slug}
          category={site.category}
          location={site.location}
          image={site.image}
          description={site.description}
          tags={site.tags}
        />
      ))}
    </div>
  );
}