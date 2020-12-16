document.getElementById('GrayButton').onclick = switchGray;
document.getElementById('WhiteButton').onclick = switchWhite;
document.getElementById('BlueButton').onclick = switchBlue;
document.getElementById('YellowButton').onclick = switchYellow;

function switchGray() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchWhite() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'black';
}
function switchBlue() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('body')[0].style.color = 'white';
}
function switchYellow() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('body')[0].style.color = 'black';
}