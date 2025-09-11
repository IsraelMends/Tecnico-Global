export default function AppModalError({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  return <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{children}</div>;
}
