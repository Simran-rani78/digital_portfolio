import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create an Email Service (Gmail) → copy Service ID below
// 3. Create an Email Template with vars: {{from_name}}, {{from_email}}, {{message}}
//    → copy Template ID below
// 4. Account → API Keys → copy Public Key below
const EMAILJS_SERVICE_ID  = 'service_p8uakcm';
const EMAILJS_TEMPLATE_ID = 'template_wcfg0fh';   // Create template at: dashboard.emailjs.com → Email Templates → Add New
const EMAILJS_PUBLIC_KEY  = 'qM7H2Z-jZOjqSx_2g';    // Get from: dashboard.emailjs.com → Account → API Keys
// ────────────────────────────────────────────────────────────────

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    title: 'Portfolio Contact Form',
                    time: new Date().toLocaleString(),
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    // Reset status back to idle after success or error
    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => setStatus('idle'), 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    return (
        <section className="section" id="contact" style={styles.section}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '3rem', textAlign: 'center' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Get In Touch</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                        Have a question or want to work together? Fill out the form below or reach out directly through my contact information.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Left Column - Contact Form */}
                    <motion.div
                        className="glass-card"
                        style={styles.formCard}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} style={styles.form}>
                            <div style={styles.inputGroup}>
                                <label htmlFor="name" style={styles.label}>Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name"
                                    value={formData.name} onChange={handleChange} required
                                    style={styles.input} className="contact-input" />
                            </div>
                            <div style={styles.inputGroup}>
                                <label htmlFor="email" style={styles.label}>Email</label>
                                <input type="email" id="email" name="email" placeholder="your.email@example.com"
                                    value={formData.email} onChange={handleChange} required
                                    style={styles.input} className="contact-input" />
                            </div>
                            <div style={styles.inputGroup}>
                                <label htmlFor="message" style={styles.label}>Message</label>
                                <textarea id="message" name="message" placeholder="Your message..."
                                    value={formData.message} onChange={handleChange} required rows="5"
                                    style={{ ...styles.input, resize: 'vertical' }} className="contact-input" />
                            </div>

                            <button
                                type="submit"
                                style={{
                                    ...styles.submitBtn,
                                    opacity: status === 'sending' ? 0.7 : 1,
                                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                    backgroundColor: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : '#38bdf8',
                                    color: (status === 'success' || status === 'error') ? 'white' : '#020617',
                                }}
                                className="submit-btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' :
                                 status === 'success' ? '✓ Message Sent!' :
                                 status === 'error'   ? '✗ Failed – Try Again' :
                                 'Send Message'}
                            </button>

                            {status === 'error' && (
                                <p style={{ color: '#ef4444', fontSize: '0.875rem', textAlign: 'center' }}>
                                    Something went wrong. Email me directly at simranrani78295@gmail.com
                                </p>
                            )}
                        </form>
                    </motion.div>

                    {/* Right Column - Contact Info */}
                    <motion.div
                        style={styles.infoCol}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="glass-card" style={styles.infoCard}>
                            <h3 style={styles.infoTitle}>Contact Information</h3>
                            <div style={styles.infoList}>
                                {[
                                    { icon: <Mail size={18} />, label: 'Email', value: 'simranrani78295@gmail.com', href: 'mailto:simranrani78295@gmail.com', external: false },
                                    { icon: <Phone size={18} />, label: 'Phone', value: '+91 7015839879', href: 'tel:+917015839879', external: false },
                                    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/simran-rani78', href: 'https://www.linkedin.com/in/simran-rani78/', external: true },
                                    { icon: <Github size={18} />, label: 'GitHub', value: 'github.com/Simran-rani78', href: 'https://github.com/Simran-rani78', external: true }
                                ].map((item, index) => (
                                    <div key={index} style={styles.infoItem}>
                                        <div style={styles.iconWrapper}>{item.icon}</div>
                                        <div>
                                            <span style={styles.itemLabel}>{item.label}</span>
                                            <a href={item.href} {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })} style={styles.itemValue} className="hover-text">
                                                {item.value}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr style={styles.divider} />

                            <div style={styles.socialSection}>
                                <span style={styles.socialLabel}>Follow Me</span>
                                <div style={styles.socialIcons}>
                                    <a href="https://leetcode.com/u/Simran_mhtaa/" target="_blank" rel="noreferrer"
                                        style={styles.socialBtn} className="social-btn" title="LeetCode">
                                        <SiLeetcode size={18} />
                                    </a>
                                    <a href="https://www.geeksforgeeks.org/profile/simranra2a7j" target="_blank" rel="noreferrer"
                                        style={styles.socialBtn} className="social-btn" title="GeeksForGeeks">
                                        <SiGeeksforgeeks size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="glass-card"
                    style={styles.footerBanner}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p style={styles.footerText}>Looking forward to hearing from you!</p>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: { backgroundColor: 'transparent', paddingBottom: '4rem' },
    formCard: { backgroundColor: '#0b1120', padding: '2.5rem', borderRadius: '1.25rem', border: '1px solid #1e293b', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' },
    form: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    label: { fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-primary)' },
    input: {
        width: '100%', padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-color)',
        borderRadius: '0.75rem',
        color: 'var(--text-primary)',
        fontSize: '1rem', fontFamily: 'inherit', outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    submitBtn: {
        marginTop: '0.5rem', padding: '1rem',
        color: 'white', border: 'none', borderRadius: '0.75rem',
        fontSize: '1rem', fontWeight: '600', transition: 'all 0.3s ease',
    },
    infoCol: { display: 'flex', flexDirection: 'column' },
    infoCard: { backgroundColor: '#0b1120', padding: '2.5rem', borderRadius: '1.25rem', border: '1px solid #1e293b', flex: 1, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' },
    infoTitle: { fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-primary)', fontWeight: '600' },
    infoList: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    infoItem: { display: 'flex', alignItems: 'center', gap: '1rem' },
    iconWrapper: {
        width: '40px', height: '40px', borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: 'var(--accent-color)', flexShrink: 0,
    },
    itemLabel: { display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' },
    itemValue: { display: 'block', fontSize: '0.95rem', color: 'var(--text-primary)', textDecoration: 'none', wordBreak: 'break-all' },
    divider: { border: 'none', borderTop: '1px solid var(--border-color)', margin: '2rem 0' },
    socialSection: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    socialLabel: { fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '500' },
    socialIcons: { display: 'flex', gap: '1rem' },
    socialBtn: {
        width: '44px', height: '44px', borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: 'var(--text-secondary)', textDecoration: 'none',
        transition: 'all 0.3s ease', border: '1px solid var(--border-color)',
    },
    footerBanner: { marginTop: '3rem', padding: '1.5rem', textAlign: 'center', backgroundColor: '#0b1120', borderRadius: '0.75rem', border: '1px solid #1e293b', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' },
    footerText: { color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 },
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .contact-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
  @media (min-width: 900px) { .contact-grid { grid-template-columns: 3fr 2fr; gap: 3rem; } }
  .contact-input:focus {
    border-color: #38bdf8 !important;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.1);
    background-color: rgba(255, 255, 255, 0.05) !important;
  }
  .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(56, 189, 248, 0.4); }
  .hover-text:hover { color: #38bdf8 !important; }
  .social-btn:hover {
    background-color: #38bdf8 !important;
    color: #020617 !important;
    border-color: #38bdf8 !important;
    transform: translateY(-3px);
  }
`;
document.head.appendChild(styleSheet);

export default Contact;
