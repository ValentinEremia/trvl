import React from "react";
import "./ErrorPage.css";
import { Button } from "./Button";

function ErrorPage() {
  return (
    <div className="error-container">
      <div className="noise"></div>
      <div className="overlay-error"></div>
      <div className="terminal">
        <h1>
          Error <span className="errorcode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className="output">Please try to come back later !</p>
        <p className="output">Good luck.</p>
        <div className="btn-error">
          <Button to="/trvl" buttonStyle="btn--outline">
            RETURN TO HOMEPAGE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
