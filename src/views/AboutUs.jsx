import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="section-title">Our mission</h2>
      <p className="section-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>

      <h2 className="section-title">Our history</h2>
      <p className="section-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc.
      </p>

      <h2 className="section-title">Our team</h2>
      <div className="team-container">
        {/* Member 1 */}
        <div className="team-member">
          <div className="member-photo"></div>
          <h5 className="member-name">Jeff the land shark</h5>
          <p className="member-role">Director</p>
        </div>
        {/* Member 2 */}
        <div className="team-member">
          <div className="member-photo"></div>
          <h5 className="member-name">Hela goddess of death</h5>
          <p className="member-role">Director</p>
        </div>
        {/* Member 3 */}
        <div className="team-member">
          <div className="member-photo"></div>
          <h5 className="member-name">Asap Rocky</h5>
          <p className="member-role">Director</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


