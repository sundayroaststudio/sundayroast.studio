
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
