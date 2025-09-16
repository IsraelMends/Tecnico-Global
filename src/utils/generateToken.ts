export default function generateToken():string {
  const response = {
    status: "",
    statusCode: 200,
    token: "",
  };

  const data = {
    email: "israelmendes971@gmail.com",
    password: "ad1601",
  };

  fetch("https://api.polofaculdades.com.br/login", {
    method: "POST", // pode ser GET, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      response.status = result.status;
      response.statusCode = result.statusCode;
      response.token = result.authToken;
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });

  console.log(response.token);

  return response.token;
}
