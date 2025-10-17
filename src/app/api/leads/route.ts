import { NextResponse } from 'next/server'
const { NEXT_PUBLIC_API_ENTERPRISE_ID, NEXT_PUBLIC_API_SECRET, NEXT_PUBLIC_API_LOGIN, NEXT_PUBLIC_API_URL } = process.env


export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validação mínima
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').replace(/\D/g, '') // só dígitos
    const areaOfInterest = String(body.areaOfInterest || '').trim()

    if (!name || !phone) {
      return NextResponse.json({ error: 'name e phone são obrigatórios' }, { status: 400 })
    }

    // Gere o token NO SERVER (não no cliente)
    const token = await generateServerToken() // implemente usando segredo do server

    // Encaminhe ao backend externo
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/leads/criar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        // 'Accept': 'application/json' // se o backend exigir
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        areaOfInterest,
        enterpriseId: NEXT_PUBLIC_API_ENTERPRISE_ID,
      }),
    })

    const text = await res.text()
    let json: any = null
    try { json = JSON.parse(text) } catch { /* resposta não-JSON */ }

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Upstream error', status: res.status, body: json ?? text },
        { status: 502 }
      )
    }

    return NextResponse.json(json ?? { ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Erro interno' }, { status: 500 })
  }
}

// Exemplo de gerador de token no server
async function generateServerToken() {
    const response = {
        status: "",
        statusCode: 200,
        token: "",
      };
    
      const data = {
        email: NEXT_PUBLIC_API_LOGIN,
        password: NEXT_PUBLIC_API_SECRET,
      };

      fetch(`${NEXT_PUBLIC_API_URL}/login`, {
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
