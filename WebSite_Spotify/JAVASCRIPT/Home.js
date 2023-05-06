var menu_button = document.getElementById("user");
var active = true;

function activate_menu() {
    if (active) {
        active = false;
        document.getElementById("menu").style.display = "block";
        document.getElementById("account").style.display = "none"
        document.getElementById("icon_down").style.transform = "rotate(-90deg)"
    }
    else {
        active = true;
        document.getElementById("menu").style.display = "none";
        document.getElementById("account").style.display = "none"
        document.getElementById("icon_down").style.transform = "rotate(90deg)"
    }
}


// hover_account
function activate_account_out() {
    document.getElementById("account").style.display = "none"
}
function activate_account_over() {
    document.getElementById("account").style.display = "block"
}
menu_button.addEventListener("mouseover", activate_account_over);
menu_button.addEventListener("mouseout", activate_account_out);

menu_button.addEventListener("click", activate_menu);

// render list mp3

let listMP3 = [
    {
        titleList: 'Recently played',
        elementList: [
            {
                img: '../image_project_spotify/default (5).jfif',
                author: 'Sia',
                detail: 'Artist',
            },
            {
                img: '../image_project_spotify/default (6).jfif',
                author: 'Alan Walker',
                detail: 'The essential Alan Walker tracks and remixes.',
            },
            {
                img: '../image_project_spotify/sontung.jfif',
                author: 'Sơn Tùng M-TP',
                detail: 'Sơn Tùng M-TP, PhucXP, Lynk Lee and more'
            }
        ]
    },
    {
        titleList: 'Episodes for you',
        elementList: [
            {
                img: '../image_project_spotify/fic2.jpg',
                author: 'Khi Nào Thì Muốn Ở Bên Một Ai Đó Nhất? | Trạm Dừng Chân #82',
                detail: 'Aug 2022 - 10 min',
            },
            {
                img: '../image_project_spotify/cdmusic(10).jfif',
                author: 'Phần I - Chương 1: Muốn lấy mật đừng phá tổ ong',
                detail: 'Jun 2020 - 27 min',
            },
            {
                img: '../image_project_spotify/fig3.jpg',
                author: 'Tại sao người thành công thường dậy sớm',
                detail: 'Dec 2022 - 21 min'
            },
            {
                img: '../image_project_spotify/cdmusic(12).jfif',
                author: 'Lí do tôi mất ngủ- Monsieur Tuna',
                detail: 'Nov 2022 - 9 min'
            }
        ]
    },
    {
        titleList: 'Made for you',
        elementList: [
            {
                img: '../image_project_spotify/fic4.jpg',
                author: 'Release Radar',
                detail: 'Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday.',
            },
            {
                img: '../image_project_spotify/fic5.jpg',
                author: 'Daily Mix 1',
                detail: 'Sia, Charlie Puth, Axel Johansson and more',
            },
            {
                img: '../image_project_spotify/fic6.jpg',
                author: 'Daily Mix 2',
                detail: 'Sơn Tùng M-TP, PhucXP, Lynk Lee and more'
            },
            {
                img: '../image_project_spotify/fic7.jpg',
                author: 'Daily Mix 1',
                detail: 'Michael Schulte, Leony, Jakob Busch and more'
            }
        ]
    },
    {
        titleList: 'Your top mixes',
        elementList: [
            {
                img: '../image_project_spotify/default (1).jfif',
                author: '2000s Mix',
                detail: 'Britney Spears, Alicia Keys, Jason Mraz and more',
            },
            {
                img: '../image_project_spotify/default (1).jfif',
                author: '90s Mix',
                detail: 'Britney Spears, Bone Thugs-N-Harmony, GRAVECHILL and more',
            },
            {
                img: '../image_project_spotify/listsia.jpg',
                author: 'Sia Mix',
                detail: 'Dua Lipa, The Script and Katy Perry'
            },
            {
                img: '../image_project_spotify/default (2).jfif',
                author: 'Gym Class Heroes Mix',
                detail: 'Flo Rida, Rixton and The Script'
            }
        ]
    },
    {
        titleList: 'Popular Radio',
        elementList: [
            {
                img: '../image_project_spotify/fic8.jpg',
                author: 'Low G Radio',
                detail: 'By Spotify',
            },
            {
                img: '../image_project_spotify/fic9.jpg',
                author: 'HIEUTHUHAI Radio',
                detail: 'By Spotify',
            },
            {
                img: '../image_project_spotify/fic10.jpg',
                author: 'RPT MCK Radio',
                detail: 'By Spotify'
            },
            {
                img: '../image_project_spotify/fig11.jpg',
                author: 'Chillies Radio',
                detail: 'By Spotify'
            }
        ]
    },
    {
        titleList: 'Best of artists',
        elementList: [
            {
                img: '../image_project_spotify/default (6).jfif',
                author: 'This Is Alan Walker',
                detail: 'The essential Alan Walker tracks and remixes.',
            },
            {
                img: '../image_project_spotify/cdmusic(35).jpg',
                author: 'This Is Raaban',
                detail: 'This is Raaban. The essential tracks, all in one playlist.',
            },
            {
                img: '../image_project_spotify/listsia.jpg',
                author: 'This Is Sia',
                detail: 'This is Sia. The essential tracks, all in one playlist.'
            },
            {
                img: '../image_project_spotify/martin.jpg',
                author: 'This Is Martin Jensen',
                detail: 'This is Martin Jensen. The essential tracks, all in one playlist.'
            }
        ]
    },
    {
        titleList: 'More like My heart is a steoreo',
        elementList: [
            {
                img: '../image_project_spotify/cdmusic(4).jfif',
                author: 'Party Hits 2010s',
                detail: 'The biggest party hits of the 2010s. Cover: Flo Rida.',
            },
            {
                img: '../image_project_spotify/cdmusic(5).jfif',
                author: 'Top Hits of 2012',
                detail: 'Rewind and rediscover big songs of 2012.',
            },
            {
                img: '../image_project_spotify/cdmusic(7).jfif',
                author: 'Top Hits 0d 2017',
                detail: 'This is Sia. The essential tracks, all in one playlist.'
            },
            {
                img: '../image_project_spotify/cdmusic(15).jfif',
                author: 'Songs to Sing in the Shower',
                detail: 'Make your shower more uplifting by singing along to these hits.'
            }
        ]
    },
    {
        titleList: 'Our favorite DJ mixes',
        elementList: [
            {
                img: '../image_project_spotify/fic12.jpg',
                author: 'Alan Walker\'s DJ Mix',
                detail: 'The hitmaker Alan Walker delights us with this summer-like mix, which includes tracks from his latest album "Walkerverse"',
            },
            {
                img: '../image_project_spotify/fic13.jpg',
                author: 'Martin Garrix DJ Mix: Sentio',
                detail: 'Superstar DJ and producer, Martin Garrix readies us for the summer time with a mix featuring bangers from his new album, Sentio!',
            },
            {
                img: '../image_project_spotify/fic14.jpg',
                author: 'Tiësto\'s DJ Mix',
                detail: 'International hitmaker, producer & DJ Tiësto shares his exclusive Spotify mix, featuring banger after banger.'
            },
            {
                img: '../image_project_spotify/fic15.jpg',
                author: 'Timmy Trumpet\'s DJ Mix',
                detail: 'EDM\'s ever stable Timmy Trumpet spins his favorite summer anthems in his most recent mix for Spotify.'
            }
        ]
    },
    {
        titleList: 'Your favorite artists',
        elementList: [
            {
                img: '../image_project_spotify/default (4).jfif',
                author: 'Sia',
                detail: 'Artist',
            },
            {
                img: '../image_project_spotify/alan.jfif',
                author: 'Alan Walker',
                detail: 'Artist',
            },
            {
                img: '../image_project_spotify/raban.jfif',
                author: 'Raaban',
                detail: 'Artist'
            },
            {
                img: '../image_project_spotify/axelo.jfif',
                author: 'Axel Johansson',
                detail: 'Artist'
            }
        ]
    }

];

