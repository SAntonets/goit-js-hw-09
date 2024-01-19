
const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

form.addEventListener('input', function (event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };

    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

const storedData = localStorage.getItem(storageKey);
if (storedData) {
  const parsedData = JSON.parse(storedData);
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
} else {
  form.elements.email.value = '';
  form.elements.message.value = '';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(storageKey);
    form.reset();
  } else {
    console.log('Please fill in both email and message fields.');
  }
});

