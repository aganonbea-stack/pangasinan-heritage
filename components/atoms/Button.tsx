type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-[#456abd] px-6 py-3 font-semibold text-white transition hover:bg-[#3559a0] ${className}`}
    >
      {children}
    </button>
  );
}