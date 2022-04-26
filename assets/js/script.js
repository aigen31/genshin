let btn = document.querySelector('#btn'),
    wrapper = document.querySelector('.character');

function random(max) {
  let num = Math.floor(Math.random() * max)
  return num;
}

// let character = {
//   "members": [
//     {
//       "name": "Е Лань",
//       "url": "https://genshin-info.ru/upload/resize_cache/iblock/c98/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/E-lan.png"
//     },
//     {
//       "name": "Куки",
//       "url": "https://genshin-info.ru/upload/resize_cache/iblock/ea7/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.png"
//     },
//     {
//       "name": "Аято",
//       "url": "https://genshin-info.ru/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png"
//     },
//     {
//       "name": "Яэ Мико",
//       "url": "https://genshin-info.ru/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png"
//     },
//   ]
// }

/**
* Спарсил имена, пока костыль
**/

let characterName = [
    'Е Лань',
    'Куки',
    'Аято',
    'Яэ Мико',
    'Шэнь Хэ',
    'Юнь Цзинь',
    'Итто',
    'Горо',
    'Тома',
    'Кокоми',
    'Райдэн',
    'Элой',
    'Сара',
    'Ёимия',
    'Саю',
    'Путешественник Электро',
    'Аяка',
    'Кадзуха',
    'Эола',
    'Янь Фэй',
    'Розария',
    'Ху Тао',
    'Сяо',
    'Гань Юй',
    'Альбедо',
    'Чжун Ли',
    'Синь Янь',
    'Тарталья',
    'Диона',
    'Кли',
    'Венти',
    'Ци Ци',
    'Мона',
    'Кэ Цин',
    'Дилюк',
    'Джинн',
    'Эмбер',
    'Чун Юнь',
    'Фишль',
    'Сян Лин',
    'Син Цю',
    'Сахароза',
    'Рэйзор',
    'Ноэлль',
    'Нин Гуан',
    'Лиза',
    'Кэйа',
    'Бэй Доу',
    'Беннет',
    'Барбара',
    'Путешественник Гео',
    'Путешественник Анемо'
]

