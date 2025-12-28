import React, { useState } from "react";
import styles from "./ProjectModal.module.css";

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        {/* Title */}
        <h3>{project.title}</h3>

        {/* Image Preview */}
        <div className={styles.preview}>
          <img src={project.images[activeImage]} alt="project" />
        </div>

        {/* Thumbnails */}
        <div className={styles.thumbs}>
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={i === activeImage ? styles.active : ""}
              onClick={() => setActiveImage(i)}
              alt="thumb"
            />
          ))}
        </div>

        {/* Features */}
        <ul className={styles.features}>
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className={styles.tech}>
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <a href={project.live} target="_blank">Live</a>
          <a href={project.github} target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  );
}
