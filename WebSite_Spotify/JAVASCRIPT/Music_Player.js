let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let artist_song_list = document.querySelectorAll('image_songs');

let playpause_btn_big = document.querySelector('.border_button_play');
let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-shuffle');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img: '../img/spectre.jpg',
        name: 'Spectre Alan Walker',
        artist: 'Alan Walker, UPSAHL',
        album: 'Walkerverse PT. I & II',
        duration: '02:24',
        music: '../song/The-Spectre -Alan-Walker.mp3'
    },
    {
        img: '../img/faded.jpg',
        name: 'Faded Alan Walker',
        artist: 'Alan Walker, UPSAHL',
        album: 'Walkerverse PT. I & II',
        duration: '03:32',
        music: '../song/Faded-Alan-Walker.mp3'
    },
    {
        img: '../img/darkside.jpg',
        name: 'Play x Alone Alan Walker',
        artist: 'Alan Walker, UPSAHL',
        album: 'Walkerverse PT. I & II',
        duration: '02:58',
        music: '../song/Play-Alone-Darkside-Ignite.mp3'
    },
    {
        img: '../img/drum.jpg',
        name: 'The Drum',
        artist: 'Alan Walker',
        album: 'The Drum',
        duration: '03:09',
        music: '../song/Alan Walker-Drum.mp3'
    },
    {
        img: '../img/headlights.png',
        name: 'Headlights (feat. KIDDO)',
        artist: 'Alok, Alan Walker, KIDDO',
        album: 'Headlights (feat. KIDDO)',
        duration: '02:38',
        music: '../song/Alan Walker-Headlights.mp3'
    },
    {
        img: '../img/helloWorld.png',
        name: 'Hello World',
        artist: 'Alan Walker, Torine',
        album: 'Hello World',
        duration: '02:51',
        music: '../song/Alan Walker-Hello World.mp3'
    },
    {
        img: '../img/loveSick.jpg',
        name: 'Lovesick',
        artist: 'Alan Walker, Sophie Simmons',
        album: 'Walkerverse Pt. I & II',
        duration: '02:09',
        music: '../song/Alan Walker-Lovesick.mp3'
    },
    {
        img: '../img/onMyWay.jpg',
        name: 'On My Way',
        artist: 'Alan Walker, Sabrina Carpenter, Farruko',
        album: 'On My Way',
        duration: '03:13',
        music: '../song/Alan Walker-On My Way.mp3'
    },
    {
        img: '../img/play.jpg',
        name: 'Play',
        artist: 'K-391, Alan Walker, Tungevaag, Mangoo',
        album: 'Play',
        duration: '02:47',
        music: '../song/Alan Walker-Play.mp3'
    },
    {
        img: '../img/ritual.jpg',
        name: 'Ritual',
        artist: 'Alan Walker, Ava Max',
        album: 'Alone, PT. II',
        duration: '02:25',
        music: '../song/Alan Walker-Ritual.mp3'
    }
]
let active = true;
function chooseTrack(valueIndex){
    const elements = document.querySelectorAll(".element_list");
    const nameSong = document.querySelectorAll(".name_songs");
    elements.forEach((el) => {
        el.classList.remove("selected");
    });
    nameSong.forEach((el) => {
        el.style.color = "white";
    });
    elements[valueIndex].classList.add("selected");
    nameSong[valueIndex].style.color = "#1ED760";
    track_index = valueIndex;
    loadTrack(track_index);
    playTrack();
}

loadInforSong();
function loadInforSong(){
    function render(variable, index){
        let valueIndex = index+1;
        return `
            <div class="element_list" onclick="chooseTrack(${index})">
                <div class="index_songs">
                    <span>${valueIndex}</span>
                    <i class="fa-solid fa-play"></i>
                </div>
                <div class="title_songs">
                    <div class="image_songs">
                        <img src="${variable.img}" alt="">
                    </div>
                    <div class="detail_songs">
                        <div class="name_songs">
                            ${variable.name}
                        </div>
                        <div class="author_songs">
                            ${variable.artist}
                        </div>
                    </div>
                </div>
                <div class="album_songs">${variable.album}</div>
                <div class="date_songs">Mar 13, 2023</div>
                <div class="time_duration_songs">${variable.duration}</div>
            </div>
        `
    }
    var new_list = music_list.map(render);
    document.querySelector('.list_songs').innerHTML = new_list.join('');
}

loadTrack(track_index);
function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = 'url('+ music_list[track_index].img +')';
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    
    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}


function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
    playpause_btn_big.innerHTML = '<i class="fa-solid fa-pause"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    playpause_btn_big.innerHTML = '<i class="fa-solid fa-play"></i>';
}
function nextTrack(){
    if (track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if (track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    
    loadTrack(track_index);
    playTrack();
    chooseTrack(track_index);
}
function prevTrack(){
    if (track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    chooseTrack(track_index);
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value /100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPositon = 0;
    if (!isNaN(curr_track.duration)){
        seekPositon = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPositon;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);

    
        if (currentSeconds < 10) {currentSeconds = '0' + currentSeconds;}
        
        if (currentMinutes < 10) {currentMinutes = '0' + currentMinutes};
    
        curr_time.textContent = currentMinutes + ':' + currentSeconds;
        total_duration.textContent = music_list[track_index].duration;
    }
}
