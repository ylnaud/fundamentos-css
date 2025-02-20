import { Form } from './form.js';

// Verificar estado
setTimeout(() => {
  const submitBtn = document.getElementById('btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Deshabilitado';
}, 2000);

const d = document;

d.addEventListener('DOMContentLoaded', async () => {
  const getData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      // Ejemplo: Insertar datos en el DOM
      const userList = d.getElementById('user-list');
      userList.innerHTML = '';
      data.forEach((user) => {
        const li = d.createElement('li');
        const { name, email } = user;
        li.textContent = `${name} - ${email}`;
        userList.appendChild(li);
      });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  getData();
});

if (!HTMLDialogElement) {
  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.setAttribute('role', 'dialog');
  });
}
Form('.form-agrupar-selectores', '.input-value', 'submit');
showDialogBtn.addEventListener('click', () => favDialog.showModal());

const favDialog = d.getElementById('favDialog');
