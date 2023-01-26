const humb = document.querySelector("#humb");
const popup_close = document.querySelector("#popup_close");
const popup_menu = document.querySelector("#popup");
const popup_overlay = document.querySelector("#popup_overlay");
const menu1 = document.querySelector("#menu1").cloneNode(1);
const menu2 = document.querySelector("#menu2").cloneNode(1);
const socials = document.querySelector("#socials");

humb.addEventListener("click", func1);
popup_close.addEventListener("click", func3);

function func1(e){
    e.preventDefault();
    popup.classList.add("open");
    popup_overlay.classList.add("open");
    func2();
}

function func2(){
    menu1.className = "new-navblock1";
    popup.appendChild(menu1);
    popup.appendChild(menu2);
    popup.appendChild(socials);
    socials.className = "new-socials";
}

function func3(e){
    e.preventDefault();
    popup.classList.remove("open");
    popup_overlay.classList.remove("open");
    func4();
}

function func4(){
    popup.removeChild(menu1);
    popup.removeChild(menu2);
    popup.removeChild(socials);
}

$(".courses__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            variableWidth: true,
            
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                variableWidth: true,
            }
        }
    ]
})