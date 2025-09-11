import AppModalInput from "../../../../app_modal_ui/app_modal_input";

export default function AppModalFormFieldFullName({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">Nome completo *</label>
      <AppModalInput type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Seu nome e sobrenome" required />
    </div>
  );
}
