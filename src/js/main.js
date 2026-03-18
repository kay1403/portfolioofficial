// ===== SYSTÈME DE CHANGEMENT DE LANGUE - DOIT ÊTRE EN PREMIER ET DÉFINI AVANT TOUT =====
const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            experience: "Expérience",
            projects: "Projets",
            skills: "Compétences",
            certifications: "Certifications",
            contact: "Contact"
        },
        hero: {
            available: "Disponible pour des opportunités",
            description: "Étudiant en dernière année d'IT à l'University of Kigali, spécialisé en Data Science et Développement Full-Stack. Passionné par la fintech et l'IA.",
            contact: "Me contacter",
            cv: "CV",
            scroll: "Défiler"
        },
        about: {
            subtitle: "QUI SUIS-JE ?",
            title: "À propos de moi",
            education: {
                title: "Formation",
                degree1: "BSc en Information Technology",
                school1: "University of Kigali (2022-2025)",
                degree2: "Technologie Industrielle",
                school2: "Lycée Technique Jean Fidèle Otando"
            },
            achievements: {
                title: "Distinctions",
                item1: "Champion Interdépartemental 2025",
                item2: "WorldQuant AI Lab Selection",
                item3: "The Gym Rwanda - Intensive Program"
            }
        },
        experience: {
            subtitle: "MON PARCOURS",
            title: "Expérience professionnelle",
            job1: {
                title: "Développeur Front-End",
                desc1: "Développement d'interfaces responsives avec React, TypeScript et Tailwind CSS",
                desc2: "Amélioration de l'expérience utilisateur à travers des designs modernes",
                desc3: "Collaboration avec l'équipe technique sur des problèmes complexes"
            },
            job2: {
                title: "Représentant de classe",
                desc1: "Liaison entre les étudiants et le corps professoral pour 50+ étudiants",
                desc2: "Facilitation de la communication et résolution de problèmes académiques"
            }
        },
        projects: {
            subtitle: "MES RÉALISATIONS",
            title: "Projets phares",
            desc1: "Système de gestion de bibliothèque avec Django, API REST, et authentification JWT.",
            desc2: "Backend complet pour plateforme e-commerce avec Django REST Framework.",
            desc3: "Application de transfert d'argent avec authentification sécurisée.",
            desc4: "Application météo interactive avec architecture responsive et système de favoris.",
            desc5: "Système de gestion d'actes de naissance avec génération de QR codes et PDF.",
            desc6: "Plateforme SaaS avec authentification 2FA, RBAC, et audit trail.",
            desc7: "Système IoT de surveillance des sols avec analyse de données en temps réel.",
            demo: "Voir la démo",
            source: "Code source",
            comingSoon: "Démo à venir"
        },
        skills: {
            subtitle: "MON EXPERTISE",
            title: "Compétences techniques",
            languages: "Langues",
            native: "Natif",
            fluent: "Courant",
            beginner: "Débutant"
        },
        certs: {
            subtitle: "MES CERTIFICATIONS",
            title: "Parcours ALX Africa",
            click: "Cliquer pour voir"
        },
        contact: {
            subtitle: "RESTONS EN CONTACT",
            title: "Contactez-moi",
            phone: "Téléphone",
            email: "Email",
            location: "Localisation",
            form: {
                name: "Votre nom",
                email: "Votre email",
                subject: "Sujet",
                message: "Votre message",
                submit: "Envoyer le message"
            }
        },
        footer: {
            description: "Créateur de solutions innovantes à l'intersection des données et du développement logiciel.",
            rights: "Tous droits réservés."
        },
        stats: {
            projects: "Projets",
            certifications: "Certifications",
            experience: "Années d'exp."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            certifications: "Certifications",
            contact: "Contact"
        },
        hero: {
            available: "Available for opportunities",
            description: "Final-year IT student at the University of Kigali, specializing in Data Science and Full-Stack Development. Passionate about fintech and AI.",
            contact: "Contact me",
            cv: "Resume",
            scroll: "Scroll"
        },
        about: {
            subtitle: "WHO AM I?",
            title: "About me",
            education: {
                title: "Education",
                degree1: "BSc in Information Technology",
                school1: "University of Kigali (2022-2025)",
                degree2: "Industrial Technology",
                school2: "Lycée Technique Jean Fidèle Otando"
            },
            achievements: {
                title: "Achievements",
                item1: "Interdepartmental Champion 2025",
                item2: "WorldQuant AI Lab Selection",
                item3: "The Gym Rwanda - Intensive Program"
            }
        },
        experience: {
            subtitle: "MY JOURNEY",
            title: "Professional Experience",
            job1: {
                title: "Front-End Developer",
                desc1: "Development of responsive interfaces with React, TypeScript and Tailwind CSS",
                desc2: "User experience improvement through modern designs",
                desc3: "Collaboration with technical team on complex problems"
            },
            job2: {
                title: "Class Representative",
                desc1: "Liaison between students and faculty for 50+ students",
                desc2: "Communication facilitation and academic problem solving"
            }
        },
        projects: {
            subtitle: "MY WORK",
            title: "Featured Projects",
            desc1: "Library management system with Django, REST API, and JWT authentication.",
            desc2: "Complete backend for e-commerce platform with Django REST Framework.",
            desc3: "Money transfer application with secure authentication.",
            desc4: "Interactive weather app with responsive architecture and favorites system.",
            desc5: "Birth certificate management system with QR code and PDF generation.",
            desc6: "SaaS platform with 2FA authentication, RBAC, and audit trail.",
            desc7: "IoT soil monitoring system with real-time data analysis.",
            demo: "Live demo",
            source: "Source code",
            comingSoon: "Demo coming soon"
        },
        skills: {
            subtitle: "MY EXPERTISE",
            title: "Technical Skills",
            languages: "Languages",
            native: "Native",
            fluent: "Fluent",
            beginner: "Beginner"
        },
        certs: {
            subtitle: "MY CERTIFICATIONS",
            title: "ALX Africa Journey",
            click: "Click to view"
        },
        contact: {
            subtitle: "LET'S CONNECT",
            title: "Contact me",
            phone: "Phone",
            email: "Email",
            location: "Location",
            form: {
                name: "Your name",
                email: "Your email",
                subject: "Subject",
                message: "Your message",
                submit: "Send message"
            }
        },
        footer: {
            description: "Creator of innovative solutions at the intersection of data and software development.",
            rights: "All rights reserved."
        },
        stats: {
            projects: "Projects",
            certifications: "Certifications",
            experience: "Years exp."
        }
    }
};

