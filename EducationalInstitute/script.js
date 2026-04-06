document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            
            // Close all others
            document.querySelectorAll('.accordion-content').forEach(item => {
                if(item !== content) {
                    item.style.maxHeight = null;
                }
            });

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Form Submission
    const form = document.getElementById('enquiryForm');
    const status = document.getElementById('enquiryStatus');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        
        btn.textContent = 'Submitting...';
        btn.disabled = true;

        setTimeout(() => {
            status.textContent = 'Enquiry submitted successfully! We will be in touch.';
            status.style.color = '#10B981'; // Success indicator
            form.reset();
            
            btn.textContent = 'Submit Enquiry';
            btn.disabled = false;

            setTimeout(() => {
                status.textContent = '';
            }, 3000);
        }, 1200);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
