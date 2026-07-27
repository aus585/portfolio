import "./contact.css";

export function Contact() {
  // Set up a tiny delay to ensure the DOM is painted before we attach the form logic
  setTimeout(() => {
    const contactSection = document.getElementById('contact');
    const form = document.getElementById('portfolio-form');
    const result = document.getElementById('form-result');

    /* ADDED HERE: IntersectionObserver setup for Scroll Entrance */
    if (contactSection) {
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    contactSection.classList.add("contact-active");
                    contactObserver.disconnect(); // Triggers only once on entrance
                }
            });
        }, { 
            threshold: 0.15 
        });
        
        contactObserver.observe(contactSection);
    }

    if (form && result) {
      form.addEventListener('submit', function(e) {
        e.preventDefault(); // Stops the page from redirecting
        
        result.style.color = "gray";
        result.innerHTML = "Sending message...";

       const formData = new FormData(form);

// Add the key from the environment variable
formData.append(
  "access_key",
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
);

const object = Object.fromEntries(formData);
const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let res = await response.json();
                if (response.status == 200) {
                    result.style.color = "green"; // Turns text green on success
                    result.innerHTML = "Email sent successfully!";
                    form.reset(); // Clears your input fields (Name, Email, Message)

                    // NEW: Automatically hides the success message after 4 seconds
                    setTimeout(() => {
                      result.innerHTML = "";
                    }, 4000);

                } else {
                    result.style.color = "red"; // Turns text red on error
                    result.innerHTML = res.message || "Something went wrong!";

                    // NEW: Automatically hides the error message after 4 seconds
                    setTimeout(() => {
                      result.innerHTML = "";
                    }, 4000);
                }
            })
            .catch(error => {
                result.style.color = "red";
                result.innerHTML = "Network error. Please try again later.";

                // NEW: Automatically hides the network error after 4 seconds
                setTimeout(() => {
                  result.innerHTML = "";
                }, 4000);
            });
      });
    }
  }, 100);

  return `
    <section class="contact-section" id="contact">
      
      <!-- BACKGROUND WAVES ONLY -->
      <div class="wave-background-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path class="wave-shade-dark" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,176C672,171,768,213,864,229.3C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path class="wave-shade-light" d="M0,64L48,90.7C96,117,192,171,288,181.3C384,192,480,160,576,133.3C672,107,768,85,864,101.3C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <!-- MAIN CONTENT WRAPPER -->
      <div class="contact-container">
        
        <!-- LEFT PANEL: Header text & Vertical Social List -->
        <div class="contact-left-side">
          <div class="subtitle-badge">
            <span class="subtitle-text">GET IN TOUCH</span>
            <div class="subtitle-line"></div>
          </div>
          
          <h2 class="main-title">Let's<br><span class="purple-text">Connect.</span></h2>
          <p class="section-description">
            Have a project in mind or just want to say hi? I'd love to hear from you. Let's build something amazing together!
          </p>
          <div class="section-divider"></div>

          <!-- Vertical Social Items -->
          <div class="social-links-column">
            <h5 class="social-header-label">FIND ME ON</h5>
            <div class="social-list">
              <a href="https://github.com/aus585" class="social-item" target="_blank" rel="noopener noreferrer">
                <div class="icon-container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </div>
                <span class="social-name">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/aryan-shirke-a22a5a2a2/" class="social-item" target="_blank" rel="noopener noreferrer">
                <div class="icon-container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <span class="social-name">LinkedIn</span>
              </a>

              <a href="https://www.instagram.com/aryan_shirke17/" class="social-item" target="_blank" rel="noopener noreferrer">
                <div class="icon-container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
                <span class="social-name">Instagram</span>
              </a>

              <a href="mailto:aaryana1u5s.shirke@gmail.com" class="social-item">
                <div class="icon-container">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <span class="social-name">Email Me Directly</span>
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT PANEL: Connected Message Form Box -->
        <div class="contact-form-card">
          <div class="form-title-row">
            <div class="title-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
            <div class="title-text">
              <h4>Send a Message</h4>
              <p>Fill out the form below and I'll get back to you shortly.</p>
            </div>
          </div>

          <form class="message-form" id="portfolio-form" action="https://api.web3forms.com/submit" method="POST">

            <div class="form-row">
              <div class="input-box">
                <svg class="inner-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <input type="text" name="name" placeholder="Your Name" required/>
              </div>
              <div class="input-box">
                <svg class="inner-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <input type="email" name="email" placeholder="Your Email" required/>
              </div>
            </div>

            <div class="input-box full-width">
              <svg class="inner-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <input type="text" name="subject" placeholder="Subject" required/>
            </div>

            <div class="input-box full-width message-height">
              <svg class="inner-field-icon text-area-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" class="submit-button">
              <span>SEND MESSAGE</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>

           <div id="form-result" style="margin-top: 15px; font-weight: 500; text-align: center; font-size: 14px; min-height: 20px;"></div>
          </form>

          <div class="privacy-footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Your information will never be shared.</span>
          </div>
        </div>

      </div> <!-- End of .contact-container -->

      <!-- NEW: COPYRIGHT LINE PLACED AT THE VERY BOTTOM -->
      <div class="section-copyright">
        <span>&copy; ${new Date().getFullYear()} Aryan Shirke. All rights reserved.</span>
      </div>

    </section>
  `;
}
