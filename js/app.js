//preloader
document.addEventListener('DOMContentLoaded',()=>{
   let loading = document.querySelector('.loading');
   setTimeout(() => {
    loading.style.display = 'none';
   }, 2000);
   
})



// Navbar
let navbar = document.getElementById('navbar'),
    bandera = 0;

window.onscroll = () => {
    let top = window.scrollY;
    if (top > 100) {
        navbar.classList.remove('navbar');
        navbar.classList.add('navbar2');
    } else {
        navbar.classList.remove('navbar2');
        navbar.classList.add('navbar');
    }
}
// Menu Mobile
let menu = document.getElementById('menu');
menu.addEventListener('click', () => {
    let navegation = document.getElementById('navegation');
    navegation.classList.toggle('active');

    let li = document.querySelectorAll('#navegation li a');
    li.forEach(nav => {
        nav.addEventListener('click', () => {
            navegation.classList.remove('active');
        })
    })

});
// Counter
window.addEventListener('scroll', counter)

function counter() {

    let obj = document.getElementById("stadistics")
    distancia = obj.getBoundingClientRect().top
    let altura = window.innerHeight / 2

    if (altura >= distancia) {

        let oneCircle = document.querySelector('#one h2'),
            twoCircle = document.querySelector('#two h2'),
            threeCircle = document.querySelector('#three h2');

        let n = 0,
            n2 = 0,
            n3 = 0;

        if (bandera === 0) {
            const timer1 = setInterval(() => {
                n++;
                oneCircle.innerText = `${n}K`;
                if (n === 7) {
                    clearInterval(timer1);
                }

            }, 700);

            const timer2 = setInterval(() => {
                n2++;
                twoCircle.innerText = `${n2}`;
                if (n2 === 139) {
                    clearInterval(timer2);
                }
            }, 40);

            const timer3 = setInterval(() => {
                n3++;
                threeCircle.innerText = `${n3}`;
                if (n3 === 35) {
                    clearInterval(timer3);
                }
            }, 100);

            bandera = 1
        } else {
            return;
        }
    }

}
