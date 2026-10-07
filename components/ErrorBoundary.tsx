"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] w-full flex-col items-center justify-center p-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Terjadi Kesalahan</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md">
            {this.state.error?.message ||
              "Aplikasi mengalami kendala tak terduga. Silakan muat ulang halaman."}
          </p>
          <Button
            onClick={this.handleReset}
            className="mt-6 gap-2"
            variant="default"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Muat Ulang Halaman</span>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
