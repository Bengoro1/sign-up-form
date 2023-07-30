const inputs = document.querySelectorAll('input');
// const fname = document.getElementById('fname');
// const lname = document.getElementById('lname');
// const email = document.getElementById('mail');
// const pnum = document.getElementById('pnum');
// const pwd = document.getElementById('pwd');
// const conpwd = document.getElementById('conpwd');

const button = document.querySelector('button[type=submit]');
button.addEventListener('click', () => {
  matchingPassword();
});

fname.addEventListener('input', () => {
  if(startsWithCapital(fname.value)) {
    fname.setCustomValidity('Your name should start with a capital letter!');
    fname.classList.add('error');
  } else {
    fname.classList.remove('error');
    fname.setCustomValidity('');
  }
  fname.reportValidity();
});

lname.addEventListener('input', () => {
  if(startsWithCapital(lname.value)) {
    lname.setCustomValidity('Your name should start with a capital letter!');
    lname.classList.add('error');
  } else {
    lname.classList.remove('error');
    lname.setCustomValidity('');
  }
  lname.reportValidity();
});

mail.addEventListener('input', () => {
  if(mail.validity.typeMismatch) {
    mail.setCustomValidity('Enter a valid e-mail address.');
    mail.classList.add('error');
  } else {
    mail.classList.remove('error');
    mail.setCustomValidity('');
  }
  mail.reportValidity();
});

pnum.addEventListener('input', () => {
  if(pnum.validity.patternMismatch) {
    pnum.setCustomValidity('Enter a valid phone number.');
    pnum.classList.add('error');
  } else {
    pnum.classList.remove('error');
    pnum.setCustomValidity('');
  }
  pnum.reportValidity();
});

function startsWithCapital(word) {
  return word.charAt(0) === word.charAt(0).toLowerCase();
}

pwd.addEventListener('input', () => {
  const re = /\d/;
  if(pwd.value.length < 8) {
    pwd.setCustomValidity('Your password must have at least 8 characters!');
    pwd.classList.add('error');
  } else if(!re.test(pwd.value)) {
    pwd.setCustomValidity('Your password must include at least 1 number!');
    pwd.classList.add('error');
  } else {
    pwd.classList.remove('error');
    pwd.setCustomValidity('');
  }
  pwd.reportValidity();
});

function matchingPassword() {
  if (pwd.value !== conpwd.value) {
    conpwd.setCustomValidity('Passwords are not matching.');
    conpwd.classList.add('error');
    pwd.classList.add('error');
  } else {
    conpwd.setCustomValidity('');
    conpwd.classList.remove('error');
    pwd.classList.remove('error');
  }
  conpwd.reportValidity();
}
