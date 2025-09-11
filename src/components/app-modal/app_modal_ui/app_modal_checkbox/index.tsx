export default function AppModalCheckbox({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type="checkbox" {...props} className={`h-4 w-4 rounded border-zinc-300 ${className || ""}`} />;
}
