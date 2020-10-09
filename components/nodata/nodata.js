import React from "react";
import styles from "./styles.module.scss";

function Nodata(props) {
  const { message = "Oops! No data found" } = props;

  return (
    <div className="ps-card">
      <div className={styles.wrapnodata}>
        <h4 data-testid="message">{message}</h4>
      </div>
    </div>
  );
}

export default Nodata;
