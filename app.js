let show_icon = document.querySelector('.show');
let hidden_icon = document.querySelector('.hidden');
let password = document.querySelector('input');

show_icon.addEventListener('click', ()=>{
    show_icon.style.display="none";
    hidden_icon.style.display="block";
    password.type="password";
});

hidden_icon.addEventListener('click', ()=>{
    hidden_icon.style.display="none";
    show_icon.style.display="block";
    password.type="text";
});





