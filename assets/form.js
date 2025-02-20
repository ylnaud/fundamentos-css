export function Form(formSelector, inputSelector, submitButtonId) {
  const d = document,
    $form = d.querySelector(formSelector),
    $inputs = d.querySelectorAll(inputSelector),
    $submitButton = d.getElementById(submitButtonId);

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    $inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isValid = false;
        const errorSpan = input.nextElementSibling;
        errorSpan.classList.add('error-visible');
      } else {
        const errorSpan = input.nextElementSibling;
        errorSpan.classList.remove('error-visible');
      }
    });

    if (isValid) {
      alert('Formulario enviado correctamente');
      $submitButton.submit();
      return false;
    }
  });
}
