import React from "react";
import styles from "./Projects.module.css";
import LaptopPreview from "./LaptopPreview";

export default function Projects() {
  return (
    <section className={styles.project}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1>
            135 Degrees <span>Dashboard</span>
          </h1>
          <p>
            A modern, scalable, and fully responsive e-commerce solution focused
            on performance, user experience, and real-world business needs.
          </p>
        </div>
        {/* Laptop Preview */}
        <LaptopPreview video="/135.mp4" />
        {/* Info Section */}
        <div className={styles.infoGrid}>
          {/* Left */}
          <div className={styles.details}>
            <h2>Project Overview</h2>
            <p>
              <section class="project-details">
                <h3>135° Admin Dashboard (Fully Functional System)</h3>
                <p>
                  Developed a 135-degree styled admin dashboard with complete
                  end-to-end functionality, focused on scalability, real-time
                  operations, and efficient store management.
                </p>

                <ul>
                  <li>
                    Implemented a <strong>multi-store management system</strong>
                    , allowing a single admin to manage multiple stores from one
                    centralized dashboard.
                  </li>

                  <li>
                    Built{" "}
                    <strong>monthly and yearly reports & analytics</strong> to
                    help admins analyze store performance and make data-driven
                    decisions.
                  </li>

                  <li>
                    Developed a complete <strong>Item Management module</strong>{" "}
                    with functionality to:
                    <ul>
                      <li>Create items</li>
                      <li>List items</li>
                      <li>Update items</li>
                      <li>Delete items</li>
                    </ul>
                  </li>

                  <li>
                    Implemented <strong>User Management</strong> and
                    <strong>Staff Management</strong> systems with role-based
                    access.
                  </li>

                  <li>
                    Designed a real-time{" "}
                    <strong>Order Management system</strong> using
                    <strong>WebSockets</strong>, enabling:
                    <ul>
                      <li>Real-time order receiving</li>
                      <li>Order acceptance and rejection by admin</li>
                      <li>
                        Order status updates:
                        <ul>
                          <li>Preparing</li>
                          <li>Prepared</li>
                          <li>Out for Delivery</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    Created a <strong>History Management system</strong>{" "}
                    allowing admins to:
                    <ul>
                      <li>View complete historical data</li>
                      <li>
                        Download reports in <strong>CSV</strong> format
                      </li>
                      <li>
                        Download reports in <strong>PDF</strong> format
                      </li>
                    </ul>
                  </li>

                  <li>
                    Integrated <strong>Firebase Notifications</strong> to:
                    <ul>
                      <li>Send instant notifications to users</li>
                      <li>Schedule notifications for future delivery</li>
                    </ul>
                  </li>

                  <li>
                    Added a <strong>Feedback Management system</strong> where
                    admins can view and manage user feedback.
                  </li>
                </ul>
              </section>
            </p>
          </div>
          {/* Right */}
          <div className={styles.meta}>
            <div className={styles.box}>
              <h4>Tech Stack</h4>
              <div className={styles.tags}>
                <span>React.js</span>
                <span>Context API</span>
                <span>Axios</span>
                <span>REST APIs</span>
                <span>CSS Modules</span>
              </div>
            </div>

            <div className={styles.box}>
              <h4>Project Links</h4>
              <div className={styles.links}>
                <a href="#" target="_blank">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
