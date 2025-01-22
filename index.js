//  tasbeh
const countElement = document.querySelector("#count")
const btnAddElement = document.querySelector("#btn-c")
const resetElement = document.querySelector("#btn-r")
const lightElement = document.querySelector("#btn-l")
let arr = JSON.parse(localStorage.getItem("arr")) || 0;
countElement.textContent = arr
btnAddElement.addEventListener("click", () => {
    arr += 1;
    localStorage.setItem("arr", JSON.stringify(arr))
    countElement.textContent = arr;
})
resetElement.addEventListener("click", () => {
    arr = 0
    localStorage.setItem("arr", JSON.stringify(arr));
    countElement.textContent = "0"
})
let a = true
lightElement.addEventListener("click", () => {
    if (a) {
        a = false
        countElement.style.background = "yellowgreen"
    } else {
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
startBtnEl.addEventListener("click", () => {
    id = setInterval(() => {
        titleEl.innerText++;
        if (titleEl.innerText == 60) {
            titleEl.innerText = "00"
        }
    }, 100 / 6)
    id2 = setInterval(() => {
        title2El.innerText++;
    }, 1000)
    id3 = setInterval(() => {
        title3El.innerText++
    }, 100000)
    startBtnEl.setAttribute("disabled", true)
})
resetBtnEl.addEventListener("click", () => {
    clearInterval(id)
    clearInterval(id2)
    clearInterval(id3)
    titleEl.innerText = "00"
    title2El.innerText = "00"
    title3El.innerText = "00"
    startBtnEl.removeAttribute("disabled")
})
stopBtnEl.addEventListener("click", () => {
    clearInterval(id)
    clearInterval(id2)
    clearInterval(id3)
    startBtnEl.removeAttribute("disabled")
})


// uy ishla


const loader2Element = document.querySelector(".loader2")
const containerEl = document.querySelector(".container")
const promise0 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("go")
        // reject("no")
    }, 10000)
})
async function start() {
    try {
        let res = await promise0
        containerEl.style.display = "block"
        document.body.style.background = "white"
    } catch (err) {
        console.log(err);
        alert("error")
    } finally {
        loader2Element.style.display = "none"
    }
}
start()

//   


const promise = new Promise((resolve, rejact) => {
    setTimeout(() => {
        resolve("Hello World!")
        // rejact("Bye World!")
    }, 5000)
})
async function f1() {
    try {
        const res = await promise
        console.log("Salom Dunyo!", res);
    } catch (err) {
        console.log("Hayr Dunyo!", err);
    }
}
f1()

//   


const promise2 = new Promise((resolve, rejact) => {
    setTimeout(() => {
        resolve("vaqt tugadi!")
        // rejact("vaqt yoq!")
    }, 3000)
})
async function f2() {
    try {
        const res = await promise2
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}
f2()

//   


const cardElement = document.querySelector(".card")
const addBtnElement = document.querySelector("#btn-add")
const loaderElement = document.querySelector(".loader")
const promise3 = new Promise((resolve, rejact) => {
    addBtnElement.addEventListener("click", () => {
        loaderElement.style.display = "block"
        setTimeout(() => {
            resolve("add")
            // rejact("not join")
        }, 2000)
    })
})
async function f3() {
    try {
        const res = await promise3
        cardElement.style.display = "block"
        loaderElement.style.display = "block"
        console.log(res);
    } catch (err) {
        console.log(err);
        alert("error")
    } finally {
        addBtnElement.style.display = "none"
        loaderElement.style.display = "none"
    }
}
f3()

//  


const itemElement = document.querySelectorAll(".item")

const promise4 = new Promise((resolve, rejact) => {
    setTimeout(() => {
        resolve("add")
        // rejact("not join")
    }, 14000)
})
async function f5() {
    try {
        const res = await promise4
        function f4() {
            itemElement.forEach((item, index) => {
                setTimeout(() => {
                    item.style.display = "none"
                }, index * 1000)
            })
        }
        f4()
    } catch (err) {
        alert("error")
    }
}
f5()


// 

const countElement2 = document.querySelector("#count2")
const inputElement = document.querySelector("#input")
const btnElement = document.querySelector("#btn")

btnElement.addEventListener("click", () => {
    countElement2.textContent = inputElement.value
    inputElement.value = ""
    let id = setInterval(() => {
        if (countElement2.textContent === "0") {
            countElement2.textContent = "tugadi"
            clearInterval(id)
            return
        } else {
            countElement2.textContent--
            return
        }
    }, 1000)
})



// kanspekt


// JSON – bu ma’lumotlarni saqlash va uzatish uchun ishlatiladigan yengil format.
//  U JavaScript obyekti sintaksisiga asoslangan,
//  lekin boshqa tillarda ham qo‘llaniladi.

// Kalit-qiymat juftliklari ko‘rinishida yoziladi

// JSON paddershka qiladi String // Number // Boolean // Array // Object // null

// Foydalanish:
// Ma’lumotlarni server va mijoz orasida uzatishda.
// Fayllarda saqlash uchun (.json format).


// Promise – bu JavaScript’dagi asinxron operatsiyalarni boshqarish vositasi.
// Bu kelajakda qiymat qaytaruvchi obyekt.    {vadaboz}

// Holatlar:
// Pending: Dastlabki holat, natija hali ma’lum emas.  kutish 
// Fulfilled: Vada bajarilgan va qiymat qaytarilgan.   fadada turdi
// Rejected: Vada bajarilmadi va xato qaytarildi.      fadada turmadi

// async/await  Promise-larni qulayroq boshqarish uchun ishlatiladi.