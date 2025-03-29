document.addEventListener('DOMContentLoaded', function() {
    // Navigation Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    
    if (menuToggle && closeMenu && navMenu && overlay) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        function closeNavMenu() {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        closeMenu.addEventListener('click', closeNavMenu);
        overlay.addEventListener('click', closeNavMenu);
    }
    
    // Filter Pills
    const filterPills = document.querySelectorAll('.filter-pill');
    
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
    
    // Save Event (Bookmark) Toggle
    const saveIcons = document.querySelectorAll('.save-icon');
    
    saveIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.toggle('saved');
        });
    });
    
    // Hero Slideshow
    const slides = document.querySelectorAll('.hero-slide');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        showSlide(0);
        setInterval(nextSlide, 5000);
    }
    
    // Star Rating
    const starRating = document.querySelector('.star-rating');
    
    if (starRating) {
        const stars = starRating.querySelectorAll('i');
        
        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('active');
                }
            });
            
            star.addEventListener('mouseout', () => {
                stars.forEach(s => {
                    if (!s.classList.contains('selected')) {
                        s.classList.remove('active');
                    }
                });
            });
            
            star.addEventListener('click', () => {
                stars.forEach(s => s.classList.remove('selected'));
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('selected');
                    stars[i].classList.add('active');
                }
            });
        });
    }
    
    // Character Counter
    const textAreas = document.querySelectorAll('textarea[maxlength]');
    
    textAreas.forEach(textArea => {
        const counter = textArea.nextElementSibling;
        
        if (counter && counter.classList.contains('char-counter')) {
            textArea.addEventListener('input', () => {
                const maxLength = textArea.getAttribute('maxlength');
                const currentLength = textArea.value.length;
                counter.textContent = `${currentLength}/${maxLength}`;
            });
        }
    });
    
    // Tabs
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabs.length > 0 && tabContents.length > 0) {
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.style.display = 'none');
                
                tab.classList.add('active');
                tabContents[index].style.display = 'block';
            });
        });
        
        // Show first tab by default
        tabs[0].click();
    }
});