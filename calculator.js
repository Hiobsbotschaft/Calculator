
let zwischenSpeicher = 0;
let ersteZahl;
let zweiteZahl; 
let summe; 
let rechenArt;
let buffer=0;
let komma = false;
let zehntelstelle = 0

losch.addEventListener("click",() => reset());
x2.addEventListener("click",() => {saveOpperator("x2")});
Wurzel.addEventListener("click",() => {saveOpperator("Wurzel")});
geteilt.addEventListener("click",() => {saveOpperator("/")});
mal.addEventListener("click",() => {saveOpperator("x")});
minus.addEventListener("click",() => {saveOpperator("-")});
plus.addEventListener("click",() => {saveOpperator("+")});
gleich.addEventListener("click",() => {saveNumber("=")});

n.addEventListener("click",() => {addToBuffer(0)});
eins.addEventListener("click",() =>{addToBuffer(1)});
zwei.addEventListener("click",() => {addToBuffer(2)});
drei.addEventListener("click",() => {addToBuffer(3)});
v.addEventListener("click",() => {addToBuffer(4)});
funf.addEventListener("click",() => {addToBuffer(5)});
sechs.addEventListener("click",() => {addToBuffer(6)});
sieben.addEventListener("click",() => {addToBuffer(7)});
acht.addEventListener("click",() => {addToBuffer(8)});
neun.addEventListener("click",() => {addToBuffer(9)});
punkt.addEventListener("click",() => {dezimalSpass()});



function dezimalSpass(){
    komma = true;
}
function reset() {
    zwischenSpeicher = 0;
    ersteZahl = undefined;
    zweiteZahl = undefined;
    summe =0; 
    buffer=0;
    komma = false;
    zehntelstelle = 0
    console.clear();
    zeigsmir.textContent = 0;
}

function addToBuffer(num) {
    if (!komma){
    buffer =(buffer *10 + num);
    console.log(buffer);
    } else{
    zehntelstelle++;
    buffer = buffer + num/(Math.pow(10,zehntelstelle));
    }
    zeigsmir.textContent = buffer;
}

function saveOpperator (opp) {
    rechenArt= opp;
    saveNumber();    
}

function saveNumber() {
    komma = false;
    if (ersteZahl == undefined) {
        ersteZahl = buffer;
    } else {
        zweiteZahl = buffer;
        chooseOpperator();
        ersteZahl = summe;
        zeigsmir.textContent = summe;
    }
    console.log("choosing",ersteZahl,zweiteZahl);
    buffer = 0;
}

function chooseOpperator() {
    switch (rechenArt) {
        case "-":
            summe = sub();
            break;
        case "+":
            summe = add();
            break;
        case "x":
            summe = multi();
            break;
        case "/":
            summe = div();
            break;
        case "x2":
            summe = quadr();
            break;
        case "Wurzel":
            summe = root();
            break;
        default: 
            break;
    }
    zeigsmir.textContent = summe;
    // console.log("summe: ", summe);
    // zweiteZahl = undefined;
    // ersteZahl = undefined;
}

function add() {
    return ersteZahl + zweiteZahl;  
}
   
function sub() {
    return ersteZahl - zweiteZahl;       
}

function multi() {
    return ersteZahl * zweiteZahl;
}

function div() {
    return ersteZahl / zweiteZahl;
}

function quadr() {
    return ersteZahl * ersteZahl;
}

function root() {
    return Math.sqrt (ersteZahl);
}

