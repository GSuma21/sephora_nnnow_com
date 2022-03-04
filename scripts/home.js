localStorage.setItem("data_i", JSON.stringify([]));
localStorage.setItem("data_j", JSON.stringify([]));
localStorage.setItem("data_k", JSON.stringify([]));

let i = 0;
let j = 0;
let k = 0;

let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

const init = (n) => {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots.forEach((dot, index) => {
            dot.classList.remove("active");
        });
    });
    slides[n].style.display = "block";
    dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
    currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    init(currentSlide);
};

const prev = () => {
    currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
    init(currentSlide);
};

document.getElementById("next").addEventListener("click", next);

document.getElementById("prev").addEventListener("click", prev);

setInterval(() => {
    next();
}, 3000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        console.log(currentSlide);
        init(i);
        currentSlide = i;
    });
});

const showData_i = (i) => {
    // console.log(data, i);
    let prodBox = document.getElementById("slide1");
    prodBox.textContent = "";
    let data = JSON.parse(localStorage.getItem("data_i"));
    // console.log(data);
    for (let y = 0; y < 6; y++) {
        let card = document.createElement("div");
        card.setAttribute("class", "prod");
        card.setAttribute("id", data[i].id);

        let str = `<img
                        src="${data[i].image1}"
                    />
                    <div class="offer">
                        <img
                            src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
                        />
                        <h>OFFER</h>
                    </div>
                    <h3>${data[i].brand}</h3>
                    <p>${data[i].title}</p>
                    <p>Rs. ${data[i++].price}</p>
                    <p>
                        Buy Worth 4500 From Sephora & Exclusives And Get A
                        Scented Candle Free
                    </p>`;
        card.innerHTML = str;
        prodBox.append(card);
    }
};

const showData_j = (j) => {
    // console.log(data, i);
    let prodBox = document.getElementById("slide2");
    prodBox.textContent = "";
    let data = JSON.parse(localStorage.getItem("data_j"));
    // console.log(data);
    for (let y = 0; y < 3; y++) {
        let card = document.createElement("div");
        card.setAttribute("class", "prod1");
        card.setAttribute("id", data[j].id);

        let str = `<img
                        src="${data[j].image1}"
                    />
                    <div class="offer">
                        <img
                            src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
                        />
                        <h>OFFER</h>
                    </div>
                    <h3>${data[j].brand}</h3>
                    <p>${data[j].title}</p>
                    <p>Rs. ${data[j++].price}</p>
                    <p>
                        Buy Worth 4500 From Sephora & Exclusives And Get A
                        Scented Candle Free
                    </p>`;
        card.innerHTML = str;
        prodBox.append(card);
    }
};

const showData_k = (k) => {
    // console.log(data, i);
    let prodBox = document.getElementById("slide3");
    prodBox.textContent = "";
    let data = JSON.parse(localStorage.getItem("data_k"));
    // console.log(data);
    for (let y = 0; y < 6; y++) {
        let card = document.createElement("div");
        card.setAttribute("class", "prod1");
        card.setAttribute("id", data[k].id);

        let str = `<img
                        src="${data[k].image1}"
                    />
                    <div class="offer">
                        <img
                            src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
                        />
                        <h>OFFER</h>
                    </div>
                    <h3>${data[k].brand}</h3>
                    <p>${data[k].title}</p>
                    <p>Rs. ${data[k++].price}</p>
                    <p>
                        Buy Worth 4500 From Sephora & Exclusives And Get A
                        Scented Candle Free
                    </p>`;
        card.innerHTML = str;
        prodBox.append(card);
    }
};

const getData = async () => {
    let res = await fetch("./data/home_data.json");
    let data = await res.json();

    localStorage.setItem("data_i", JSON.stringify(data.ABH));
    localStorage.setItem("data_j", JSON.stringify(data.JL));
    localStorage.setItem("data_k", JSON.stringify(data.EOS));

    showData_i(i);
    showData_j(j);
    showData_k(k);
};
getData();
const forwrd3 = () => {
    if (k < 2) showData_k(++k);
};
const forwrd2 = () => {
    if (j < 2) showData_j(++j);
};
const forwrd1 = () => {
    if (i < 2) showData_i(++i);
};
const bak3 = () => {
    if (k > 0) showData_k(--k);
};
const bak2 = () => {
    if (j > 0) showData_j(--j);
};
const bak1 = () => {
    if (i > 0) showData_i(--i);
};

document.getElementById("forwrd3").addEventListener("click", forwrd3);
document.getElementById("back3").addEventListener("click", bak3);
document.getElementById("forwrd2").addEventListener("click", forwrd2);
document.getElementById("back2").addEventListener("click", bak2);
document.getElementById("forwrd1").addEventListener("click", forwrd1);
document.getElementById("back1").addEventListener("click", bak1);
