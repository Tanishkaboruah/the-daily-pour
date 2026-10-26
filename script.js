const toggle=document.querySelector('.toggle');const nav=document.querySelector('.nav nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}
document.getElementById("enquiryButton")?.addEventListener("click", function (event) {
event.preventDefault();
alert("Thanks for your interest! This is a demo website. WhatsApp enquiries will be enabled for the café owner.");
});
