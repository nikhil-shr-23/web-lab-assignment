document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        
        btn.textContent = 'Processing...';
        btn.disabled = true;
        btn.style.opacity = '0.7';

        setTimeout(() => {
            status.textContent = 'Audit request submitted perfectly! Our team will reach out within 24 hours.';
            status.style.color = '#34D399'; // Emerald Green
            form.reset();
            
            btn.textContent = 'Request Audit';
            btn.disabled = false;
            btn.style.opacity = '1';

            setTimeout(() => {
                status.textContent = '';
            }, 4000);
        }, 1500);
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add Intersection Observer for triggering animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.service-card, .test-card').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
