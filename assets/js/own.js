// menu
const nav = document.querySelector('.menu-div')
fetch('menu.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

// head
const head = document.querySelector('.head-div')
fetch('head.html')
.then(res=>res.text())
.then(data=>{
    head.innerHTML=data
})

// footer
const footer = document.querySelector('.footer-div')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})