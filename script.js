let input = document.getElementById("searchBarInput");
let label = document.querySelector("label");
let slide = document.getElementById("slide");
let address = [
    "/jpg/majboor.jpg",
    "/jpg/choodkar.jpg",
    "/jpg/dheema.jpg",
    "/jpg/moves.jpg",
    "/jpg/Ranjha.jpg",
    "/jpg/thooki.jpg",
    "/jpg/amsham.jpg",
    "/jpg/bommale.jpg",
    "/jpg/disda.jpg",
    "/jpg/Ehsaas.jpg",
    "/jpg/bheegi.jpg"
];
let songNames = [
    'majboor',
    'Abhi Na Jao Chhod Kar',
    'Dheema (From "Love Insurance Kompany")',
    'Moves',
    'Ranjha',
    'Thooki - From "Vaazha 2"',
    'Amsham - അംശം',
    'Ada Bommale - From "Vaazha 2"',
    'Tu Hi Disda - From "Bhooth Bangla"',
    'Ehsaas',
    'Bheegi Bheegi'

];
let songs = [
    'songs/majboor.mp3',
    'songs/abhi.mp3',
    'songs/dheema.mp3',
    'songs/Moves.mp3',
    'songs/Ranjha.mp3',
    'songs/thooki.mp3',
    'songs/amsham.mp3',
    'songs/ada.mp3',
    'songs/disda.mp3',
    'songs/ehsaas.mp3',
    'songs/bheegi.mp3'

];
let songArtists = [
    'Sheheryar Rehan, Zoha Waseem',
    'Asha Bhosle, Mohammed Rafi',
    'Anirudh Ravichander, Vignesh Shivan',
    'Shubh',
    'Diljit Dosanjh, Sia, David Guetta',
    'Arcado, Maalavika Sundar, Shabareesh Varma',
    'Aksomaniac, M.H.R, Bhumi, Circle Tone',
    'Rzee, Chinmayi Kiranlal, Minya Panicker, Nila Raj',
    'Pritam, Arijit Singh, Nikhita Gandhi, Kumaar',
    'Faheem Abdullah, Duha Shah, Vaibhav Pani, Hyder Dar',
    'A. R. Ameen, A.R. Rahman, Jasleen Royal'

];
// let searchBar = document.getElementById("searchBar");
input.addEventListener("focus", () => {

    label.style.display = "none";
    input.style.border = "2px solid white";
});
input.addEventListener("blur", () => {
    input.style.border = "none";
    if (input.innerText === '') {
        label.style.display = "block";

    }
});

function createCard(pictureAdress, songName, songArtist) {
    let play = document.createElement("div");
    play.classList.add('play')
    let triangle = document.createElement("div");
    triangle.classList.add('triangle')
    let card = document.createElement("div");
    card.classList.add("card");
    let blackbg = document.createElement("div");
    blackbg.classList.add("blackbg");
    let greybg = document.createElement("div");
    greybg.classList.add("greybg");
    let detailOfCard = document.createElement("div");
    detailOfCard.classList.add("detailOfCard");
    
    this.pictureAdress = pictureAdress;
    this.songName = songName;
    this.songArtist = songArtist;
    card.innerHTML = `<img class="songImage"a src="${this.pictureAdress}" alt="Song Image">`
    detailOfCard.innerHTML += `<div class="songNames" >${this.songName}</div>`
    detailOfCard.innerHTML += `<div class="songArtists" >${this.songArtist}</div>`
    play.appendChild(triangle)
    card.appendChild(play)
    card.appendChild(detailOfCard);
    card.appendChild(blackbg);
    card.appendChild(greybg);
    slide.appendChild(card);
}

let card = document.getElementsByClassName("card");
let blackbg = document.getElementsByClassName("blackbg");
let greybg = document.getElementsByClassName("greybg");
let play = document.getElementsByClassName("play");
let circle = document.getElementsByClassName("circle");
let pause = document.getElementsByClassName("pause");
let audio = document.getElementsByClassName("audio");

for (let i = 0; i < address.length; i++) {
    new createCard(address[i], songNames[i], songArtists[i]);
    
}
for (let i = 0; i < card.length; i++) {
    slide.children[i].addEventListener("mouseenter", () => {
        greybg[i].style.cursor = "pointer";
        event.stopPropagation();
        blackbg[i].style.opacity = '0';
        card[i].style.cursor = "pointer";

        play[i].classList.remove('unSetAnimateBtn')
        play[i].classList.add('setAnimateBtn')
        greybg[i].classList.remove("unsetbg");
        greybg[i].classList.add("setbg")
        // card[0]::before.classList.add("animation");
        
    });
    card[i].addEventListener("mouseleave", () => {
        event.stopPropagation();
        
        play[i].classList.remove('setAnimateBtn')
        play[i].classList.add('unSetAnimateBtn')
        greybg[i].classList.add("unsetbg");
        blackbg[i].classList.add("setbg");
        // greybg[i].classList.remove("setbg");
        
    });
    
}
for (let i = 0; i < card.length; i++) {
    play[i].addEventListener("click", () => {
        console.log(songs[i])
        audio[0].src = songs[i]
        audio[0].play();
        console.log('hello')
        circle[0].style.display = 'none';
        pause[0].style.display = 'block';   
    });
    
    pause[0].addEventListener("click", () => {
        audio[0].pause();
        console.log('hello')
        circle[0].style.display = 'block';
        pause[0].style.display = 'none';   
    });
    circle[0].addEventListener('click',()=>{
        audio[0].play()
        pause[0].style.display = 'block';   
        circle[0].style.display = 'none';
    })
}