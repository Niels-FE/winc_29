const alertMe = () => {
    alert("button clicked");
}
const toggleColor = () => {
    document.body.classList.toggle('red-background');
}
document.getElementById('mybutton').addEventListener('click', alertMe);
document.getElementById('background').addEventListener("click", toggleColor)