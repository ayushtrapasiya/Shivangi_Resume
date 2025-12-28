import React from "react";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>
            Skills & <span>Expertise</span>
          </h2>
          <p>
            Technologies and tools I use to build scalable, performant, and
            user-focused web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className={styles.grid}>
          {/* Frontend */}
          <div className={styles.card}>
            <h3>Frontend Development</h3>
            <div className={styles.tags}>
              <span>React.js</span>
              <span>JavaScript (ES6+)</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>CSS Modules</span>
              <span>Responsive Design</span>
              <span>Bootstrap</span>
              <span>React Router </span>
            </div>
          </div>

          {/* UI / UX */}
          <div className={styles.card}>
            <h3>UI / UX</h3>
            <div className={styles.tags}>
              <span>Component-Based Design</span>
              <span>Clean UI Practices</span>
              <span>Accessibility</span>
              <span>Animations</span>
              <span>Figma</span>
            </div>
          </div>

          {/* State & Data */}
          <div className={styles.card}>
            <h3>State & Data</h3>
            <div className={styles.tags}>
              <span>REST APIs</span>
              <span>CRUD Operations</span>
              <span>Authentication</span>
              <span>Protected Routes</span>
            </div>
          </div>

          {/* Tools */}
          <div className={styles.card}>
            <h3>Tools & Workflow</h3>
            <div className={styles.tags}>
              <span>Git & GitHub</span>
              <span>Axios</span>
              <span>Chart Libraries</span>
              <span>VS Code</span>
              <span>Postman</span>
              <span>Swagger Api</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
