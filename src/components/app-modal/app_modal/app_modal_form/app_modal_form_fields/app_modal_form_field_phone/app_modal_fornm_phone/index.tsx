// AppModalFormFields/Phone.tsx (exemplo)
type PhoneProps = {
  value: string;
  onChange: (v: string) => void; // recebe string
};

export default function PhoneField({ value, onChange }: PhoneProps) {
  return (
    <input
      type="tel"
      inputMode="numeric"
      autoComplete="tel"
      placeholder="(99) 99999-9999"
      maxLength={15}
      className="rounded-xl border px-3 py-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)} // <<< chave do problema
      // (opcional) formata colagens
      onPaste={(e) => {
        e.preventDefault();
        const text = e.clipboardData.getData("text");
        onChange(text);
      }}
    />
  );
}
