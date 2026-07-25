import "./navbar.css";

export function Navbar() {
  return `
    <header class="navbar">

      <div class="container navbar-container">

        <a href="#home" class="logo">
          <span class="logo-a">A</span><span class="logo-s">S.</span>
        </a>

        <nav class="nav-menu">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#certificates">CERTIFICATES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <div class="nav-right">

          <a href="https://github.com/aus585" target="_blank" rel="noreferrer noopener" class="social-icon" aria-label="GitHub">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.31-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.23-3.22-.12-.31-.53-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.7.24 2.95.12 3.26.77.84 1.23 1.91 1.23 3.22 0 4.62-2.82 5.64-5.5 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"
              />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/aryan-shirke-a22a5a2a2/" target="_blank" rel="noreferrer noopener" class="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.74-2.6C22.2 7.6 24 10 24 14.3V24h-5v-8.4c0-2-.03-4.5-2.74-4.5-2.75 0-3.17 2.14-3.17 4.36V24h-5z"
              />
            </svg>
          </a>

          <div class="divider"></div>

          <a href="/photo/resume.pdf" download="Aryan_Shirke_Resume.pdf" class="resume-btn" style="text-decoration: none;">
            <span>RESUME</span>
            <svg
              class="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 4v10"></path>
              <path d="M8 10l4 4 4-4"></path>
              <path d="M5 20h14"></path>
            </svg>
          </a>

          <a href="#contact" class="connect-btn" style="text-decoration: none;">
            LET'S CONNECT
          </a>

        </div>

      </div>

    </header>
  `;
}