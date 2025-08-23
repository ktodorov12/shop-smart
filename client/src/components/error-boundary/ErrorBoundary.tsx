import { Component } from "react";
import type { ReactNode } from "react";

interface AppProps {
  children: ReactNode;
}

type AppState = {
  hasError: false;
};

class ErrorBoundary extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <main className="error-main">
            <h2>Something went wrong.</h2>
            <p>
              We encountered an error while processing your request. Please try again
              later.
            </p>
            <button onClick={() => (window.location.href = "/")} className="error-button">
              Return Home
            </button>
          </main>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
