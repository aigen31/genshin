let btn = document.querySelector('#btn'),
    wrapper = document.querySelector('.character'),
    imgHead = document.querySelector('.section-main__img')
    prevShow = document.querySelector('#prev-show'),
    prevWrapper = document.querySelector('#prev-show-wrapper');

function random(max) {
  let num = Math.floor(Math.random() * max)
  return num;
}

let character = {
  "members": [
    {
      "name": "Юнь Дзинь",
      "file": "character_1.jpg",
      "element": "geo"
    },
    {
      "name": "Паймон",
      "file": "character_2.jpg",
      "element": "paimon"
    },
    {
      "name": "Кокоми",
      "file": "character_3.jpg",
      "element": "hydro"
    },
    {
      "name": "Итэр",
      "file": "character_4.jpg",
      "element": "anemo"
    },
    {
      "name": "Эмбер",
      "file": "character_5.jpg",
      "element": "piro"
    },
    {
      "name": "Барбара",
      "file": "character_6.jpg",
      "element": "hydro"
    },
    {
      "name": "Бэй Доу",
      "file": "character_7.jpg",
      "element": "electro"
    },
    {
      "name": "Бэннет",
      "file": "character_8.jpg",
      "element": "piro"
    },
    {
      "name": "Чун Юнь",
      "file": "character_9.jpg",
      "element": "cryo"
    },
    {
      "name": "Дилюк",
      "file": "character_10.jpg",
      "element": "piro"
    },
    {
      "name": "Фишль",
      "file": "character_11.jpg",
      "element": "electro"
    },
    {
      "name": "Джинн",
      "file": "character_12.jpg",
      "element": "anemo"
    },
    {
      "name": "Кэйа",
      "file": "character_13.jpg",
      "element": "cryo"
    },
    {
      "name": "Кэ Цин",
      "file": "character_14.jpg",
      "element": "electro"
    },
    {
      "name": "Кли",
      "file": "character_15.jpg",
      "element": "piro"
    },
    {
      "name": "Лиза",
      "file": "character_16.jpg",
      "element": "electro"
    },
    {
      "name": "Люмин",
      "file": "character_17.jpg",
      "element": "anemo"
    },
    {
      "name": "Мона",
      "file": "character_18.jpg",
      "element": "hydro"
    },
    {
      "name": "Нин Гуан",
      "file": "character_19.jpg",
      "element": "geo"
    },
    {
      "name": "Ноэлль",
      "file": "character_20.jpg",
      "element": "geo"
    },
    {
      "name": "Ци Ци",
      "file": "character_21.jpg",
      "element": "cryo"
    },
    {
      "name": "Рэйзор",
      "file": "character_22.jpg",
      "element": "electro"
    },
    {
      "name": "Сахароза",
      "file": "character_23.jpg",
      "element": "anemo"
    },
    {
      "name": "Венти",
      "file": "character_24.jpg",
      "element": "anemo"
    },
    {
      "name": "Сян Лин",
      "file": "character_25.jpg",
      "element": "piro"
    },
    {
      "name": "Сяо",
      "file": "character_26.jpg",
      "element": "anemo"
    },
    {
      "name": "Син Цю",
      "file": "character_27.jpg",
      "element": "hydro"
    },
    {
      "name": "Альбедо",
      "file": "character_28.jpg",
      "element": "geo"
    },
    {
      "name": "Аяка",
      "file": "character_29.jpg",
      "element": "cryo"
    },
    {
      "name": "Аято",
      "file": "character_30.jpg",
      "element": "hydro"
    },
    {
      "name": "Гань Юй",
      "file": "character_31.jpg",
      "element": "cryo"
    },
    {
      "name": "Горо",
      "file": "character_32.jpg",
      "element": "geo"
    },
    {
      "name": "Диона",
      "file": "character_33.jpg",
      "element": "cryo"
    },
    {
      "name": "Е Лань",
      "file": "character_34.jpg",
      "element": "hydro"
    },
    {
      "name": "Ёимия",
      "file": "character_35.jpg",
      "element": "piro"
    },
    {
      "name": "Итто",
      "file": "character_36.jpg",
      "element": "geo"
    },
    {
      "name": "Кадзуха",
      "file": "character_37.jpg",
      "element": "anemo"
    },
    {
      "name": "Куки",
      "file": "character_38.jpg",
      "element": "electro"
    },
    {
      "name": "Райдэн",
      "file": "character_39.jpg",
      "element": "electro"
    },
    {
      "name": "Розария",
      "file": "character_40.jpg",
      "element": "cryo"
    },
    {
      "name": "Сара",
      "file": "character_41.jpg",
      "element": "electro"
    },
    {
      "name": "Саю",
      "file": "character_42.jpg",
      "element": "anemo"
    },
    {
      "name": "Синь Янь",
      "file": "character_43.jpg",
      "element": "piro"
    },
    {
      "name": "Тарталья",
      "file": "character_44.jpg",
      "element": "hydro"
    },
    {
      "name": "Тома",
      "file": "character_45.jpg",
      "element": "piro"
    },
    {
      "name": "Ху Тао",
      "file": "character_46.jpg",
      "element": "piro"
    },
    {
      "name": "Джун Ли",
      "file": "character_47.jpg",
      "element": "geo"
    },
    {
      "name": "Шэнь Хэ",
      "file": "character_48.jpg",
      "element": "cryo"
    },
    {
      "name": "Элой",
      "file": "character_49.jpg",
      "element": "cryo"
    },
    {
      "name": "Эола",
      "file": "character_50.jpg",
      "element": "cryo"
    },
    {
      "name": "Янь Фей",
      "file": "character_51.jpg",
      "element": "piro"
    },
    {
      "name": "Яэ Мико",
      "file": "character_52.jpg",
      "element": "electro"
    },
    {
      "name": "Дори",
      "file": "character_53.jpg",
      "element": "electro"
    },
    {
      "name": "Коллеи",
      "file": "character_54.jpg",
      "element": "dendro"
    },
    {
      "name": "Тигнари",
      "file": "character_55.jpg",
      "element": "dendro"
    },
  ]
}

