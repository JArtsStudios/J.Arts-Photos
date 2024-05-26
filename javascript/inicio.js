window.addEventListener('scroll', function() {
    const parallaxDiv = document.querySelector('.img');
    const infoDiv = document.querySelector('.info');
    let scrollPosition = window.pageYOffset;

    // Efecto parallax para el div con la clase .img
    if (parallaxDiv) {
        parallaxDiv.style.transform = `translateY(${scrollPosition * 0.3}px)`;

        // Ajustar opacidad y blur en función del desplazamiento
        let maxScroll = 500; // Cambia este valor para ajustar el punto donde se desvanece completamente y el blur es máximo
        let opacityValue = 1 - (scrollPosition / maxScroll);
        parallaxDiv.style.opacity = Math.max(opacityValue, 0);
        let blurValue = Math.min(scrollPosition / 25, 30); // Máximo blur de 25px
        parallaxDiv.style.filter = `blur(${blurValue}px)`;
    }

    // Efecto de blur para el div con la clase .info
    if (infoDiv) {
        let blurValue = Math.min(scrollPosition / 20, 10); // Ajusta el divisor para cambiar la sensibilidad del blur
        infoDiv.style.filter = `blur(${blurValue}px)`;
    }
});


const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

const nextSlide = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
};

const prevSlide = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
};

$next.addEventListener('click', nextSlide);
$prev.addEventListener('click', prevSlide);

// Cambia de imagen automáticamente cada 6 segundos
setInterval(nextSlide, 10000);




document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
      threshold: 0.1 // Ajusta el threshold según necesites
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
  
          if (entry.target.classList.contains('titulo-parafo')) {
            entry.target.classList.add('animated');
          } 
          if (entry.target.classList.contains('foto')) {
            entry.target.classList.add('animated');
          } 
         
         
        
          observer.unobserve(entry.target); // Dejar de observar después de la animación
        }
      });
    }, observerOptions);
  
    const classesToObserve = ['.titulo-parafo', '.foto' ]; // Añade más clases si es necesario
    classesToObserve.forEach(cls => {
      const elements = document.querySelectorAll(cls);
      elements.forEach(element => {
        observer.observe(element);
      });
    });
  });
  