/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Campus Recruitment Management System",
    description:
      "(CRMS) is a web-based platform designed to streamline the recruitment process for students and placement officers.Backend: Node.js, Express.js, MongoDB | Frontend: HTML, CSS, JS | Middleware: Mongoose | Security: bcryptjs, Express-Session",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Online Learning Platform",
    description:
      "It is designed to streamline the process of delivering online courses. Backend: Node.js, Express.js, MongoDB | Frontend: HTML, CSS, JS | Middleware: Mongoose | Security: bcryptjs, Express-Session",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container" style={{ flex: 1, padding: "0 1rem" }}>
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                margin: "1rem 0",
                borderRadius: "8px",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ margin: "0 0 0.5rem" }}>{project.title}</h3>
              </a>
              <p className="small" style={{ margin: "0", wordWrap: "break-word" }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
