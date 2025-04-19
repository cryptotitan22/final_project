
  // Typewriter effect
  const words = ["for You", "for Miners", "for Gamers", "for Creators", "for Developers", "for Everyone"];
  let i = 0, j = 0;
  let currentWord = '';
  let isDeleting = false;

  const typewriterElement = document.getElementById("typewriter");

  function type() {
    currentWord = words[i];

    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, j--);
    } else {
      typewriterElement.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1050);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 120 : 120);
  }

  type();

  //log in submit
  function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
  }
  
  function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
  }

    // Form submission handler
    document.getElementById('emailForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission
  
      // Optionally validate inputs
      const email = this.email.value;
      const password = this.password.value;
  
      // You can also add AJAX call here if needed
  
      // For now, redirect after "successful" login
      window.location.href = 'dashboard.html';
    });


    // Scroll animation using IntersectionObserver
    const faders = document.querySelectorAll('.fade-up');

    const appearOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });