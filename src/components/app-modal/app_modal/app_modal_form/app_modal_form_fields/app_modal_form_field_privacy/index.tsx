import AppModalCheckbox from "../../../../app_modal_ui/app_modal_checkbox";

export default function AppModalFormFieldPrivacy({ checked, onChange, policyUrl }: { checked: boolean; onChange: (v: boolean) => void; policyUrl: string; }) {
  return (
    <label className="flex items-start gap-3 text-sm">
      <AppModalCheckbox checked={checked} onChange={(e) => onChange(e.currentTarget.checked)} className="mt-0.5" required />
      <span>
        Eu li e aceito a{" "}
        <a href={policyUrl} target="_blank" rel="noreferrer noopener" className="underline">Política de Privacidade</a>.
      </span>
    </label>
  );
}
