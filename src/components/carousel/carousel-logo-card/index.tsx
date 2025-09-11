
"use client"

import * as React from "react"
import Image from "next/image"

export type LogoCardProps = {
  name: string
  src: string
  href?: string
}

export default function LogoCard({ name, src, href }: LogoCardProps) {
  const body = (
    <div
      className={[
        "h-full w-full ",
        "flex items-center justify-center",
        "rounded-2xl border bg-white/70 dark:bg-zinc-900/60",
        "shadow-sm hover:shadow-md shadow-primary",
        "transition-all duration-200",
        "p-4 md:p-6",
        "ring-0 hover:ring-2 ring-zinc-200 dark:ring-zinc-800",
      ].join(" ")}
      title={name}
      aria-label={name}
    >
      <div className="relative w-full max-w-[180px] h-16 md:h-20">
        <Image
          src={src}
          alt={name}
          fill
          sizes="(max-width: 768px) 120px, 180px"
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  )

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400 rounded-2xl"
      >
        {body}
      </a>
    )
  }
  return body
}