class Character {
  constructor(name, file, element) {
    this.name = name;
    this.file = file;
    this.element = element;
    this.url = 'assets/images/characters/'
  }
}

let memberArray = [];

for (let i = 0; i < character['members'].length; i++) {
  let member = new Character(
    character['members'][i]['name'],
    character['members'][i]['file'],
    character['members'][i]['element']
  )
  
  memberArray.push(member);
}

Character.prototype.generation = function() {
  imgHead.style.display = 'none';

  wrapper.innerHTML =
    `<p class="character__text --color-${this.element}">${this.name}</p>
    <img src="${this.url}${this.file}" class="character__img" alt="${this.name}" style="display: none;">
    <div class="checkbox-wrapper">
      <label for="show">
        Показать фотографию
      </label>
      <div class="checkbox">
        <input type="checkbox" id="show"><div class="checkmark"></div>
      </div>
    </div>
    <div class="view">
      <img src="${this.url}${this.file}" alt="" class="view__img">
    </div>`;
  
  
  let show = document.querySelector('#show'),
      img = document.querySelector('.character__img'),
      view  = document.querySelector('.view');

  if (prevShow.checked) {
    img.style.display = 'block';
    img.onload = () => {
      wrapper.scrollIntoView();
    }
    show.checked = true;
  } else {
    img.style.display = 'none';
    show.checked = false;
  }

  let viewShow = () => {
    view.style.display = 'block';
  }

  img.addEventListener('click', viewShow);

  let viewClose = () => {
    view.style.display = 'none';
  }

  view.addEventListener('click', viewClose);

  let checkShow = () => {
    if (show.checked) {
      img.style.display = 'block'
      wrapper.scrollIntoView();
      console.log('checked')
      prevShow.checked = true;
    } else {
      img.style.display = 'none'
      prevShow.checked = false;
    }
  }

  show.addEventListener('click', checkShow);

  prevWrapper.style.display = 'none';

  btn.addEventListener('click', () => {
    show.removeEventListener('click', checkShow);
    img.removeEventListener('click', viewShow);
    view.removeEventListener('click', viewClose);
  }, { once: true })
}

btn.addEventListener('click', () => { memberArray[random(memberArray.length)].generation(); })