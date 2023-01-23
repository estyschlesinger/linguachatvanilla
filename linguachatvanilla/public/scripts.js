console.log("Scripts.js has loaded")


// let f =document.getElementById("to-comment");
//     f.addEventListener('click', showHideComments())


function showHideComments(){
    console.log("entered function")
    // let f = document.getElementById('to-comment');
    // f.addEventListener('click', () => {
    let d = document.getElementById("comments");
    if (d.style.display== "none")
    //d.setAttribute('display',"none")
    d.style.display="block"
    else
    d.style.display="none"
//})
}

// function loadAllPosts(){
//     for (post in posts){
//         let d = document.createElement('div')
//         d.innerHTML = post.email;
//         document.getElementById('post-container').append(d)
//     }
// }

// function displayComments() {
// console.log('logged')
//     let d = document.getElementById('to');
//     d.addEventListener('click', () =>{
//         document.getElementById('comments').style.display='block'
//     })
// }

let englishWords=["where","there","dog","table","door","onion","hands","chair","teacher","suitcase","finger","tree"]
let hebrewWords=["איפה","שם","כלב","שולחן","דלת","בצל","ידיים","כסא","מורה","מזוודה","אצבע","עץ"]
let allWords=englishWords.concat(hebrewWords)

let randomNumberArray=[]



for(let i=0;i<allWords.length;i++){

    let randomNumber=Math.floor(Math.random() * 25)
    while (randomNumberArray.indexOf(randomNumber) != -1)
    randomNumber=Math.floor(Math.random() * 25)
    console.log(randomNumber)
    randomNumberArray.push(randomNumber)

let d=document.createElement('div')
// d.style.border="2px solid black";
// d.style.height="50px"
// d.style.width="50px"
d.innerHTML=`<h3>${allWords[randomNumber]}</h3>`
d.style.display="inline-block"
d.classList.add('one-card')

d.addEventListener('click', ()=>{
    d.style.backgroundColor = "rgb(18, 43, 29)"
})

document.querySelector('.all-cards').appendChild(d)
}

