// Backyard Whiskey Club - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar Background on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(139, 69, 19, 0.98)';
        } else {
            navbar.style.background = 'rgba(139, 69, 19, 0.95)';
        }
    });
    
    // Tasting Data Structure
    const tastingData = {
        upcoming: {
            date: 'March 15, 2024',
            title: 'Spring Rye Exploration',
            time: '7:00 PM - 9:30 PM',
            location: 'The Backyard Patio',
            description: 'Join us for an evening exploring the bold and spicy world of rye whiskey. We\'ll taste through a carefully curated selection of premium ryes, from classic American expressions to innovative craft distillery offerings.',
            whiskeys: [
                {
                    name: 'WhistlePig 10 Year',
                    type: 'Vermont Rye',
                    description: 'Rich and complex with notes of vanilla and oak',
                    image: 'images/RyeBanner2024.png'
                },
                {
                    name: 'High West Double Rye',
                    type: 'Utah Rye',
                    description: 'Spicy and bold with a smooth finish',
                    image: 'images/RyeBanner2024.png'
                },
                {
                    name: 'Rittenhouse Bottled-in-Bond',
                    type: 'Pennsylvania Rye',
                    description: 'Classic and affordable with great character',
                    image: 'images/RyeBanner2024.png'
                }
            ]
        },
        pastTastings: [
            {
                date: 'December 15, 2023',
                title: 'Holiday Single Malt Showcase',
                attendees: 12,
                description: 'A festive evening featuring premium single malt scotches perfect for the holiday season. We explored the rich, warming flavors that make winter tastings so special.',
                whiskeys: [
                    'Macallan 18 Year Sherry Oak',
                    'Lagavulin 16 Year',
                    'Glenfiddich 21 Year Reserva Rum Cask'
                ],
                highlights: 'Member favorite was the Macallan 18, with its rich dried fruit and spice notes. The Lagavulin brought the perfect smoky contrast for the winter evening.'
            },
            {
                date: 'September 20, 2023',
                title: 'Japanese Whisky Discovery',
                attendees: 15,
                description: 'An exploration of the delicate and refined world of Japanese whisky, featuring both classic expressions and limited releases.',
                whiskeys: [
                    'Yamazaki 12 Year',
                    'Hibiki Harmony',
                    'Nikka Coffey Malt'
                ],
                highlights: 'The Hibiki Harmony was a standout with its complex blend of fruit and floral notes. Members appreciated the craftsmanship and attention to detail in Japanese whisky making.'
            },
            {
                date: 'June 10, 2023',
                title: 'Summer Bourbon Bonanza',
                attendees: 18,
                description: 'A celebration of American bourbon with a focus on different mash bills and aging techniques. Perfect for a warm summer evening.',
                whiskeys: [
                    'Pappy Van Winkle 15 Year',
                    'Blanton\'s Single Barrel',
                    'Four Roses Single Barrel'
                ],
                highlights: 'The Pappy Van Winkle was the clear winner, though the Four Roses offered incredible value. Great discussion about the impact of different barrel char levels.'
            }
        ]
    };
    
    // Dynamic Content Loading
    function loadUpcomingTasting() {
        const tasting = tastingData.upcoming;
        
        // Update tasting details
        const titleElement = document.querySelector('.tasting-details h3');
        const timeElement = document.querySelector('.tasting-time');
        const locationElement = document.querySelector('.tasting-location');
        const descriptionElement = document.querySelector('.tasting-description');
        
        if (titleElement) titleElement.textContent = tasting.title;
        if (timeElement) timeElement.textContent = tasting.time;
        if (locationElement) locationElement.textContent = tasting.location;
        if (descriptionElement) descriptionElement.textContent = tasting.description;
        
        // Update whiskey lineup
        const whiskeyList = document.querySelector('.whiskey-list');
        if (whiskeyList) {
            whiskeyList.innerHTML = tasting.whiskeys.map(whiskey => `
                <div class="whiskey-item">
                    <div class="whiskey-image">
                        <img src="${whiskey.image}" alt="${whiskey.name}" class="whiskey-bottle-img">
                    </div>
                    <div class="whiskey-info">
                        <h5>${whiskey.name}</h5>
                        <p>${whiskey.type} - ${whiskey.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }
    
    function loadPastTastings() {
        const tastings = tastingData.pastTastings;
        const tastingsGrid = document.querySelector('.tastings-grid');
        
        if (tastingsGrid) {
            tastingsGrid.innerHTML = tastings.map(tasting => `
                <div class="tasting-recap-card">
                    <div class="recap-date">
                        <span class="month">${tasting.date.split(' ')[0]}</span>
                        <span class="day">${tasting.date.split(' ')[1].replace(',', '')}</span>
                        <span class="year">${tasting.date.split(' ')[2]}</span>
                    </div>
                    <div class="recap-content">
                        <h3>${tasting.title}</h3>
                        <p class="recap-attendees">${tasting.attendees} Members Attended</p>
                        <p class="recap-description">${tasting.description}</p>
                        <div class="recap-whiskeys">
                            <h5>Featured Whiskeys:</h5>
                            <ul>
                                ${tasting.whiskeys.map(whiskey => `<li>${whiskey}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="recap-highlights">
                            <h5>Highlights:</h5>
                            <p>${tasting.highlights}</p>
                        </div>
                        <button class="btn btn-outline" onclick="showTastingDetails('${tasting.title}')">View Full Recap</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Load dynamic content
    loadUpcomingTasting();
    loadPastTastings();
    
    // Interactive Features
    function showTastingDetails(tastingTitle) {
        // This would typically open a modal or navigate to a detailed page
        alert(`Full details for "${tastingTitle}" would be displayed here. This could include photos, detailed tasting notes, member reviews, and more!`);
    }
    
    // RSVP Functionality
    function handleRSVP() {
        const rsvpButtons = document.querySelectorAll('button:contains("RSVP")');
        rsvpButtons.forEach(button => {
            button.addEventListener('click', function() {
                // This would typically open a form or redirect to an RSVP page
                alert('RSVP functionality would be implemented here. This could include a form to collect member information and dietary restrictions.');
            });
        });
    }
    
    // Button Event Listeners
    document.addEventListener('click', function(e) {
        if (e.target.textContent.includes('RSVP')) {
            e.preventDefault();
            alert('RSVP functionality would be implemented here. This could include a form to collect member information and dietary restrictions.');
        }
        
        if (e.target.textContent.includes('View Full Details')) {
            e.preventDefault();
            alert('Full tasting details would be displayed here, including detailed whiskey information, tasting notes, and preparation instructions.');
        }
        
        if (e.target.textContent.includes('View Full Recap')) {
            e.preventDefault();
            const tastingTitle = e.target.closest('.tasting-recap-card').querySelector('h3').textContent;
            showTastingDetails(tastingTitle);
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.tasting-recap-card, .whiskey-item, .about-text, .about-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Whiskey bottle hover effects
    document.querySelectorAll('.whiskey-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add loading animation for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Initialize all interactive features
    handleRSVP();
    
    console.log('Backyard Whiskey Club website loaded successfully! 🥃');
});
