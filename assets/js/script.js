const contents = [
    {
        img: 'assets/images/cumi-asin-cabai-ijo.jpg',
        caption: 'Cumi Asin Cabai Ijo',
        harga: 7500,
        total: 0
    },
    {
        img: 'assets/images/cumi-goreng-asem.jpg',
        caption: 'Cumi Goreng Asem',
        harga: 6500,
        total: 0
    },
    {
        img: 'assets/images/cumi-saus-tomat.jpg',
        caption: 'Cumi Saus Tomat',
        harga: 8000,
        total: 0
    },
    {
        img: 'assets/images/cumi-udang-lada-hitam.jpg',
        caption: 'Cumi Udang Lada Hitam',
        harga: 6000,
        total: 0
    },
    {
        img: 'assets/images/gulai-ikan-belimbing.jpg',
        caption: 'Gulai Ikan Belimbing',
        harga: 7000,
        total: 0
    },
    {
        img: 'assets/images/lobster-saus-padang.jpg',
        caption: 'Lobster Saus Padang',
        harga: 8500,
        total: 0
    },
    {
        img: 'assets/images/oseng-kerang-dara.jpg',
        caption: 'Oseng Kerang Dara',
        harga: 10000,
        total: 0
    },
    {
        img: 'assets/images/sambel-wader-kemangi.jpg',
        caption: 'Sambel Wader Kemangi',
        harga: 9500,
        total: 0
    }
]

function contentFiller() {
    let cards = '';
    for (let i = 0; i < contents.length; i++) {
        cards += `<article class="card">
                    <figure>
                        <img src="${contents[i].img}"
                            alt="">
                        <figcaption>${contents[i].caption}</figcaption>
                    </figure>
                    <h2 class="harga">${contents[i].harga}</h2>
                    <div class="jumlah">
                        <ul>
                            <li class="min">-</li>
                            <li class="jumlah-pesanan">0</li>
                            <li class="plus">+</li>
                        </ul>
                    </div>
                </article>`
    }
    const contentsElement = document.querySelector('#content');
    contentsElement.innerHTML = cards;
}

function getFoodPriceSum() {
    let count = 0
    contents.forEach(content => {
        if (content.total > 0) {
            count += content.total;
        }
    });
    return count;
}

function tagihanFiller(price) {
    const priceElement = document.querySelector('#tagihan');
    if (price == 0) {
        priceElement.innerHTML = "Belum memesan";
    } else {
        priceElement.innerHTML = price;
    }
}

function foodCounter() {
    const plusMins = document.querySelectorAll('.card .jumlah ul');
    plusMins.forEach((plusMin, i) => {
        plusMin.addEventListener('click', (event) => {
            const countElement = plusMin.childNodes[3];
            let count = parseInt(countElement.innerHTML);
            if (event.target.className == 'plus') {
                countElement.innerHTML = ++count;
            } else if (event.target.className == 'min') {
                if (countElement.innerHTML != 0) {
                    countElement.innerHTML = --count;
                }
            }
            contents[i].total = count * contents[i].harga;
            const price = getFoodPriceSum();
            tagihanFiller(price);
        });
    });
}


contentFiller();
foodCounter();





