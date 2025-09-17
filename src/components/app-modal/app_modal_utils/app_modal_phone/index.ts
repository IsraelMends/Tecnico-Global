export const onlyDigits = (v: string) => v.replace(/\D+/g, "");
export const isPhoneValid = (v: string) => onlyDigits(v).length >= 10; // DDD + número