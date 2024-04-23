let character = document.getElementById("character")
let block = document.getElementById("block")
let game = document.getElementById("game")

const body = document.body


function jump() {
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && characterTop >=130){
        block.style.animation = "none";
        block.style.display ="none";
        alert("You Lose")
        window.location.reload()
    }
},10)


function darkMode() {
    // body.classList.toggle("dark");
    if(body.classList.toggle("dark")) {
        game.style.border = "1px solid #eaeaea"
        block.style.backgroundColor = "#eaeaea"
    } else {
        block.style.backgroundColor = "#323332"
        game.style.border = "1px solid #323332"
    }

}

console.log("ready")