import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ info: errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'white', background: '#990000', padding: '40px', zIndex: 999999, position: 'relative', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>⚠️ React Crashed!</h1>
          <p style={{ marginTop: '20px', fontSize: '18px' }}>{this.state.error && this.state.error.toString()}</p>
          <pre style={{ fontSize: '14px', marginTop: '20px', whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.3)', padding: '20px' }}>
            {this.state.info && this.state.info.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
