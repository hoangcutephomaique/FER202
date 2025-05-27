import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App4.css'; // Custom styles if any

function ExerciseFPT() {
  return (
    <div>
      {/* Header */}
      <div className="header text-white text-center py-4">
        <img
          src="./fpt.png"
          alt="FPT University"
          style={{ width:'500px', marginBottom: '1rem' }}
        />
        <div className="university-text">FPT UNIVERSITY</div>
      </div>

      {/* Navigation */}    
      <div className="nav-links text-center py-2">
        <a className="nav-link d-inline-block text-white mx-2" href="/">Home</a>
        <a className="nav-link d-inline-block text-white mx-2" href="#about">About</a>
        <a className="nav-link d-inline-block text-white mx-2" href="#contact">Contact</a>
      </div>

      {/* Content */}
      <div className="content text-center py-5 bg-white">
        <section id="about">
          <h4>About</h4>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact" className="mt-5">
          <h4>Contact</h4>
          <p>
            For any inquiries, please contact us at{" "}
            <a href="mailto:example@example.com">example@example.com</a>.
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="footer text-center py-3">
        © 2023 Website. All rights reserved.
      </div>
    </div>
  );
}

export default ExerciseFPT;
