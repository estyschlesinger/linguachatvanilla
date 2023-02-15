


//home
let languageBeingLearned = "English";
let get = document.getElementsByClassName('lang-item')
for(let i=0;i<get.length;i++){


get[i].addEventListener('click', () => {
    languageBeingLearned = get[i].innerText;
    console.log("You will now be learning " + languageBeingLearned)
})
}

//posts
function showHideComments(){
    console.log("entered function")
    let d = document.getElementById("comments");
    if (d.style.display== "none")
    d.style.display="block"
    else
    d.style.display="none"
}

//memory card game
let englishWords=["where","there","dog","table","door","onion","hands","chair","teacher","suitcase","finger","tree"]
let hebrewWords=["איפה","שם","כלב","שולחן","דלת","בצל","ידיים","כסא","מורה","מזוודה","אצבע","עץ"]
let allWords=englishWords.concat(hebrewWords)
let randomNumberArray=[]

for(let i=0;i<allWords.length;i++) {
    let randomNumber=Math.floor(Math.random() * allWords.length)
    while (randomNumberArray.indexOf(randomNumber) != -1)
    randomNumber=Math.floor(Math.random() * allWords.length)
    randomNumberArray.push(randomNumber)
    let memoryCard = document.createElement('div')
    memoryCard.classList.add('one-card')
    let backFace=document.createElement('div')
    let frontFace = document.createElement('div')
    frontFace.classList.add('front-face')
    frontFace.innerText = allWords[randomNumber] //???????
    backFace.classList.add('back-face')
    backFace.style.backgroundImage = "url('./img/backImage.png')"
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

cards.forEach(card => card.addEventListener('click', flipCard))

//hangman
function hangman() {
let englishAlphabet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
//  console.log(englishAlphabet)
let russianAlphabet = [];
let hebrewAlphabet= [];
let spanishAlphabet = [];
let frenchAlphabet = [];
// console.log(0063)
if(languageBeingLearned == "English"){
    console.log(englishAlphabet)
    for(let j=0; j<englishAlphabet.length; j++){
        let d = document.createElement('div')
        d.innerText = englishAlphabet[j];
        document.querySelector(".alphabet").appendChild(d)
    }
}

}

//settings
function showSelectedContent() {
    
let content=document.querySelectorAll('.content')
for(let m=1; m<content.length;m++){
content[m].style.display="none";
}


let sidenav = document.querySelectorAll('.sidenav li');
for(let x=0;x<sidenav.length;x++){
    sidenav[x].addEventListener('click',()=>{
        // forEach(sidenav) =>{}
        sidenav.forEach((g)=>{
            g.style.backgroundColor="rgb(18, 43, 29)"
            g.style.color="rgba(194, 177, 177, 0.753)"
        })
        sidenav[x].style.color = "rgb(18, 43, 29)"
        sidenav[x].style.backgroundColor= "rgba(194, 177, 177, 0.753)"
        let content=document.querySelectorAll('.content')
for(let m=0; m<content.length;m++){
content[m].style.display="none";
}
content[x].style.display="block";

 })

}
//let selection = 

// switch (selection) {
//     case "general":
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

}