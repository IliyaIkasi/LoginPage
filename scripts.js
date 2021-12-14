const main = document.getElementById('mainbtn').onclick = mainbtn
let btn = document.getElementById('id01');

window.onclick = (event) => {
    if(event.target == btn) {
        btn.style.display = "block";
    }
}

const mainbtn = () => {
    document.getElementById('id01').innerHTML = btn;
}