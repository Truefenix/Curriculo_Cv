/*==================== Show Menu ===============  */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

  /*====== Menu Show ======*/
  /* Validate if constant exists */
  if(navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    })
  }

  /*====== Esconde o Menu ======*/
  /* Validate if constant exists */
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }

/*==================== Remove Menu Mobile ===============  */
const navLink = document.querySelectorAll('nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // Quando eu clico em cada link, e remove o show-menu da classe.
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== Background Header ===============  */
function scrollHeader() {
    const header = document.getElementById('header');
    // Quando o scroll e maior que 50 viewport de altura,
    // adciona a classe scroll-header da tag header.
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  }
  
  window.addEventListener('scroll', scrollHeader);

  /*==================== Contact Form ===============  */
  const contactForm = document.getElementById('contact-form');
    contactName = document.getElementById('contact-name');
    contactEmail = document.getElementById('contact-email');
    Message = document.getElementById('message');
    contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
      e.preventDefault();

      // checar se a área tem um valor
      if(contactName.value === '' || contactEmail.value === '' || Message.value === '') {

        // adcionar e remover cor
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // Monstre a message
        contactMessage.textContent = 'Write all the input fields';
      } else {
        // serviceID - templateID - #form - publickey

        emailjs.sendForm(
          'service_3a21gbf',
          'template_2rfvnsk',
          '#contact-form',
          'xmMlebMH3SgORp7FR')
      .then(() => {
        // mostra a message e adciona a cor
        contactMessage.classList.add('color-light');
        contactMessage.textContent = 'Message sent ✔';

        //remover message depois de 5 segundos
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
      },
       (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
      });

      // Limpar campos de mensagem
      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
    }
  };

    contactForm.addEventListener('submit', sendEmail);

/*==================== Style Switcher ===============  */
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
  styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
  styleSwitcher.classList.toggle('open');
})

// ocultar switcher com o rolar da página
window.addEventListener('scroll', () => {
  if(styleSwitcher.classList.contains('open')) {
    styleSwitcher.classList.remove('open');
  }
})

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {

  alternateStyles.forEach((style) => {

    if(color === style.getAttribute('title')) {    
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  })
}