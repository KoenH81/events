
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

//click on green
const greenBtn = document.getElementById('greenBtn');
greenBtn.addEventListener('click', duplicate);
greenBtn.addEventListener('click', log);

//duplicate green button
function duplicate() {
    let greenToo = document.createElement('div');
    greenToo.style.backgroundColor = 'lime';
    greenToo.className = 'displayedsquare';
    let wrap = document.querySelector('.displayedsquare-wrapper');
    wrap.append(greenToo);
}

// make log entry function
function log() {
    let logP = document.createElement('li');
    logP.innerText = '[' + (getElapsedTime()) + '] Created a new green square.';
    let logBox = document.querySelector('ul');
    logBox.append(logP);
}


// add id to violet button
let selectViolet = document.querySelector('.violet');
selectViolet.setAttribute('id', 'violetBtn');

//click violet
const violetBtn = document.getElementById('violetBtn');
violetBtn.addEventListener('click', duplicate2);
violetBtn.addEventListener('click', log2);

//+ duplicate violet button
function duplicate2() {
    let violetToo = document.createElement('div');
    violetToo.style.backgroundColor = 'magenta';
    violetToo.className = 'displayedsquare';
    let wrap = document.querySelector('.displayedsquare-wrapper');
    wrap.append(violetToo);
}
// make violet log entry function
function log2() {
    let logP = document.createElement('li');
    logP.innerText = '[' + (getElapsedTime()) + '] Created a new violet square.';
    let logBox = document.querySelector('ul');
    logBox.append(logP);
}

// add id to orange button
let selectOrange = document.querySelector('.orange');
selectOrange.setAttribute('id', 'orangeBtn');

//click orange
const orangeBtn = document.getElementById('orangeBtn');
orangeBtn.addEventListener('click', duplicate3);
orangeBtn.addEventListener('click', log3);

//+ duplicate orange button
function duplicate3() {
    let orangeToo = document.createElement('div');
    orangeToo.style.backgroundColor = 'orange';
    orangeToo.className = 'displayedsquare';
    let wrap = document.querySelector('.displayedsquare-wrapper');
    wrap.append(orangeToo);
}

// make violet log entry function
function log3() {
    let logP = document.createElement('li');
    logP.innerText = '[' + (getElapsedTime()) + '] Created a new orange square.';
    let logBox = document.querySelector('ul');
    logBox.append(logP);
}

// keypress space, l, s

const aKey = document.querySelector('body');
aKey.addEventListener('keydown', whatKey);

function whatKey(e) {
    if (e.which === 32) {
        random_bg_color();
        log4();
    }
    else if (e.code === 'KeyL') {
        console.log('lelelelelel')
        noLog;
    }
    else if (e.code === 'KeyS') {
        console.log('sssSSSSsss');
    }
}

// function random bgc
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}
//make space log entry
function log4() {
    let logP = document.createElement('li');
    logP.innerText = '[' + (getElapsedTime()) + '] Spacebar pressed';
    let logBox = document.querySelector('ul');
    logBox.append(logP);
}

// remove log entries

// function noLog() {
//     let logList = document.querySelector('ul');
//     console.log(logList.children);
//     for (i = 0; i < logList.children; i++) {
//         logList.children[i].remove;
//     };
// }
