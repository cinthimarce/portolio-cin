const header = document.querySelector('header');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY >60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}  

/*SCROLL BTN*/

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*SKILL SECTION*/

const designBtn = document.querySelector(".design-btn");
const codeBtn = document.querySelector(".code-btn");

const designList = document.querySelector(".design-list");
const codeList = document.querySelector(".code-list");

designBtn.addEventListener('click', ()=>{
    designBtn.classList.add("active");
    codeBtn.classList.remove("active");
    designList.classList.add("show");
    codeList.classList.remove("show");
});
codeBtn.addEventListener('click', ()=>{
    designBtn.classList.remove("active");
    codeBtn.classList.add("active");
    designList.classList.remove("show");
    codeList.classList.add("show");
})


/*FILTER PORTA*/

let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }
        
        this.classList.add('current');

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}

