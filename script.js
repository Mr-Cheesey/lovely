function startLove(){
    window.location.href = "page2.html";
}

const message = "From the moment you came into my life, everything felt brighter. You make my ordinary days extraordinary. Your smile, your laugh, your heart — they mean more to me than words can explain. I’m grateful for you every single day. 💕";

let i = 0;
function typeWriter(){
    if(i < message.length){
        document.getElementById("typingText").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

function startdrive(){
    window.location.href = "https://drive.google.com/drive/u/1/folders/1PwZ55nyqhdekdB2LFZWrfDP35ijCHVRi"
}

if(window.location.pathname.includes("page2.html")){
    window.onload = typeWriter;

    setInterval(()=>{
        const el = document.createElement("div");
        el.classList.add("float");
        const emojis = ["💖","🦋","🌸","✨","💕"];
        el.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
        el.style.left = Math.random()*100 + "vw";
        el.style.fontSize = Math.random()*20 + 20 + "px";
        document.body.appendChild(el);
        setTimeout(()=>el.remove(),6000);
    },400);
}

function backtrack(){
    window.location.href="drive.html"
}

function showPromise(){
    document.getElementById("promiseBox").style.display = "block";
}
