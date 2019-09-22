import { TweenMax } from 'gsap'

// TweenMax.to( "{El}", {Time/sec}, {{xORy:px}} )

TweenMax.set("#box", {xPercent: - 50, yPercent: -50})

document.addEventListener('click', event => {
    const {clientX, clientY} = event
    TweenMax.to('#box',1 ,{x: clientX, y: clientY})
})