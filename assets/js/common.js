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