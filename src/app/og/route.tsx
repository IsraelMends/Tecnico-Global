// app/og/route.ts
import { ImageResponse } from "@vercel/og"
import type { NextRequest } from "next/server"
import React from "react"   // <-- IMPORTANTE

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title") || "Tecnico Global"
  const subtitle = searchParams.get("subtitle") || "Formação técnica de qualidade"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 80,
          fontSize: 64,
          fontWeight: 800,
        }}
      >
        <div>{title}</div>
        <div style={{ fontSize: 32, fontWeight: 500, marginTop: 16 }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
