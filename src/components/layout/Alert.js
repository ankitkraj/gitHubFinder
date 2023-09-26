import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    <div className="alert alert-error">
      <div>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-2 stroke-current mr-3"
        ></svg>
        <strong>{alert.msg}</strong>
      </div>
    </div>
  );
}

export default Alert;
