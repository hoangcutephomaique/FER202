import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Exercise3 = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-light p-4 mb-3">
        <h1 className="text-dark">Let's test the grid!</h1>
      </header>

      {/* Navigation */}
      <nav className="mb-3">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active text-primary" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <span className="nav-link disabled">Disabled</span>
          </li>
        </ul>
      </nav>

      {/* Grid layout */}
      <div className="container mb-4">
        <div className="row mb-2">
          <div className="col bg-secondary text-white border p-3">First col</div>
          <div className="col bg-secondary text-white border p-3">Second col</div>
        </div>
        <div className="row mb-2">
          <div className="col bg-secondary text-white border p-3">col</div>
          <div className="col bg-secondary text-white border p-3">col</div>
          <div className="col bg-secondary text-white border p-3">col</div>
        </div>
        <div className="row">
          <div className="col bg-secondary text-white border p-3">col</div>
          <div className="col bg-secondary text-white border p-3">col</div>
          <div className="col bg-secondary text-white border p-3">col</div>
          <div className="col bg-secondary text-white border p-3">col</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary-subtle text-center py-3">
        <h3><strong>Created by ABC!</strong></h3>
      </footer>
    </div>
  );
};

export default Exercise3;
