import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All Projects');
    const filters = ['All Projects', 'Full Stack', 'Data Visualization', 'Frontend', 'API Integration', 'Web App'];

    const projects = [
        {
            title: 'AI Pet Adoption',
            description: 'An AI-powered platform designed to facilitate pet adoption, helping users find their perfect pet match through intelligent matching and recommendations.',
            techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
            category: ['Full Stack', 'Web App'],
            github: 'https://github.com/Simran-rani78/AI-Pet-Adoption',
            live: 'https://ai-pet-adoption.onrender.com/',
            image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80',
            featured: true
        },
        {
            title: 'CulturalVR - Exploring Cultures Through Listening',
            description: 'A conceptual VR project designed to explore cultures without packing a bag. Built on a unique system of listening, it reimagines immersion and attempts to bridge worlds by designing empathy.',
            techStack: ['Figma', 'VR Design', 'UX/UI'],
            category: ['Frontend'],
            github: '',
            live: 'https://www.linkedin.com/feed/update/urn:li:activity:7363526570487025664/',
            image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=600&q=80',
            featured: false
        },
        {
            title: 'StudyUp – Study Performance Tracker',
            description: 'A full-stack study tracker web app to help students monitor their study habits, track sessions, and boost productivity. Features include session logging, performance analytics, and study streaks with a Pomodoro timer.',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
            category: ['Full Stack', 'Web App'],
            github: 'https://github.com/Simran-rani78/StudyUp',
            live: 'https://study-tracker-per.netlify.app',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
            featured: false
        },
        {
            title: 'Facial Emotion Recognition System',
            description: 'Enhanced user interaction by 60% through real-time emotion detection. Improved model accuracy with a robust deep-learning pipeline for face detection and classification of 7 universal emotions.',
            techStack: ['Python', 'OpenCV', 'Keras', 'TensorFlow'],
            category: ['API Integration', 'Data Visualization'],
            github: 'https://github.com/Simran-rani78/facial-emotion-recognition',
            live: 'https://github.com/Simran-rani78/facial-emotion-recognition/tree/main/aiml%20-%20Copy/snapshots',
            image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&w=600&q=80',
            featured: true
        }
    ];

    const filteredProjects = activeFilter === 'All Projects' 
        ? projects 
        : projects.filter(project => project.category.includes(activeFilter));

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Featured Projects</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
                        A showcase of my work spanning web applications, APIs, and responsive interfaces.
                    </p>

                    <div style={styles.filterContainer}>
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFilter(filter)}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                style={{
                                    ...styles.filterBtn,
                                    ...(activeFilter === filter ? styles.activeFilterBtn : {})
                                }}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass-card"
                            style={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div style={styles.imageContainer}>
                                <img src={project.image} alt={project.title} style={styles.image} />
                                {project.featured && <span style={styles.featuredBadge}>Featured</span>}
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <p style={styles.description}>{project.description}</p>
                                <div style={styles.techStack}>
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} style={styles.techBadge}>{tech}</span>
                                    ))}
                                </div>
                                <div style={styles.actionButtons}>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" style={styles.liveBtn} className="action-btn">
                                        Live Demo
                                    </a>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.sourceBtn} className="action-btn">
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    card: {
        backgroundColor: '#0b1120',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #1e293b',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '240px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderBottom: '1px solid #1e293b',
    },
    featuredBadge: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '0.4rem 1rem',
        borderRadius: '2rem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    content: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    title: {
        fontSize: '1.4rem',
        lineHeight: '1.4',
        color: 'var(--text-primary)',
        marginBottom: '0.75rem',
        fontWeight: 'bold',
    },
    description: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        flex: 1,
        fontSize: '0.95rem',
    },
    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2rem',
    },
    techBadge: {
        fontSize: '0.75rem',
        fontWeight: '500',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'var(--text-secondary)',
        padding: '0.3rem 0.8rem',
        borderRadius: '2rem',
        border: '1px solid var(--border-color)',
    },
    actionButtons: {
        display: 'flex',
        gap: '1rem',
        marginTop: 'auto',
    },
    liveBtn: {
        flex: 1,
        textAlign: 'center',
        padding: '0.75rem',
        backgroundColor: '#4f46e5',
        color: 'white',
        borderRadius: '0.5rem',
        fontWeight: '600',
        fontSize: '0.9rem',
        transition: 'all 0.2s',
        textDecoration: 'none',
    },
    sourceBtn: {
        flex: 1,
        textAlign: 'center',
        padding: '0.75rem',
        backgroundColor: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: '0.5rem',
        fontWeight: '600',
        fontSize: '0.9rem',
        transition: 'all 0.2s',
        textDecoration: 'none',
    },
    filterContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.8rem',
    },
    filterBtn: {
        padding: '0.5rem 1.25rem',
        borderRadius: '2rem',
        border: '1px solid transparent',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'all 0.3s ease',
    },
    activeFilterBtn: {
        backgroundColor: '#4f46e5',
        color: 'white',
        borderColor: '#4f46e5',
    }
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }
  .filter-btn:hover:not(.active) {
    background-color: rgba(255,255,255,0.1);
    color: var(--text-primary);
  }
  .action-btn:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
  .action-btn {
    display: inline-block;
  }
`;
document.head.appendChild(styleSheet);

export default Projects;
