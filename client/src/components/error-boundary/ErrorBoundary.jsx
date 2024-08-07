import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <main className="error-main">
            <h2>Something went wrong.</h2>
            <p>We encountered an error while processing your request. Please try again later.</p>
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
