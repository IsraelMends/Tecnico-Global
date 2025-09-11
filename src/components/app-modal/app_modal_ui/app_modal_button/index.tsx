export default function AppModalButton({ disabled, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-full rounded-2xl px-4 py-2 text-white shadow transition disabled:cursor-not-allowed disabled:bg-zinc-400 ${
        disabled ? "bg-zinc-400" : "bg-black hover:opacity-90"
      }`}
    >
      {children}
    </button>
  );
}
