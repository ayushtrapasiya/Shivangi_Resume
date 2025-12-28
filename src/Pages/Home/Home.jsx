import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.left}>
          <p className={styles.badge}>👋 Welcome to my portfolio</p>

          <h1 className={styles.heading}>
            I’m <span>Shivangi Dhaduk</span>
          </h1>

          <h2 className={styles.subHeading}>
            Frontend / React JS Developer
          </h2>

          <p className={styles.text}>
            I design and build fast, scalable, and user-friendly web
            applications with modern UI and clean code practices.
          </p>

          <div className={styles.actions}>
            <Link to="/projects" className={styles.primaryBtn}>
              View Work
            </Link>
            <Link to="/contact" className={styles.outlineBtn}>
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right Visual */}
       <div className={styles.right}>
  <div className={styles.devCard}>
    <div className={styles.cardHeader}>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
      <span className={styles.dot}></span>
    </div>

    <pre className={styles.codeBlock}>
{`const developer = {
  name: "Shivangi Dhaduk",
  role: "React Developer",
  experience: "1 year",
  skills: ["React","JavaScript",
  "CSS",]
  };`}
    </pre>

    <div className={styles.stack}>
      <span>React</span>
      <span>JavaScript</span>
      <span>CSS</span>
      <span>UI</span>
      <span>HTML</span>
      <span>Bootstrap</span>

    </div>
  </div>
</div>
      </div>
    </section>
  );
}
