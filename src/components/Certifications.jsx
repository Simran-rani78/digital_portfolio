import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certifications = [
        {
            title: 'ReactJS Course',
            issuer: 'GeeksForGeeks',
            date: 'Sep 2025',
            description: 'Comprehensive course covering React fundamentals, hooks, state management, and building responsive web applications.',
            image: 'https://drive.google.com/thumbnail?id=1W18H6dwhxfaHHgIhTZZEkxGtt_kuyjNh&sz=w800',
            link: 'https://drive.google.com/file/d/1W18H6dwhxfaHHgIhTZZEkxGtt_kuyjNh/view?usp=drive_link',
            label: 'GeeksForGeeks'
        },
        {
            title: 'OCI Certified Generative AI Professional',
            issuer: 'Oracle University',
            date: 'Aug 2025',
            description: 'Advanced certification validating expertise in Oracle Cloud Infrastructure and generative AI services and models.',
            image: 'https://drive.google.com/thumbnail?id=1MCAs1bqzMrbApS3GX5TZuC4PjyjXeCTm&sz=w800',
            link: 'https://drive.google.com/file/d/1MCAs1bqzMrbApS3GX5TZuC4PjyjXeCTm/view?usp=drive_link',
            label: 'Oracle'
        },
        {
            title: 'Cloud Computing',
            issuer: 'NPTEL',
            date: 'Apr 2025',
            description: 'Comprehensive training on cloud computing fundamentals, services, deployment models, and best practices.',
            image: 'https://drive.google.com/thumbnail?id=1a9MieX-5jeizQt6Ds03MqEdZZFvonX0P&sz=w800',
            link: 'https://drive.google.com/file/d/1a9MieX-5jeizQt6Ds03MqEdZZFvonX0P/view?usp=drive_link',
            label: 'NPTEL'
        }
    ];

    return (
        <section className="section" id="certifications" style={styles.section}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Certifications</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
                        Professional credentials that validate my technical expertise and continuous learning journey.
                    </p>
                </motion.div>

                <div className="certs-grid">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card glass-card"
                            style={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.01 }}
                        >
                            <div style={styles.imageContainer}>
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    style={styles.image}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <span style={styles.labelBadge({ issuer: cert.label })}>{cert.label}</span>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.viewCertOverlay}
                                    className="cert-overlay-btn"
                                >
                                    View Certificate
                                </a>
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.title}>{cert.title}</h3>
                                <p style={styles.description}>{cert.description}</p>
                                <div style={styles.footer}>
                                    <span style={styles.issuer}>{cert.issuer}</span>
                                    <span style={styles.date}>{cert.date}</span>
                                </div>
                            </div>
                            <div style={styles.hoverBar} className="hover-bar">
                                Hover to view details
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: 'transparent',
    },
    card: {
        backgroundColor: '#0b1120',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '1px solid #1e293b',
        padding: 0,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        borderBottom: '1px solid #1e293b',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    labelBadge: ({ issuer }) => ({
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: issuer === 'Oracle' ? '#f59e0b' : issuer === 'NPTEL' ? '#ef4444' : '#3b82f6',
        color: 'white',
        padding: '0.3rem 0.8rem',
        borderRadius: '1rem',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    }),
    content: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    title: {
        fontSize: '1.25rem',
        marginBottom: '0.75rem',
        lineHeight: '1.4',
        color: 'var(--text-primary)',
        fontWeight: '600',
    },
    description: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        flex: 1,
        fontSize: '0.95rem',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
    },
    issuer: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        fontWeight: '600',
    },
    date: {
        color: 'var(--accent-color)',
        fontSize: '0.9rem',
        fontWeight: '600',
    },
    hoverBar: {
        width: '100%',
        textAlign: 'center',
        padding: '0.6rem',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem',
        borderTop: '1px solid #1e293b',
        transition: 'all 0.3s ease',
    },
    viewCertOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '0.75rem',
        textAlign: 'center',
        backgroundColor: 'rgba(56, 189, 248, 0.85)',
        color: '#020617',
        fontWeight: '600',
        fontSize: '0.9rem',
        textDecoration: 'none',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        backdropFilter: 'blur(4px)',
    }
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .certs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    .certs-grid {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
  }
  .cert-card:hover .hover-bar {
    background-color: var(--accent-color);
    color: white !important;
  }
  .cert-card:hover .cert-overlay-btn {
    opacity: 1 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Certifications;