let characterUrl = [
    [
        '/upload/resize_cache/iblock/c98/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/E-lan.png'
    ],
    [
        '/upload/resize_cache/iblock/ea7/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kuki.png'
    ],
    [
        '/upload/resize_cache/iblock/e95/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayato.png'
    ],
    [
        '/upload/resize_cache/iblock/a76/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YAe-Miko.png'
    ],
    [
        '/upload/resize_cache/iblock/148/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/SHen-KHe.png'
    ],
    [
        '/upload/resize_cache/iblock/616/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/YUn-TSzin.png'
    ],
    [
        '/upload/resize_cache/iblock/050/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/itto.webp'
    ],
    [
        '/upload/resize_cache/iblock/8db/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/gorou.webp'
    ],
    [
        '/upload/resize_cache/iblock/b38/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/thoma.webp'
    ],
    [
        '/upload/resize_cache/iblock/bb4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kokomi.webp'
    ],
    [
        '/upload/resize_cache/iblock/b57/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/shougun.webp'
    ],
    [
        '/upload/resize_cache/iblock/013/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/aloy.webp'
    ],
    [
        '/upload/resize_cache/iblock/2df/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sara.webp'
    ],
    [
        '/upload/resize_cache/iblock/dad/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/yoimiya.webp'
    ],
    [
        '/upload/resize_cache/iblock/402/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sayu.webp'
    ],
    [
        '/upload/resize_cache/iblock/1b2/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp'
    ],
    [
        '/upload/resize_cache/iblock/45f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ayaka.webp'
    ],
    [
        '/upload/resize_cache/iblock/5a8/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kazuha.webp'
    ],
    [
        '/upload/resize_cache/iblock/8c1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/eula.webp'
    ],
    [
        '/upload/resize_cache/iblock/bae/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/feiyan.webp'
    ],
    [
        '/upload/resize_cache/iblock/edf/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/rosaria.webp'
    ],
    [
        '/upload/resize_cache/iblock/3ac/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/hutao.webp'
    ],
    [
        '/upload/resize_cache/iblock/ec1/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiao.webp'
    ],
    [
        '/upload/resize_cache/iblock/49b/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ganyu.webp'
    ],
    [
        '/upload/resize_cache/iblock/bce/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/albedo.webp'
    ],
    [
        '/upload/resize_cache/iblock/510/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/zhongli.webp'
    ],
    [
        '/upload/resize_cache/iblock/454/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xinyan.webp'
    ],
    [
        '/upload/resize_cache/iblock/72c/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/tartaglia.webp'
    ],
    [
        '/upload/resize_cache/iblock/e84/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diona.webp'
    ],
    [
        '/upload/resize_cache/iblock/5bb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/klee.webp'
    ],
    [
        '/upload/resize_cache/iblock/f77/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/venti.webp'
    ],
    [
        '/upload/resize_cache/iblock/edb/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/qiqi.webp'
    ],
    [
        '/upload/resize_cache/iblock/049/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/mona.webp'
    ],
    [
        '/upload/resize_cache/iblock/083/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/keqing.webp'
    ],
    [
        '/upload/resize_cache/iblock/f4f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/diluc.webp'
    ],
    [
        '/upload/resize_cache/iblock/dcc/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/jean.webp'
    ],
    [
        '/upload/resize_cache/iblock/1b4/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/amber.webp'
    ],
    [
        '/upload/resize_cache/iblock/4c0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/chongyun.webp'
    ],
    [
        '/upload/resize_cache/iblock/0e0/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/fischl.webp'
    ],
    [
        '/upload/resize_cache/iblock/535/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xiangling.webp'
    ],
    [
        '/upload/resize_cache/iblock/f7f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/xingqiu.webp'
    ],
    [
        '/upload/resize_cache/iblock/655/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/sucrose.webp'
    ],
    [
        '/upload/resize_cache/iblock/a50/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/razor.webp'
    ],
    [
        '/upload/resize_cache/iblock/56f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/noelle.webp'
    ],
    [
        '/upload/resize_cache/iblock/f2f/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/ningguang.webp'
    ],
    [
        '/upload/resize_cache/iblock/5ea/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/lisa.webp'
    ],
    [
        '/upload/resize_cache/iblock/c27/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/kaeya.webp'
    ],
    [
        '/upload/resize_cache/iblock/582/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/baidou.webp'
    ],
    [
        '/upload/resize_cache/iblock/018/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/bennett.webp'
    ],
    [
        '/upload/resize_cache/iblock/954/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/barbara.webp'
    ],
    [
        '/upload/resize_cache/iblock/1b2/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp'
    ],
    [
        '/upload/resize_cache/iblock/1b2/200_200_1d7a58ff99b324185ccb5ad5dfbdb5e85/Traveler.webp'
    ]
]

class Character {
  constructor(charName, imgUrl) {
    this.name = charName;
    this.url = imgUrl;
  }
}

let memberArray = [];

// for (let i = 0; i < character['members'].length; i++) {
//   let member = new Character(
//     // character['members'][i]['name'],
//     // character['members'][i]['url'],
//     characterName[i],
//     characterUrl[i]
//   )
  
//   memberArray.push(member);
// }

for (let i = 0; i < characterName.length; i++) {
  let member = new Character(
    characterName[i],
    'https://genshin-info.ru/' + characterUrl[i]
  )
  
  memberArray.push(member);
}

Character.prototype.generation = function() {
  wrapper.innerHTML =
    '<button class="btn" id="show">Показать персонажа</button>'+
    '<img src="'+ this.url +'" class="character__img" alt="' + this.name + '" style="display: none;">'+
    '<p class="character__text">'+ this.name +'</p>';
  
  let btnShow = document.querySelector('#show');
  
  btnShow.addEventListener('click', () => {
    let img = document.querySelector('.character__img');
    img.style.display = 'block';
    btnShow.remove();
  }, { once: true })
}

btn.addEventListener('click', () => { memberArray[random(memberArray.length)].generation(); })