export function fetchItems() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                items: Array.from({ length: 6 }, createItem),
                total: 18
            });
        }, 1000);
    });
}

export function fetchFavourites(ids) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                favourites: ids.reduce((hash, id) => {
                    hash[id] = false;
                    return hash;
                }, {})
            })
        }, 1000);
    });
}

export function updateFavourite(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ok: true
            });
        }, 1000);
    });
}

const metroList = [
    'Алтуфьево',
    'Южная',
    'Белорусская',
    'Чертановская',
    'Новокосино',
    'Медведково',
    'Киевская',
    'Юго-западная',
    'Тульская',
    'Нагатинская',
    'Севастопольская',
    'Бульвар Дмитрия Донского',
    'Аннино',
    'Бауманская',
    'Таганская',
    'Пролетарская'
];

const titles = [
    'Opel Insignia, 2014',
    'Кроссовки 26 размер, светящиеся',
    'Слипоны серебристые',
    'Босоножки',
    'Босоножки Rabbit р. 26',
    'Детские туфли размер 26',
    'Продам сапожки 26 нат.замша Капика',
    'Квадрокоптер DJI Mavic Air (новый)',
    'Механизированная штукатурка',
    'Свадебное платье Vera Wang (оригинал)',
    'Сноуборд Rossignol в сборе. Ботинки, чехол',
    'Рюкзак / сумка итальянская из натуральной кожи',
    'Куртка женская 46-48',
    'Костюм Щенячий Патруль хб',
    'Майка женская размер 54-56',
    'Блюдо Судок для подачи блюд sheffield Англия',
    'Ботинки Капика',
    'Детский зимний конверт на овчине',
    'Подъемник ножничный для шиномонтажа corghi',
    'Michael Kors оригинал новые',
    'Юбка и блузка комплект Kenzo'
];

function createItem() {
    return {
        id: getRandom(1000000000000, 9999999999999),
        image: `https://picsum.photos/300/200?image=${getRandom(0, 200)}`,
        title: titles[getRandom(0, titles.length - 1)],
        price: getRandom(100, 5000),
        metro: metroList[getRandom(0, metroList.length - 1)],
        createdAt: new Date(2018, 4, getRandom(0, 30)).toUTCString()
    };
}

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
