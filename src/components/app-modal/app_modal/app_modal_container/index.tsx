"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function AppModalContainer({ children, onClose }: { children: ReactNode; onClose: () => void; }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-[101] w-[90vw] max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        {children}
      </div>
    </div>,
    document.body
  );
}
