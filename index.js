let bgContainerEl = document.querySelector(".container")
let DisplayEl = document.querySelector(".color-display h1")
let btn1 = document.querySelector("#box1")
let btn2 = document.querySelector("#box2")
let btn3 = document.querySelector("#box3")

let btn4 = document.querySelector("#box4")
let DisplayContainerEl = document.querySelector(".color-display")

btn1.addEventListener('click',function(){
    bgContainerEl.style.background="black"
    btn1.style.background="lightblue"
    btn2.style.background="red"
    btn3.style.background="green"
    btn4.style.background="blue"
    DisplayContainerEl.style.display="block"
    DisplayContainerEl.style.color="black"
    DisplayContainerEl.style.background="white"
    DisplayEl.textContent= "Background Color : Black"
    

})

btn2.addEventListener('click',function(){
    bgContainerEl.style.background="red"
    btn1.style.background="black"
    btn2.style.background="lightblue"
    btn3.style.background="green"
    btn4.style.background="blue"
    DisplayContainerEl.style.display="block"
    DisplayEl.textContent= "Background Color : Red"
    DisplayContainerEl.style.color="white"
    DisplayContainerEl.style.background="black"
})

btn3.addEventListener('click',function(){
    bgContainerEl.style.background="green"
    btn1.style.background="black"
    btn2.style.background="red"
    btn3.style.background="lightblue"
    btn4.style.background="green"
    DisplayContainerEl.style.display="block"
    DisplayEl.textContent= "Background Color : Green"
    DisplayContainerEl.style.color="white"
    DisplayContainerEl.style.background="black"
})

btn4.addEventListener('click',function(){
    bgContainerEl.style.background="blue"
    btn1.style.background="black"
    btn2.style.background="red"
    btn3.style.background="green"
    btn4.style.background="lightblue"
    DisplayContainerEl.style.display="block"
    DisplayEl.textContent= "Background Color : Blue"
    DisplayContainerEl.style.color="white"
    DisplayContainerEl.style.background="black"
})