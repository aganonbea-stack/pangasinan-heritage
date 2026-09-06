"use client";

type SearchFormProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchForm({
  value,
  onChange,
}: SearchFormProps) {
  return (
    <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200 px-5 py-3 max-w-xl">

      <span className="text-xl mr-3">
        🔍
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search heritage sites..."
        className="w-full outline-none text-[#173f7a] placeholder:text-gray-400"
      />

    </div>
  );
}