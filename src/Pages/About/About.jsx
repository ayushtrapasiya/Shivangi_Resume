import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* ===== HEADER ===== */}
        <div className={styles.header}>
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Results-oriented React.js Developer with 1 year of experience at
            Nexora Tech, focused on building clean, responsive, and scalable web
            applications.
          </p>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className={styles.content}>
          {/* LEFT */}
          <div className={styles.left}>
            <p>
              I specialize in modern frontend development using React.js,
              JavaScript, and clean UI practices. I enjoy turning complex
              problems into simple, intuitive user experiences.
            </p>

            <p>
              I’m known for strong communication skills, effective collaboration
              with teams, and writing maintainable code that supports long-term
              project success.
            </p>
            
            <div className={styles.card}>
              <h4>Education</h4>

              <ul>
                <li>
                  <strong>Bachelor’s Degree</strong>
                  <span>Gujarat University · 2025</span>
                  <em>CGPA: 9.2</em>
                </li>

                <li>
                  <strong>12th Grade</strong>
                  <span>Gujarat Board</span>
                  <em>98%</em>
                </li>

                <li>
                  <strong>10th Grade</strong>
                  <span>Gujarat Board</span>
                  <em>95%</em>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.card}>
              <h4>Experience</h4>
              <p>
                <strong>React.js Developer</strong>
                <span>Nexora Tech · 2024 – Present</span>
              </p>
              <ul className={styles.expList}>
                <li>
                  Designed and developed responsive web interfaces for
                  dashboards, e-commerce, and learning platforms, improving user
                  engagement by
                  <strong> 25%.</strong>
                </li>

                <li>
                  Implemented secure authentication and access token management
                  for protected routes, ensuring data privacy and smooth login
                  sessions.
                </li>

                <li>
                  Created real-time features such as chat systems and live order
                  tracking to improve user response efficiency.
                </li>

                <li>
                  Collaborated closely with backend teams to integrate RESTful
                  APIs with full CRUD operations.
                </li>

                <li>
                  Built analytics dashboards with interactive data charts using
                  modern visualization libraries.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
