"use client";
import { useEffect } from "react";

export const runtime = "edge";

export default function AdminPage() {
  useEffect(() => {
    window.location.href = "https://sam-daniel.sanity.studio";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-white/50 text-sm">Redirecting to Sanity Studio…</p>
    </div>
  );
}
