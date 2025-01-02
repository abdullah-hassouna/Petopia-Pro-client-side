import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorPage from '../../app/pages/_error';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

const ErrorBoundary = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    return class ErrorBoundary extends Component<P & Props, State> {
        constructor(props: P & Props) {
            super(props);
            this.state = { hasError: false, error: null };
        }

        static getDerivedStateFromError(error: Error): State {
            return { hasError: true, error };
        }

        componentDidCatch(error: Error, info: ErrorInfo) {
            console.error('Error caught by Error Boundary:', error, info);
        }

        render() {
            if (this.state.hasError) {
                return <ErrorPage statusCode={"200"} />;
            }

            return <WrappedComponent {...(this.props as P)} />;
        }
    };
};

export default ErrorBoundary;