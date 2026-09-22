        document.addEventListener('DOMContentLoaded', () => {
            const themeBtn = document.getElementById('theme-btn');
            const themeIcon = document.getElementById('theme-icon');
            const menuBtn = document.getElementById('menu-btn');
            const navLinks = document.getElementById('nav-links');
            const contactForm = document.getElementById('contact-form');
            const toast = document.getElementById('toast');

            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark');
                themeIcon.className = 'fas fa-sun';
            }

            themeBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark');
                const isDark = document.body.classList.contains('dark');
                
                themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });

            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });

            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                toast.classList.add('show');
                contactForm.reset();

                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3500);
            });
        });