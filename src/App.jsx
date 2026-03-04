import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Menu, X, Paintbrush, Layout, PenTool, Monitor,
  Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'portfolio', 'skills', 'services', 'contact'];
      let current = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const portfolioItems = [
    { id: 1, title: 'Brand Identity', category: 'Branding', image: '/portfolio_1.png' },
    { id: 2, title: 'Minimalist Logo', category: 'Logo Design', image: '/portfolio_2.png' },
    { id: 3, title: 'Festival Poster', category: 'Print Design', image: '/portfolio_3.png' },
  ];

  const services = [
    { id: 1, icon: <Layout size={40} />, title: 'UI/UX Design', description: 'Creating beautiful, intuitive, and modern interfaces for diverse digital products.' },
    { id: 2, icon: <Paintbrush size={40} />, title: 'Brand Identity', description: 'Crafting memorable visual identities that speak directly to your audience.' },
    { id: 3, icon: <PenTool size={40} />, title: 'Illustration', description: 'Custom digital and vector illustrations tailored to your brand narrative.' },
    { id: 4, icon: <Monitor size={40} />, title: 'Web Design', description: 'Responsive and visually striking websites built for performance and conversions.' },
  ];

  const skills = [
    { name: 'Adobe Photoshop', level: '95%' },
    { name: 'Adobe Illustrator', level: '90%' },
    { name: 'Figma', level: '85%' },
    { name: 'InDesign', level: '80%' },
    { name: 'After Effects', level: '70%' },
    { name: 'Typography', level: '95%' },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <img src="/hero_bg.png" alt="Background" className="hero-bg animate-fade-in-up" />
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text animate-fade-in-up">
            <span className="tagline">Graphic Designer & Illustrator</span>
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient hero-name">Nikhat Shaikh</span><br />
              Crafting Visual Stories.
            </h1>
            <p className="hero-description">
              I am a passionate Graphic Designer specializing in brand identity, UI/UX, and illustration. I translate complex ideas into elegant visual experiences.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-primary btn-outline">Contact Me</a>
            </div>
          </div>

          <div className="hero-image animate-float flex-center">
            <div className="hero-image-wrapper">
              <img src="/nikhat.jpg" alt="Nikhat Shaikh" className="img-block" />
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll Down</span>
          <div className="mouse flex-center">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-surface">
        <div className="container">
          <h2 className="section-title animate-fade-in-up">Selected Works</h2>

          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div className="portfolio-card animate-fade-in-up" key={item.id}>
                <div className="portfolio-img-container">
                  <img src={item.image} alt={item.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-info-overlay">
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center-mt-4">
            <a href="#" className="btn-primary">View Full Portfolio</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title animate-fade-in-up">My Expertise</h2>

          <div className="skills-container animate-fade-in-up">
            <div className="skills-column">
              <h3>Design Skills</h3>
              {skills.slice(0, 3).map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div className={`skill-progress w-${parseInt(skill.level)}`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-column">
              <h3>Technical Tools</h3>
              {skills.slice(3, 6).map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-surface">
        <div className="container">
          <h2 className="section-title animate-fade-in-up">What I Do</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card animate-fade-in-up" key={service.id}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title animate-fade-in-up">Get In Touch</h2>

          <div className="contact-wrapper animate-fade-in-up">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>Have a project in mind or just want to say hi? Feel free to reach out. I'm currently available for freelance projects.</p>

              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4 className="contact-title">Email</h4>
                  <a href="mailto:hello@nikhatshaikh.com" className="contact-text">hello@nikhatshaikh.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <h4 className="contact-title">Phone</h4>
                  <a href="tel:+123456789" className="contact-text">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4 className="contact-title">Location</h4>
                  <span className="contact-text">New York, NY - Remote Available</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message"></textarea>
              </div>
              <button className="btn-primary btn-submit">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="social-links animate-fade-in-up">
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Github size={20} /></a>
          </div>
          <p className="footer-text">© {new Date().getFullYear()} Nikhat Shaikh. All rights reserved. Designed with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
