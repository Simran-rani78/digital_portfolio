import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className="navbar" style={{...styles.header, ...(scrolled ? styles.headerScrolled : {})}}>
            <div className="container" style={styles.container}>
                <a href="#home" style={styles.logo} onClick={(e) => handleScroll(e, '#home')}>
                    SR
                </a>

                <nav className="desktop-nav" style={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={styles.navLink}
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="mobile-actions" style={styles.mobileActions}>
                    <button onClick={() => setIsOpen(!isOpen)} style={styles.hamburger}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-nav animate-fade-in" style={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={styles.mobileNavLink}
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(11, 17, 32, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        zIndex: 1000,
        padding: '1.5rem 0',
        transition: 'all 0.3s ease',
    },
    headerScrolled: {
        backgroundColor: 'rgba(2, 6, 23, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 0',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#38bdf8',
        textDecoration: 'none',
        letterSpacing: '1px',
        flexShrink: 0,
        transition: 'opacity 0.3s',
    },
    desktopNav: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'flex-end',
        flex: 1,
        flexWrap: 'nowrap',
    },
    navLink: {
        fontWeight: '400',
        color: '#94a3b8',
        transition: 'color 0.3s',
        textDecoration: 'none',
        fontSize: '0.95rem',
        letterSpacing: '0.5px',
        whiteSpace: 'nowrap',
        flexShrink: 0,
    },
    mobileActions: {
        display: 'none',
        alignItems: 'center',
    },
    hamburger: {
        color: '#f8fafc',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    },
    mobileNav: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 2rem',
        backgroundColor: 'rgba(2, 6, 23, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
    },
    mobileNavLink: {
        padding: '1rem 0',
        fontWeight: '500',
        color: '#f8fafc',
        fontSize: '1.05rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        textDecoration: 'none'
    }
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @media (max-width: 1024px) {
    .desktop-nav { display: none !important; }
    .mobile-actions { display: flex !important; }
  }
  header.navbar a[href="#home"]:first-of-type:hover {
    opacity: 0.85;
  }
  .desktop-nav a:hover {
    color: #38bdf8 !important;
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;
