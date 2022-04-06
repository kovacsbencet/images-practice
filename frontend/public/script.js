const parseJSON = async (url) => {
    const response = await fetch(url);
    return response.json();
};

const swiperComponent = () =>{
    return `
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
    </div>
    `
};


const loadEvent = async () => {
    const rootElement = document.getElementById("root");
    const result = await parseJSON("/image-list");

    rootElement.insertAdjacentHTML("beforeend", swiperComponent());

    const swiper = new Swiper(".swiper");
};
window.addEventListener("load", loadEvent)