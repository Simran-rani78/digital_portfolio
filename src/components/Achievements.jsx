import React from 'react';
import { Star, Trophy, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            icon: <Trophy size={28} />,
            title: 'Selected as AI Intern',
            description: 'Interned at Microsoft x Edunet out of 20,000+ applicants.',
            date: 'May 2025'
        },
        {
            id: 2,
            icon: <Star size={28} />,
            title: '5-Star Rating on HackerRank',
            description: 'Awarded for proficiency in C++ problem-solving.',
            date: 'Aug 2024'
        },
        {
            id: 3,
            icon: <Code size={28} />,
            title: '220+ Problems Solved',
            description: 'Completed on LeetCode, CodeChef & GFG, improving problem-solving abilities.',
            date: 'Nov 2024'
        }
    ];

    return (
        <section className="section" id="achievements">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Achievements
                </motion.h2>

                <div style={styles.grid}>
                    {achievements.map((ach, index) => (
                        <motion.div
                            key={ach.id}
                            className="achieve-card glass-card"
                            style={styles.card}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                        >
                            <div style={styles.iconContainer}>
                                {ach.icon}
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.title}>{ach.title}</h3>
                                <p style={styles.description}>{ach.description}</p>
                                <span style={styles.date}>{ach.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#0b1120',
        border: '1px solid #1e293b',
        padding: '2rem',
        borderRadius: '1.25rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    iconContainer: {
        color: 'var(--accent-color)',
        backgroundColor: 'var(--bg-color)',
        padding: '1rem',
        borderRadius: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    title: {
        fontSize: '1.25rem',
        marginBottom: '0.5rem',
        lineHeight: '1.4',
    },
    description: {
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
        lineHeight: '1.6',
        fontSize: '0.95rem',
    },
    date: {
        color: 'var(--accent-color)',
        fontSize: '0.85rem',
        fontWeight: '600',
        marginTop: 'auto',
    }
};

export default Achievements;
