// script.js
// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');
});

// روابط تعمل الآن لصفحات مستقلة
document.getElementById('forgot-link').addEventListener('click', e=>{
  e.preventDefault();
  window.location.href='forgot.html';
});
document.getElementById('signup-link').addEventListener('click', e=>{
  e.preventDefault();
  window.location.href='signup.html';
});

// Demo login
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailMsg = document.getElementById('emailMsg');
const passMsg = document.getElementById('passMsg');
const form = document.getElementById('loginForm');

function validateEmail(v){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  emailMsg.textContent='';
  passMsg.textContent='';
  let ok=true;
  if(!validateEmail(email.value.trim())){
    emailMsg.textContent='رجاءً أدخل بريدًا إلكترونيًا صالحًا';
    ok=false;
  }
  if(password.value.length<6){
    passMsg.textContent='كلمة المرور قصيرة — على الأقل 6 أحرف';
    ok=false;
  }
  if(!ok) return;
  alert('تم تسجيل الدخول بنجاح!');
});

document.getElementById('demoBtn').addEventListener('click', ()=>{
  email.value='demo@fai.test';
  password.value='password';
  emailMsg.textContent='';
  passMsg.textContent='';
});
