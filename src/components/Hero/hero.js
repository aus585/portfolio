import "./hero.css";

export function Hero() {
  setTimeout(() => {
    initHeroEffects();
  }, 0);

  return `
<section class="hero" id="home">
  <div class="hero-background">
    <canvas id="bg-decorations-canvas"></canvas>
    <div class="hero-bg-text-wrapper">
      <span class="outline-text-plain">ARYAN SHIRKE</span>
    </div>
  </div>

  <div class="hero-container">
    <div class="hero-left">
      <p class="hero-tag">HELLO, I'M <span class="tag-line">—</span></p>
      <h1 class="hero-title">
        <span class="title-white">ARYAN</span>
        <span class="title-gradient-purple">SHIRKE</span>
      </h1>
      <h2 class="hero-role">Computer Science Student • Creative Developer</h2>
      <div class="role-divider-line"></div>
      <p class="hero-description">
        Passionate about designing intuitive digital experiences through creativity, technology, and continuous learning.
      </p>
      <div class="hero-buttons">
  <a href="#projects" class="primary-btn">VIEW PROJECTS</a>
  <a href="#about" class="secondary-btn">EXPLORE MORE</a>
</div>
    </div>

    <div class="hero-center">
      <div class="hero-portrait">
        <img src="/photo/portrait copy.png" alt="Aryan Shirke Portrait" class="portrait-img">
      </div>
    </div>

    <div class="hero-right">
  <div class="card-animation-wrapper">
    <div class="developer-card" id="interactive-dev-card">
      <div class="card-header">
        <h3>WHAT DRIVES ME</h3>
        <div class="header-icon-code">&lt;/&gt;</div>
      </div>

        <div class="card-items-list">
          <div class="card-item">
            <div class="icon-wrapper">
              <svg class="custom-svg-icon" viewBox="0 0 24 24" fill="none" stroke="#9B5CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <div>
              <h4>Design & UI/UX</h4>
              <p>Crafting intuitive, user-centered interfaces.</p>
            </div>
          </div>

          <div class="card-item">
            <div class="icon-wrapper">
              <svg class="custom-svg-icon" viewBox="0 0 24 24" fill="none" stroke="#9B5CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
              </svg>
            </div>
            <div>
              <h4>Creative Experiences</h4>
              <p>Designing interactions that feel engaging.</p>
            </div>
          </div>

          <div class="card-item">
            <div class="icon-wrapper">
              <svg class="custom-svg-icon" viewBox="0 0 24 24" fill="none" stroke="#9B5CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
              </svg>
            </div>
            <div>
              <h4>Artificial Intelligence</h4>
              <p>Exploring AI concepts and practical applications.</p>
            </div>
          </div>

          <div class="card-item">
            <div class="icon-wrapper">
              <svg class="custom-svg-icon" viewBox="0 0 24 24" fill="none" stroke="#9B5CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <div>
              <h4>Data Analytics</h4>
              <p>Learning from data through analysis and visualization.</p>
            </div>
          </div>

          <div class="card-item">
            <div class="icon-wrapper">
              <svg class="custom-svg-icon" viewBox="0 0 24 24" fill="none" stroke="#9B5CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <div>
              <h4>Product Thinking</h4>
              <p>Creating digital experiences with purpose.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="scroll-indicator">
    <span>SCROLL TO EXPLORE</span>
    <div class="mouse">
      <div class="wheel"></div>
    </div>
  </div>
</section>
  `;
}

function initHeroEffects() {
  const card = document.getElementById("interactive-dev-card");
  const bgCanvas = document.getElementById("bg-decorations-canvas");
  const heroSection = document.getElementById("home");

  // === NEW SMOOTH SCROLL LOGIC ADDED HERE ===
  const heroButtons = document.querySelectorAll(".hero-buttons a");
  heroButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = button.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }
    });
  });
  // ==========================================

  // 1. Interactive 3D Card Effect
  if (card) {
    card.addEventListener("mousemove", (e) => {
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left - box.width / 2;
      const y = e.clientY - box.top - box.height / 2;
      const tiltX = -(y / (box.height / 2)) * 8;
      const tiltY = (x / (box.width / 2)) * 8;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  }

  // 2. Simplified Canvas Squares Animation (Rising Loop)
  if (bgCanvas && heroSection) {
    const ctx = bgCanvas.getContext("2d");
    let squares = [];
    const totalSquares = 40; // Clean particle density

    // Generates square objects with simple properties
    const generateSquares = (width, height) => {
      const arr = [];
      for (let i = 0; i < totalSquares; i++) {
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 8 + 6,              // Sizing between 6px and 14px
          speedY: -(Math.random() * 0.4 + 0.15),    // Moves upwards smoothly
          opacity: Math.random() * 0.20 + 0.08,     // Visible translucent opacity
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.004   // Slow elegant rotation
        });
      }
      return arr;
    };

    const resizeCanvas = () => {
      bgCanvas.width = heroSection.clientWidth;
      bgCanvas.height = heroSection.clientHeight;
      squares = generateSquares(bgCanvas.width, bgCanvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Core Animation Frame Loop
    const animate = () => {
      ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

      squares.forEach((sq) => {
        // Move particle upward and apply rotation change
        sq.y += sq.speedY;
        sq.rotation += sq.rotSpeed;

        // If the square floats above the top of the hero panel, reset to bottom
        if (sq.y < -20) {
          sq.y = bgCanvas.height + 20;
          sq.x = Math.random() * bgCanvas.width;
        }

        // Draw the square onto the canvas context
        ctx.save();
        ctx.translate(sq.x, sq.y);
        ctx.rotate(sq.rotation);
        
        // Translucent solid color fill
        ctx.fillStyle = `rgba(155, 92, 255, ${sq.opacity})`;
        ctx.fillRect(-sq.size / 2, -sq.size / 2, sq.size, sq.size);
        
        // Soft glowing border matching the image style
        ctx.strokeStyle = `rgba(155, 92, 255, ${sq.opacity + 0.15})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-sq.size / 2, -sq.size / 2, sq.size, sq.size);
        
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };
    
    animate();
  }
}