// DÉFINIR LA FONCTION AVANT TOUT - EN GLOBAL
window.switchLanguage = function(lang) {
    console.log('🔄 Changement de langue vers:', lang);
    
    if (!translations[lang]) {
        console.error('❌ Langue non supportée:', lang);
        return;
    }
    
    // Traduire les textes (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const path = element.getAttribute('data-i18n');
        const keys = path.split('.');
        let value = translations[lang];
        
        try {
            for (let key of keys) {
                if (value && value[key] !== undefined) {
                    value = value[key];
                } else {
                    value = null;
                    break;
                }
            }
            if (value) {
                element.textContent = value;
            } else {
                console.warn('⚠️ Traduction manquante:', path);
            }
        } catch (e) {
            console.warn('⚠️ Erreur pour:', path);
        }
    });

    // Traduire les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const path = element.getAttribute('data-i18n-placeholder');
        const keys = path.split('.');
        let value = translations[lang];
        
        try {
            for (let key of keys) {
                if (value && value[key] !== undefined) {
                    value = value[key];
                } else {
                    value = null;
                    break;
                }
            }
            if (value) {
                element.placeholder = value;
            }
        } catch (e) {
            console.warn('⚠️ Placeholder manquant:', path);
        }
    });

    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-500/20');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active', 'bg-blue-500/20');
        }
    });

    // Sauvegarder la préférence
    localStorage.setItem('preferred-language', lang);
    console.log('✅ Langue changée avec succès');
};

// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('📦 DOM chargé, initialisation...');
    
    // Charger la langue préférée
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    window.switchLanguage(savedLang);

    // Initialisation AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Typed.js - Doit être initialisé APRÈS la langue
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: savedLang === 'fr' 
                ? ['Data Scientist', 'Développeur Full-Stack', 'Passionné d\'IA', 'Résolveur de problèmes', 'Champion de football 🏆']
                : ['Data Scientist', 'Full-Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Football Champion 🏆'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Mobile Menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('open');
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Active navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        const headerHeight = 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        
        const updateCount = () => {
            const increment = target / speed;
            
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
            submitBtn.disabled = true;

            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                showNotification('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
                contactForm.reset();
            } catch (error) {
                showNotification('Une erreur est survenue. Veuillez réessayer.', 'error');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Dynamic year
    const yearElement = document.querySelector('.footer .text-gray-500');
    if (yearElement) {
        yearElement.innerHTML = `© ${new Date().getFullYear()} Ange KOUMBA. <span data-i18n="footer.rights">Tous droits réservés.</span>`;
    }
});

// Notification system (doit être accessible)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 z-50 px-6 py-4 rounded-xl shadow-glow-lg animate-slide-left ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white flex items-center gap-3`;
    
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} text-xl"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideRight 0.5s ease-out forwards';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Parallax effect
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.floating-shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = index + 1;
        const x = (mouseX * speed * 20) - (speed * 10);
        const y = (mouseY * speed * 20) - (speed * 10);
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Preloader
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('aos-animate');
    });
});