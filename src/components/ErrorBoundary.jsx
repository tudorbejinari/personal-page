import { Component } from "react"
import { Link } from "react-router-dom"

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-3xl mx-auto px-6 py-24 sm:py-32 text-center space-y-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Error</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Something went wrong</h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            An unexpected error occurred. Try refreshing the page.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => this.setState({ hasError: false })}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-sky-500 text-white font-medium text-sm hover:bg-sky-400 transition-all duration-200 shadow-glow-blue"
            >
              Try again
            </button>
            <Link
              to="/"
              onClick={() => this.setState({ hasError: false })}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-sky-500/50 hover:text-white transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
