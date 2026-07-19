import "./about.css";
import { initPortrait } from "./portrait";

export function About() {

/* REPLACE the setTimeout block in about.js with this: */
setTimeout(() => {
    const aboutSection = document.getElementById("about");
    const timelineWrapper = document.querySelector(".about-horizontal-timeline-wrapper");
    
    // 1. Observer for the top About content
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutSection.classList.add("active");
                    initPortrait();
                    aboutObserver.disconnect();
                }
            });
        }, { threshold: 0.10 });
        
        aboutObserver.observe(aboutSection);
    }

    // 2. NEW: Independent observer just for the Timeline
    if (timelineWrapper) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timelineWrapper.classList.add("timeline-active"); // <-- New specific trigger class
                    timelineObserver.disconnect();
                }
            });
        }, { 
            threshold: 0.20, // Triggers when 20% of the timeline is visible
            rootMargin: "0px 0px -50px 0px" // Slight buffer so it triggers cleanly as you scroll down
        });
        
        timelineObserver.observe(timelineWrapper);
    }
}, 100);
  
  return `
    <section class="about" id="about">
      <!-- Animated Background Waves Layer -->
      <div class="about-bg-waves">
        <div class="wave wave-1"></div>
        <div class="wave wave-2"></div>
        <div class="wave wave-3"></div>
      </div>

      <div class="about-container">
        
        <!-- Left Side: Video Container (Green Box Zone) -->
        <div class="about-left">
          <div class="about-illustration portrait-container">
              <canvas id="mosaicCanvas"></canvas>
          </div>
        </div>

        <!-- Right Side: Content -->
        <div class="about-right">
          <p class="about-tag">ABOUT ME</p>
          <h2 class="about-title">Who I Am</h2>
          <p class="about-description">
            I'm a Computer Science student passionate about building modern, interactive, and user-focused digital experiences. I enjoy transforming ideas into functional applications by combining clean code, thoughtful design, and problem-solving. While web development is my primary focus, I'm continuously expanding my knowledge in Data Analytics, Artificial Intelligence, and Machine Learning to better understand how data and intelligent systems can create smarter, real-world solutions. With every project, I strive to build applications that are responsive, intuitive, scalable, and visually engaging while continuously learning, improving, and growing as a developer.
          </p>

          <!-- Infinite Sliding Attributes Carousel -->
          <div class="about-cards-carousel">
            <div class="about-cards-track">
              
              <!-- Card 1 -->
              <div class="about-mini-card">
                <div class="about-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
                    <path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <h3>Continuous Learning</h3>
                <p>Always learning, improving, and embracing new technologies.</p>
              </div>

              <!-- Card 2 -->
              <div class="about-mini-card">
                <div class="about-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Teamwork</h3>
                <p>Collaborating effectively to achieve shared goals.</p>
              </div>

              <!-- Card 3 -->
              <div class="about-mini-card">
                <div class="about-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Growth Mindset</h3>
                <p>Embracing challenges, feedback, and continuous improvement.</p>
              </div>

              <!-- Card 4 -->
              <div class="about-mini-card">
                <div class="about-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <h3>Communication</h3>
                <p>Sharing ideas clearly and working effectively with others.</p>
              </div>

              <!-- Card 5 -->
              <div class="about-mini-card">
                <div class="about-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3>Time Management</h3>
                <p>Prioritizing tasks and delivering work efficiently.</p>
              </div>

              <!-- Duplicates for Seamless Endless Loop -->
              <div class="about-mini-card"><div class="about-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/><path d="M12 8v4l3 3"/></svg></div><h3>Continuous Learning</h3><p>Always learning, improving, and embracing new technologies.</p></div>
              <div class="about-mini-card"><div class="about-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3>Teamwork</h3><p>Collaborating effectively to achieve shared goals.</p></div>
              <div class="about-mini-card"><div class="about-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><h3>Growth Mindset</h3><p>Embracing challenges, feedback, and continuous improvement.</p></div>
              <div class="about-mini-card"><div class="about-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><h3>Communication</h3><p>Sharing ideas clearly and working effectively with others.</p></div>
              <div class="about-mini-card"><div class="about-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3>Time Management</h3><p>Prioritizing tasks and delivering work efficiently.</p></div>

            </div>
          </div>

        </div>
      </div>

      <!-- Unified Horizontal Timeline Section (Centered Title + Chapters) -->
      <div class="about-horizontal-timeline-wrapper">
        <h3 class="timeline-section-title">MY GROWTH JOURNEY</h3>
        <p class="timeline-section-subtitle">Every step reflects a story of learning, collaboration, creativity and continuous growth shaping who I am today and inspiring who I strive to become.</p>
        <div class="horizontal-timeline-container">
          <div class="timeline-axis-line"></div>
          
          <div class="horizontal-timeline-items">
            
            <!-- Chapter 1: Above Line -->
            <div class="horizontal-timeline-item top-node">
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 1</div>
                <h4 class="timeline-item-title">Where It All Began</h4>
                <p class="timeline-item-desc">The first step into Computer Science, driven by curiosity and creativity.</p>
              </div>
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
            </div>

            <!-- Chapter 2: Below Line -->
            <div class="horizontal-timeline-item bottom-node">
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 2</div>
                <h4 class="timeline-item-title">Creativity Meets Code</h4>
                <p class="timeline-item-desc">Discovering the balance between design, user experience, and development.</p>
              </div>
            </div>

            <!-- Chapter 3: Above Line -->
            <div class="horizontal-timeline-item top-node">
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 3</div>
                <h4 class="timeline-item-title">Learning Together</h4>
                <p class="timeline-item-desc">Building projects with teammates and growing through collaboration.</p>
              </div>
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
            </div>

            <!-- Chapter 4: Below Line -->
            <div class="horizontal-timeline-item bottom-node">
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 4</div>
                <h4 class="timeline-item-title">Leading with Purpose</h4>
                <p class="timeline-item-desc">Stepping into leadership during Smart India Hackathon.</p>
              </div>
            </div>

            <!-- Chapter 5: Above Line -->
            <div class="horizontal-timeline-item top-node">
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 5</div>
                <h4 class="timeline-item-title">Turning Knowledge into Experience</h4>
                <p class="timeline-item-desc">Applying my skills through a web development internship.</p>
              </div>
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
            </div>

            <!-- Chapter 6: Below Line -->
            <div class="horizontal-timeline-item bottom-node">
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 6</div>
                <h4 class="timeline-item-title">Building Beyond Classroom</h4>
                <p class="timeline-item-desc">Developing AI-powered solutions that solve real-world challenges.</p>
              </div>
            </div>

            <!-- Chapter 7: Above Line -->
            <div class="horizontal-timeline-item top-node">
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 7</div>
                <h4 class="timeline-item-title">Always Improving</h4>
                <p class="timeline-item-desc">Continuously exploring Full-Stack, Data Analytics, AI, and Machine Learning.</p>
              </div>
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
            </div>

            <!-- Chapter 8: Below Line -->
            <div class="horizontal-timeline-item bottom-node">
              <div class="timeline-interactive-dot">
                <span class="inner-glowing-dot"></span>
              </div>
              <div class="timeline-content-block">
                <div class="timeline-date">Chapter 8</div>
                <h4 class="timeline-item-title">The Story Continues...</h4>
                <p class="timeline-item-desc">Every project, challenge, and lesson is shaping the developer I'm becoming.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  `;
}