export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  imageUrl1?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  buyUrl: string;
  price: string;
  rating: string;
  likes: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'LEGO Динозавр',
    imageUrl:
      'https://resources.cdn-kaspi.kz/img/m/p/hec/h23/84403100581918.jpg?format=gallery-large',
    buyUrl:'https://kaspi.kz/shop/p/dinozavr-413416-detalei-1400-sht-114207941/?c=750000000&ref=shared_link',
    price: '9 000 ₸',
    rating: '5/5',
    likes: 9,
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
      "https://resources.cdn-kaspi.kz/img/m/p/h44/hae/84007811842078.jpg?format=gallery-large",
    buyUrl:
      'https://kaspi.kz/shop/p/sony-wfc700nv-e-fioletovyi-113516619/?c=750000000&ref=shared_link',
    price: '39 990 ₸',
    rating: '5/5',
    likes: 126,
    description:
      'Тип наушники \n Вид внутриканальные \n Подключение беспроводное \n Тип акустического оформления закрытые\n Частота воспроизведения 20 Гц–20 000 Гц \n Тип крепления без крепления \n Система активного шумоподавления Да \n Разъем для зарядки USB itemType-C',
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
    likes: 65,
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
    likes: 37,
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
    likes: 230,
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
    likes: 172,
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
    likes: 23,
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
    likes: 676,
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
    likes: 232,
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
    likes: 498,
    description:
      'тип: LED-телевизор, диагональ: 43.0 дюйм , разрешение: 1366x768 , поддержка HD: 1080p Full HD , технология Smart TV: Да , wi-Fi: Да , входы: AV ,HDMI, ,USB, ,Bluetooth',
  },
  {
    id: 11,
    name: "Wi-Fi роутер TELE2",
    imageUrl1: "https://resources.cdn-kaspi.kz/img/m/p/h63/hec/84057077710878.png?format=gallery-large",
    imageUrl2: "https://resources.cdn-kaspi.kz/img/m/p/hf5/hfd/84057077776414.png?format=gallery-large",
    imageUrl3: "https://resources.cdn-kaspi.kz/img/m/p/h94/h7f/84057077841950.png?format=gallery-large",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h52/h70/84057077645342.png?format=gallery-large",
    buyUrl: "https://kaspi.kz/shop/p/wi-fi-router-tele2-5g-h155-380-113565384/?c=750000000",
    price: "32 895 ₸",
    rating: "5/5",
    likes: 97,
    description: "Тип Wi-Fi роутер; Стандарты связи 802.11a/b/g/n/ac; Максимальная скорость беспроводного соединения1024.0 Мбит/с; Стандарты Wi-Fi Wi-Fi 5 (802.11ac); Количество LAN портов 2; Диапазоны частот 2.4 ГГц, 5 ГГц"
  },
  {
    id: 12,
    name: "МФУ Epson EcoTank L3250",
    imageUrl1: "https://resources.cdn-kaspi.kz/img/m/p/h69/h7d/66594301870110.jpg?format=gallery-large",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/ha6/hf3/66594300821534.jpg?format=gallery-large",
    buyUrl: "https://kaspi.kz/shop/p/mfu-epson-ecotank-l3250-107929066/?c=750000000",
    price: "104 989 ₸",
    rating: "5/5",
    likes: 130,
    description: "устройство: МФУ; тип печати: цветная; технология печати: пьезоэлектрическая струйная; максимальный формат: A4; максимальное разрешение для ч/б печати: 5760x1440 dpi; максимальное разрешение для цветной печати: 5760x1440 dpi"
  },
  {
    id: 13,
    name: "Стилус Apple Pencil 2nd Generation",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hdf/h49/63829374894110.jpg?format=gallery-medium",
    imageUrl1: "",
    buyUrl: "https://kaspi.kz/shop/p/apple-pencil-2nd-generation-60900001/?c=750000000",
    price: "53 950 ₸",
    rating: "5/5",
    likes: 393,
    description: "Совместимость: iPad Pro 12.9-дюймов (5, 4, 3 -го поколения); iPad Pro 11-дюймов (3, 2, 1 -го поколения); iPad Air (5, 4-го поколения); iPad mini (6-го поколения)"
  },
  {
    id: 14,
    name: "Compliment Naturalis маска с перцем ",
    imageUrl1: "https://resources.cdn-kaspi.kz/img/m/p/h25/he8/63892460961822.jpg?format=gallery-medium",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h27/63892458143774.jpg?format=gallery-medium",
    buyUrl: "https://kaspi.kz/shop/p/compliment-naturalis-3v1-s-pertsem-maska-500-ml-100319701/?c=750000000",
    price: "1 408 ₸",
    rating: "5/5",
    likes: 444,
    description: "Интенсивная укрепляющая маска с перцем пробуждает волосяные луковицы, укрепляет волосы и предотвращает их выпадение, согревает верхний слой кожи, вызывает усиленный приток крови к волосяным фолликулам, активизирует деление клеток, ускоряя рост волос и их густоту, окутывает стержень волоса, создавая защитный барьер, препятствующий иссушению и повреждению волос, ломкости и вымыванию цвета."
  },
  {
    id: 15,
    name: "Мягкая игрушка Гусь-обнимусь",
    imageUrl1: "https://resources.cdn-kaspi.kz/img/m/p/h4a/h02/70325521678366.jpg?format=gallery-medium",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h72/h52/70325521154078.jpg?format=gallery-medium",
    buyUrl: "https://kaspi.kz/shop/p/mjagkaja-igrushka-gus--obnimus-17691300-842075-vysota-130-sm-belyi-109469231/?c=750000000",
    price: "3 190 ₸",
    rating: "5/5",
    likes: 451,
    description: "мягкая белая игрушка, высота 130 см, наполнитель: синтепон, основной материал: плюш "
  },
  {
    id: 16,
    name: "Пистолет Airsoft Gun",
    imageUrl1: "https://resources.cdn-kaspi.kz/img/m/p/h6f/h01/64178051481630.jpg?format=gallery-medium",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h72/hbc/64178049187870.jpg?format=gallery-medium",
    buyUrl: "https://kaspi.kz/shop/p/pistolet-airsoft-gun-c-1-1b00260-14-103442303/?c=750000000",
    price: "2 849 ₸",
    rating: "4.5/5",
    likes: 96,
    description: "Детский пневматический пистолет Colt mini C.1 - это копия настоящего пистолета Colt mini, изготовлен из металла, и снабжен специальным пружинно-поршневым устройством и стреляет пульками (шариками) диаметром 6 мм. Игрушечный металлический пневматический пистолет Airsoft Gun Colt mini C.1 станет отличным подарком для любого мальчика. Ведь ребята всегда нравилось и нравится играть в войнушки и подобные игры. Легко представить, как обрадуется ребенок, как только у него в руках окажется пистолет, который выглядит почти как настоящий! Ведь Airsoft Gun Colt mini C.1 изготовлен из нелегкого металла, который создаст ощущение, будто Вы держите в руках самое настоящее оружие! И даже взрослые будут поражены такой игрушкой, ведь она настолько правдоподобна!"
  },
  {
    id: 17,
    name: "LELEBROTHER Черный ястреб",
    imageUrl1: "https://resources.cdn-kaspi.kz/img/m/p/h05/h11/85124920508446.png?format=gallery-medium",
    imageUrl2: "https://resources.cdn-kaspi.kz/img/m/p/h2b/h3c/85124920573982.png?format=gallery-medium",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h5a/85124920279070.png?format=gallery-medium",
    buyUrl: "https://kaspi.kz/shop/p/lelebrother-chernyi-jastreb-8577-detalei-736-sht-112475541/?c=750000000",
    price: "7 916 ₸",
    rating: "4.5/5",
    likes: 29,
    description: "Каждый день собирай новую модельку! 51 вариант сборки. Легко собирается и разбираеться. Конструктор идет в мягкой запаеной упаковке."
  },
  {
    id: 18,
    name: "Велосипед ALPHA Mustang",
    imageUrl1: "https://resources.cdn-kaspi.kz/img/m/p/h9d/h79/84986946912286.jpg?format=gallery-medium",
    imageUrl2: "https://resources.cdn-kaspi.kz/img/m/p/h4d/h31/84986947239966.jpg?format=gallery-medium",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h1b/he9/84986946781214.jpg?format=gallery-medium",
    buyUrl: "https://kaspi.kz/shop/p/alpha-mustang-7-hd-29-2024-20-chernyi-116115802/?c=750000000",
    price: "199 900 ₸",
    rating: "0/5",
    likes: 42,
    description: "тип: горный, ,городской, ,кросс-кантри; модельный год: 2024; складной: Нет; материал рамы: алюминиевый сплав; размеры рамы: 20 дюймов"
  },
  {
    id: 19,
    name: "By Kilian Vodka On The Rocks Refill парфюмерная вода",
    imageUrl1: "",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/ha0/h34/84587882217502.jpg?format=gallery-medium",
    buyUrl: "https://kaspi.kz/shop/p/by-kilian-vodka-on-the-rocks-refill-parfjumernaja-voda-edp-100-ml-uniseks-114896978/?c=750000000",
    price: "110 000 ₸",
    rating: "0/5",
    likes: 16,
    description: "Он одинаково подойдет как мужчинам, так и женщинам. Его разработал парфюмер Сидони Ланкессер. Этот аромат был создан под впечатлением от русской культуры и назван в честь ее национального напитка. Композиция получилась согревающей и позитивной – она отлично украсит осенний день."
  },
  {
    id: 20,
    name: "Чипсы Lay's картофельные Паприка",
    imageUrl1: "",
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h27/he9/83646930059294.jpg?format=gallery-medium",
    buyUrl: "https://kaspi.kz/shop/p/chipsy-lay-s-kartofel-nye-paprika-140-g-105085502/?c=750000000",
    price: "725 ₸",
    rating: "4.5/5",
    likes: 52152,
    description: "страна производства: Россия; рифленые: Нет; вид: картофельные; острые: Нет; вкус: паприка"
  },
  { 
    id: 21, 
    name: "Bonduelle консервированные овощи кукуруза в собственном соку", 
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/h1d/h60/84662766141470.png?format=gallery-medium", 
    buyUrl: "https://kaspi.kz/shop/p/bonduelle-konservirovannye-ovoschi-kukuruza-v-sobstvennom-soku-340-g-100980360/?c=750000000", 
    price: "599 ₸", 
    rating: "5/5", 
    likes: 52,
    description: "Тот самый чудесный вкус, которые многие помнят с детства! Сладкая кукуруза тщательно отбирается, прежде чем попасть в банку, процесс от сбора с грядки до упаковки проходит всего за 4 часа, поэтому на вашем столе всегда самые отборные, сочные и золотистые зерна. Создавайте классические, традиционные блюда с сочной и универсальной кукурузой от Bonduelle." 
  },
  { 
    id: 22, 
    name: "Книга Исабеков Д.: Гауһар тас", 
    imageUrl: "https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/64090025525278.jpg?format=gallery-medium", 
    buyUrl: "https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=750000000", 
    price: "1 199 ₸", 
    rating: "5/5", 
    likes: 100,
    description: "Бұл шығарма қарапайым Алматы облысындағы ауылда тұратын отбасы туралы жазылаған және олардың тіршілігі керемет бейнеленген. Отбасының құрамы: Әкесі, Анасы, 2 баласы және отбасына жаңадан келген үлкен баланың әйелі. Д. Исабековтың «Гауһартас» шығармасы ағайындылардың екі түрлі тәрбие алуының нәтижесің көрсетеді. Үлкен баласы, Ыбыш, әкесі сияқты өте қатал, өз-өзін нағыз еркек деп санап, үнсіз, тек қана қажет кездерде сөйлейтін адам. Ал Ыбыштың інісі, Қайыркен, анасы сияқты таңғаларлық мейірімді, сезімшіл, әділ және шығармашылық адам." 
  },

];
