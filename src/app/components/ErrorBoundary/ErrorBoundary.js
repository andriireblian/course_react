import React from "react";
import PropTypes from 'prop-types';
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    oopsText = () => {
        return (
            <h2 className="error">Oops, something went wrong...</h2>
        )
    }

    render() {
        return (
            <>
                { !this.state.hasError ? this.props.children : this.oopsText() }
            </>
        )
    }
}

export default ErrorBoundary;