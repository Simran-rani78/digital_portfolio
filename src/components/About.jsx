import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section" id="about" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={styles.titleWrapper}
                >
                    <h2 className="section-title" style={styles.title}>About Me</h2>
                </motion.div>

                <motion.div
                    className="about-card"
                    style={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p style={styles.text}>
                        I'm a dedicated <span style={styles.highlight}>Information Technology</span> student at Lovely Professional University (B.Tech, CGPA 7.73), with a strong foundation in <span style={styles.highlight}>modern web development</span> and artificial intelligence.
                    </p>
                    <p style={styles.text}>
                        My journey involves working on <span style={styles.highlight}>complex problem-solving</span> (220+ problems on LeetCode/CodeChef) and building impactful projects like an EcoPlastic awareness platform and a Facial Emotion Recognition system.
                    </p>
                    <p style={styles.text}>
                        Having interned at <span style={styles.highlight}>Microsoft x Edunet Foundation</span> in AI, I am passionate about bridging the gap between innovative AI models and responsive, recruiter-friendly web interfaces.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        paddingTop: '6rem',
        paddingBottom: '6rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    titleWrapper: {
        marginBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        margin: 0, // override default section-title margin if needed
    },
    card: {
        backgroundColor: '#0b1120', // deep dark blue/black matching screenshot
        border: '1px solid #1e293b', // subtle border
        borderRadius: '1rem',
        padding: '3rem 4rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem', // spacing between paragraphs
        width: '100%',
    },
    text: {
        color: '#94a3b8', // slate gray
        fontSize: '1.15rem',
        lineHeight: '1.8',
        margin: 0,
        fontWeight: '400',
    },
    highlight: {
        color: '#38bdf8', // cyan
        fontWeight: '500',
    }
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 768px) {
    .about-card {
      padding: 2rem 1.5rem !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default About;
