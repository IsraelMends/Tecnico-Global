export default function AppModalButton({ disabled, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-full rounded-2xl px-4 py-2 text-white shadow transition disabled:cursor-not-allowed disabled:bg-[var(--gray-contrast)] ${
        disabled ? "bg-[var(--gray-contrast)]" : "bg-[var(--primary)] hover:bg-[var(--amber)] hover:shadow-lg hover:shadow-[var(--primary-glow)]"
      }`}
    >
      {children}
    </button>
  );
}
