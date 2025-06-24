import React from "react";
import "./MyTuteeLanding.css";
import instructorImg from '../assets/instructor-image.jpeg';
import whyIllustration from '../assets/why-illustration.png';
import educationIllustration from '../assets/education-illustration.png';
import step1Icon from '../assets/step1-icon.png';
import step2Icon from '../assets/step2-icon.png';
import step3Icon from '../assets/step3-icon.png';

const MyTuteeLanding = () => {
  return (
    <div className="mytutee-root">
      {/* Header */}
      <header className="mytutee-header">
        <div className="mytutee-logo">
          <span className="logo-blue">my</span>
          <span className="logo-orange">t</span>
          <span className="logo-blue">u</span>
          <span className="logo-blue">tee</span>
        </div>
        <nav className="mytutee-nav">
          <a href="#" className="nav-link">Board of Experts</a>
          <a href="#" className="nav-link">Teach with Us</a>
        </nav>
        <div className="mytutee-actions">
          <button className="btn-signin">Sign in</button>
          <button className="btn-signup">Teacher Sign Up</button>
        </div>
      </header>

      {/* Hero Section - sharp corners, edge-to-edge, no spacing */}
      <section className="mytutee-hero">
        <img
          src={instructorImg}
          alt="Instructor at desk"
          className="hero-image"
          loading="lazy"
        />
      </section>

      {/* Why Become Section - pixel-perfect, edge-to-edge */}
      <section className="mytutee-why">
        <div className="why-content">
          <h2>
            Why become a <span className="why-highlight">MyTutee</span> Instructor?
          </h2>
          <p>
            At MyTutee, we empower educators to teach without limits. Whether at home or on the go,
            connect with a global student base using flexible schedules and modern teaching tools.
            Join a supportive platform designed to elevate your teaching journey and make a real
            impact in online education.
          </p>
        </div>
        <div className="why-image">
          <img
            src={whyIllustration}
            alt="Online teaching illustration"
            className="why-img"
          />
        </div>
      </section>

      {/* Teaching with MyTutee Section */}
      <section className="teaching-mytutee-section">
        <div className="teaching-mytutee-inner">
          <div className="teaching-mytutee-image">
            <img
              src={educationIllustration}
              alt="Education Illustration"
              className="education-illustration"
            />
          </div>
          <div className="teaching-mytutee-content">
            <h2>
              Teaching with <span className="highlight-orange">MyTutee</span>
            </h2>
            <ul>
              <li>Teach from anywhere, anytime</li>
              <li>Connect with a global student base</li>
              <li>Access to modern teaching tools and resources</li>
              <li>Scale your income with wider reach and more students</li>
              <li>Be part of a growing online education movement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-header">
          <h3>How it works &gt;&gt;</h3>
          <p>
            Begin your teaching journey in just a few simple steps, with full support at every stage.
          </p>
        </div>
        <div className="how-steps">
          <div className="how-step">
            <div className="how-step-icon">
              <img src={step1Icon} alt="" />
            </div>
            <div className="how-step-title">
              <span className="step-orange">Step 1:</span> Sign Up &amp; Get Verified
            </div>
            <div className="how-step-desc">
              Register with your email and submit your credentials for verification.
            </div>
          </div>
          <div className="how-step">
            <div className="how-step-icon">
              <img src={step2Icon} alt="" />
            </div>
            <div className="how-step-title">
              <span className="step-orange">Step 2:</span> Create Your Instructor Profile
            </div>
            <div className="how-step-desc">
              Add your bio, expertise, and availability to attract students.
            </div>
          </div>
          <div className="how-step">
            <div className="how-step-icon">
              <img src={step3Icon} alt="" />
            </div>
            <div className="how-step-title">
              <span className="step-orange">Step 3:</span> Start Teaching Online
            </div>
            <div className="how-step-desc">
              Connect with students and begin teaching with flexible hours.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyTuteeLanding;
