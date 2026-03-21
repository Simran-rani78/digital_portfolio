import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: 'AI Intern',
            company: 'Microsoft x Edunet Foundation',
            date: 'April 2025 – May 2025',
            certificate: 'https://drive.google.com/file/d/1emMOV1KCiHkhroaEYDdEdbQ7wscF3TJk/view?usp=drive_link',
            points: [
                'Completed an internship on Foundations of AI under Microsoft\'s Future Skills initiative.',
                'Gained hands-on understanding of AI basics, ML concepts and real-world applications.',
                'Developed analytical thinking and problem-solving skills through practical exercises.'
            ]
        },
        {
            title: 'AI & ML Trainee',
            company: 'Lovely Professional University',
            date: 'June 2025 – July 2025',
            certificate: 'https://drive.google.com/file/d/1w7ejjs20DniNnG-LtFmz4NHk3vkRWsb0/view?usp=drive_link',
            points: [
                'Completed structured training in core AI and ML (supervised, unsupervised, deep learning).',
                'Built and evaluated ML models using Python, improving analytical and implementation skills.',
                'Applied concepts to real-world cases, creating ML solutions that demonstrated measurable prediction accuracy.'
            ]
        }
    ];

    return (
        <section className="section" id="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Experience & Training
                </motion.h2>

                <div style={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            style={styles.timelineItem}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div style={styles.timelineIcon}>
                                <Briefcase size={20} />
                            </div>
                            <motion.div
                                className="timeline-content glass-card"
                                style={styles.timelineContent}
                                whileHover={{ y: -5, scale: 1.01 }}
                            >
                                <div style={styles.titleRow}>
                                    <h3 style={styles.title}>{exp.title}</h3>
                                    {exp.certificate && (
                                        <a
                                            href={exp.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.certBtn}
                                            className="cert-btn"
                                        >
                                            <ExternalLink size={13} /> Certificate
                                        </a>
                                    )}
                                </div>
                                <div style={styles.metaInfo}>
                                    <span style={styles.company}>{exp.company}</span>
                                    <span style={styles.date}>
                                        <Calendar size={14} /> {exp.date}
                                    </span>
                                </div>
                                <ul style={styles.pointsList}>
                                    {exp.points.map((point, i) => (
                                        <li key={i} style={styles.point}>{point}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    timeline: {
        position: 'relative',
        maxWidth: '850px',
        margin: '0 auto',
        padding: '2rem 0',
    },
    timelineItem: {
        position: 'relative',
        paddingLeft: '3.5rem',
        marginBottom: '3rem',
    },
    timelineIcon: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        boxShadow: '0 0 0 6px var(--bg-color)',
    },
    timelineContent: {
        backgroundColor: '#0b1120',
        padding: '2.5rem',
        border: '1px solid #1e293b',
        borderRadius: '1rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    titleRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '0.5rem',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
    },
    metaInfo: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.5rem',
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        fontWeight: '500',
    },
    company: {
        color: 'var(--accent-color)',
        fontWeight: '600',
    },
    date: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    pointsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        listStyleType: 'disc',
        paddingLeft: '1.25rem',
    },
    point: {
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
        fontSize: '1.05rem',
    },
    certBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginTop: '1.5rem',
        padding: '0.55rem 1.2rem',
        borderRadius: '2rem',
        border: '1px solid #38bdf8',
        color: '#38bdf8',
        backgroundColor: 'transparent',
        fontSize: '0.9rem',
        fontWeight: '500',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
    }
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 22.5px;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent-color), var(--border-color));
  }
  .cert-btn:hover {
    background-color: rgba(56, 189, 248, 0.1) !important;
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.2);
  }
`;
document.head.appendChild(styleSheet);

export default Experience;
