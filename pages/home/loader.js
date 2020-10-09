import React from "react";
import styles from "./style.module.scss";

function Loader() {
  return (
    <div className={styles.gridcards}>
      <div className={styles.wrapcards}>
        {Array.from({ length: 8 }, (v, i) => i).map((idx) => (
          <div className={styles.pscard} key={idx}>
            <div className={["ps-card", styles.card].join(" ")}>
              <div className="plchbar" style={{ height: "140px" }}></div>
              <div
                className="plchbar"
                style={{ height: "22px", width: '60%', marginTop: "10px" }}
              ></div>
              <div
                className="plchbar"
                style={{ height: "22px", width: '100%', marginTop: "10px" }}
              ></div>
              <div
                className="plchbar"
                style={{ height: "22px", width: '80%', marginTop: "10px" }}
              ></div>
              <div
                className="plchbar"
                style={{ height: "22px", width: '20%', marginTop: "10px" }}
              ></div>
              <div
                className="plchbar"
                style={{ height: "22px", width: '50%', marginTop: "10px" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loader;
