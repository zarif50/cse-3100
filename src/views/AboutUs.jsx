import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="section-title">Our mission</h2>
      <p className="section-text">
      Welcome to [Your Organization Name], where love meets a second chance! We are a dedicated cat adoption center, committed to rescuing, rehabilitating, and rehoming cats of all shapes, sizes, and purr-sonalities. Every furry friend in our care is more than just a pet; they are a beloved companion waiting for their forever home.

Our journey began with a simple goal: to make a difference in the lives of stray and abandoned cats. Since then, we have grown into a passionate community of animal lovers, volunteers, and supporters who work tirelessly to provide a safe and loving environment for our feline friends.
      </p>

      <h2 className="section-title">Our history</h2>
      <p className="section-text">
      We pride ourselves on matching our cats with the perfect families. Through our careful adoption process, we ensure that each cat finds a home that suits their personality and needs. Whether you're looking for a lap-loving cuddle buddy or an adventurous spirit, we’re here to help you find your purr-fect match.

Thank you for supporting our mission and for considering adoption. Together, we can create a brighter future for these incredible animals. Stop by our center, meet our cats, and become part of the [Your Organization Name] family today!
      </p>

      <h2 className="section-title">Our team</h2>
      <div className="team-container">
        {/* Member 1 */}
        <div className="team-member">
          <div className="member-photo"></div>
          <h5 className="member-name">Zarif Mahmud</h5>
          <p className="member-role">Director</p>
        </div>
        {/* Member 2 */}
        <div className="team-member">
          <div className="member-photo"></div>
          <h5 className="member-name">Amer Bro</h5>
          <p className="member-role">Director</p>
        </div>
        {/* Member 3 */}
        <div className="team-member">
          <div className="member-photo"></div>
          <h5 className="member-name">Dortcel</h5>
          <p className="member-role">Director</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


