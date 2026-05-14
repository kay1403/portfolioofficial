// ===== CONFIGURATION EMAILJS =====
emailjs.init("xPli5Qr1N_RE53QJ9");

// ===== SYSTÈME DE CHANGEMENT DE LANGUE =====
const translations = {
    fr: {
        lang: { fr: "FR", en: "EN" },
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
            description: "Diplômé en IT de l'University of Kigali,<br>spécialisé en <span class='text-blue-400'>Data Science</span> et <span class='text-blue-400'>Développement Full-Stack</span>.<br>Passionné par la fintech et l'IA.",
            contact: "Me contacter",
            cv: "CV",
            scroll: "Défiler",
            download: "Télécharger CV"
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
            desc1: "Système de gestion de bibliothèque avec <span class='text-blue-400'>Django</span>,<br>API REST, et authentification JWT.",
            desc2: "Backend complet pour plateforme e-commerce<br>avec <span class='text-blue-400'>Django REST Framework</span>.",
            desc3: "Application de transfert d'argent<br>avec authentification sécurisée.",
            desc4: "Application météo interactive<br>avec architecture responsive et système de favoris.",
            desc5: "Système de gestion d'actes de naissance<br>avec génération de QR codes et PDF.",
            desc6: "Plateforme SaaS avec authentification 2FA,<br>RBAC, et audit trail.",
            desc7: "Système IoT de surveillance des sols<br>avec analyse de données en temps réel.",
            demo: "Voir la démo",
            source: "Code source",
            comingSoon: "Démo à venir",
            sourceComing: "Code source à venir"
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
            click: "Cliquer pour voir",
            backend: "Back-End Web Development",
            frontend: "Front-End Web Development",
            dataAnalytics: "Data Analytics",
            python: "Python Programming",
            prodev: "ProDev Backend",
            founder: "Founder Academy",
            professional: "Professional Foundations",
            freelancer: "Freelancer Academy",
            cybersecurity: "Cybersécurité",
            machineLearning: "Machine Learning",
            dataEngineering: "Data Engineering"
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
                submit: "Envoyer le message",
                sending: "Envoi...",
                success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
                error: "Une erreur est survenue. Veuillez réessayer.",
                close: "Fermer"
            }
        },
        footer: {
            description: "Créateur de solutions innovantes à l'intersection<br>des données et du développement logiciel.",
            rights: "Tous droits réservés."
        },
        stats: {
            projects: "Projets",
            certifications: "Certifications",
            experience: "Années d'exp.",
            inProgress: "En cours",
            comingSoon: "Mai 2026"
        },
        cv: {
            title: "Choisissez votre langue",
            french: "CV Français",
            english: "CV English",
            download: "Télécharger"
        }
    },
    en: {
        lang: { fr: "FR", en: "EN" },
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
            description: "IT Graduate from the University of Kigali,<br>specializing in <span class='text-blue-400'>Data Science</span> and <span class='text-blue-400'>Full-Stack Development</span>.<br>Passionate about fintech and AI.",
            contact: "Contact me",
            cv: "Resume",
            scroll: "Scroll",
            download: "Download CV"
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
            desc1: "Library management system with <span class='text-blue-400'>Django</span>,<br>REST API, and JWT authentication.",
            desc2: "Complete backend for e-commerce platform<br>with <span class='text-blue-400'>Django REST Framework</span>.",
            desc3: "Money transfer application<br>with secure authentication.",
            desc4: "Interactive weather app<br>with responsive architecture and favorites system.",
            desc5: "Birth certificate management system<br>with QR code and PDF generation.",
            desc6: "SaaS platform with 2FA authentication,<br>RBAC, and audit trail.",
            desc7: "IoT soil monitoring system<br>with real-time data analysis.",
            demo: "Live demo",
            source: "Source code",
            comingSoon: "Demo coming soon",
            sourceComing: "Source code coming soon"
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
            click: "Click to view",
            backend: "Back-End Web Development",
            frontend: "Front-End Web Development",
            dataAnalytics: "Data Analytics",
            python: "Python Programming",
            prodev: "ProDev Backend",
            founder: "Founder Academy",
            professional: "Professional Foundations",
            freelancer: "Freelancer Academy",
            cybersecurity: "Cybersecurity",
            machineLearning: "Machine Learning",
            dataEngineering: "Data Engineering"
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
                submit: "Send message",
                sending: "Sending...",
                success: "Message sent successfully! I'll get back to you soon.",
                error: "An error occurred. Please try again.",
                close: "Close"
            }
        },
        footer: {
            description: "Creator of innovative solutions at the intersection<br>of data and software development.",
            rights: "All rights reserved."
        },
        stats: {
            projects: "Projects",
            certifications: "Certifications",
            experience: "Years exp.",
            inProgress: "In progress",
            comingSoon: "May 2026"
        },
        cv: {
            title: "Choose your language",
            french: "French CV",
            english: "English CV",
            download: "Download"
        }
    }
};

