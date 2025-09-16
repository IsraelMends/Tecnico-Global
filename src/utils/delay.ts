export async function delay(ms: number, rs?:boolean) {
  return new Promise(resolve => setTimeout(() => resolve(rs), ms));
}