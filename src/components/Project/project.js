import "./project.css";

export function Projects() {
  const projectsData = [
    {
      id: "01",
      title: "FITusion (Modern Fitness Web Application)",
      description: "FITusion is a modern, responsive fitness web application designed to deliver an engaging digital fitness experience. The application features a sleek dark-themed interface with vibrant neon-green accents, intuitive navigation, user authentication screens, and a visually immersive landing page. It focuses on clean UI/UX, responsive layouts, and smooth interactions to create a premium user experience across desktop and tablet devices.",
      image: "/photo/gym.png",
      tags: ["HTML", "CSS", "JavaScript", "TensorFlow", "Tailwind CSS"],
      liveLink: "https://gym-8zl4.vercel.app/",
      githubLink: "https://github.com/aus585/gym"
    },
    {
      id: "02",
      title: "BMW Landing Page – Responsive Automotive Website",
      description: "A modern and responsive landing page inspired by BMW's premium brand identity. The project showcases luxury vehicles through an immersive hero section, interactive car cards, smooth scrolling, and engaging UI animations. The design emphasizes clean layouts, visual appeal, and responsive user experience across different screen sizes.",
      image: "/photo/landing page.png",
      tags: ["HTML", "JavaScript", "CSS", "Figma", "Responsive Design","Tailwind CSS"],
      liveLink: "https://sct-wd-01-psi.vercel.app",
      githubLink: "https://github.com/aus585/SCT_WD_01"
    },
    {
      id: "03",
      title: "Tic Tac Toe – Interactive Web Game",
      description: "An interactive and responsive Tic Tac Toe web application built with a focus on clean design and engaging gameplay. The project features a modern user interface, real-time game logic, winner detection, draw handling, and seamless user interactions, providing an enjoyable experience across desktop and mobile devices.",
      image: "/photo/tic tac toe.png",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      liveLink: "https://sct-wd-03-mu.vercel.app",
      githubLink: "https://github.com/aus585/SCT_WD_03"
    },
    {
      id: "04",
      title: "Stopwatch – Web Application",
      description: "A modern and responsive stopwatch web application designed for accurate time tracking with a clean and intuitive user interface. The application provides start, pause, reset, and lap recording functionalities while delivering smooth interactions and a seamless user experience across desktop and mobile devices.",
      image: "/photo/stopwatch.png",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      liveLink: "https://sct-wd-02-two.vercel.app/#",
      githubLink: "https://github.com/aus585/SCT_WD_02"
    }
  ];

  const generateProjectsHTML = (items) => items.map((project, index) => {
    let cardStatusClass = "hidden-stack-card";
    if (index === 0) cardStatusClass = "active-card";
    if (index === 1) cardStatusClass = "next-card";

    return `
     <div class="project-card ${cardStatusClass}" data-index="${index}">
      <div class="flashlight-side-left"></div>
      <div class="flashlight-side-right"></div>
      
      <div class="card-content-wrapper">
        <div class="card-left-photo">
          <img src="${project.image}" alt="${project.title} Preview" class="project-main-photo" />
        </div>
        
        <div class="card-right-info">
          <!-- NEW: Wrap content in a scrollable div -->
          <div class="scrollable-text-content">
            <div class="project-badge-id">#${project.id}</div>
            <h4 class="project-title">${project.title}</h4>
            <p class="project-short-info">${project.description}</p>
            
            <div class="project-tools-box">
              ${project.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join("")}
            </div>
          </div>
          
          <!-- Buttons stay at the bottom -->
          <div class="project-action-triggers">
            <a href="${project.liveLink}" class="btn-view-project" target="_blank" rel="noopener noreferrer">View Project</a>
            <a href="${project.githubLink}" class="btn-github-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  `;
}).join("");

  // Safely initialize listeners only after elements have fully loaded into the document layout
  setTimeout(() => {
    const proSection = document.getElementById("projects");
    const track = document.querySelector('.projects-deck-track');
    const prevBtn = document.getElementById('stackPrevBtn');
    const nextBtn = document.getElementById('stackNextBtn');
    
    /* ADDED HERE: IntersectionObserver setup for Scroll Entrance */
    if (proSection) {
        const proObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    proSection.classList.add("pro-active");
                    proObserver.disconnect(); // Triggers only once on entrance
                }
            });
        }, { 
            threshold: 0.15 
        });
        
        proObserver.observe(proSection);
    }
    
    if (!track) return;
    
    const cards = track.querySelectorAll('.project-card');
    if (!cards.length) return;
    
    let currentIndex = 0;
    let startY = 0;
    let isDragging = false;

    function renderStackPositions() {
      cards.forEach((card, i) => {
        card.className = "project-card";
        if (i === currentIndex) {
          card.classList.add("active-card");
        } else if (i === currentIndex - 1) {
          card.classList.add("prev-card");
        } else if (i === currentIndex + 1) {
          card.classList.add("next-card");
        } else {
          card.classList.add("hidden-stack-card");
        }
      });
    }

    // Clean structural event listeners
    prevBtn?.addEventListener('click', () => {
      if (currentIndex > 0) { currentIndex--; renderStackPositions(); }
    });
    nextBtn?.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) { currentIndex++; renderStackPositions(); }
    });

   track.addEventListener('pointerdown', (e) => {
  // Check if the user clicked on a link/button
  // If they did, stop the function and let the browser handle the click normally
  if (e.target.closest('a')) return; 

  startY = e.clientY;
  isDragging = true;
  track.setPointerCapture(e.pointerId);
});;

    track.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaY = startY - e.clientY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentIndex < cards.length - 1) {
          currentIndex++;
          renderStackPositions();
          isDragging = false;
        } else if (deltaY < 0 && currentIndex > 0) {
          currentIndex--;
          renderStackPositions();
          isDragging = false;
        }
      }
    });

    const stopDrag = () => { isDragging = false; };
    track.addEventListener('pointerup', stopDrag);
    track.addEventListener('pointercancel', stopDrag);
  }, 100); 

  // Return the pure HTML template string safely
  return `
    <section class="pro-section" id="projects">
      <div class="pro-panel-container">
        <h3 class="pro-title">PROJECTS</h3>

        <div class="projects-carousel-stage">
          <div class="projects-deck-track" style="touch-action: none;">
            ${generateProjectsHTML(projectsData)}
          </div>

          <div class="vertical-stack-controls">
            <button class="stack-nav-btn up-btn" id="stackPrevBtn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <button class="stack-nav-btn down-btn" id="stackNextBtn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}