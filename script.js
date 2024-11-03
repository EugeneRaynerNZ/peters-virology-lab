document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('member-modal');
    const modalImage = document.getElementById('modal-image');
    const modalName = document.getElementById('modal-name');
    const modalTitle = document.getElementById('modal-title');
    const modalContext = document.getElementById('modal-context');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.member').forEach(container => {
        container.addEventListener('click', () => {
            const img = container.querySelector('img');
            const name = container.querySelector('h2').textContent;
            const title = container.querySelector('p').textContent;

            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalName.textContent = name;
            modalTitle.textContent = title;

            // Clear previous context paragraphs
            modalContext.innerHTML = '';

            // Add new context paragraphs (example content)
            const contextParagraphs = [
                'Context paragraph 1 about the person.',
                'Context paragraph 2 about the person.',
                'Context paragraph 3 about the person.'
            ];

            contextParagraphs.forEach(text => {
                const p = document.createElement('p');
                p.textContent = text;
                modalContext.appendChild(p);
            });

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });



    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
    });
});