localStorage.setItem("data_i", JSON.stringify([]));
localStorage.setItem("data_j", JSON.stringify([]));
localStorage.setItem("data_k", JSON.stringify([]));
let sliding_img = [
    {
        image: "https://logan.nnnow.com/content/dam/nnnow-project/18-feb-2022/ABH_TopbannerDesktop_gif.gif",
        text: "ABH TopbannerDesktop gif",
        id: "000",
    },
    {
        image: "https://logan.nnnow.com/content/dam/nnnow-project/10-feb-2022/SmashboxTopbanner-DesktopGIF.gif",
        text: "SmashboxTopbanner DesktopGIF",
        id: "001",
    },
    {
        image: "https://logan.nnnow.com/content/dam/nnnow-project/24-feb-2022/Benefit_TopbannerDesktop.jpg",
        text: "Benefit TopbannerDesktop",
        id: "002",
    },
    {
        image: "https://logan.nnnow.com/content/dam/nnnow-project/2-mar-2022/Lancome_TopBannerDesktop_Get7mlGenefique.jpg",
        text: "Lancome TopBannerDesktop Get7mlGenefique",
        id: "003",
    },
    {
        image: "https://logan.nnnow.com/content/dam/nnnow-project/2-mar-2022/Sephora_ContentTopBanner_Tresses'n'TextureDesktop.jpg",
        text: "Sephora ContentTopBanner Tresses'n'TextureDesktop",
        id: "004",
    },
];

const showData_i = (i) => {
    // console.log(data, i);
    let prodBox = document.getElementById("slide1");
    prodBox.textContent = "";
    let data = JSON.parse(localStorage.getItem("data_i"));
    console.log(data);
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
    console.log(data);
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
    console.log(data);
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

let main_sliding = document.getElementById("img");
let x = 0;
setInterval(function () {
    if (x === sliding_img.length) {
        x = 0;
    }
    main_sliding.src = sliding_img[x].image;
    main_sliding.alt = sliding_img[x].text;
    main_sliding.id = sliding_img[x].id;
    x++;
}, 3000);

const getData = async () => {
    let res = await fetch("./data/home_data.json");
    let data = await res.json();

    localStorage.setItem("data_i", JSON.stringify(data.ABH));
    localStorage.setItem("data_j", JSON.stringify(data.JL));
    localStorage.setItem("data_k", JSON.stringify(data.EOS));

    showData_i(0);
    showData_j(0);
    showData_k(0);
};
getData();
