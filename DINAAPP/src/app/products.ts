export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  imageUrl1?: string;
  imageUrl2?: string;
  buyUrl: string;
  price: string;
  rating: string;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'LEGO Динозавр',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/hec/h23/84403100581918.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/dinozavr-413416-detalei-1400-sht-114207941/?c=750000000&ref=shared_link',
    price: '9 000 ₸',
    rating: '5/5',
    description:
      'Необычный конструктор подойдет как детям, так и взрослым. Собирать его увлекательно и полезно. Элементы конструктора скрепляются не только сверху/снизу, но и тонкими пазами в торцах элементов. Конструкторы выполнены из высококачественного ABS пластика, который отличается надежностью, прочностью и безопасностью. В собранном виде это очень необычная игрушка, привлекающая внимание детей. Следуйте подробной инструкции, и вы с легкостью соберёт сюжет. Конструируя, ребёнок развивает мелкую моторику рук, познавательную активность и воображение, становиться усидчивее и внимательнее. Миниразмер деталей позволяет добиться невероятной реалистичности у собранных, подобно объемным 3D-пазлам, конструкций. В результате получаются объекты невиданной точности. Игру можно назвать 3D-пиксельарт, ведь из множества миниатюрных деталек можно собрать абсолютно всё!Примечание :Тщательно различайте тип частиц (1,2.3) и цвет. Это Важно!!!',
  },
  {
    id: 2,
    name: 'Наушники Sony',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h92/h7b/84007811776542.jpg?format=gallery-large',
    imageUrl1:
      'https://resources.cdn-kaspi.kz/img/m/p/h5f/h69/84007811907614.jpg?format=gallery-large',
    imageUrl2:
      'https://resources.cdn-kaspi.kz/img/m/p/h44/hae/84007811842078.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/sony-wfc700nv-e-fioletovyi-113516619/?c=750000000&ref=shared_link',
    price: '39 990 ₸',
    rating: '5/5',
    description:
      'Тип наушники \n Вид внутриканальные \n Подключение беспроводное \n Тип акустического оформления закрытые\n Частота воспроизведения 20 Гц–20 000 Гц \n Тип крепления без крепления \n Система активного шумоподавления Да \n Разъем для зарядки USB Type-C',
  },
  {
    id: 3,
    name: 'LEGO Астрономическая башня Хогвартса',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/hdc/ha9/84757660237854.jpg?format=gallery-large',
    imageUrl1:
      'https://resources.cdn-kaspi.kz/img/m/p/hfc/h29/84757660303390.jpg?format=gallery-large',
    imageUrl2:
      'https://resources.cdn-kaspi.kz/img/m/p/h18/ha3/84757660401694.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/lego-astronomicheskaja-bashnja-hogvartsa-75969-detalei-971-sht-100311104/?c=750000000&ref=shared_link',
    price: '49 699 ₸',
    rating: '5/5',
    description:
      'Дети смогут воссоздать увлекательные приключения в волшебном замке Хогвартс с помощью фигурок любимых персонажей, моделей легендарных мест действия и реалистичных аксессуаров, которые ждут их в наборе «Часовая башня Хогвартса» LEGO® Harry Potter™ (75969). Дети окажутся в мире магии и смогут посетить урок профессора зельеварения и специальную вечеринку, устроенную им для одарённых учеников, ухаживать за растениями мандрагоры в парнике, исследовать гостиную факультета Когтевран, а затем отправиться на урок астрономии в самую высокую башню замка.',
  },
  {
    id: 4,
    name: 'Колье Zamira Zam',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h21/h38/64471378853918.jpg?format=gallery-medium',
    imageUrl1:
      'https://resources.cdn-kaspi.kz/img/m/p/h11/hac/64471376822302.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/kol-e-gold-zamira-zam06-528-dlina-55-sm-ves-1-35-g-zoloto-fianit-105959365/?c=750000000&ref=shared_link',
    price: '42 977 ₸',
    rating: '4,5/5',
    description:
      '06-528 длина 55 см вес 1.35 г золото, фианит, - материал подвески: золото \n- длина изделия: 55.0 см \n - ТиП: колье \n - примечание: значение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических \n - для кого: для женщин \n - проба: 585 \n - материал: золото \n - вставка: фианит \n - страна производитель: Италия \n - вес изделия: 1.35 г',
  },
  {
    id: 5,
    name: 'Mizam диван',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=gallery-large',
    imageUrl1:
      'https://resources.cdn-kaspi.kz/img/m/p/h66/he9/64383596429342.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000&ref=shared_link',
    price: '57 443 ₸',
    rating: '4/5',
    description: 'обивка ткань, 70x210x75 см, серый, еврокнижка',
  },
  {
    id: 6,
    name: 'T-VITEK триммер',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h6b/70099032637470.jpg?format=gallery-medium',
    buyUrl:
      'https://kaspi.kz/shop/p/t-vitek-trimmer-dlja-borody-i-usov-dlja-brovei-dlja-okantovki-dlja-strizhki-universal-noe-19111992-109364909/?c=750000000&ref=shared_link',
    price: '1 017 ₸',
    rating: '4/5',
    description:
      'Триммер для бороды и усов, для бровей, для окантовки, для стрижки, универсальное. Значение минимальной длины стрижки1.0 мм \n Значение максимальной длины стрижки 8.0 мм \n Настройка длины стрижки сменой насадок \n Число установок длины 4',
  },
  {
    id: 7,
    name: 'Серьги Золото',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h05/h74/67467952619550.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/ser-gi-zoloto-rossii-38022-ves-4-71-g-zoloto-bez-vstavok-108285716/?c=750000000&ref=shared_link',
    price: '180 308 ₸',
    rating: '4,5/5',
    description:
      'Cтрана производитель: Россия, 38022, вес 4.71 г золото, без вставок, проба: 585',
  },
  {
    id: 8,
    name: 'Стул',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=gallery-large',
    imageUrl1:
      'https://resources.cdn-kaspi.kz/img/m/p/h5c/hfe/63900117336094.jpg?format=gallery-medium',
    imageUrl2:
      'https://resources.cdn-kaspi.kz/img/m/p/h45/h1b/63900223176734.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000&ref=shared_link',
    price: '7 390 ₸',
    rating: '4,5/5',
    description:
      '81x50x25 см, белый, Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». Еще одно достоинство модели – удобная для обеденного стола высота ',
  },
  {
    id: 9,
    name: 'TIAM крем-гель для лица',
    imageUrl1: '',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/hc8/68220139929630.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/tiam-krem-gel-ac-fighting-oil-free-aqua-dlja-litsa-dlja-zony-dekol-te-80-ml-108579012/?c=750000000&ref=shared_link',
    price: '6 399 ₸',
    rating: '5/5',
    description:
      'Лёгкий крем-гель TIAM AC Fighting Oil-Free Agua на безмасляной основе дает коже увлажнение без тяжести и жирной пленки. Лёгкая консистенция быстро впитывается в кожу и даёт пролонгированное увлажнение, защищая от испарения влаги. \n Крем помогает сузить поры и нормализует выработку кожного сала в течение дня, не забивая поры и не оставляя жирного блеска. Средство очень эффективно проникает в глубокие слои эпидермиса и удерживает влагу, что способствует усилению эластичности и устраняет шелушения. Создает ощущение свежести, эффективно успокаивает кожу, чувствительную к внешним раздражителям.',
  },
  {
    id: 10,
    name: 'Телевизор Yasin ',
    imageUrl1: '',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/had/h96/68005513363486.jpg?format=gallery-large',
    buyUrl:
      'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000&ref=shared_link',
    price: '96 000 ₸',
    rating: '4,5/5',
    description:
      'тип: LED-телевизор, диагональ: 43.0 дюйм , разрешение: 1366x768 , поддержка HD: 1080p Full HD , технология Smart TV: Да , wi-Fi: Да , входы: AV ,HDMI, ,USB, ,Bluetooth',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
