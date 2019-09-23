import { TweenMax, TimelineMax, Elastic } from 'gsap'

// TweenMax.to( "{El}", {Time/sec}, {{xORy:px}} )


//ch1
// TweenMax.set("#box", {xPercent: - 50, yPercent: -50})

// document.addEventListener('click', event => {
//     const {clientX, clientY} = event
//     TweenMax.to('#box',1 ,{x: clientX, y: clientY})
// })


//ch2
// TweenMax.set("#box",{
//     backgroundColor: "green",
//     width: "50px",
//     height: "50px",
//     x: "50px",
//     y: "50px",
// })

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

// //ch4
// const timeline = new TimelineMax({repeat: -1})

// timeline.pause()

// timeline.to("#box",.5,{x: 100})
// timeline.to("#box",.5,{y: 100})
// timeline.to("#box",.5,{x: 50})
// timeline.to("#box",.5,{y: 50})

// //timelineは動き続けているのでactiveを取ることが可能。
// document.querySelector("#box").addEventListener("click", ()=>{
//     if(timeline.isActive()){
//         console.log('if');
//         timeline.pause()
//     } else{
//         console.log('else')
//         timeline.resume();
//     }
// })


//ch5
// const timeline = new TimelineMax({repeat: -1})

// timeline.pause()

// timeline.to("#box",.5,{x: 100})
// timeline.to("#box",.5,{y: 100})
// timeline.to("#box",.5,{x: 50})
// timeline.to("#box",.5,{y: 50})

// //timelineは動き続けているのでactiveを取ることが可能。
// document.querySelector("#box").addEventListener("click", ()=>{
//     if(timeline.isActive()){
//         console.log('if');
//         timeline.pause()
//     } else{
//         console.log('else')
//         timeline.resume();
//     }
// })

// document.addEventListener("wheel", (event)=>{
//     //timeline.progress　現在の値を取得　ホイールで加算
//     if(event.wheelDelta > 0){
//         // timeline.progress(timeline.progress() + 0.1)
//         TweenMax.to(timeline, .25,{progress: "+=0.1"})
//     }else{
//         TweenMax.to(timeline, .25,{progress: "-=0.1"})
//     }
// })


//ch6
// const timeline = new TimelineMax({repeat: -1})

// timeline.pause()

// timeline.to("#box",.5,{x: 100})
// timeline.to("#box",.5,{y: 100})
// timeline.to("#box",.5,{x: 50})
// timeline.to("#box",.5,{y: 50})

// document.addEventListener("click", (event)=>{
//     const {x,y} = event
//     // 実行後setされている値に戻る
//     // TweenMax.from('#box',1,{x,y})

//     //最終地を設定できます。
//     TweenMax.fromTo('#box',1,{x,y},{x: 500, y: 500})
// })


//ch7
// const divs = Array.from({length: 100}, () => 
//     document.createElement("div")
// )

// divs.forEach(div => {
//     TweenMax.set(div,{
//         position: "absolute",
//         x: `${Math.random() * window.innerWidth}px`,
//         y: `${Math.random() * window.innerHeight}px`,
//         width: 20,
//         height: 20,
//         backgroundColor: "green",
//         border: "3px solid black"
//     })
//     document.body.appendChild(div)
// })

// document.addEventListener("click",event => {
//     const {x,y} = event
//     TweenMax.to(divs,1, {x,y})
// })

//ch8
// const divs = Array.from({length: 100}, () => 
//     document.createElement("div")
// )

// divs.forEach(div => {
//     TweenMax.set(div,{
//         position: "absolute",
//         x: `${Math.random() * window.innerWidth}px`,
//         y: `${Math.random() * window.innerHeight}px`,
//         width: 20,
//         height: 20,
//         backgroundColor: "green",
//         border: "3px solid black"
//     })
//     document.body.appendChild(div)
// })

// TweenMax.to(divs,10, {x: 100,y: 100})

// // document.addEventListener("click",event => {
// //     TweenMax.killTweensOf(event.target)
// // })

// document.addEventListener("click",event => {
//     // TweenMax.killAll()
//     //killした時の状態にジャンプする。
//     TweenMax.killAll(true)
// })

//ch9

// const box = document.createElement("div")
// box.setAttribute("class", "box")
// document.body.appendChild(box)

// box.addEventListener("mouseover", () => {
//   TweenMax.to(box, 0.25, { className: "+=hover" })
// })

// box.addEventListener("mouseout", () => {
//     TweenMax.to(box, 0.25, { className: "-=hover" })
// })

// box.addEventListener("mousedown", () => {
//     TweenMax.to(box, 0.25, { className: "+=down" })
// })

// box.addEventListener("mouseup", () => {
//     TweenMax.to(box, 0.25, { className: "-=down" })
// })

// //ch10

// const box = document.createElement("div")
// box.setAttribute("class", "box")
// document.body.appendChild(box)

// TweenMax.set(box,{ transformPerspective: 100 })

// box.addEventListener("click", () => {
//     TweenMax.to(box,1, {rotationY: "+=180" })
//     // TweenMax.to(box,1, {rotationX: "+=180" })
//     // TweenMax.to(box,1, {rotationZ: "+=180" })
// })


//ch11

// document.addEventListener("mousemove" , event => {
//     console.log('mousemove');
//     TweenMax.set(document.body, { perspective: event.x })
// })

// // TweenMax.set(document.body,{ perspective: 200 })

// Array.from({ length: 30 }).map( () => document.createElement("div"))
// .forEach(box => {
//     box.setAttribute("class", "box")
//     document.body.appendChild(box)

//     TweenMax.set(box,{ rotationY: "30"})
//     // box.addEventListener("click", () => {
//     //     if(!TweenMax.isTweening(box)){
//     //         TweenMax.to(box,1, {rotationY: "+=180" })
//     //     }
//     // })

// })

//ch12

const logo = document.querySelector("img")

TweenMax.to(logo,.75,{
    scale: 1.25,
    repeat: -1,
    yoyo: true,
    ease: Elastic.easeInOut
})