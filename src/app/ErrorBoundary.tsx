import React from "react";

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  State
> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Unhandled application error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main>
          <h2>Something went wrong</h2>
          <p>
            An unexpected error occurred. Please refresh the page and try again.
          </p>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
