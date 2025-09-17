export const isFullNameValid = (name: string) => name.trim().length >= 2;
export const isEmailValid = (v: string) => /\S+@\S+\.\S+/.test(v);