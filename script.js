let API = `https://emoji-api.com/emojis?access_key=c1097cb33d2a3e358346f3475597c7bb01b6e7d7`


let btn = document.querySelector("#btn")
let emoji = document.querySelector("#emoji")
let data;


function numgen(data){
    return Math.floor(Math.random() * data.length)
}

async function fetchEmoji(){
    let res = await fetch(API);
    data = await res.json();
}

function display(){
    emoji.innerHTML = data[numgen(data)].character
}

btn.addEventListener("click", () => {
    display()
    
})
fetchEmoji();