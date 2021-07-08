const checkbox=document.querySelector('#checkbox');

checkbox.addEventListener('change',function(){
    document.body.classList.toggle('dark');
})