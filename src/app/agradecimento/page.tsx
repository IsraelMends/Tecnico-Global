"use client";
import { useState } from "react";
import ThankYou from "@/components/thankyou";
import Loading from "@/components/loading";

export default function App() {
  const [done, setDone] = useState(false);

  return done ? (
    <ThankYou />
  ) : (
    <Loading onComplete={() => setDone(true)} />
  );
}