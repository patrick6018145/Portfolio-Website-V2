export function scrollDown100vh() {
    const scrollDownButton = document.getElementById('scroll-down');
  
    scrollDownButton.addEventListener('click', () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  }