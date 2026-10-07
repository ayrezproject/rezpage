"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Router Error Caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-4 shadow-sm">
        <AlertCircle className="h-7 w-7" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight">
        Terjadi Kesalahan pada Aplikasi
      </h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-md">
        {error.message ||
          "Terjadi kendala saat memuat data. Silakan coba kembali."}
      </p>
      {error.digest && (
        <p className="mt-1 text-xs text-muted-foreground/60 font-mono">
          Digest: {error.digest}
        </p>
      )}
      <div className="mt-6 flex gap-3">
        <Button onClick={() => reset()} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          <span>Coba Lagi</span>
        </Button>
      </div>
    </div>
  );
}
