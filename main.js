const btns = document.querySelectorAll('.nav ul li');
let image1 = 'images/home.webp';
let image2 = 'images/work.jpg';
let image3 = 'images/blog.webp';
let image4 = 'images/about.webp';
const img = document.querySelector('.imgs img');

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
        btn.classList.add('active');
        if(btn.getAttribute('id') == '1'){
            img.src = image1;
        }else if(btn.getAttribute('id') == '2'){
            img.src = image2;
        }else if(btn.getAttribute('id') == '3'){
            img.src = image3;
        }else if(btn.getAttribute('id') == '4'){
            img.src = image4;
        }
    })
})