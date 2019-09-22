import { TweenMax } from 'gsap'

// TweenMax.to( "{El}", {Time/sec}, {{xORy:px}} )


//ch1
// TweenMax.set("#box", {xPercent: - 50, yPercent: -50})

// document.addEventListener('click', event => {
//     const {clientX, clientY} = event
//     TweenMax.to('#box',1 ,{x: clientX, y: clientY})
// })

TweenMax.set("#box",{
    backgroundColor: "green",
    width: "50px",
    height: "50px",
    x: "50px",
    y: "50px",
})

document.addEventListener("click",() =>{
    TweenMax.to("#box",0.5,{
        rotation: "+=30"
    })
})