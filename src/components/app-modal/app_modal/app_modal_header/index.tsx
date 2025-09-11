export default function AppModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <h2 className="text-xl font-semibold">Fale com a gente no WhatsApp</h2>
      <button onClick={onClose} className="rounded-full p-2 hover:bg-zinc-100" aria-label="Fechar">✕</button>
    </div>
  );
}
