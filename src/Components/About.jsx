/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an AIML student studying at Anurag University. I enjoy creating unique and simplistic user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React"
  
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm passionate about tackling challenges with fresh, creative approaches that drive innovation. With my skills in web design, I'm always seeking new ways to enhance user experiences and make technology accessible for everyone.";

// Links to external profiles
const hackerrankUrl = "https://www.hackerrank.com/dashboard";
const leetcodeUrl = "https://leetcode.com/u/Susmi24/";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
        <div style={{ marginTop: "1.5rem" }}>
          <a href={hackerrankUrl} target="_blank" rel="noopener noreferrer">
            HackerRank
          </a>{" "}
          |{" "}
          <a href={leetcodeUrl} target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
