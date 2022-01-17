
const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e) {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}

const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)
}
//---------------------------------------------------

// add id to green button
let selectGreen = document.querySelector('.green');
selectGreen.setAttribute('id', 'greenBtn');

//duplicate green button
const greenBtn = document.getElementById('greenBtn');
greenBtn.addEventListener('click', duplicate);
function duplicate() {
    let greenToo = document.createElement('div');
    greenToo.style.backgroundColor = 'lime';
    greenToo.className = 'displayedsquare';
    let wrap = document.querySelector('.displayedsquare-wrapper');
    wrap.append(greenToo);
}

// add id to violet button
let selectViolet = document.querySelector('.violet');
selectViolet.setAttribute('id', 'violetBtn');

//duplicate violet button
const violetBtn = document.getElementById('violetBtn');
violetBtn.addEventListener('click', duplicate2);
function duplicate2() {
    let violetToo = document.createElement('div');
    violetToo.style.backgroundColor = 'magenta';
    violetToo.className = 'displayedsquare';
    let wrap = document.querySelector('.displayedsquare-wrapper');
    wrap.append(violetToo);
}
// add id to orange button
let selectOrange = document.querySelector('.orange');
selectOrange.setAttribute('id', 'orangeBtn');

//duplicate orange button
const orangeBtn = document.getElementById('orangeBtn');
orangeBtn.addEventListener('click', duplicate3);
function duplicate3() {
    let orangeToo = document.createElement('div');
    orangeToo.style.backgroundColor = 'orange';
    orangeToo.className = 'displayedsquare';
    let wrap = document.querySelector('.displayedsquare-wrapper');
    wrap.append(orangeToo);
}