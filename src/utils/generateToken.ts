export default async function generateToken(): Promise<string> {
  const data = {
    email: "israelmendes971@gmail.com",
    password: "@1601",
  };

  try {
    const res = await fetch("https://api.polofaculdades.com.br/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Erro: ${res.status}`);
    }

    const result = await res.json();

    console.log("Token recebido:", result.authToken); // agora mostra
    return result.authToken.token;
  } catch (error) {
    console.error("Erro na requisição:", error);
    return "";
  }
}