let body_song = document.querySelector(".body_song_side");

function render(variable) {
    var renderTitle = `
        <div class="list_mp3">
        <div class="wrap_title_list">
            <h1 class="title_list">${variable.titleList}</h1>
            <h5 class="pp">SHOW ALL</h5>
        </div>
        <div class="wrap_element_list"></div>
        </div>
    `;
    body_song.insertAdjacentHTML("beforeend", renderTitle);
    let wrap_ele = body_song.querySelector(".list_mp3:last-child .wrap_element_list");
    function renderElement(temp, index) {
        let id = index;
        return `
        <div class="element_list" onclick="openCard(${id})">
            <div class="poster">
            <img src="${temp.img}" alt="">
            <div class="border_button_play">
                <i class="fa-solid fa-play"></i>
            </div>
            </div>
            <div class="author_detail">
            <h2 class="author">${temp.author}</h2>
            <h4 class="detail">${temp.detail}</h4>
            </div>
        </div>
        `;
    }
    var newWrapElement = variable.elementList.map(renderElement);
    wrap_ele.innerHTML = newWrapElement.join('');

}

listMP3.forEach(render);

let listSong = document.querySelectorAll('.list_mp3');
let lastListSong = listSong[listSong.length - 1];
let posters = lastListSong.querySelectorAll('.element_list .poster');

posters.forEach(poster => {
        poster.classList.add('artists');
});


// -------------------JS Event onclick Cards Music----------------------

let body_card = document.querySelector(".body_song_card");
let masterPlay = document.querySelector(".master_play");
function openCard() {
    body_song.style.display = "none";
    body_card.style.display = "block";
    masterPlay.style.display = "block";
}
