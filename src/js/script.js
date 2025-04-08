
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      150: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });


const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      const arrow = item.querySelector('.arrow');

      question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');

        
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.arrow').forEach(a => a.classList.remove('open'));

        
        if (!isOpen) {
          answer.classList.add('open');
          arrow.classList.add('open');
        }
      });
    });