// ===== FONCTION DE CHANGEMENT DE LANGUE =====
window.switchLanguage = function(lang) {
    console.log('🔄 Changement de langue vers:', lang);
    if (!translations[lang]) {
        console.error('❌ Langue non supportée:', lang);
        return;
    }
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const path = element.getAttribute('data-i18n');
        const keys = path.split('.');
        let value = translations[lang];
        try {
            for (let key of keys) {
                if (value && value[key] !== undefined) value = value[key];
                else { value = null; break; }
            }
            if (value !== undefined && value !== null) element.innerHTML = value;
            else console.warn('⚠️ Traduction manquante:', path);
        } catch(e) { console.warn('⚠️ Erreur pour:', path); }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const path = element.getAttribute('data-i18n-placeholder');
        const keys = path.split('.');
        let value = translations[lang];
        try {
            for (let key of keys) {
                if (value && value[key] !== undefined) value = value[key];
                else { value = null; break; }
            }
            if (value) element.placeholder = value;
        } catch(e) { console.warn('⚠️ Placeholder manquant:', path); }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-500/20');
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active', 'bg-blue-500/20');
    });

    localStorage.setItem('preferred-language', lang);
    console.log('✅ Langue changée avec succès');
};

// ===== TÉLÉCHARGEMENT CV =====
window.downloadCV = function() {
    const currentLang = localStorage.getItem('preferred-language') || 'en';
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm';
    modal.innerHTML = `
        <div class="bg-dark-200 p-8 rounded-2xl border border-blue-500/20 max-w-md w-full mx-4">
            <h3 class="text-2xl font-bold text-white mb-6 text-center" data-i18n="cv.title">Choose your language</h3>
            <div class="space-y-4">
                <a href="Resume/Ange%20KOUMBA%20Resume%282025%29.pdf" 
                   download="Ange_KOUMBA_CV_FR.pdf"
                   class="block w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium text-center transition-all">
                    🇫🇷 <span data-i18n="cv.french">French CV</span>
                </a>
                <a href="Resume/Ange%20KOUMBA%20Resume%282025%29_EN.pdf" 
                   download="Ange_KOUMBA_CV_EN.pdf"
                   class="block w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium text-center transition-all">
                    🇬🇧 <span data-i18n="cv.english">English CV</span>
                </a>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    class="mt-6 w-full py-2 text-gray-400 hover:text-white transition-colors">
                ✕ <span data-i18n="contact.form.close">Close</span>
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    window.switchLanguage(currentLang);
};

// ===== CHARGEMENT DYNAMIQUE DEPUIS JSON =====
async function loadJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (err) {
        console.error(`Erreur chargement ${url}:`, err);
        return null;
    }
}

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    if (!projects || projects.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center text-gray-400">Aucun projet pour le moment.</div>';
        return;
    }
    container.innerHTML = projects.map(proj => `
        <div class="project-card group" data-aos="zoom-in">
            <div class="relative overflow-hidden h-64">
                <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    ${proj.github ? `<a href="${proj.github}" target="_blank" class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"><i class="fab fa-github text-white"></i></a>` : ''}
                    ${proj.demo ? `<a href="${proj.demo}" target="_blank" class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"><i class="fas fa-external-link-alt text-white"></i></a>` : '<div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center cursor-not-allowed opacity-50"><i class="fas fa-external-link-alt text-white"></i></div>'}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-display font-bold text-white mb-2">${proj.title}</h3>
                <p class="text-gray-400 mb-4">${proj.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
                <div class="flex flex-col gap-2">
                    ${proj.github ? `<a href="${proj.github}" target="_blank" class="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"><i class="fab fa-github"></i> <span data-i18n="projects.source">Source code</span></a>` : ''}
                    ${proj.demo ? `<a href="${proj.demo}" target="_blank" class="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"><i class="fas fa-external-link-alt"></i> <span>${proj.demo.replace('https://', '')}</span></a>` : `<span class="text-sm text-gray-500 inline-flex items-center gap-1"><i class="fas fa-external-link-alt"></i> <span data-i18n="projects.comingSoon">Demo coming soon</span></span>`}
                </div>
            </div>
        </div>
    `).join('');
}

function renderCertifications(certs) {
    const container = document.getElementById('certifications-container');
    if (!container) return;
    if (!certs || certs.length === 0) {
        container.innerHTML = '<div class="col-span-full text-center text-gray-400">Aucune certification.</div>';
        return;
    }
    container.innerHTML = certs.map(cert => {
        let statusBadge = '';
        if (cert.status === 'inprogress') statusBadge = `<p class="text-sm text-yellow-400" data-i18n="stats.inProgress">In progress</p>`;
        else if (cert.status === 'coming') statusBadge = `<p class="text-sm text-gray-400" data-i18n="stats.comingSoon">May 2026</p>`;
        else statusBadge = `<p class="text-sm text-blue-400" data-i18n="certs.click">Click to view</p>`;

        if (cert.file) {
            return `
                <a href="${cert.file}" target="_blank" class="stat-card hover:scale-105 transition-all duration-300 group">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i class="${cert.icon} text-2xl text-blue-400"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">${cert.title}</h3>
                            ${statusBadge}
                        </div>
                    </div>
                </a>
            `;
        } else {
            return `
                <div class="stat-card opacity-75">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <i class="${cert.icon} text-2xl text-blue-400"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-white">${cert.title}</h3>
                            ${statusBadge}
                        </div>
                    </div>
                </div>
            `;
        }
    }).join('');
}

function renderExperiences(experiences) {
    const container = document.getElementById('experiences-container');
    if (!container) return;
    if (!experiences || experiences.length === 0) {
        container.innerHTML = '<div class="text-center text-gray-400">Aucune expérience.</div>';
        return;
    }
    container.innerHTML = experiences.map((exp, idx) => `
        <div class="relative pl-8 ${idx !== experiences.length-1 ? 'pb-12' : ''} border-l-2 border-blue-500/30 last:pb-0" data-aos="fade-left" data-aos-duration="800" data-aos-delay="${idx * 200}">
            <div class="timeline-dot"></div>
            <div class="mb-2">
                <span class="inline-block px-4 py-2 glass-effect rounded-full text-blue-400 text-sm">${exp.period}</span>
            </div>
            <div class="glass-effect p-6 rounded-2xl hover:shadow-glow-lg transition-all duration-500">
                <h3 class="text-2xl font-display font-bold text-white mb-2">${exp.title}</h3>
                <h4 class="text-blue-400 mb-4">${exp.company}</h4>
                <ul class="space-y-2 text-gray-300 mb-4">
                    ${exp.description.map(d => `<li class="flex items-start gap-2"><i class="fas fa-chevron-right text-blue-400 mt-1"></i><span>${d}</span></li>`).join('')}
                </ul>
                <div class="flex flex-wrap gap-2">
                    ${exp.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', async function() {
    console.log('📦 DOM chargé, initialisation...');
    
    // Langue préférée
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    window.switchLanguage(savedLang);

    // AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // Typed.js
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

    // Active navigation links
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
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
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
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Contact form avec EmailJS
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            const currentLang = localStorage.getItem('preferred-language') || 'en';
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'fr' ? 'Envoi...' : 'Sending...');
            submitBtn.disabled = true;
            emailjs.sendForm('service_ou9f6zm', 'template_7w1lmkb', this)
                .then(() => {
                    showNotification(currentLang === 'fr' ? translations.fr.contact.form.success : translations.en.contact.form.success, 'success');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('EmailJS error:', error);
                    showNotification(currentLang === 'fr' ? translations.fr.contact.form.error : translations.en.contact.form.error, 'error');
                })
                .finally(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Dynamic year
    const yearElement = document.querySelector('.footer .text-gray-500');
    if (yearElement) {
        yearElement.innerHTML = `© ${new Date().getFullYear()} Ange KOUMBA. <span data-i18n="footer.rights">All rights reserved.</span>`;
    }

    // ===== CHARGEMENT DES DONNÉES JSON =====
    const projectsData = await loadJSON('/content/projects.json');
    if (projectsData && projectsData.projects) {
        const sorted = projectsData.projects.sort((a,b) => (a.order || 0) - (b.order || 0));
        renderProjects(sorted);
    }

    const certsData = await loadJSON('/content/certifications.json');
    if (certsData && certsData.certifications) {
        renderCertifications(certsData.certifications);
    }

    const expData = await loadJSON('/content/experiences.json');
    if (expData && expData.experiences) {
        renderExperiences(expData.experiences);
    }
});

// ===== NOTIFICATION SYSTEM =====
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

// ===== PARALLAX EFFECT =====
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

// ===== PRELOADER =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('aos-animate');
    });
});