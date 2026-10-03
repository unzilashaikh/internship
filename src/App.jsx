import React from 'react';
import { motion } from 'framer-motion';
import profileImg from './assets/unzila.png';
import signatureImg from './assets/signature.png';

function App() {
  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="#home">
                <img src={signatureImg} alt="Unzila Sheikh" className="signature-logo" />
              </a>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="greeting">Hello, my name is</p>
              <h1>
                <span className="signature-text">Unzila Sheikh</span>
                <span>I build professional web solutions.</span>
              </h1>
              <p className="description">
                I am a software engineer specializing in building exceptional digital experiences. 
                Currently, I am focused on building accessible, human-centered products utilizing 
                modern web technologies like React, JavaScript, HTML, and CSS.
              </p>
              <div>
                <a href="#contact" className="btn">Get In Touch</a>
                <a href="#about" className="btn btn-outline">Learn More</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="image-wrapper">
                <img src={profileImg} alt="Unzila Sheikh" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <motion.div 
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">My professional journey and background.</p>
            
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Hello! I am Unzila, a passionate web developer with a keen interest in creating 
                  clean, efficient, and scalable code. My journey in web development started with 
                  crafting simple HTML/CSS pages, which eventually led me to explore complex JavaScript 
                  frameworks like React.
                </p>
                <p>
                  I enjoy bridging the gap between engineering and design—combining my technical knowledge 
                  with a strong eye for aesthetics to create beautiful and highly functional applications.
                </p>
                <p>
                  When I am not at my computer, I am usually reading about new technologies, contributing 
                  to open-source projects, or refining my software architecture skills.
                </p>
              </div>

              <div className="about-experience">
                <div className="experience-item">
                  <h4>Frontend Developer</h4>
                  <div className="date">2024 - Present</div>
                  <p>Developing responsive and performant web applications using React and modern CSS architecture.</p>
                </div>
                <div className="experience-item">
                  <h4>Web Design Intern</h4>
                  <div className="date">2023 - 2024</div>
                  <p>Assisted in designing user interfaces and translating design mockups into functional HTML/CSS templates.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services">
          <motion.div 
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title">My Services</motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">What I can do for you.</motion.p>

            <div className="services-grid">
              <motion.div variants={fadeInUp} className="service-card">
                <h3>Frontend Development</h3>
                <p>Building responsive, interactive, and high-performance user interfaces using React, JavaScript, and modern CSS.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="service-card">
                <h3>UI/UX Implementation</h3>
                <p>Translating Figma designs and wireframes into pixel-perfect, accessible, and smooth web applications.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="service-card">
                <h3>Website Maintenance</h3>
                <p>Improving existing websites, fixing bugs, and optimizing performance and SEO for better user experience.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <motion.div 
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title">Technical Expertise</motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">Technologies and tools I work with.</motion.p>

            <div className="skills-grid">
              <motion.div variants={fadeInUp} className="skill-category">
                <h3>Frontend Development</h3>
                <ul className="skill-list">
                  <li>React.js & Hooks</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & Semantic UI</li>
                  <li>CSS3 & Responsive Design</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp} className="skill-category">
                <h3>Tools & Architecture</h3>
                <ul className="skill-list">
                  <li>Git & GitHub</li>
                  <li>Vite & Webpack</li>
                  <li>RESTful APIs</li>
                  <li>Clean Code Practices</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp} className="skill-category">
                <h3>Design Integration</h3>
                <ul className="skill-list">
                  <li>Figma to Code</li>
                  <li>UI/UX Fundamentals</li>
                  <li>CSS Variables & Flexbox/Grid</li>
                  <li>Web Accessibility (a11y)</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <motion.div 
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title">Featured Projects</motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">Here are some of my recent works.</motion.p>
            
            <div className="projects-grid">
              <motion.div variants={fadeInUp} className="project-card">
                <h3>CoinVert</h3>
                <p>A full Flutter + Firebase app for live currency conversion, peer to peer transfers, rate alerts, market news, and an admin panel.</p>
                <div className="tech-stack"><span>Flutter</span><span>Dart</span><span>Firebase</span></div>
                <div className="project-links">
                  <a href="https://coinvertt.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                  <a href="https://github.com/unzilashaikh/coinvert" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="project-card">
                <h3>HK Herbals</h3>
                <p>A responsive React storefront for herbal wellness home, shop, contact & cart pages live on Netlify, with full-stack code.</p>
                <div className="tech-stack"><span>React</span><span>Node.js</span><span>Netlify</span></div>
                <div className="project-links">
                  <a href="https://hkherbal.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                  <a href="https://github.com/unzilashaikh/hk" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="project-card">
                <h3>LuxuryStay</h3>
                <p>LuxuryStay combines a public marketing site with four role-based portals (Admin, Receptionist, Housekeeping & Guest) all on one React front end.</p>
                <div className="tech-stack"><span>React</span><span>Express</span><span>MongoDB</span></div>
                <div className="project-links">
                  <a href="https://stayluxury.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                  <a href="https://github.com/unzilashaikh/luxurystay" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="project-card">
                <h3>Desi Food Corner</h3>
                <p>A playful restaurant website for Pathan Hotel home, priced menu, brand story, contact form, and a breakfast offer popup.</p>
                <div className="tech-stack"><span>React</span><span>MUI</span><span>Framer Motion</span></div>
                <div className="project-links">
                  <a href="https://desifoodcorner.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                  <a href="https://github.com/unzilashaikh/desi-food-corner" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="project-card">
                <h3>Brick & Mortar</h3>
                <p>A Flutter mobile bookstore: browse books, search & filter, wishlist, cart, orders, reviews, and Firebase auth.</p>
                <div className="tech-stack"><span>Flutter</span><span>Firebase Auth</span></div>
                <div className="project-links">
                  <a href="https://brickandmortar.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
                  <a href="https://github.com/unzilashaikh/bookstore" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <motion.div 
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="contact-container">
              <h2 className="section-title">Let's Connect</h2>
              <p>
                I am currently open to new opportunities. Whether you have a question, 
                a project proposal, or just want to say hi, I will try my best to get back to you!
              </p>

              <form className="contact-form" action="https://formsubmit.co/unzilasheikhh@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }}>
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <motion.a 
        href="https://wa.me/923271055360" 
        className="floating-whatsapp" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Chat with me on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </motion.a>

      <footer>
        <div className="container footer-content">
          <div className="footer-brand">
            <img src={signatureImg} alt="Unzila Sheikh" className="signature-logo-footer" />
            <p>Building accessible, human-centered products for the modern web.</p>
          </div>
          <div className="footer-links">
            <h4>Social Profiles</h4>
            <a href="https://www.linkedin.com/in/unzila-shaikh-2000ba2b1/?isSelfProfile=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/unzilashaikh" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Unzila Sheikh. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
