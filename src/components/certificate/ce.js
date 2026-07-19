import "./ce.css";

export function Certificates() {
  const certificatesData = [
    {
      id: "01",
      title: "Introduction to Tableau",
      platform: "Coursera (Salesforce)",
      date: "Oct 2025",
      photoUrl: "/photo/1.png", 
      link: "https://drive.google.com/file/d/1xiYxQkfpjzqSA7VG6O_OtCD_0S2zI7Z7/view?usp=drive_link"
    },
    {
      id: "02",
      title: "Data Modeling in Power BI",
      platform: "Coursera (Microsoft)",
      date: "Apr 2026",
      photoUrl: "/photo/power bi.png",
      link: "https://drive.google.com/file/d/1Lvg7b6nU61zWBHVYgeOz4NjDuq5lIB09/view?usp=drive_link"
    },
    {
      id: "03",
      title: "Programming for Everybody (Getting Started with Python)",
      platform: "Coursera (University of Michigan)",
      date: "Feb 2025",
      photoUrl: "/photo/python.png",
      link: "https://drive.google.com/file/d/1JMQdXVfphnpX3VNE9oLflUzhsMmWgUng/view?usp=drive_link"
    },
    {
      id: "04",
      title: "What is Data Science?",
      platform: "Coursera (IBM)",
      date: "Feb 2025",
      photoUrl: "/photo/data_science .png",
      link: "https://drive.google.com/file/d/1Mpv9f12UMTbpp0bCdtZwI2otvGNpO280/view?usp=drive_link"
    },
     {
      id: "05",
      title: "Computational Thinking for Problem Solving",
      platform: "Coursera (University of Pennsylvania)",
      date: "Dec 2023",
      photoUrl: "/photo/ci.png",
      link: "https://drive.google.com/file/d/1gNBOVpxIR6wm36Ec5nd-eFCCt6kNb_o7/view?usp=drive_link"
    },
     {
      id: "06",
      title: "Data Visualization with R",
      platform: "Cognitiveclass.ai (IBM)",
      date: "Feb 2026",
      photoUrl: "/photo/visualization.png",
      link: "https://drive.google.com/file/d/1S8V6HBaRptI8GnBVJsOwHP1RxiXmgIr7/view?usp=drive_link"
    },
     {
      id: "07",
      title: "R for Data Science",
      platform: "Cognitiveclass.ai (IBM)",
      date: "Feb 2026",
      photoUrl: "/photo/r.png",
      link: "https://drive.google.com/file/d/1X6TLSg6-I3XIEcGS6B5HPDP7R7F7S182/view?usp=drive_link"
    },
     {
      id: "08",
      title: "Certificate of Internship Completion",
      platform: "SkillCraft Technology",
      date: "Jun 2025",
      photoUrl: "/photo/internship.png",
      link: "https://drive.google.com/file/d/1dELZVCdy-tPz846Gb-T1BWyoI-VcDSJB/view?usp=drive_link"
    },
     {
      id: "09",
      title: "Introduction to Cybersecurity",
      platform: "CISCO Networking Academy",
      date: "Apr 2026",
      photoUrl: "/photo/cyber.png",
      link: "https://drive.google.com/file/d/1ayPPXph57OtXlglawgtEEbbFPkIopmsI/view?usp=drive_link"
    },
    {
      id: "10",
      title: "Certificate of Participationn",
      platform: "Smart India Hackathon 2025",
      date: "Sep 2026",
      photoUrl: "/photo/sih.png",
      link: "https://drive.google.com/file/d/1EpBZAAJG7T5Hp0fCeb9ywuCYsfKDO9Sr/view?usp=drive_link"
    },

  ];

  window.scrollCertificates = (direction) => {
    const track = document.querySelector(".cert-grid-track");
    if (!track) return;
    
    const scrollAmount = direction === "left" ? -580 : 580;
    track.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  };

  const generateCertificatesHTML = (items) => items.map(cert => `
    <div class="cert-card" onclick="window.open('${cert.link}', '_blank', 'noopener,noreferrer')">
      
      <div class="cert-id">${cert.id}</div>
      
      <div class="cert-photo-container">
        <img src="${cert.photoUrl}" alt="${cert.title} preview" class="cert-small-photo" />
      </div>
      
      <div class="cert-main-content">
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-meta-details">
          <p class="cert-date">${cert.date}</p>
          <p class="cert-platform">${cert.platform}</p>
        </div>
      </div>

    </div>
  `).join("");

  setTimeout(() => {
    const certSection = document.getElementById("certificates");
    
    if (certSection) {
        const certObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    certSection.classList.add("cert-active");
                    certObserver.disconnect(); // Triggers once on first structural scroll context
                }
            });
        }, { 
            threshold: 0.15 
        });
        
        certObserver.observe(certSection);
    }
  }, 100);

  return `
    <section class="cert-section" id="certificates">
      
      <!-- Free Floating Corner-Heavy Geometric Canvas -->
      <div class="cert-ambient-canvas">
        
        <!-- === TOP-LEFT RED CIRCLE ZONE === -->
        <div class="ambient-node dot-small ds-tl-1"></div>
        <div class="ambient-node dot-large dl-tl-1"></div>
        <div class="ambient-node box-shape box-tl-1"></div>
        <div class="ambient-node box-shape box-tl-2"></div>

        <!-- === TOP-RIGHT RED CIRCLE ZONE === -->
        <div class="ambient-node dot-small ds-tr-1"></div>
        <div class="ambient-node dot-large dl-tr-1"></div>
        <div class="ambient-node box-shape box-tr-1"></div>
        <div class="ambient-node box-shape box-tr-2"></div>

        <!-- === BOTTOM-LEFT OUTER ZONE === -->
        <div class="ambient-node dot-small ds-bl-1"></div>
        <div class="ambient-node dot-large dl-bl-1"></div>
        <div class="ambient-node box-shape box-bl-1"></div>

        <!-- === BOTTOM-CENTER RED CIRCLE ZONE === -->
        <div class="ambient-node dot-small ds-bc-1"></div>
        <div class="ambient-node dot-large dl-bc-1"></div>
        <div class="ambient-node box-shape box-bc-1"></div>
        <div class="ambient-node box-shape box-bc-2"></div>

        <!-- === BOTTOM-RIGHT OUTER ZONE === -->
        <div class="ambient-node dot-small ds-br-1"></div>
        <div class="ambient-node dot-large dl-br-1"></div>
        <div class="ambient-node box-shape box-br-1"></div>
      </div>

      <div class="cert-panel-container">
        
        <h3 class="cert-section-title">CERTIFICATES</h3>

        <div class="cert-carousel-wrapper">
          <button class="cert-nav-btn" onclick="scrollCertificates('left')">
            <span>&lsaquo;</span>
          </button>

          <div class="cert-grid-track">
            ${generateCertificatesHTML(certificatesData)}
          </div>

          <button class="cert-nav-btn" onclick="scrollCertificates('right')">
            <span>&rsaquo;</span>
          </button>
        </div>

      </div>
    </section>
  `;
}