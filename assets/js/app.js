let rpg = {
    html: 0,
    css: 0,
    javascript: 0,
    react: 0,
    node: 0,
    express: 0,
    mongodb: 0,
}

let btn = document.getElementsByClassName("add")
let lvl = document.getElementById("lvl")

for (let i = 0; i < btn.length; i++) {
    console.log(btn[i])
    btn[i].addEventListener("click", (event) => {
        addSkill(event)
    })
}

function addSkill(event) {
    let num = Number(lvl.textContent)
    num++
    lvl.textContent = num
    const parent = event.target.parentNode
    const children = parent.children
    const test = parent.getElementsByClassName("point")
    console.log(test)
    for (let i = 0; i < test.length; i++) {
        if (!test[i].className.includes("green")) {
            console.log("jjdjkdj")
            test[i].classList.add("green")
            break
        }
    }
}
