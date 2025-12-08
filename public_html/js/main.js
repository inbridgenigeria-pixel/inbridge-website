document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }

  // Navbar Scroll Effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md', 'border-amber-100', 'py-2');
        header.classList.remove('py-4', 'border-transparent');
      } else {
        header.classList.remove('shadow-md', 'border-amber-100', 'py-2');
        header.classList.add('py-4', 'border-transparent');
      }
    });
  }

  // Simple scroll reveal animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach((el) => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(el);
  });
  
  // Featured Toggle (Home page)
  const toggleBtns = document.querySelectorAll('[data-toggle]');
  if (toggleBtns.length > 0) {
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.toggle;
        
        // Update buttons
        toggleBtns.forEach(b => {
           if (b.dataset.toggle === target) {
             b.className = "px-6 py-2 rounded-full font-semibold transition-all bg-primary text-white shadow-lg cursor-pointer border-0";
           } else {
             b.className = "px-6 py-2 rounded-full font-semibold transition-all bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer border-0";
           }
        });

        // Update content
        document.querySelectorAll('[data-content]').forEach(content => {
          if (content.dataset.content === target) {
            content.classList.remove('hidden');
            // Re-trigger animation for the new content
            const revealElements = content.querySelectorAll('.reveal');
            revealElements.forEach(el => {
                el.classList.remove('opacity-100', 'translate-y-0');
                el.classList.add('opacity-0', 'translate-y-10');
                setTimeout(() => {
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-10');
                }, 50);
            });
          } else {
            content.classList.add('hidden');
          }
        });
      });
    });
  }

  // Handle contact form submission (mock)
  const contactForms = document.querySelectorAll('form');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thank you for your inquiry! Our team will contact you shortly.");
      form.reset();
    });
  });
});
