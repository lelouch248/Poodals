import React from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div class="card" style={{ width: " 18rem" }}>
        <div class="card-body">
          <h5 class="card-title">Download PDF</h5>
          <p class="card-text">
            Click the buttons below to download the PDF file.
          </p>
          <div className="button-group">
            <a href="path/to/download" download>
              <FaDownload /> Download
            </a>
            <a href="path/to/pdf" target="_blank" rel="noopener noreferrer">
              <FaFilePdf /> View PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
