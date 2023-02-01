// menu portofolio
const nav2 = document.querySelector('.menu-div-portofolio')
fetch('menu-portofolio.html')
.then(res=>res.text())
.then(data=>{
    nav2.innerHTML=data
})

// menu
const nav = document.querySelector('.menu-div')
fetch('menu.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})


// footer
const footer = document.querySelector('.footer-div')
fetch('footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})