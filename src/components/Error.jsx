import Header from "./Header";
import { useRouteError } from "react-router";

const Error = () => {
    // react-router-dom catches all error in this path and is assigned in error
    const error = useRouteError();
    return (
      <div className="error-information">
        <p>
          {error.status}: {error.data}
        </p>
      </div>
    );
}

export default Error;
