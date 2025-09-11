import AppModalInput from "../../../../app_modal_ui/app_modal_input";

export default function AppModalFormFieldPhone({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">Telefone (com DDD) *</label>
      <AppModalInput type="tel" value={value} onChange={(e) => onChange(e.target.value)} placeholder="(11) 99999-9999" inputMode="tel" required />
      <p className="mt-1 text-xs text-zinc-500">Informe apenas números, com DDI/DDD, ex.: 559998887777</p>
    </div>
  );
}
