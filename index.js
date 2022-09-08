let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment () {
    count += 1
    countEl.textContent = count
}


function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0

}

save()




let greeting = "Welcome Back "
welcomeEl.innerText= greeting + "!"

welcomeEl.innerText += '👋'