import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Technology (IT)',
            institution: 'Lovely Professional University, Phagwara, Punjab',
            duration: 'August 2023 – Present',
            score: 'CGPA: 7.73'
        },
        {
            degree: 'Intermediate (PCM)',
            institution: 'Holy Star School, Bupp, Sirsa',
            duration: 'March 2022 – May 2023',
            score: 'Percentage: 83%'
        },
        {
            degree: 'Matriculation',
            institution: 'Holy Star School, Bupp, Sirsa',
            duration: 'March 2020 – May 2021',
            score: 'Percentage: 100%'
        }
    ];

    return (
        <section className="section" id="education" style={styles.section}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <div style={styles.grid}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="edu-card glass-card"
                            style={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div style={styles.iconWrapper}>
                                <GraduationCap size={28} style={styles.icon} />
                            </div>
                            <h3 style={styles.degree}>{edu.degree}</h3>
                            <p style={styles.institution}>{edu.institution}</p>
                            <div style={styles.meta}>
                                <span className="duration" style={styles.duration}>{edu.duration}</span>
                                <span style={styles.score}>{edu.score}</span>
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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
    },
    card: {
        backgroundColor: '#0b1120',
        border: '1px solid #1e293b',
        padding: '2.5rem 2rem',
        borderRadius: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    iconWrapper: {
        backgroundColor: 'var(--bg-color)',
        padding: '1.25rem',
        borderRadius: '50%',
        marginBottom: '1.5rem',
    },
    icon: {
        color: 'var(--accent-color)',
    },
    degree: {
        fontSize: '1.35rem',
        marginBottom: '0.5rem',
        lineHeight: '1.4',
    },
    institution: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        fontSize: '1.05rem',
    },
    meta: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        alignItems: 'center',
        width: '100%',
        marginTop: 'auto',
    },
    duration: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
    },
    score: {
        color: 'var(--accent-color)',
        fontWeight: '600',
        backgroundColor: 'var(--bg-color)',
        padding: '0.5rem 1.25rem',
        borderRadius: '2rem',
    }
};

export default Education;
