import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-cream text-center p-8">
          <div>
            <h1 className="font-loveLight text-4xl mb-4">Oops, something went wrong</h1>
            <button
              onClick={() => window.location.reload()}
              className="bg-cream text-primary px-6 py-2 rounded-full font-dmSans text-sm"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
