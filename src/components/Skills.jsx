import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava, FaGithub, FaFigma } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiMysql, SiLeetcode, SiExpress } from 'react-icons/si';
import { Folder } from 'lucide-react';

const Skills = () => {
    const codeSkills = [
        { name: 'C++', icon: <SiCplusplus color="#38bdf8" /> },
        { name: 'Python', icon: <FaPython color="#38bdf8" /> },
        { name: 'Java', icon: <FaJava color="#38bdf8" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#38bdf8" /> }
    ];

    const frameworkSkills = [
        { name: 'ReactJS', icon: <FaReact color="#38bdf8" /> },
        { name: 'NodeJS', icon: <FaNodeJs color="#38bdf8" /> },
        { name: 'Express', icon: <SiExpress color="#38bdf8" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#38bdf8" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#38bdf8" /> }
    ];

    const toolsSkills = [
        { name: 'Git & GitHub', icon: <FaGithub color="#38bdf8" /> },
        { name: 'MySQL', icon: <SiMysql color="#38bdf8" /> },
        { name: 'LeetCode', icon: <SiLeetcode color="#38bdf8" /> },
        { name: 'Figma', icon: <FaFigma color="#38bdf8" /> }
    ];

    const categories = [
        { title: 'Programming Languages', data: codeSkills, delay: 0.1 },
        { title: 'Frameworks & Libraries', data: frameworkSkills, delay: 0.2 },
        { title: 'Tools & Platforms', data: toolsSkills, delay: 0.3 }
    ];

    const softSkills = ['Time Management', 'Problem-Solving', 'Adaptability'];

    return (
        <section className="section" id="skills" style={styles.section}>
            <div className="container" style={styles.container}>
                
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={styles.title}
                >
                    Skills & Technologies
                </motion.h2>

                <div className="skills-grid" style={styles.grid}>
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            style={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: cat.delay }}
                        >
                            <h3 style={styles.categoryTitle}>{cat.title}</h3>
                            <div style={styles.skillList}>
                                {cat.data.map((skill, i) => (
                                    <div key={i} className="skill-badge" style={styles.skillBadge}>
                                        <span style={styles.iconLarge}>{skill.icon}</span>
                                        <span style={styles.skillName}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Soft Skills Section */}
                    <motion.div
                        className="skill-card"
                        style={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 style={styles.categoryTitle}>Soft Skills</h3>
                        <div style={styles.softSkillList}>
                            {softSkills.map((skill, i) => (
                                <div key={i} className="soft-skill-item" style={styles.softSkillItem}>
                                    <Folder size={18} color="#38bdf8" />
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
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
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#0b1120',
        border: '1px solid #1e293b',
        borderRadius: '1rem',
        padding: '2.5rem 2rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    categoryTitle: {
        fontSize: '1.25rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#f8fafc',
        fontWeight: '600',
        letterSpacing: '0.5px',
    },
    skillList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.2rem',
    },
    skillBadge: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        backgroundColor: '#020617',
        padding: '1.25rem 0.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #1e293b',
        transition: 'all 0.3s ease',
        cursor: 'default',
    },
    iconLarge: {
        fontSize: '2.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skillName: {
        fontSize: '0.8rem',
        fontWeight: '500',
        color: '#94a3b8',
        textAlign: 'center',
        letterSpacing: '0.3px',
    },
    softSkillList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        justifyContent: 'center',
        flex: 1,
    },
    softSkillItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        backgroundColor: '#020617',
        padding: '1.2rem 1.5rem',
        borderRadius: '0.75rem',
        border: '1px solid #1e293b',
        fontWeight: '500',
        color: '#e2e8f0',
        transition: 'all 0.3s ease',
        cursor: 'default',
    }
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 900px) {
    .skills-grid {
      grid-template-columns: 1fr !important;
    }
  }

  .skill-badge:hover, .soft-skill-item:hover {
    border-color: #38bdf8 !important;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.15);
  }
  .skill-badge:hover span {
    color: #f8fafc !important;
  }
`;
document.head.appendChild(styleSheet);

export default Skills;
