$('.owl-carousel').owlCarousel({
    center:true,
    autoplay:true,
    items:1,
    loop:true,
    margin:100,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
 })

 const tablebtnone = document.querySelector(".btn-1");
const tablebtntwo = document.querySelector(".btn-2");
const tablebtnthree = document.querySelector(".btn-3");
const tableOne = document.querySelector(".t1");
const tableTwo = document.querySelector(".t2");
const tableThree = document.querySelector(".t3");

    tablebtnone.addEventListener('click', () => {
        tablebtnone.classList.add('active')
        tableOne.classList.add('active')
        tablebtntwo.classList.remove('active')
        tableTwo.classList.remove('active')
        tablebtnthree.classList.remove('active')
        tableThree.classList.remove('active')

    })
    tablebtntwo.addEventListener('click', () => {
        tablebtntwo.classList.add('active')
        tableTwo.classList.add('active')
        tablebtnone.classList.remove('active')
        tableOne.classList.remove('active')
        tablebtnthree.classList.remove('active')
        tableThree.classList.remove('active')

    })
    tablebtnthree.addEventListener('click', () => {
        tablebtnthree.classList.add('active')
        tableThree.classList.add('active')
        tablebtnone.classList.remove('active')
        tableOne.classList.remove('active')
        tablebtntwo.classList.remove('active')
        tableTwo.classList.remove('active')
        

    })


const hamBurger = document.querySelector(".burger");
const navManu = document.querySelector(".nav-pc");

hamBurger.addEventListener("click", () => {
    // console.log("clicked");
    hamBurger.classList.toggle('active');
    navManu.classList.toggle('active');
})

const myElement = document.getElementById('nav');
for (const child of myElement.children) {
  child.addEventListener('click', () => {
    hamBurger.classList.toggle('active');
    navManu.classList.toggle('active');
  })
}




