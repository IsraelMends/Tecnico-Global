import AppModalInput from "../../../../app_modal_ui/app_modal_input";

export default function AppModalFormFieldEmail({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">E-mail *</label>
      <AppModalInput type="email" value={value} onChange={(e) => onChange(e.target.value)} placeholder="exemplo@dominio.com" required />
      <p className="mt-1 text-xs text-zinc-500">Informe um e-mail válido, ex.: exemplo@dominio.com</p>
    </div>
  );
}
