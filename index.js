    //  tasbeh
const countElement = document.querySelector("#count")
const btnAddElement = document.querySelector("#btn-c")
const resetElement = document.querySelector("#btn-r")
const lightElement = document.querySelector("#btn-l")
let arr = JSON.parse(localStorage.getItem("arr")) || 0;
countElement.textContent = arr
btnAddElement.addEventListener("click",()=>{
    arr += 1;
    localStorage.setItem("arr", JSON.stringify(arr))
    countElement.textContent = arr;
})
resetElement.addEventListener("click",()=>{
    arr = 0
    localStorage.setItem("arr", JSON.stringify(arr));
    countElement.textContent = "0"
})
let a = true
lightElement.addEventListener("click",()=>{
    if(a){
        a = false
        countElement.style.background = "yellowgreen"
    }else{
        a = true
        countElement.style.background = "grey"
    }
})


// secuntimer
const titleEl = document.querySelector(".title")
const title2El = document.querySelector(".title2")
const title3El = document.querySelector(".title3")
const startBtnEl = document.querySelector("#start-btn")
const stopBtnEl = document.querySelector("#stop-btn")
const resetBtnEl = document.querySelector("#reset-btn")
let id
let id2
let id3
startBtnEl.addEventListener("click",()=>{
    id = setInterval(()=>{
        titleEl.innerText++;
        if(titleEl.innerText == 60){
            titleEl.innerText = "00"
        }
    },100/6)
    id2 = setInterval(()=>{
        title2El.innerText++;
    },1000)
    id3 =setInterval(()=>{
        title3El.innerText++
    },100000)
    startBtnEl.setAttribute("disabled",true)
})
resetBtnEl.addEventListener("click",()=>{
   clearInterval(id)
   clearInterval(id2)
   clearInterval(id3)
   titleEl.innerText = "00"
   title2El.innerText = "00"
   title3El.innerText = "00"
   startBtnEl.removeAttribute("disabled")
})
stopBtnEl.addEventListener("click",()=>{
    clearInterval(id)
    clearInterval(id2)
    clearInterval(id3)
    startBtnEl.removeAttribute("disabled")
})