const form = document.querySelector('#form');
console.log(form);
const email = document.querySelector('#email');
// const errorIcon = document.querySelector('.error-icon');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailVal = email.value;
  console.log(emailVal);

  // check if it is a valid email
  if (!validateEmail(emailVal)) {
    form.classList.add('error');
    console.log('error');
  } else {
    form.classList.remove('error');
    console.log('removeerror');
    // form.classList.add('success');
    document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center;"><h1>Thank you!</h1></div>`;
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
