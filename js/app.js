document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); // Seleccionamos el formulario
    const statusMessage = document.createElement('div');
    

    form.addEventListener('submit', async function (event) {
      event.preventDefault(); 
      

      statusMessage.textContent = 'Enviando...';
      statusMessage.style.color = '#0000FF';
      form.appendChild(statusMessage);
      
      try {
        const response = await fetch(form.action, {
          method: form.method,
          headers: {
            'Accept': 'application/json'
          },
          body: new FormData(form)
        });
        
        const result = await response.json();
  

        if (response.ok) {
          statusMessage.textContent = '¡Mensaje enviado con éxito!';
          statusMessage.style.color = '#28a745';
        } else {
          statusMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
          statusMessage.style.color = '#FF0000';
        }
  

        setTimeout(() => {
          form.reset();
          statusMessage.textContent = '';
        }, 3000);
  
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        statusMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
        statusMessage.style.color = '#dc3545'; 
        

        setTimeout(() => {
          statusMessage.textContent = '';
        }, 5000);
      }
    });
  });
  