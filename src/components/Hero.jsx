import React from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="section" style={styles.hero} id="home">
            <div className="container" style={styles.container}>
                <motion.div
                    className="hero-card"
                    style={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="hero-layout" style={styles.heroLayout}>
                        {/* Profile Picture - Center */}
                        <motion.div
                            style={styles.imageContainer}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        >
                            <div style={styles.imageWrapper}>
                                <img
                                    src={heroImg}
                                    alt="Simran Rani Profile"
                                    style={styles.image}
                                    onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Simran+Rani&background=0d1117&color=38bdf8&size=512"; }}
                                />
                            </div>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={styles.badgeWrapper}
                        >
                            <span style={styles.badge}>Open to Opportunities</span>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            className="hero-text-content"
                            style={styles.textContent}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h1 style={styles.name}>Hi, I'm Simran Rani</h1>
                            <h2 style={styles.title}>Frontend Developer & AI Enthusiast</h2>
                            <p style={styles.description}>
                                IT undergraduate building real-world projects in <span style={styles.highlight}>Web Development</span> and <span style={styles.highlight}>AI</span>. Passionate
                                problem solver dedicated to exploring the intersections of Machine Learning and modern web technologies.
                            </p>
                            <div className="hero-button-group" style={styles.buttonGroup}>
                                <a href="/my_cv.pdf" download="Simran_Rani_Resume.pdf" className="btn hero-btn-primary" style={styles.btnPrimary}>
                                    <Download size={20} /> Download Resume
                                </a>
                                <a href="#projects" className="btn hero-btn-outline" style={styles.btnOutline}>
                                    View Projects <ArrowDown size={20} />
                                </a>
                            </div>
                            <motion.div
                                className="hero-social-column"
                                style={styles.socialColumn}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <a href="mailto:simranrani78295@gmail.com" className="hero-social-icon" style={styles.socialIcon} title="Email">
                                    <Mail size={22} />
                                </a>
                                <a href="https://github.com/Simran-rani78" target="_blank" rel="noopener noreferrer" className="hero-social-icon" style={styles.socialIcon} title="GitHub">
                                    <Github size={22} />
                                </a>
                                <a href="https://www.linkedin.com/in/simran-rani78/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" style={styles.socialIcon} title="LinkedIn">
                                    <Linkedin size={22} />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const styles = {
    hero: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px', 
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.05) 0%, transparent 50%)',
    },
    card: {
        backgroundColor: '#0b1120',
        border: '1px solid #1e293b',
        borderRadius: '1.25rem',
        padding: '3rem 2.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '1200px',
    },
    heroLayout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0',
        width: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        width: '100%',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.5rem',
    },
    imageWrapper: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #38bdf8',
        boxShadow: '0 0 30px rgba(56, 189, 248, 0.4)',
        backgroundColor: '#0f172a',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',
        transform: 'scale(1.0)',
    },
    badgeWrapper: {
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
    },
    badge: {
        display: 'inline-block',
        padding: '0.4rem 1.2rem',
        borderRadius: '2rem',
        border: '1px solid rgba(56, 189, 248, 0.5)',
        color: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.05)',
        fontSize: '0.95rem',
        fontWeight: '500',
        boxShadow: '0 0 15px rgba(56, 189, 248, 0.1)',
        letterSpacing: '0.5px',
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
    },
    name: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: '700',
        marginBottom: '0.5rem',
        color: '#ffffff',
        lineHeight: '1.2',
        letterSpacing: '-1px',
    },
    title: {
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        fontWeight: '700',
        background: 'linear-gradient(to right, #38bdf8, #818cf8)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1.5rem',
        letterSpacing: '-1px',
    },
    description: {
        fontSize: '1.15rem',
        color: '#94a3b8',
        maxWidth: '650px',
        marginBottom: '2.5rem',
        lineHeight: '1.6',
    },
    highlight: {
        color: '#38bdf8',
        fontWeight: '500',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    btnPrimary: {
        backgroundColor: '#38bdf8',
        color: '#020617',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.9rem 2.2rem',
        borderRadius: '2rem',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
    },
    btnOutline: {
        backgroundColor: '#020617',
        color: '#f8fafc',
        border: '1px solid #1e293b',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.9rem 2.2rem',
        borderRadius: '2rem',
        fontWeight: '500',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
    },
    socialColumn: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1.2rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
    },
    socialGroup: {
        display: 'flex',
        gap: '1.2rem',
        justifyContent: 'center',
        marginTop: '3rem',
    },
    socialIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#020617',
        color: '#94a3b8',
        border: '1px solid #1e293b',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
    },
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 768px) {
    .hero-card {
      padding: 2rem 1.5rem !important;
    }
  }
  .hero-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.6) !important;
    background-color: #7dd3fc !important;
  }
  .hero-btn-outline:hover {
    border-color: #38bdf8 !important;
    color: #38bdf8 !important;
    background-color: rgba(56, 189, 248, 0.05) !important;
  }
  .hero-social-icon:hover {
    color: #38bdf8 !important;
    border-color: #38bdf8 !important;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.2);
  }
`;
document.head.appendChild(styleSheet);

export default Hero;
