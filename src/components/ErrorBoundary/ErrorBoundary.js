import React from "react";
import './ErrorBoundary.scss';

function ErrorBoundary(props) {
    const ErrorText = () => (
        <h2 className="error">
            Oops, something went wrong...
        </h2>
    )

    let isEverythingOK = true;

    return <> { isEverythingOK ? props.children : <ErrorText /> } </>
}
export default ErrorBoundary;