import React from "react";
import styles from "./LaptopPreview.module.css";

export default function LaptopPreview({ video }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.laptop}>
        {/* Camera */}
        <span className={styles.camera}></span>

        {/* Screen */}
        <div className={styles.screen}>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />
        </div>

        {/* Bottom Base */}
        <div className={styles.base}></div>
      </div>
    </div>
  );
}
