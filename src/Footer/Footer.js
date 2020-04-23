import React from "react";
import "./style.css";
// import styled from "styled-components";

export function Footer() {
  return (
    <footer class="footer " id="main-footer">
      <div className="container">
        Copyright &copy; 2020,
        <a
          id="nets"
          target="_blank"
          rel="noopener noreferrer"
          href="https://sriprom.net"
        >
          Built by Net Sriprom{" "}
        </a>
      </div>
    </footer>
  );
}

