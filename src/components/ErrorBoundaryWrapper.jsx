// ErrorBoundaryWrapper.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.props.navigate("/error");
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const ErrorBoundaryWrapper = ({ children }) => {
  const navigate = useNavigate();
  return <ErrorBoundary navigate={navigate}>{children}</ErrorBoundary>;
};

export default ErrorBoundaryWrapper;
