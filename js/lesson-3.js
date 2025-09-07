const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target.dataset.src);
  
        entry.target.src = entry.target.dataset.src;
        entry.target.style.transform = `translateX(0)`;
        entry.target.style.opacity = `1`;
  
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px 70px 0px"
  });
  
  document.querySelectorAll("img").forEach(img => imgObserver.observe(img));
  