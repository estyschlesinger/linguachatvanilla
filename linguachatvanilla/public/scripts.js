
function showHideComments(){
    console.log("entered function")
    let d = document.getElementById("comments");
    if (d.style.display== "none")
    d.style.display="block"
    else
    d.style.display="none"
}


// let icon=document.querySelector('.hamburger-icon')
// icon.addEventListener('click', () => {
//     document.querySelector('.nav-menu').style.display = "block"
// })


let englishWords=["where","there","dog","table","door","onion","hands","chair","teacher","suitcase","finger","tree"]
let hebrewWords=["איפה","שם","כלב","שולחן","דלת","בצל","ידיים","כסא","מורה","מזוודה","אצבע","עץ"]
let allWords=englishWords.concat(hebrewWords)

let randomNumberArray=[]



for(let i=0;i<allWords.length;i++){

    let randomNumber=Math.floor(Math.random() * 24)
    while (randomNumberArray.indexOf(randomNumber) != -1)
    randomNumber=Math.floor(Math.random() * 24)
    console.log(randomNumber)
    randomNumberArray.push(randomNumber)
let memoryCard=document.createElement('div')
memoryCard.classList.add('one-card')
let backFace=document.createElement('div')
let frontFace = document.createElement('div')
// frontFace.classList.add('one-card')
frontFace.classList.add('front-face')
frontFace.innerText = allWords[randomNumber] //???????
// backFace.classList.add('one-card')
backFace.classList.add('back-face')
backFace.style.backgroundImage = "url('http:///192.168.30.157:8080/backImage.png')"
// backFace.addEventListener('click', ()=>{
//     backFace.style.backgroundImage= "none"
//     backFace.style.backgroundColor = "rgb(18, 43, 29)";
//     // d.innerText=allWords[randomNumber]
// }
// )

memoryCard.appendChild(backFace)
memoryCard.appendChild(frontFace)
document.querySelector('.all-cards').appendChild(memoryCard)
}

let firstCard, secondcard;
let hasFlippedCard = false;
let cards=document.querySelectorAll('.one-card')
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('flip')

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondcard = this;
    // hasFlippedCard=false;

    checkForMatch();
}

function checkForMatch(){
    let english = englishWords.indexOf(firstCard.innerText)
    let hebrew;
    if(english == -1){
         hebrew = hebrewWords.indexOf(firstCard.innerText)
        english = englishWords.indexOf(secondcard.innerText)
    }
    else {
         hebrew = hebrewWords.indexOf(secondcard.innerText)
    }

    if (english == hebrew){ 
        disableCards();
        return
    }
    unflipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondcard.removeEventListener('click', flipCard)

    resetBoard();
}

function unflipCards(){

    lockBoard = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondcard.classList.remove('flip');
        // lockBoard = false;
        resetBoard();
    },1500)
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondcard] = [null, null];
}

// function shuffle() {
//     +   cards.forEach(card => {
//     +     let randomPos = Math.floor(Math.random() * 12);
//     +     card.style.order = ramdomPos;
//     +   });
//     + })();

cards.forEach(card => card.addEventListener('click', flipCard))

