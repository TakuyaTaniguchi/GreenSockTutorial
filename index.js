import { TweenMax, TimelineMax } from 'gsap'

// TweenMax.to( "{El}", {Time/sec}, {{xORy:px}} )


//ch1
// TweenMax.set("#box", {xPercent: - 50, yPercent: -50})

// document.addEventListener('click', event => {
//     const {clientX, clientY} = event
//     TweenMax.to('#box',1 ,{x: clientX, y: clientY})
// })


//ch2
TweenMax.set("#box",{
    backgroundColor: "green",
    width: "50px",
    height: "50px",
    x: "50px",
    y: "50px",
})

// document.addEventListener("click",() =>{
//     TweenMax.to("#box",0.5,{
//         rotation: "+=30"
//     })
// })

//ch3
// const timeline = new TimelineMax()

// timeline.pause()

// timeline.to("#box",.5,{x: 100})
// timeline.to("#box",.5,{y: 100})
// timeline.to("#box",.5,{x: 50})
// timeline.to("#box",.5,{y: 50})


// document.querySelector("#box").addEventListener("click", ()=>{
//     timeline.resume();
// })

//ch4
const timeline = new TimelineMax({repeat: -1})

timeline.pause()

timeline.to("#box",.5,{x: 100})
timeline.to("#box",.5,{y: 100})
timeline.to("#box",.5,{x: 50})
timeline.to("#box",.5,{y: 50})

//timelineは動き続けているのでactiveを取ることが可能。
document.querySelector("#box").addEventListener("click", ()=>{
    if(timeline.isActive()){
        console.log('if');
        timeline.pause()
    } else{
        console.log('else')
        timeline.resume();
    }
})
