import React from "react";
import styles from "./style.module.scss";

function Badge({ children, onClick, ...rest }) {
  return (
    <div onClick={onClick} {...rest} data-testid="badge">
      <span>{children}</span>
    </div>
  );
}

export default Badge;
