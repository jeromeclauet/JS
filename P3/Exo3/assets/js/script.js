function textColor(color) {
    var text = document.getElementById('text');
    if (color == 'green') {
        text.style.color = "green";
    }
    if (color == 'red') {
        text.style.color = "red";
    }
    if (color == 'blue') {
        text.style.color = "blue";
    }
}

document.querySelector('.green').addEventListener('click', () => {
    document.getElementById('text').style.color = "green";
})