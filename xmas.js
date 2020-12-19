function openIt() {
    document.getElementsByClassName("letter-close")[0].style.display = 'none'
    document.getElementsByClassName("letter-open")[0].style.display = 'block'
}

function goRtan() {
    alert("Happy New Year!");
    window.location.href="https://youtu.be/3Uo0JAUWijM";
}

function init() {
    openIt();
    goRtan();
}

init(); 