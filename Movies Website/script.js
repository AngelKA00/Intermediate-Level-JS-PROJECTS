// swiper script
var swiper = new Swiper(".popular-content",{
    slidesPerView :1,
    spaceBetween : 10,
    autoplay :{
        delay : 755500,
        disableOnInteraction : false,
    },
    pagination :{
        el : ".swiper-pagination",
        clickable : true,
    },
    navigation :{
        nextEl :".swiper-button-next",
        prevEl :".swiper-button-prev",
    },
    breakpoints :{
        280 :{
            slidesPerView :1,
            spaceBetween : 10,
        },
        320 :{
            slidesPerView :2,
            spaceBetween : 10,
        },
        510 :{
            slidesPerView :2,
            spaceBetween : 10,
        },
        758 :{
            slidesPerView :3,
            spaceBetween : 15,
        },
        900 :{
            slidesPerView :4,
            spaceBetween : 20,
        },
    }
});

// show video section
let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let closebtn = document.querySelector(".close-video");
let myvideo = document.querySelector("#myvideo");

playButton.onclick = () => {
    video.classList.add("show-video");
    // to make it play automatically
    myvideo.play();
}
closebtn.onclick = () => {
    video.classList.remove("show-video");
    // to pause and cut the video while playing
    myvideo.pause();
}